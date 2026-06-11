import Anthropic from '@anthropic-ai/sdk'
import lessons from '@/data/lessons.json'
import { buildTutorSystemPrompt, LessonContext } from '@/lib/tutor-prompt'

const client = new Anthropic()

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Tutor service is not configured.' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    )
  }

  let body: { messages: Anthropic.MessageParam[]; lessonSlug?: string }
  try {
    body = await request.json()
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request body.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const { messages, lessonSlug } = body

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(
      JSON.stringify({ error: 'messages array is required.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const lesson = lessonSlug
    ? (lessons.find((l) => l.slug === lessonSlug) as LessonContext | undefined)
    : undefined

  const systemPrompt = buildTutorSystemPrompt(lesson)

  const stream = await client.messages.stream({
    model: 'claude-opus-4-8',
    max_tokens: 1024,
    thinking: { type: 'adaptive' },
    system: systemPrompt,
    messages,
  })

  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(event.delta.text))
          }
        }
      } finally {
        controller.close()
      }
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
    },
  })
}

import { notFound } from 'next/navigation'
import assessments from '@/data/assessments.json'
import { Assessment } from '@/lib/types'
import QuizClient from '@/components/assessments/QuizClient'

const data = assessments as Assessment[]

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return data.map((a) => ({ slug: a.slug }))
}

export default async function AssessmentPage({ params }: Props) {
  const { slug } = await params
  const assessment = data.find((a) => a.slug === slug)
  if (!assessment) notFound()
  return <QuizClient assessment={assessment} />
}

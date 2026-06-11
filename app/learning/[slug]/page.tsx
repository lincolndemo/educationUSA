import { notFound } from 'next/navigation'
import lessons from '@/data/lessons.json'
import assessments from '@/data/assessments.json'
import { Lesson, Assessment } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Download, ClipboardList, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import TutorChat from '@/components/tutor/TutorChat'
import LessonProgressTracker from '@/components/lesson/LessonProgressTracker'

const lessonData = lessons as Lesson[]
const assessmentData = assessments as Assessment[]

const categoryLabels: Record<string, string> = {
  'us-higher-education': 'U.S. Higher Education',
  'admissions-prep': 'Admissions Preparation',
  'scholarships': 'Scholarships',
  'visa-preparation': 'Visa Preparation',
  'ai-technologies': 'AI & Technologies',
}

const categoryToAssessmentSlug: Record<string, string> = {
  'us-higher-education': 'us-admissions',
  'admissions-prep': 'us-admissions',
  'scholarships': 'scholarships',
  'visa-preparation': 'visa-preparation',
  'ai-technologies': 'ai-fundamentals',
}

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return lessonData.map((l) => ({ slug: l.slug }))
}

export default async function LessonPage({ params }: Props) {
  const { slug } = await params
  const lesson = lessonData.find((l) => l.slug === slug)
  if (!lesson) notFound()

  const assessmentSlug = categoryToAssessmentSlug[lesson.category]
  const assessment = assessmentData.find((a) => a.slug === assessmentSlug)

  return (
    <div className="py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/learning" className="hover:text-brand-blue">Learning Centre</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{lesson.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-6">
          <Badge className="bg-blue-100 text-brand-blue border-0 mb-3">{categoryLabels[lesson.category]}</Badge>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>{lesson.duration}</span>
            </div>
            <LessonProgressTracker slug={slug} />
          </div>
        </div>

        {/* Video */}
        <div className="aspect-video w-full rounded-xl overflow-hidden bg-black mb-8 shadow-lg">
          <iframe
            src={lesson.videoUrl}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{lesson.summary}</p>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-3">
            {lesson.keyTakeaways.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            className="border-brand-blue text-brand-blue hover:bg-blue-50"
            render={<a href={`/pdfs/${lesson.pdfFile}`} download />}
          >
            <Download className="w-4 h-4 mr-2" />
            {lesson.pdfLabel}
          </Button>
          {assessment && (
            <Button
              className="bg-brand-green hover:bg-green-700 text-white"
              render={<Link href={`/assessments/${assessment.slug}`} />}
            >
              <ClipboardList className="w-4 h-4 mr-2" />
              Take the Quiz
            </Button>
          )}
        </div>
      </div>

      <TutorChat lessonSlug={slug} lessonTitle={lesson.title} />
    </div>
  )
}

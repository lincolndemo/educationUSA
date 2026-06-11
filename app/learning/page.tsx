import lessons from '@/data/lessons.json'
import { Lesson, LessonCategory } from '@/lib/types'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Clock, Play } from 'lucide-react'

const data = lessons as Lesson[]

const categories: { key: LessonCategory; label: string; color: string; badgeClass: string }[] = [
  { key: 'us-higher-education', label: 'U.S. Higher Education', color: 'border-t-brand-blue', badgeClass: 'bg-blue-100 text-brand-blue' },
  { key: 'admissions-prep', label: 'Admissions Preparation', color: 'border-t-brand-red', badgeClass: 'bg-red-100 text-brand-red' },
  { key: 'scholarships', label: 'Scholarships', color: 'border-t-brand-green', badgeClass: 'bg-green-100 text-brand-green' },
  { key: 'visa-preparation', label: 'Visa Preparation', color: 'border-t-brand-blue', badgeClass: 'bg-blue-100 text-brand-blue' },
  { key: 'ai-technologies', label: 'AI and Emerging Technologies', color: 'border-t-brand-red', badgeClass: 'bg-red-100 text-brand-red' },
]

export default function LearningPage() {
  return (
    <div className="py-12 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Learning Centre</h1>
          <p className="text-gray-500 max-w-xl mx-auto">Self-paced modules covering every aspect of your U.S. university journey.</p>
        </div>

        <div className="space-y-12">
          {categories.map((cat) => {
            const catLessons = data.filter((l) => l.category === cat.key)
            return (
              <div key={cat.key}>
                <div className="flex items-center gap-3 mb-5">
                  <h2 className="text-xl font-bold text-gray-800">{cat.label}</h2>
                  <Badge className={cat.badgeClass}>{catLessons.length} lessons</Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {catLessons.map((lesson) => (
                    <Link key={lesson.id} href={`/learning/${lesson.slug}`}>
                      <Card className={`h-full border-t-4 ${cat.color} hover:shadow-md transition-shadow cursor-pointer`}>
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2">
                            <CardTitle className="text-sm font-semibold text-gray-800 leading-snug">{lesson.title}</CardTitle>
                            <Play className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Clock className="w-3 h-3 text-gray-400" />
                            <CardDescription className="text-xs">{lesson.duration}</CardDescription>
                          </div>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const topics = [
  { title: 'Understanding U.S. Universities', description: 'Navigate the U.S. higher education landscape.', href: '/learning', color: 'border-t-brand-blue' },
  { title: 'Writing Winning Personal Statements', description: 'Craft essays that stand out to admissions committees.', href: '/learning', color: 'border-t-brand-red' },
  { title: 'Scholarship Search Strategies', description: 'Find and apply for funding that fits your profile.', href: '/learning', color: 'border-t-brand-green' },
  { title: 'Visa Interview Preparation', description: 'Walk into your interview confident and prepared.', href: '/learning', color: 'border-t-brand-blue' },
  { title: 'AI and Emerging Technology Careers', description: 'Explore opportunities at the frontier of technology.', href: '/learning', color: 'border-t-brand-red' },
]

export default function FeaturedTopics() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">Featured Learning Topics</h2>
        <p className="text-gray-500 text-center mb-10">Self-paced modules designed by EducationUSA advisers</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic) => (
            <Link key={topic.title} href={topic.href}>
              <Card className={`h-full border-t-4 ${topic.color} hover:shadow-md transition-shadow cursor-pointer`}>
                <CardHeader>
                  <CardTitle className="text-base text-gray-800">{topic.title}</CardTitle>
                  <CardDescription className="text-sm">{topic.description}</CardDescription>
                  <div className="flex items-center gap-1 text-brand-blue text-xs font-medium pt-1">
                    Start learning <ArrowRight className="w-3 h-3" />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

import assessments from '@/data/assessments.json'
import { Assessment } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ClipboardList } from 'lucide-react'
import Link from 'next/link'

const data = assessments as Assessment[]

const colors = ['border-t-brand-blue', 'border-t-brand-red', 'border-t-brand-green', 'border-t-brand-blue']

export default function AssessmentsPage() {
  return (
    <div className="py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Assessments</h1>
          <p className="text-gray-500 max-w-xl mx-auto">Test your knowledge with 10-question multiple-choice assessments. Get instant feedback and a detailed scorecard.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {data.map((assessment, i) => (
            <Card key={assessment.id} className={`border-t-4 ${colors[i]} hover:shadow-md transition-shadow`}>
              <CardHeader className="pb-2">
                <div className="flex items-start gap-3">
                  <ClipboardList className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                  <div>
                    <CardTitle className="text-base">{assessment.title}</CardTitle>
                    <div className="flex gap-2 mt-2">
                      <Badge className="bg-blue-100 text-brand-blue border-0 text-xs">{assessment.category}</Badge>
                      <Badge className="bg-gray-100 text-gray-600 border-0 text-xs">{assessment.questions.length} questions</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-brand-blue hover:bg-blue-700 text-white"
                  render={<Link href={`/assessments/${assessment.slug}`} />}
                >
                  Start Assessment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

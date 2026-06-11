import scholar from '@/data/scholar.json'
import resources from '@/data/resources.json'
import { Scholar, Resource } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress, ProgressIndicator, ProgressTrack } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, BookOpen, Download } from 'lucide-react'

const scholarData = scholar as Scholar
const recommended = (resources as Resource[]).slice(0, 3)

export default function DashboardPage() {
  return (
    <div className="py-12 px-4">
      <div className="container max-w-5xl mx-auto">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-brand-blue to-blue-700 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-blue-200 text-sm mb-1">Welcome back</p>
              <h1 className="text-3xl font-bold">{scholarData.name}</h1>
              <div className="flex gap-2 mt-3 flex-wrap">
                <Badge className="bg-brand-green text-white border-0">{scholarData.cohort}</Badge>
                <Badge className="bg-white/20 text-white border-0">{scholarData.state} State</Badge>
                <Badge className="bg-white/20 text-white border-0">{scholarData.intendedMajor}</Badge>
              </div>
            </div>
            <div className="text-right">
              <p className="text-blue-200 text-xs">Career Goal</p>
              <p className="font-semibold text-sm">{scholarData.careerGoal}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Learning Progress */}
          <div className="lg:col-span-2 space-y-5">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-blue" />
                  Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {scholarData.progress.map((p) => (
                  <div key={p.topic}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-700 font-medium">{p.topic}</span>
                      <span className="text-brand-green font-semibold">{p.percent}%</span>
                    </div>
                    <Progress value={p.percent} className="h-2">
                      <ProgressTrack>
                        <ProgressIndicator className="bg-brand-green" />
                      </ProgressTrack>
                    </Progress>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Application Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Application Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {scholarData.applicationStatus.map((item) => (
                    <div key={item.step} className="flex items-center justify-between py-2 border-b last:border-0">
                      <span className="text-sm text-gray-700">{item.step}</span>
                      <Badge
                        className={
                          item.status === 'Completed'
                            ? 'bg-green-100 text-brand-green border-0'
                            : item.status === 'In Progress'
                            ? 'bg-blue-100 text-brand-blue border-0'
                            : 'bg-gray-100 text-gray-500 border-0'
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* Upcoming Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-red" />
                  Upcoming Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {scholarData.upcomingActivities.map((activity) => (
                  <div key={activity.title} className="border rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{activity.date}</p>
                    <Badge className="mt-1.5 bg-blue-50 text-brand-blue border-0 text-xs">{activity.type}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recommended */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recommended Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {recommended.map((r) => (
                  <a
                    key={r.id}
                    href={`/pdfs/${r.pdfFile}`}
                    download
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <Download className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    <span className="text-xs text-gray-700 group-hover:text-brand-blue">{r.title}</span>
                  </a>
                ))}
                <Button className="w-full mt-2 text-brand-blue border-brand-blue" variant="outline" render={<Link href="/resources" />}>
                  View All Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

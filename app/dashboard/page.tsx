import scholar from '@/data/scholar.json'
import { Scholar } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  BookOpen, Calendar, CheckCircle, Clock,
  Target, TrendingUp, Award, ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const s = scholar as Scholar

const statusColor: Record<string, string> = {
  'Completed': 'bg-green-100 text-brand-green border-0',
  'In Progress': 'bg-blue-100 text-brand-blue border-0',
  'Pending': 'bg-gray-100 text-gray-500 border-0',
}

const activityIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  'Workshop': BookOpen,
  'Deadline': Calendar,
  'Webinar': TrendingUp,
}

export default function DashboardPage() {
  const overallProgress = Math.round(
    s.progress.reduce((sum, p) => sum + p.percent, 0) / s.progress.length
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero bar */}
      <div className="bg-[#0f1e4a] relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_30%_50%,rgba(26,86,219,0.3)_0%,transparent_70%)]" />
        <div className="relative container max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-white/50 text-xs mb-1">Welcome back</p>
              <h1 className="text-2xl font-bold text-white">{s.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-brand-green/20 text-brand-green border-brand-green/30 text-xs">{s.cohort}</Badge>
                <Badge className="bg-white/10 text-white/60 border-white/20 text-xs">{s.state} State</Badge>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-white/50 text-xs">Overall Progress</p>
                <p className="text-3xl font-bold text-white">{overallProgress}%</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-brand-green" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp className="w-4 h-4 text-brand-blue" />
                <h2 className="font-bold text-gray-900 text-sm">Learning Progress</h2>
              </div>
              <div className="space-y-5">
                {s.progress.map((item) => (
                  <div key={item.topic}>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-gray-700 font-medium">{item.topic}</span>
                      <span className="text-gray-500">{item.percent}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-700"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Status */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle className="w-4 h-4 text-brand-green" />
                <h2 className="font-bold text-gray-900 text-sm">Application Status</h2>
              </div>
              <div className="divide-y divide-gray-50">
                {s.applicationStatus.map((item, i) => (
                  <div key={item.step} className="flex items-center justify-between py-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                        ${item.status === 'Completed' ? 'bg-green-100 text-brand-green' :
                          item.status === 'In Progress' ? 'bg-blue-100 text-brand-blue' :
                          'bg-gray-100 text-gray-400'}`}>
                        {item.status === 'Completed' ? '✓' : i + 1}
                      </div>
                      <span className="text-sm font-medium text-gray-800">{item.step}</span>
                    </div>
                    <Badge className={statusColor[item.status]}>{item.status}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Upcoming Activities */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <Calendar className="w-4 h-4 text-brand-red" />
                <h2 className="font-bold text-gray-900 text-sm">Upcoming</h2>
              </div>
              <div className="space-y-3">
                {s.upcomingActivities.map((act) => {
                  const Icon = activityIcon[act.type] || Clock
                  return (
                    <div key={act.title} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800 leading-snug">{act.title}</p>
                        <p className="text-[11px] text-gray-500 mt-0.5">{act.date}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-brand-blue to-blue-700 rounded-2xl p-6 text-white">
              <Target className="w-6 h-6 mb-3 text-white/60" />
              <h3 className="font-bold text-sm mb-1">Continue Learning</h3>
              <p className="text-white/60 text-xs mb-4">Pick up where you left off.</p>
              <Button
                className="w-full bg-white text-brand-blue hover:bg-blue-50 text-xs font-semibold h-9"
                render={<Link href="/learning" />}
              >
                Learning Centre <ArrowRight className="ml-1 w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

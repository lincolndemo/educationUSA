import scholar from '@/data/scholar.json'
import { Scholar } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User, MapPin, School, BookOpen, GraduationCap, Target } from 'lucide-react'

const s = scholar as Scholar

const profileFields = [
  { icon: User, label: 'Full Name', value: s.name },
  { icon: MapPin, label: 'State', value: s.state },
  { icon: School, label: 'School', value: s.school },
  { icon: BookOpen, label: 'Intended Major', value: s.intendedMajor },
  { icon: GraduationCap, label: 'Intended Degree', value: s.intendedDegree },
  { icon: Target, label: 'Career Goal', value: s.careerGoal },
]

export default function ProfilePage() {
  return (
    <div className="py-12 px-4">
      <div className="container max-w-3xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Scholar Profile</h1>
          <p className="text-gray-500">Demo scholar record — {s.cohort}</p>
        </div>

        {/* Profile Header */}
        <div className="flex items-center gap-5 mb-8 p-6 bg-gradient-to-r from-brand-blue to-blue-700 rounded-2xl text-white">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold">
            {s.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{s.name}</h2>
            <div className="flex gap-2 mt-2 flex-wrap">
              <Badge className="bg-brand-green text-white border-0">{s.cohort}</Badge>
              <Badge className="bg-white/20 text-white border-0">{s.state} State</Badge>
            </div>
          </div>
        </div>

        {/* Profile Fields */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base">Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileFields.map((field) => {
                const Icon = field.icon
                return (
                  <div key={field.label} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{field.label}</p>
                      <p className="text-sm font-medium text-gray-800">{field.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Application Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Application Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-0 divide-y">
              {s.applicationStatus.map((item, i) => (
                <div key={item.step} className="flex items-center justify-between py-3.5">
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                      ${item.status === 'Completed' ? 'bg-green-100 text-brand-green' :
                        item.status === 'In Progress' ? 'bg-blue-100 text-brand-blue' :
                        'bg-gray-100 text-gray-400'}`}
                    >
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-800 font-medium">{item.step}</span>
                  </div>
                  <Badge
                    className={
                      item.status === 'Completed' ? 'bg-green-100 text-brand-green border-0' :
                      item.status === 'In Progress' ? 'bg-blue-100 text-brand-blue border-0' :
                      'bg-gray-100 text-gray-500 border-0'
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
    </div>
  )
}

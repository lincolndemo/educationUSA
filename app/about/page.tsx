import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Users, BookOpen, Cpu } from 'lucide-react'

const objectives = [
  { icon: Target, title: 'Identify High-Achieving Students', description: 'Select Nigeria\'s most talented students from all 36 states through a rigorous national application process.' },
  { icon: Users, title: 'Provide Admissions Support', description: 'Guide scholars through every step of the U.S. university admissions process — from school selection to acceptance.' },
  { icon: BookOpen, title: 'Prepare Students for U.S. Universities', description: 'Build academic, cultural, and professional skills through structured training and self-paced learning modules.' },
  { icon: Cpu, title: 'Support STEM and AI Talent Development', description: 'Develop the next generation of Nigerian leaders in artificial intelligence, engineering, and emerging technology fields.' },
]

const impacts = [
  { target: '2,000+', description: 'Applications received nationally' },
  { target: '100', description: 'Scholars selected per cohort' },
  { target: '50%', description: 'Female participation target' },
  { target: '40', description: 'U.S. university admissions per cycle' },
  { target: '36', description: 'States represented in programme' },
  { target: '5', description: 'Technology focus areas' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Dark hero banner */}
      <div className="bg-[#0f1e4a] relative overflow-hidden grain-overlay py-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_30%_50%,rgba(26,86,219,0.3)_0%,transparent_70%)]" />
        <div className="relative container max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-3">About the Programme</h1>
          <p className="text-white/60 max-w-xl">Empowering Nigeria&apos;s next generation of AI and technology leaders.</p>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          {/* Overview */}
          <div className="prose max-w-none text-gray-700 mb-14">
            <p className="text-base leading-relaxed mb-4">
              Through a combination of structured advising, self-paced digital learning, and direct institutional partnerships, the programme equips high-achieving Nigerian students with everything they need to successfully apply to, gain admission into, and thrive at leading U.S. universities.
            </p>
            <p className="text-base leading-relaxed">
              The initiative places a particular emphasis on artificial intelligence, computer science, engineering, and emerging technology disciplines — fields where U.S. universities lead globally and where Nigerian talent can make transformative contributions both at home and abroad.
            </p>
          </div>

          {/* Objectives */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Programme Objectives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {objectives.map((obj, i) => {
              const Icon = obj.icon
              const colors = ['border-brand-blue', 'border-brand-red', 'border-brand-green', 'border-brand-blue']
              const stagger = `stagger-${i + 1}`
              return (
                <Card key={i} className={`border-l-4 ${colors[i]} card-hover animate-fade-up ${stagger}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-brand-blue" />
                      <CardTitle className="text-base">{obj.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{obj.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Expected Impact */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Expected Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {impacts.map((item) => (
              <div key={item.target} className="bg-gray-50 rounded-xl p-5 text-center border">
                <p className="text-3xl font-extrabold text-brand-blue">{item.target}</p>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden grain-overlay bg-[#0f1e4a] -mt-20">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(26,86,219,0.35)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_30%,rgba(5,122,85,0.2)_0%,transparent_60%)]" />

      {/* Tricolor accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-brand-blue" />
        <div className="flex-1 bg-brand-red" />
        <div className="flex-1 bg-brand-green" />
      </div>

      <div className="relative container max-w-6xl mx-auto px-6 py-32 pt-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-up stagger-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium px-4 py-2 rounded-full mb-8">
            <Award className="w-3.5 h-3.5 text-brand-green" />
            2025 Cohort Applications Open
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up stagger-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            National AI and
            <br />
            <span className="relative inline-block">
              Emerging Technologies
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-green rounded-full" />
            </span>
            <br />
            Scholars Initiative
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up stagger-3 text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
            Empowering Nigerian scholars with AI literacy, U.S. university admissions guidance, and the tools to shape Africa&apos;s tech future.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up stagger-4 flex flex-col sm:flex-row gap-3">
            <Button
              className="bg-brand-blue hover:bg-blue-600 text-white px-7 py-3 text-sm font-semibold shadow-lg shadow-blue-500/30 h-auto"
              render={<Link href="/learning" />}
            >
              Explore Learning Centre
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-7 py-3 text-sm font-semibold h-auto backdrop-blur-sm"
              render={<Link href="/resources" />}
            >
              <BookOpen className="mr-2 w-4 h-4" />
              View Resources
            </Button>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up stagger-5 flex flex-wrap gap-6 mt-14 pt-10 border-t border-white/10">
            {[
              { value: '2,000+', label: 'Applications' },
              { value: '100', label: 'Scholars Selected' },
              { value: '50%', label: 'Female Participation' },
              { value: '40', label: 'U.S. Admissions' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating decoration card (right side, desktop only) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block animate-float">
        <div className="w-56 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 text-white shadow-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-brand-green/30 flex items-center justify-center">
              <Award className="w-4 h-4 text-brand-green" />
            </div>
            <div>
              <p className="text-xs font-semibold">Scholar Portal</p>
              <p className="text-white/50 text-[10px]">AI & Tech Focus</p>
            </div>
          </div>
          <div className="space-y-2">
            {['U.S. Admissions', 'AI Fundamentals', 'Visa Prep'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                <span className="text-[11px] text-white/70">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

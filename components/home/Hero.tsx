import Link from 'next/link'
import { ArrowRight, BookOpen, Star, GraduationCap, Crown, Target } from 'lucide-react'

function NigeriaFlag() {
  return (
    <span
      className="inline-flex h-4 w-6 rounded-sm overflow-hidden border border-white/20 shrink-0"
      aria-label="Nigerian flag"
      style={{ display: 'inline-flex' }}
    >
      <span className="flex-1 bg-[#008751]" />
      <span className="flex-1 bg-white" />
      <span className="flex-1 bg-[#008751]" />
    </span>
  )
}

function USFlag() {
  return (
    <span
      className="relative inline-flex h-4 w-6 rounded-sm overflow-hidden border border-white/20 shrink-0"
      aria-label="US flag"
      style={{ display: 'inline-flex' }}
    >
      <span className="absolute inset-0 flex flex-col">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <span key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-[#B22234]' : 'bg-white'}`} />
        ))}
      </span>
      <span className="absolute top-0 left-0 w-[42%] h-[54%] bg-[#3C3B6E]" />
    </span>
  )
}

const UNIVERSITIES = [
  'MIT', 'Stanford', 'Carnegie Mellon', 'U. Michigan',
  'Georgia Tech', 'Duke', 'Johns Hopkins', 'Northeastern',
  'UC Berkeley', 'Cornell', 'Purdue', 'UT Austin',
]

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-1">
      <span className="text-xl font-bold text-white tracking-tight">{value}</span>
      <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium mt-0.5">{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-[#080f23] text-white overflow-hidden -mt-20">
      <style>{`
        @keyframes hero-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .hero-marquee { animation: hero-marquee 35s linear infinite; }
      `}</style>

      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_15%_50%,rgba(26,86,219,0.3)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(5,122,85,0.15)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_85%_80%,rgba(224,36,36,0.1)_0%,transparent_50%)]" />

      {/* Tricolor top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 flex z-10">
        <div className="flex-1 bg-brand-blue" />
        <div className="flex-1 bg-brand-red" />
        <div className="flex-1 bg-brand-green" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pt-10">

            {/* Badge with flags */}
            <div className="animate-fade-up stagger-1">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                <USFlag />
                <span className="w-px h-3.5 bg-white/20 inline-block" />
                <NigeriaFlag />
                <span className="w-px h-3.5 bg-white/20 inline-block" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300 inline-flex items-center gap-1.5">
                  2025 Cohort Open
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up stagger-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.92]"
              style={{
                maskImage: 'linear-gradient(180deg, black 0%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(180deg, black 0%, black 85%, transparent 100%)',
              }}
            >
              National AI &amp;<br />
              <span className="bg-gradient-to-br from-white via-white to-[#93c5fd] bg-clip-text text-transparent">
                Emerging Tech
              </span><br />
              Scholars Initiative
            </h1>

            {/* Description */}
            <p className="animate-fade-up stagger-3 max-w-lg text-base text-zinc-400 leading-relaxed">
              Empowering Nigerian scholars with AI literacy, U.S. university admissions
              guidance, and the tools to shape Africa&apos;s tech future.
            </p>

            {/* CTAs — high contrast */}
            <div className="animate-fade-up stagger-4 flex flex-col sm:flex-row gap-3">
              <Link
                href="/learning"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition-all duration-150 hover:scale-[1.02] hover:bg-zinc-100 active:scale-[0.97] shadow-lg"
              >
                Explore Learning Centre
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/resources"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-150 hover:bg-white/15 hover:border-white/40 active:scale-[0.97]"
              >
                <BookOpen className="w-4 h-4" />
                View Resources
              </Link>
            </div>

            {/* Flag partnership line */}
            <div className="animate-fade-up stagger-5 flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2">
                <USFlag />
                <span className="text-xs text-zinc-500">U.S. Embassy Initiative</span>
              </div>
              <span className="text-zinc-700">·</span>
              <div className="flex items-center gap-2">
                <NigeriaFlag />
                <span className="text-xs text-zinc-500">Federal Republic of Nigeria</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 space-y-4 lg:mt-8">

            {/* Stats glass card */}
            <div className="animate-fade-up stagger-3 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl shadow-2xl">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 h-48 w-48 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />
              <div className="relative z-10">

                {/* Top stat */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/20 ring-1 ring-brand-blue/30 shrink-0">
                    <GraduationCap className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">100</div>
                    <div className="text-sm text-zinc-400">Scholars Selected</div>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400">Cohort Applications</span>
                    <span className="text-white font-medium">2,000+</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/60">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-brand-blue to-brand-green" />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-5" />

                {/* Mini stats */}
                <div className="grid grid-cols-3 divide-x divide-white/10">
                  <StatItem value="50%" label="Female" />
                  <StatItem value="40" label="Admitted" />
                  <StatItem value="5yrs" label="Running" />
                </div>

                {/* Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
                    </span>
                    APPLICATIONS OPEN
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <Crown className="w-3 h-3 text-yellow-500" />
                    U.S. EMBASSY BACKED
                  </div>
                </div>
              </div>
            </div>

            {/* Universities marquee card */}
            <div className="animate-fade-up stagger-4 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-6 backdrop-blur-xl">
              <h3 className="mb-4 px-6 text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Partner Universities</h3>
              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                }}
              >
                <div className="hero-marquee flex gap-10 whitespace-nowrap px-4">
                  {[...UNIVERSITIES, ...UNIVERSITIES].map((uni, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 opacity-40 hover:opacity-90 transition-opacity cursor-default"
                    >
                      <Target className="h-3 w-3 text-white shrink-0" />
                      <span className="text-sm font-semibold text-white tracking-tight">{uni}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

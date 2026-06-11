import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTAStrip() {
  return (
    <section className="relative overflow-hidden py-24 px-4 bg-[#0f1e4a] grain-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(26,86,219,0.3)_0%,transparent_70%)]" />
      {/* Tricolor bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-brand-blue" />
        <div className="flex-1 bg-brand-red" />
        <div className="flex-1 bg-brand-green" />
      </div>

      <div className="relative container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Start Your Learning Journey Today
        </h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          Access 10 self-paced modules, 4 assessments, and a full library of resources — all free, all online.
        </p>
        <Button
          className="bg-brand-green hover:bg-green-600 text-white px-8 py-3 h-auto text-sm font-semibold shadow-lg shadow-green-900/30"
          render={<Link href="/learning" />}
        >
          Explore the Scholar Learning Centre
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-brand-green rounded-full inline-block" />
          U.S. Embassy Nigeria · 2026 Cohort Now Open
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          National AI and Emerging{' '}
          <span className="relative inline-block">
            Technologies Scholars
            <span className="absolute -bottom-1 left-0 w-full h-1.5 rounded-full bg-gradient-to-r from-brand-blue via-brand-red to-brand-green" />
          </span>{' '}
          Initiative
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Preparing Nigeria&apos;s brightest students for admission into leading U.S. universities in AI, STEM, and emerging technology fields.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            render={<Link href="/learning" />}
            size="lg"
            className="bg-brand-blue hover:bg-blue-700 text-white"
          >
            Explore Learning Centre
          </Button>
          <Button
            render={<Link href="/resources" />}
            size="lg"
            variant="outline"
            className="border-brand-blue text-brand-blue hover:bg-blue-50"
          >
            View Resources
          </Button>
        </div>
      </div>
    </section>
  )
}

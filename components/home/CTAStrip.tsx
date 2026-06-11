import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CTAStrip() {
  return (
    <section className="bg-brand-blue py-16 px-4">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Ready to Start Your Journey?</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">
          Access self-paced lessons, assessments, and resources — all designed to get you into your dream U.S. university.
        </p>
        <Button
          render={<Link href="/learning" />}
          size="lg"
          className="bg-brand-green hover:bg-green-700 text-white font-semibold"
        >
          Explore the Scholar Learning Centre
        </Button>
      </div>
    </section>
  )
}

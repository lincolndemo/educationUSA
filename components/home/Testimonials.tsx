import testimonials from '@/data/testimonials.json'
import { Testimonial } from '@/lib/types'
import { Quote } from 'lucide-react'

const data = testimonials as Testimonial[]

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">Scholar Stories</p>
          <h2 className="text-3xl font-bold text-gray-900">From Our Community</h2>
        </div>

        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
          {data.map((t, i) => (
            <div
              key={t.id}
              className={`snap-start flex-shrink-0 w-[320px] sm:w-[360px] card-hover bg-white border border-gray-100 rounded-2xl p-6 shadow-sm animate-fade-up stagger-${Math.min(i + 1, 6)}`}
            >
              <Quote className="w-7 h-7 text-brand-blue/20 mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">{t.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.cohort} · {t.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import testimonials from '@/data/testimonials.json'
import { Testimonial } from '@/lib/types'
import { Card, CardContent } from '@/components/ui/card'

const data = testimonials as Testimonial[]

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Scholar Stories</h2>
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
          {data.map((t) => (
            <Card key={t.id} className="min-w-[300px] max-w-sm snap-start flex-shrink-0 border-0 bg-white shadow-sm">
              <CardContent className="pt-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.university}</p>
                    <p className="text-xs text-brand-green font-medium">{t.cohort} · {t.state} State</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

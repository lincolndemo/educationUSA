import Hero from '@/components/home/Hero'
import MetricsStrip from '@/components/home/MetricsStrip'
import HowItWorks from '@/components/home/HowItWorks'
import FeaturedTopics from '@/components/home/FeaturedTopics'
import Testimonials from '@/components/home/Testimonials'
import CTAStrip from '@/components/home/CTAStrip'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsStrip />
      <HowItWorks />
      <FeaturedTopics />
      <Testimonials />
      <CTAStrip />
    </>
  )
}

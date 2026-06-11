import Link from 'next/link'
import { BookOpen, GraduationCap, DollarSign, Globe, Cpu } from 'lucide-react'

const topics = [
  {
    icon: BookOpen,
    title: 'U.S. Higher Education',
    desc: 'Understand how American universities work — from choosing a school to campus life.',
    href: '/learning',
    color: 'bg-brand-blue',
    light: 'bg-blue-50',
    text: 'text-brand-blue',
    span: 'md:col-span-2',
  },
  {
    icon: GraduationCap,
    title: 'Admissions Prep',
    desc: 'Personal statement writing, recommendations, and application strategy.',
    href: '/learning',
    color: 'bg-brand-red',
    light: 'bg-red-50',
    text: 'text-brand-red',
    span: '',
  },
  {
    icon: DollarSign,
    title: 'Scholarships',
    desc: 'Find and secure funding for your U.S. education.',
    href: '/learning',
    color: 'bg-brand-green',
    light: 'bg-green-50',
    text: 'text-brand-green',
    span: '',
  },
  {
    icon: Globe,
    title: 'Visa Preparation',
    desc: 'F-1 visa process, interviews, and pre-departure checklist.',
    href: '/learning',
    color: 'bg-brand-blue',
    light: 'bg-blue-50',
    text: 'text-brand-blue',
    span: '',
  },
  {
    icon: Cpu,
    title: 'AI & Emerging Technologies',
    desc: 'AI literacy, machine learning fundamentals, and career opportunities in tech.',
    href: '/learning',
    color: 'bg-brand-red',
    light: 'bg-red-50',
    text: 'text-brand-red',
    span: 'md:col-span-2',
  },
]

export default function FeaturedTopics() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">Curriculum</p>
          <h2 className="text-3xl font-bold text-gray-900">Featured Topics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 grid-flow-dense">
          {topics.map((topic, i) => {
            const Icon = topic.icon
            return (
              <Link
                key={topic.title}
                href={topic.href}
                className={`group ${topic.span} card-hover relative overflow-hidden rounded-2xl p-6 border border-gray-100 bg-white animate-fade-up stagger-${i + 1}`}
              >
                <div className={`w-11 h-11 rounded-xl ${topic.light} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${topic.text}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-brand-blue transition-colors">{topic.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{topic.desc}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${topic.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

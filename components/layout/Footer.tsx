import Link from 'next/link'
import { Globe, Mail, MapPin } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/learning', label: 'Learning Centre' },
  { href: '/assessments', label: 'Assessments' },
  { href: '/resources', label: 'Resources' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/profile', label: 'Profile' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f1e4a] text-white">
      {/* Tricolor top bar */}
      <div className="h-1 flex">
        <div className="flex-1 bg-brand-blue" />
        <div className="flex-1 bg-brand-red" />
        <div className="flex-1 bg-brand-green" />
      </div>

      <div className="container max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex flex-col gap-0.5">
                <div className="w-5 h-1.5 rounded-sm bg-brand-blue" />
                <div className="w-5 h-1.5 rounded-sm bg-brand-red" />
                <div className="w-5 h-1.5 rounded-sm bg-brand-green" />
              </div>
              <span className="text-sm font-bold">EducationUSA Scholars Portal</span>
            </div>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs">
              Empowering Nigerian scholars to pursue transformative education in the United States through AI literacy and opportunity access.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-1.5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white text-xs transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-3.5 h-3.5 text-brand-blue mt-0.5 shrink-0" />
                <span className="text-white/60 text-xs">scholars@educationusa.ng</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-brand-green mt-0.5 shrink-0" />
                <span className="text-white/60 text-xs">Plot 1075 Diplomatic Drive, Abuja</span>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-3.5 h-3.5 text-white/30 mt-0.5 shrink-0" />
                <span className="text-white/60 text-xs">educationusa.state.gov</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">© 2025 EducationUSA Nigeria. All rights reserved.</p>
          <p className="text-white/20 text-xs">A U.S. Embassy Initiative</p>
        </div>
      </div>
    </footer>
  )
}

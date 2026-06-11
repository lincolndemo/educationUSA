'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/learning', label: 'Learning Centre' },
  { href: '/assessments', label: 'Assessments' },
  { href: '/profile', label: 'Profile' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex gap-0.5">
            <div className="w-2.5 h-5 bg-brand-blue rounded-sm" />
            <div className="w-2.5 h-5 bg-brand-red rounded-sm" />
            <div className="w-2.5 h-5 bg-brand-green rounded-sm" />
          </div>
          <span className="font-bold text-brand-blue text-sm leading-tight hidden sm:block">
            EducationUSA<br />
            <span className="text-gray-500 font-normal text-xs">Scholars Portal</span>
          </span>
          <span className="font-bold text-brand-blue text-sm sm:hidden">Scholars Portal</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'text-brand-blue bg-blue-50'
                  : 'text-gray-600 hover:text-brand-red hover:bg-gray-50'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="lg:hidden" />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="flex flex-col gap-1 mt-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2.5 rounded-md text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-brand-blue bg-blue-50'
                      : 'text-gray-700 hover:text-brand-red hover:bg-gray-50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

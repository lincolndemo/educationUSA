import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/sonner'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EducationUSA Scholars Portal',
  description: "National AI and Emerging Technologies Scholars Initiative — Preparing Nigeria's brightest students for leading U.S. universities.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

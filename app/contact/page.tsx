'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MapPin, Globe, Share2, Link2 } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    toast.success('Message sent! We\'ll be in touch shortly.')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="py-12 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Contact Us</h1>
          <p className="text-gray-500 max-w-xl mx-auto">Have questions about the programme? Reach out — our advisers are here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-brand-blue hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Email</p>
                    <p className="text-sm text-gray-500">scholars@educationusa.ng</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-red mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Programme Office</p>
                    <p className="text-sm text-gray-500">
                      Plot 1075 Diplomatic Drive<br />
                      Central Business District<br />
                      Abuja, FCT, Nigeria
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm font-medium text-gray-800 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                    <Globe className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                    <Share2 className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                    <Link2 className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

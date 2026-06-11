import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-auto">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex gap-0.5 mb-3">
              <div className="w-2.5 h-5 bg-brand-blue rounded-sm" />
              <div className="w-2.5 h-5 bg-brand-red rounded-sm" />
              <div className="w-2.5 h-5 bg-brand-green rounded-sm" />
            </div>
            <p className="font-bold text-brand-blue text-sm">EducationUSA Nigeria</p>
            <p className="text-xs text-gray-500 mt-1">National AI and Emerging Technologies Scholars Initiative</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm mb-3">Quick Links</p>
            <div className="flex flex-col gap-1.5">
              {['/about', '/learning', '/resources', '/assessments', '/contact'].map((href) => (
                <Link key={href} href={href} className="text-sm text-gray-500 hover:text-brand-blue capitalize">
                  {href.replace('/', '')}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm mb-3">Contact</p>
            <p className="text-sm text-gray-500">scholars@educationusa.ng</p>
            <p className="text-sm text-gray-500 mt-1">Plot 1075 Diplomatic Drive<br />Central Business District, Abuja</p>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-xs text-gray-400">
          © 2026 EducationUSA Nigeria · National AI and Emerging Technologies Scholars Initiative · Demo Prototype
        </div>
      </div>
    </footer>
  )
}

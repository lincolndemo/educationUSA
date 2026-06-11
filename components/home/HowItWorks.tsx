const steps = [
  { n: '01', title: 'Apply', desc: 'Submit your application to the EducationUSA Scholars Programme.' },
  { n: '02', title: 'Get Selected', desc: 'Top candidates are selected based on academic merit and potential.' },
  { n: '03', title: 'Complete Training', desc: 'Attend intensive AI literacy and admissions preparation workshops.' },
  { n: '04', title: 'Apply to U.S. Universities', desc: 'Submit applications to leading American universities with full guidance.' },
  { n: '05', title: 'Begin Your Journey', desc: 'Travel to the U.S., start your degree, and represent Nigeria.' },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">The Process</p>
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-blue via-brand-red to-brand-green" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className={`animate-fade-up text-center md:text-left stagger-${i + 1}`}
              >
                <div className={`w-16 h-16 mx-auto md:mx-0 rounded-2xl flex items-center justify-center text-xl font-bold mb-4 shadow-lg
                  ${i === 0 ? 'bg-brand-blue text-white shadow-blue-200' :
                    i === 1 ? 'bg-brand-red text-white shadow-red-200' :
                    i === 2 ? 'bg-brand-green text-white shadow-green-200' :
                    i === 3 ? 'bg-brand-blue text-white shadow-blue-200' :
                    'bg-brand-red text-white shadow-red-200'}`}
                >
                  {step.n}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

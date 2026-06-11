const steps = [
  { number: 1, title: 'Apply', description: 'Submit your application through the national portal.' },
  { number: 2, title: 'Get Selected', description: 'Top applicants are selected by a national review panel.' },
  { number: 3, title: 'Complete Training', description: 'Access self-paced learning, workshops, and advising.' },
  { number: 4, title: 'Apply to U.S. Universities', description: 'Submit applications with full EducationUSA support.' },
  { number: 5, title: 'Begin Your Journey', description: 'Travel to the U.S. and start your academic programme.' },
]

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How the Programme Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-blue text-white font-bold text-lg flex items-center justify-center mb-3 z-10">
                {step.number}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-blue-200" />
              )}
              <p className="font-semibold text-gray-800 text-sm mb-1">{step.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

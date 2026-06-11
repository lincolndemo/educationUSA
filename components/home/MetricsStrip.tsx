const metrics = [
  { value: '2,000', label: 'Applications' },
  { value: '100', label: 'Scholars' },
  { value: '50%', label: 'Female Participation' },
  { value: '40', label: 'U.S. Admissions' },
]

export default function MetricsStrip() {
  return (
    <section className="bg-brand-blue py-12 px-4">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-4xl font-extrabold text-white">{m.value}</p>
              <p className="text-blue-200 text-sm mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

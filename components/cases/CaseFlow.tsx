import type { CaseFlowStep } from '@/data/cases'

interface CaseFlowProps {
  title: string
  summary: string
  steps: CaseFlowStep[]
  variant: 'before' | 'after'
}

export function CaseFlow({ title, summary, steps, variant }: CaseFlowProps) {
  const isAfter = variant === 'after'
  const accent = isAfter ? 'border-cyan-500/30 bg-cyan-500/5' : 'border-gray-800 bg-gray-900/40'
  const stepAccent = isAfter
    ? 'border-cyan-500/40 text-cyan-300'
    : 'border-gray-600 text-gray-300'
  const labelColor = isAfter ? 'text-cyan-400/80' : 'text-gray-500'

  return (
    <div className={`rounded-xl border p-6 sm:p-8 ${accent}`}>
      <p className={`text-xs uppercase tracking-wider mb-2 ${labelColor}`}>
        {isAfter ? 'After' : 'Before'}
      </p>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-8 leading-relaxed">{summary}</p>

      <ol className="space-y-0">
        {steps.map((step, index) => (
          <li key={step.label} className="relative flex gap-4 pb-8 last:pb-0">
            {index < steps.length - 1 && (
              <span
                className="absolute left-[15px] top-8 bottom-0 w-px bg-gray-700"
                aria-hidden="true"
              />
            )}
            <span
              className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-mono ${stepAccent} bg-black`}
            >
              {index + 1}
            </span>
            <div className="pt-0.5">
              <p className="text-base font-semibold text-white mb-1">{step.label}</p>
              {step.detail && (
                <p className="text-sm text-gray-400 leading-relaxed">{step.detail}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

type CaseFlowContent = Omit<CaseFlowProps, 'variant'>

interface CaseFlowCompareProps {
  before: CaseFlowContent
  after: CaseFlowContent
}

export function CaseFlowCompare({ before, after }: CaseFlowCompareProps) {
  return (
    <section className="bg-black py-16 lg:py-20 border-b border-blue-400/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            業務の流れが、こう変わる
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            技術の説明ではなく、現場の手順の変化で見ます。
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-6">
          <CaseFlow {...before} variant="before" />
          <CaseFlow {...after} variant="after" />
        </div>
      </div>
    </section>
  )
}

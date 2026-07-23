import type { CaseFlowStep } from '@/data/cases'

interface CaseFlowProps {
  title: string
  summary: string
  steps: CaseFlowStep[]
  variant: 'before' | 'after'
}

export function CaseFlow({ title, summary, steps, variant }: CaseFlowProps) {
  const isAfter = variant === 'after'
  const accent = isAfter ? 'border-brand/30 bg-brand/5' : 'border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40'
  const stepAccent = isAfter
    ? 'border-brand/40 text-brand-hover'
    : 'border-[var(--site-border)] text-[var(--site-fg-muted)]'
  const labelColor = isAfter ? 'text-brand/80' : 'text-[var(--site-fg-muted)]'

  return (
    <div className={`rounded-xl border p-6 sm:p-8 ${accent}`}>
      <p className={`text-xs uppercase tracking-wider mb-2 ${labelColor}`}>
        {isAfter ? 'After' : 'Before'}
      </p>
      <h3 className="text-xl font-semibold text-[var(--site-fg)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--site-fg-muted)] mb-8 leading-relaxed">{summary}</p>

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
              className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-mono ${stepAccent} bg-[var(--site-bg)]`}
            >
              {index + 1}
            </span>
            <div className="pt-0.5">
              <p className="text-base font-semibold text-[var(--site-fg)] mb-1">{step.label}</p>
              {step.detail && (
                <p className="text-sm text-[var(--site-fg-muted)] leading-relaxed">{step.detail}</p>
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
    <section className="bg-[var(--site-bg)] py-16 lg:py-20 border-b border-brand/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--site-fg)] mb-4">
            業務の流れが、こう変わる
          </h2>
          <p className="text-base text-[var(--site-fg-muted)] max-w-xl mx-auto">
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

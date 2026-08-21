import type { CaseFlowStep } from '@/data/cases'

interface CaseFlowProps {
  title: string
  summary: string
  steps: CaseFlowStep[]
  variant: 'before' | 'after'
}

export function CaseFlow({ title, summary, steps, variant }: CaseFlowProps) {
  const isAfter = variant === 'after'
  const accent = isAfter
    ? 'border-brand/30 bg-brand/5'
    : 'border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40'
  const stepAccent = isAfter
    ? 'border-brand/40 text-brand-hover'
    : 'border-[var(--site-border)] text-[var(--site-fg-muted)]'
  const labelColor = isAfter ? 'text-brand/80' : 'text-[var(--site-fg-muted)]'

  return (
    <div className={`rounded-xl border p-4 sm:p-6 md:p-8 ${accent}`}>
      <p className={`mb-1.5 text-xs font-medium ${labelColor}`}>
        {isAfter ? '導入後' : 'いま'}
      </p>
      <h3 className="mb-1.5 text-lg font-semibold text-[var(--site-fg)] md:mb-2 md:text-xl">
        {title}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-[var(--site-fg)]/85 md:mb-7">
        {summary}
      </p>

      <ol className="space-y-0">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className="relative flex gap-3 pb-4 last:pb-0 md:gap-4 md:pb-6"
          >
            {index < steps.length - 1 && (
              <span
                className="absolute bottom-0 left-[13px] top-7 w-px bg-[var(--site-border)] md:left-[15px] md:top-8"
                aria-hidden="true"
              />
            )}
            <span
              className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-mono md:h-8 md:w-8 md:text-xs ${stepAccent} bg-[var(--site-bg)]`}
            >
              {index + 1}
            </span>
            <div className="min-w-0 pt-0.5">
              <p className="mb-0.5 text-sm font-semibold text-[var(--site-fg)] md:mb-1 md:text-base">
                {step.label}
              </p>
              {step.detail ? (
                <p className="text-xs leading-relaxed text-[var(--site-fg)]/80 md:text-sm">
                  {step.detail}
                </p>
              ) : null}
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
    <section className="border-b border-brand/40 bg-[var(--site-bg)] py-8 md:py-14 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6 text-left md:mb-10">
          <h2 className="mb-2 text-balance text-xl font-bold leading-snug text-[var(--site-fg)] md:mb-3 md:text-3xl lg:text-4xl">
            業務の流れが、こう変わる
          </h2>
          <p className="max-w-xl text-sm text-[var(--site-fg)]/80 md:text-base">
            技術の説明ではなく、現場の手順の変化で見ます。
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <CaseFlow {...before} variant="before" />
          <CaseFlow {...after} variant="after" />
        </div>
      </div>
    </section>
  )
}

import type { CSSProperties } from 'react'

export type ServiceJourneyStep = {
  number: string
  title: string
  duration: string
  description: string
}

type ServiceJourneyDiagramProps = {
  steps: readonly ServiceJourneyStep[]
}

const chevronClipPath =
  'polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 12px 50%)'

export function ServiceJourneyDiagram({ steps }: ServiceJourneyDiagramProps) {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="hidden md:block">
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >
          {steps.map((step, i) => {
            const round =
              i === 0
                ? ' rounded-l-md'
                : i === steps.length - 1
                  ? ' rounded-r-md'
                  : ''
            return (
              <div
                key={`arrow-${step.number}`}
                className={`relative overflow-hidden border border-brand/45 bg-brand text-[var(--df-on-primary)]${round}`}
                style={{ clipPath: chevronClipPath } as CSSProperties}
              >
                <div className="px-4 py-3 text-center">
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-[var(--df-on-primary)]/85">
                    {step.duration}
                  </p>
                  <p className="mt-1 text-[15px] font-bold leading-tight">
                    {step.title}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className="mt-7 grid gap-4 lg:gap-6"
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >
          {steps.map((step) => (
            <div
              key={`card-${step.number}`}
              className="flex h-full flex-col items-center"
            >
              <div className="flex size-12 items-center justify-center rounded-full border-2 border-brand bg-[var(--site-bg)] text-[14px] font-bold text-brand">
                {step.number}
              </div>
              <div className="mt-3 flex h-full w-full flex-col rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] px-4 py-4 text-center shadow-[var(--service-card-shadow)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                  {step.duration}
                </p>
                <p className="mt-1 text-[17px] font-bold leading-snug text-[var(--site-fg)]">
                  {step.title}
                </p>
                <p className="mx-auto mt-2 max-w-[26ch] text-[14px] leading-[1.65] text-[var(--site-fg-muted)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative ml-2 border-l-2 border-brand pl-6 md:hidden">
        {steps.map((step) => (
          <div key={`sp-${step.number}`} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-[29px] top-1 flex size-6 items-center justify-center rounded-full border-2 border-brand bg-[var(--site-bg)] text-[11px] font-bold text-brand"
              aria-hidden
            >
              {step.number}
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
              {step.duration}
            </p>
            <p className="mt-1 text-[17px] font-bold text-[var(--site-fg)]">
              {step.title}
            </p>
            <p className="mt-2 text-[14px] leading-[1.65] text-[var(--site-fg-muted)]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

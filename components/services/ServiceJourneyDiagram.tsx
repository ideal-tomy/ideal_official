import type { CSSProperties } from 'react'

export type ServiceJourneyStep = {
  number: string
  title: string
  /** 期間など、矢印の外に出す補足。全体フローでは使わない */
  duration?: string
  description: string
  /** 長い見出しを1行に収める */
  compactTitle?: boolean
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
                className={`relative flex items-center justify-center overflow-hidden border border-brand/45 bg-brand py-2.5 text-[var(--df-on-primary)] lg:py-3${round}`}
                style={{ clipPath: chevronClipPath } as CSSProperties}
              >
                <div className="flex items-center justify-center gap-1.5 px-3 pr-6 lg:gap-2 lg:px-4 lg:pr-7">
                  <p className="shrink-0 text-[1.2rem] font-black tabular-nums leading-none tracking-tight text-[var(--df-on-primary)] lg:text-[1.35rem]">
                    {step.number}
                  </p>
                  <p
                    className={`whitespace-nowrap font-bold leading-none ${
                      step.compactTitle
                        ? 'text-[11px] tracking-tight lg:text-[12px]'
                        : 'text-[14px] lg:text-[15px]'
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className="mt-5 grid gap-4 lg:gap-6"
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >
          {steps.map((step) => (
            <div key={`desc-${step.number}`}>
              {step.duration ? (
                <p className="mb-1.5 text-[12px] font-medium tabular-nums text-[var(--site-fg)]/70">
                  {step.duration}
                </p>
              ) : null}
              <p className="text-[12.5px] leading-[1.65] text-[var(--site-fg-muted)]">
                {step.description}
              </p>
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
            <p className="text-[17px] font-bold text-[var(--site-fg)]">
              {step.title}
            </p>
            {step.duration ? (
              <p className="mt-1 text-[12px] font-medium text-[var(--site-fg)]/70">
                {step.duration}
              </p>
            ) : null}
            <p className="mt-2 text-[13px] leading-[1.65] text-[var(--site-fg-muted)]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

import type { ServiceSurface } from '@/components/services/ServiceSectionShell'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

type ProcessStep = {
  step: number
  title: string
  description: string
}

type ServiceProcessStepsProps = {
  title?: string
  lead: string
  steps: readonly ProcessStep[]
  surface?: ServiceSurface
}

/**
 * 進め方: 流れ図 → 短い説明カード
 */
export function ServiceProcessSteps({
  title = '進め方',
  lead,
  steps,
  surface = 'elevated',
}: ServiceProcessStepsProps) {
  return (
    <ServiceSectionShell
      surface={surface}
      title={title}
      lead={lead}
      maxWidth="5xl"
    >
      <ol className="mb-10 flex flex-col items-stretch gap-0 md:mb-12 md:flex-row md:items-center md:justify-center">
        {steps.map((item, index) => (
          <li
            key={item.step}
            className="flex flex-1 flex-col items-center md:flex-row md:items-center"
          >
            <div className="flex w-full flex-col items-center rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)]/70 px-4 py-5 text-center md:min-h-[5.5rem] md:justify-center">
              <span className="mb-1.5 text-xs font-semibold tracking-[0.14em] text-brand">
                STEP {item.step}
              </span>
              <span className="text-sm font-bold leading-snug text-[var(--site-fg)] md:text-[0.9375rem]">
                {item.title}
              </span>
            </div>
            {index < steps.length - 1 ? (
              <span
                className="flex h-6 w-full items-center justify-center text-brand/70 md:h-auto md:w-8 md:shrink-0"
                aria-hidden
              >
                <svg
                  className="h-4 w-4 rotate-90 md:rotate-0"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h9M8 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {steps.map((item) => (
          <div
            key={`detail-${item.step}`}
            className="rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)]/60 p-6 shadow-[var(--service-card-shadow)]"
          >
            <span className="mb-3 block text-2xl font-bold text-brand/70">
              {item.step}
            </span>
            <h3 className="mb-2 text-lg font-semibold text-[var(--site-fg)]">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--site-fg-muted)]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </ServiceSectionShell>
  )
}

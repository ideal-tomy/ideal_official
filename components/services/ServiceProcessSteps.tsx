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
 * 進め方: 左揃えタイムライン（カード3等分を廃止）
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
      align="left"
      emphasis="feature"
      maxWidth="5xl"
    >
      <ol className="divide-y divide-[var(--site-border)] border-y border-[var(--site-border)]">
        {steps.map((item) => (
          <li key={item.step} className="grid gap-4 py-6 md:grid-cols-[4.5rem_1fr] md:gap-8 md:py-8">
            <span className="text-[clamp(2rem,5vw,3rem)] font-black leading-none text-brand/25">
              {String(item.step).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-lg font-bold text-[var(--site-fg)] md:text-xl">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--site-fg-muted)] md:text-base">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </ServiceSectionShell>
  )
}

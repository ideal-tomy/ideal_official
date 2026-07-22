import { HowWeWorkDetail } from '@/components/how-we-work/HowWeWorkDetail'
import {
  HOW_WE_WORK_LEAD,
  HOW_WE_WORK_TITLE,
  getHowWeWorkDemoGuide,
  type HowWeWorkStep,
} from '@/data/how-we-work'

type CaseHowWeWorkSectionProps = {
  demoSlug: string
  /** ガイドが無い場合のフォールバック（共通6段） */
  fallbackSteps: HowWeWorkStep[]
}

export function CaseHowWeWorkSection({
  demoSlug,
  fallbackSteps,
}: CaseHowWeWorkSectionProps) {
  const guide = getHowWeWorkDemoGuide(demoSlug)
  const steps = guide?.steps ?? fallbackSteps
  const lead = guide?.lead ?? HOW_WE_WORK_LEAD

  return (
    <section className="border-b border-[var(--site-border)] py-14 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand/90">
          How we work
        </p>
        <h2 className="mb-3 text-2xl font-bold text-[var(--site-fg)] md:text-3xl">
          {HOW_WE_WORK_TITLE}
        </h2>
        <p className="mb-10 text-sm leading-relaxed text-[var(--site-fg-muted)] md:text-base">
          {lead}
        </p>
        <HowWeWorkDetail steps={steps} />
      </div>
    </section>
  )
}

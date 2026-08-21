import { HowWeWorkDetail } from '@/components/how-we-work/HowWeWorkDetail'
import { CaseFoldSection } from '@/components/cases/CaseFoldSection'
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
    <CaseFoldSection title={HOW_WE_WORK_TITLE}>
      <p className="mb-6 text-sm leading-relaxed text-[var(--site-fg)]/85 md:mb-10 md:text-base">
        {lead}
      </p>
      <HowWeWorkDetail steps={steps} />
    </CaseFoldSection>
  )
}

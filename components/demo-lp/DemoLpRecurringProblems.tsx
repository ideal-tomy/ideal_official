import type { RecurringProblemsBlock } from '@/lib/demo-lp/types'
import { DemoLpIllustration } from './DemoLpIllustration'
import {
  lpBody,
  lpH2,
  lpLead,
  lpSectionLabel,
  lpSummaryBox,
  lpSummaryHeadline,
} from './lpTypography'

export function DemoLpRecurringProblems({
  block,
}: {
  block: RecurringProblemsBlock
}) {
  return (
    <section className="bg-[var(--lp-surface)] py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className={lpSectionLabel}>{block.label}</p>
        <h2 className={lpH2}>{block.headline}</h2>
        {block.lead ? (
          <p className={`${lpLead} max-w-2xl`}>{block.lead}</p>
        ) : null}

        <DemoLpIllustration asset={block.diagram} className="mb-8" />

        <div className={`${lpSummaryBox} border bg-white`}>
          <p className={lpSummaryHeadline}>{block.closing.line1}</p>
          {block.closing.line2 ? (
            <p className={`mt-2 ${lpBody}`}>{block.closing.line2}</p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

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
  if (block.variant === 'peak') {
    return (
      <section className="bg-[var(--lp-ink)] py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.diagram.src}
            alt={block.diagram.alt}
            className="mx-auto w-full rounded-xl bg-white"
          />
          <p className="mt-10 text-center text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl [text-wrap:balance]">
            {block.closing.line1}
          </p>
          {block.closing.line2 ? (
            <p className="mx-auto mt-5 max-w-2xl text-center text-base text-white/70 md:text-lg">
              {block.closing.line2}
            </p>
          ) : null}
        </div>
      </section>
    )
  }

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

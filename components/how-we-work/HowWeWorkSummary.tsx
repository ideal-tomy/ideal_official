'use client'

import Link from 'next/link'
import {
  HOW_WE_WORK_LEAD,
  HOW_WE_WORK_STEPS,
  HOW_WE_WORK_TITLE,
} from '@/data/how-we-work'
import { HowWeWorkStepDialog } from '@/components/how-we-work/HowWeWorkStepDialog'
import { contentBody, contentLeadBare } from '@/lib/content-typography'

type HowWeWorkSummaryProps = {
  className?: string
  /** false のときページ外CTAを出さない（/flow 用） */
  showFooterLinks?: boolean
}

export function HowWeWorkSummary({
  className = '',
  showFooterLinks = false,
}: HowWeWorkSummaryProps) {
  return (
    <section
      id="how-we-work"
      className={`scroll-mt-24 border-t border-[color-mix(in_srgb,var(--site-fg)_12%,transparent)] bg-[var(--site-bg)] py-14 md:scroll-mt-28 md:py-16 ${className}`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand/90">
          How we work
        </p>
        <h2 className="mb-3 text-[clamp(1.5rem,3.5vw,2rem)] font-black leading-tight text-[var(--site-fg)]">
          {HOW_WE_WORK_TITLE}
        </h2>
        <p className={`mb-8 max-w-2xl text-sm md:text-base ${contentLeadBare}`}>{HOW_WE_WORK_LEAD}</p>

        <ol className="relative">
          {HOW_WE_WORK_STEPS.map((item, index) => {
            const isLast = index === HOW_WE_WORK_STEPS.length - 1
            return (
              <li
                key={item.id}
                className="relative flex gap-4 pb-4 last:pb-0"
              >
                <div className="flex w-7 shrink-0 flex-col items-center">
                  <span
                    className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--site-border)] bg-[var(--site-bg-elevated)] text-xs font-bold text-[var(--df-text)] shadow-[0_0_0_3px_var(--site-bg)]"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  {!isLast && (
                    <span
                      className="mt-1 w-px flex-1 bg-[color-mix(in_srgb,var(--site-fg)_20%,transparent)]"
                      aria-hidden
                    />
                  )}
                </div>
                <HowWeWorkStepDialog
                  step={item}
                  index={index}
                  className="min-w-0 flex-1 rounded-xl border border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-fg)_3%,transparent)] px-4 py-3 text-left transition-colors hover:border-brand/40"
                >
                  <p className="font-semibold text-brand-deep">{item.title}</p>
                  <p className={`mt-0.5 ${contentBody}`}>{item.summary}</p>
                  <p className="mt-1.5 text-xs font-semibold text-brand">詳細を見る</p>
                </HowWeWorkStepDialog>
              </li>
            )
          })}
        </ol>

        {showFooterLinks ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/flow#estimate"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--site-border)] bg-transparent px-6 py-3 text-sm font-bold text-[var(--site-fg)] transition-all hover:scale-[1.02] hover:border-brand/60 hover:text-brand-hover active:scale-[0.98] sm:text-base"
            >
              概算見積もり →
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}

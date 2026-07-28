import Link from 'next/link'
import {
  HOW_WE_WORK_LEAD,
  HOW_WE_WORK_STEPS,
  HOW_WE_WORK_TITLE,
  getHowWeWorkHref,
} from '@/data/how-we-work'
import { getCaseByRelatedDemoSlug, getCaseHref } from '@/data/cases'

type HowWeWorkSummaryProps = {
  /** 指定時は対応する活用イメージへ。未指定はハブへ */
  demoSlug?: string
  showEstimateLink?: boolean
  showCasesLink?: boolean
  className?: string
}

export function HowWeWorkSummary({
  demoSlug,
  showEstimateLink = true,
  showCasesLink = false,
  className = '',
}: HowWeWorkSummaryProps) {
  const relatedCase = demoSlug
    ? getCaseByRelatedDemoSlug(demoSlug)
    : undefined
  const detailHref = relatedCase
    ? getCaseHref(relatedCase.slug)
    : getHowWeWorkHref()

  return (
    <section
      className={`border-t border-[color-mix(in_srgb,var(--site-fg)_12%,transparent)] bg-[var(--site-bg)] py-14 md:py-16 ${className}`}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand/90">
          How we work
        </p>
        <h2 className="mb-2 text-2xl font-bold text-[var(--site-fg)] md:text-3xl">
          {HOW_WE_WORK_TITLE}
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-[var(--site-fg-muted)] md:text-base">
          {HOW_WE_WORK_LEAD}
        </p>

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
                <div className="min-w-0 flex-1 rounded-xl border border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-fg)_3%,transparent)] px-4 py-3">
                  <p className="font-semibold text-brand-deep">{item.title}</p>
                  <p className="mt-0.5 text-sm text-[var(--site-fg-muted)]">
                    {item.summary}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={detailHref}
            className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-bold text-[var(--df-on-primary)] transition-all hover:scale-[1.02] hover:bg-brand-hover active:scale-[0.98] sm:text-base"
          >
            {relatedCase
              ? '活用イメージで詳しく読む →'
              : '詳しく見る →'}
          </Link>
          {showEstimateLink && (
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--site-border)] bg-transparent px-6 py-3 text-sm font-bold text-[var(--site-fg)] transition-all hover:scale-[1.02] hover:border-brand/60 hover:text-brand-hover active:scale-[0.98] sm:text-base"
            >
              概算見積もり →
            </Link>
          )}
          {showCasesLink && (
            <Link
              href="/cases"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--site-border)] bg-transparent px-6 py-3 text-sm font-bold text-[var(--site-fg)] transition-all hover:scale-[1.02] hover:border-brand/60 hover:text-brand-hover active:scale-[0.98] sm:text-base"
            >
              活用イメージ一覧 →
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

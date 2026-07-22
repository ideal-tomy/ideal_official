import Link from 'next/link'
import {
  INTRODUCTION_FLOW_LEAD,
  INTRODUCTION_FLOW_STEPS,
  INTRODUCTION_FLOW_TITLE,
} from '@/data/introduction-flow'

type IntroductionFlowSectionProps = {
  /** 末尾の補助リンクを出すか（見積ページでは見積CTAを隠すなど） */
  showEstimateLink?: boolean
  showCasesLink?: boolean
  className?: string
}

export function IntroductionFlowSection({
  showEstimateLink = true,
  showCasesLink = false,
  className = '',
}: IntroductionFlowSectionProps) {
  return (
    <section
      className={`border-t border-[color-mix(in_srgb,var(--site-fg)_12%,transparent)] bg-[var(--site-bg)] py-14 md:py-16 ${className}`}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand/90">
          Next steps
        </p>
        <h2 className="mb-2 text-2xl font-bold text-[var(--site-fg)] md:text-3xl">
          {INTRODUCTION_FLOW_TITLE}
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-[var(--site-fg-muted)] md:text-base">
          {INTRODUCTION_FLOW_LEAD}
        </p>

        <ol className="space-y-4">
          {INTRODUCTION_FLOW_STEPS.map((item) => (
            <li
              key={item.step}
              className="flex gap-4 rounded-lg border border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-fg)_3%,transparent)] px-4 py-3 md:px-5 md:py-4"
            >
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15 text-sm font-semibold text-brand"
                aria-hidden
              >
                {item.step}
              </span>
              <div>
                <p className="font-semibold text-[var(--site-fg)]">{item.title}</p>
                <p className="mt-0.5 text-sm text-[var(--site-fg-muted)]">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {(showEstimateLink || showCasesLink) && (
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {showEstimateLink && (
              <Link
                href="/estimate"
                className="font-medium text-brand transition-colors hover:text-brand-hover"
              >
                概算見積もりを見る →
              </Link>
            )}
            {showCasesLink && (
              <Link
                href="/cases"
                className="font-medium text-[var(--site-fg-muted)] transition-colors hover:text-brand"
              >
                活用イメージを読む →
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

import Link from 'next/link'
import { getCaseHref, type CaseStudy } from '@/data/cases'

interface CaseCardProps {
  caseStudy: CaseStudy
}

/**
 * 活用イメージ一覧用の読み物行。
 * デモ画像・デモ Before/After は載せず、現場の痛みと詳細への導線に絞る。
 */
export function CaseCard({ caseStudy }: CaseCardProps) {
  const href = getCaseHref(caseStudy.slug)

  return (
    <Link
      href={href}
      className="group block border-b border-[var(--site-border)] py-5 transition-colors last:border-b-0 hover:bg-[color-mix(in_srgb,var(--site-fg)_3%,transparent)] sm:py-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0 flex-1">
          <p className="mb-1.5 text-xs font-medium tracking-wide text-[var(--site-fg-muted)]">
            {caseStudy.subtitle}
          </p>
          <h3 className="mb-2 text-lg font-bold leading-snug text-[var(--site-fg)] transition-colors group-hover:text-brand md:text-xl">
            {caseStudy.title}
          </h3>
          <p className="text-sm leading-relaxed text-[var(--site-fg-muted)]">
            {caseStudy.pain.headline}
          </p>
        </div>
        <span className="shrink-0 self-start text-sm font-medium text-brand transition-colors group-hover:text-brand-hover sm:pt-1">
          活用詳細を読む →
        </span>
      </div>
    </Link>
  )
}

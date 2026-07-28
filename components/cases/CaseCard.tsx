import Link from 'next/link'
import { getCaseHref, type CaseStudy } from '@/data/cases'

interface CaseCardProps {
  caseStudy: CaseStudy
}

/** 「業種 × 課題」形式なら課題側だけ返す（業種見出しとの重複を避ける） */
function topicFromSubtitle(subtitle: string): string {
  const parts = subtitle.split(/\s*×\s*/)
  if (parts.length >= 2) {
    return parts.slice(1).join(' × ').trim()
  }
  return subtitle
}

/**
 * 活用イメージ一覧用の読み物行。
 * デモ画像・デモ Before/After は載せず、現場の痛みと詳細への導線に絞る。
 */
export function CaseCard({ caseStudy }: CaseCardProps) {
  const href = getCaseHref(caseStudy.slug)
  const topic = topicFromSubtitle(caseStudy.subtitle)

  return (
    <Link
      href={href}
      className="group block border-b border-[var(--site-border)] pt-5 pb-8 transition-colors last:border-b-0 hover:bg-[color-mix(in_srgb,var(--site-fg)_3%,transparent)] sm:pt-6 sm:pb-9"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0 flex-1">
          <p className="mb-1.5 text-xs font-medium tracking-wide text-[var(--site-fg-muted)]">
            {topic}
          </p>
          <h3 className="text-lg font-bold leading-snug text-[var(--site-fg)] transition-colors group-hover:text-brand md:text-xl">
            {caseStudy.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--site-fg-muted)]">
            {caseStudy.pain.headline}
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-[var(--site-fg-muted)] transition-colors group-hover:text-brand sm:hidden">
            活用詳細を読む →
          </span>
        </div>
        <span className="hidden shrink-0 self-start text-sm font-medium text-[var(--site-fg-muted)] transition-colors group-hover:text-brand sm:inline sm:pt-1">
          活用詳細を読む →
        </span>
      </div>
    </Link>
  )
}

import Link from 'next/link'
import { ThemeImage } from '@/components/ui/ThemeImage'
import { getCaseHref, type CaseStudy } from '@/data/cases'
import { getCapabilityBySlug } from '@/data/ai-capability-gallery/capabilities'

interface CaseCardProps {
  caseStudy: CaseStudy
}

/** 一覧カード用に lead を先頭2文相当へ切り詰める */
function truncateLead(lead: string, maxChars = 120): string {
  const normalized = lead.replace(/\s+/g, ' ').trim()
  if (normalized.length <= maxChars) return normalized

  const sentenceEnd = normalized.search(/[。！？]/)
  if (sentenceEnd > 40 && sentenceEnd < maxChars) {
    return normalized.slice(0, sentenceEnd + 1)
  }

  const sliced = normalized.slice(0, maxChars)
  const lastSpace = sliced.lastIndexOf(' ')
  const cut = lastSpace > 60 ? sliced.slice(0, lastSpace) : sliced
  return `${cut}…`
}

/**
 * 目的／置き換えカード（エディトリアル・画像あり）
 * 機能選択の CapabilityCard と対になる「読む」視覚言語
 */
export function CaseCard({ caseStudy }: CaseCardProps) {
  const demo = getCapabilityBySlug(caseStudy.relatedDemo.slug)
  const href = getCaseHref(caseStudy.slug)
  const teaser = truncateLead(caseStudy.lead)

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] transition-colors hover:border-brand/40"
    >
      {demo && (
        <div className="relative aspect-[16/9] shrink-0 overflow-hidden sm:aspect-[21/9]">
          <ThemeImage
            src={demo.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg-elevated)] via-[var(--site-bg-elevated)]/20 to-transparent"
            aria-hidden="true"
          />
          <p className="absolute bottom-3 left-4 rounded bg-[var(--site-bg)]/85 px-2.5 py-1 text-[11px] font-bold tracking-[0.14em] text-brand backdrop-blur-sm">
            {caseStudy.industryLabel}
          </p>
        </div>
      )}

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
        {!demo && (
          <p className="mb-2 text-xs font-bold tracking-[0.16em] text-brand/90">
            {caseStudy.industryLabel}
          </p>
        )}
        <p className="mb-2 text-xs font-medium text-[var(--site-fg-muted)]">
          {caseStudy.subtitle}
        </p>
        <h2 className="mb-3 text-xl font-bold leading-snug text-[var(--site-fg)] transition-colors group-hover:text-brand md:text-2xl">
          {caseStudy.title}
        </h2>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--site-fg-muted)]">
          {teaser}
        </p>
        {demo && (
          <p className="mb-4 text-xs leading-relaxed text-[var(--site-fg-muted)]">
            <span className="text-[var(--site-fg)]/80">{demo.before}</span>
            <span className="mx-1.5 font-bold text-brand">→</span>
            <span className="text-[var(--site-fg)]/80">{demo.after}</span>
          </p>
        )}
        <span className="text-sm font-medium text-brand transition-colors group-hover:text-brand-hover">
          読む →
        </span>
      </div>
    </Link>
  )
}

import Link from 'next/link'
import {
  buildDetailHref,
  getSolutionLinksForSection,
  type PhilosophySectionId,
} from '../../data/philosophy/solution-links'

interface PhilosophySolutionLinkProps {
  sectionId: PhilosophySectionId
  className?: string
}

/**
 * Philosophy セクション末尾 — 技術デモへの解決案カード
 */
export function PhilosophySolutionLink({
  sectionId,
  className = '',
}: PhilosophySolutionLinkProps) {
  const links = getSolutionLinksForSection(sectionId)

  if (links.length === 0) return null

  return (
    <div className={`mt-10 lg:mt-14 space-y-4 max-w-3xl ${className}`}>
      {links.map((link) => (
        <div
          key={`${link.philosophySectionId}-${link.detailSlug}`}
          className="rounded-xl border border-brand/20 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-5 sm:p-6"
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand/80 mb-2">
            解決案 · Proposal Demo
          </p>
          <h4 className="text-lg font-semibold text-white mb-2">{link.title}</h4>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            {link.description}
          </p>
          <Link
            href={buildDetailHref(link.detailSlug, link.philosophySectionId)}
            className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-hover transition-colors duration-200"
          >
            {link.ctaLabel ??
              (link.status === 'planned' ? '概要を見る（準備中）' : '解決案を見る')}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      ))}
    </div>
  )
}

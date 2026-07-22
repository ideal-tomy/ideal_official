import Image from 'next/image'
import Link from 'next/link'
import { getCaseHref, type CaseStudy } from '@/data/cases'
import { getCapabilityBySlug } from '@/data/ai-capability-gallery/capabilities'

interface CaseCardProps {
  caseStudy: CaseStudy
}

/** 一覧カード用に lead を先頭2文相当へ切り詰める */
function truncateLead(lead: string, maxChars = 110): string {
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

export function CaseCard({ caseStudy }: CaseCardProps) {
  const demo = getCapabilityBySlug(caseStudy.relatedDemo.slug)
  const href = getCaseHref(caseStudy.slug)
  const teaser = truncateLead(caseStudy.lead)

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/40 transition-colors hover:border-brand/30 sm:flex-row"
    >
      {demo && (
        <div className="relative aspect-[16/10] shrink-0 sm:aspect-auto sm:min-h-[160px] sm:w-56 md:w-64">
          <Image
            src={demo.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 256px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-gray-950/40 sm:block"
            aria-hidden="true"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="mb-2 text-xs tracking-[0.16em] text-brand/90">
          {caseStudy.industryLabel}
        </p>
        <h2 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-brand-hover">
          {caseStudy.title}
        </h2>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
          {teaser}
        </p>
        <span className="text-sm font-medium text-brand transition-colors group-hover:text-brand-hover">
          読む →
        </span>
      </div>
    </Link>
  )
}

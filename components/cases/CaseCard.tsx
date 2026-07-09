import Image from 'next/image'
import Link from 'next/link'
import { getCaseHref, type CaseStudy } from '@/data/cases'
import { getCapabilityBySlug } from '@/data/ai-capability-gallery/capabilities'

interface CaseCardProps {
  caseStudy: CaseStudy
}

export function CaseCard({ caseStudy }: CaseCardProps) {
  const demo = getCapabilityBySlug(caseStudy.relatedDemo.slug)
  const href = getCaseHref(caseStudy.slug)

  return (
    <Link
      href={href}
      className="group flex flex-col sm:flex-row overflow-hidden rounded-xl border border-gray-800 bg-gray-900/40 hover:border-blue-400/30 transition-colors"
    >
      {demo && (
        <div className="relative sm:w-56 md:w-64 shrink-0 aspect-[16/10] sm:aspect-auto sm:min-h-[160px]">
          <Image
            src={demo.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 256px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950/40 hidden sm:block"
            aria-hidden="true"
          />
        </div>
      )}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <p className="text-xs tracking-[0.16em] text-cyan-400/90 mb-2">
          {caseStudy.industryLabel}
        </p>
        <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors">
          {caseStudy.title}
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
          {caseStudy.lead}
        </p>
        <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
          読む →
        </span>
      </div>
    </Link>
  )
}

'use client'

import Link from 'next/link'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import { getTopDemoLpHref } from '@/lib/demo-lp/workflow-routes'
import { CapabilityShowcaseDemo, type CapabilityShowcaseSlug } from '@/components/ai-capability-gallery/showcases/CapabilityShowcaseDemo'

/** デモ枠の画像エリア左上に業種タグを重ねる */
function ShowcaseDemoWithTags({ capability }: { capability: Capability }) {
  return (
    <div className="relative">
      <div className="absolute left-2.5 top-[2.85rem] z-10 flex max-w-[calc(100%-1.25rem)] flex-wrap gap-1 sm:left-3.5 sm:top-[3.1rem] sm:gap-1.5">
        {capability.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm shadow-sm sm:px-2.5 sm:text-[11px]"
          >
            {tag}
          </span>
        ))}
      </div>
      <CapabilityShowcaseDemo slug={capability.slug as CapabilityShowcaseSlug} />
    </div>
  )
}

function ShowcaseText({
  capability,
  experienceCtaLabel,
  experienceHref,
}: {
  capability: Capability
  experienceCtaLabel: string
  experienceHref: string
}) {
  return (
    <div className="max-w-xl">
      <h2
        title={capability.title}
        className="mb-2 truncate text-lg font-bold leading-tight text-[var(--site-fg)] sm:mb-3 sm:text-2xl md:mb-6 md:whitespace-normal md:text-5xl md:leading-tight"
      >
        {capability.title}
      </h2>
      <p className="mb-3 text-sm leading-relaxed text-[var(--site-fg)]/85 line-clamp-2 md:mb-6 md:line-clamp-none md:text-lg">
        {capability.showcaseLead}
      </p>
      <div className="mb-4 hidden space-y-2 text-sm md:mb-8 md:block">
        <div className="flex gap-3">
          <span className="w-14 shrink-0 text-[var(--site-fg-muted)]">Before</span>
          <span className="text-[var(--site-fg)]/80">{capability.before}</span>
        </div>
        <div className="flex gap-3">
          <span className="w-14 shrink-0 font-semibold text-brand-deep">After</span>
          <span className="text-[var(--site-fg)]">{capability.after}</span>
        </div>
      </div>
      <Link
        href={experienceHref}
        className="inline-flex w-full items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-[var(--df-on-primary)] transition-colors hover:bg-brand-hover sm:w-auto md:px-5 md:py-3"
      >
        {experienceCtaLabel}
      </Link>
    </div>
  )
}

type CapabilityPatternShowcaseProps = {
  capabilities: Capability[]
  experienceCtaLabel?: string
  /** TOP §03 等: pattern slug → LP href。未指定時は capability.href */
  resolveExperienceHref?: (slug: string) => string | null
  /** top = トップ統合セクション内。gallery は旧互換用 */
  variant?: 'top' | 'gallery'
}

export function CapabilityPatternShowcase({
  capabilities: sections,
  experienceCtaLabel = '触ってみる →',
  resolveExperienceHref,
  variant = 'gallery',
}: CapabilityPatternShowcaseProps) {
  const isTop = variant === 'top'
  const sectionPadding = isTop
    ? 'space-y-4 py-2 sm:space-y-8 md:space-y-10'
    : 'space-y-4 py-6 sm:px-6 md:space-y-10 md:py-14 lg:px-8 lg:py-16'

  const resolveHref = (slug: string, fallback: string) => {
    if (resolveExperienceHref) {
      return resolveExperienceHref(slug) ?? fallback
    }
    if (isTop) {
      return getTopDemoLpHref(slug) ?? fallback
    }
    return fallback
  }

  return (
    <div className={isTop ? '' : 'bg-[var(--site-bg)]'}>
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${sectionPadding}`}
      >
        {sections.map((capability, index) => {
          const reverse = index % 2 === 1

          return (
            <article
              key={capability.id}
              id={`capability-${capability.slug}`}
              className={`scroll-mt-[13.5rem] rounded-2xl border border-[var(--site-border)] p-3 sm:rounded-[28px] sm:p-6 md:scroll-mt-[16rem] md:p-8 lg:scroll-mt-[18rem] lg:p-10 ${
                isTop ? 'bg-[var(--df-bg)]' : 'bg-[var(--site-bg-elevated)]'
              }`}
            >
              <div className="grid items-center gap-4 sm:gap-8 lg:grid-cols-2 lg:gap-10">
                <div className={reverse ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                  <ShowcaseText
                    capability={capability}
                    experienceCtaLabel={experienceCtaLabel}
                    experienceHref={resolveHref(capability.slug, capability.href)}
                  />
                </div>
                <div className={reverse ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                  <ShowcaseDemoWithTags capability={capability} />
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

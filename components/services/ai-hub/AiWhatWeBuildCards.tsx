'use client'

import {
  CapabilityShowcaseDemo,
  type CapabilityShowcaseSlug,
} from '@/components/ai-capability-gallery/showcases/CapabilityShowcaseDemo'
import { useInViewAutoPlay } from '@/components/ai-capability-gallery/hooks/useInViewAutoPlay'
import type { AiWhatWeBuildItem } from '@/data/services/ai-hub'

function CompactShowcasePreview({
  slug,
  imageAlt,
}: {
  slug: CapabilityShowcaseSlug
  imageAlt: string
}) {
  const { ref, isInView } = useInViewAutoPlay()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--site-border)] bg-[#F4F5F7]"
      role="img"
      aria-label={imageAlt}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 w-[640px] origin-top -translate-x-1/2 scale-[0.46] sm:scale-[0.5]">
        <CapabilityShowcaseDemo slug={slug} playWhen={isInView} />
      </div>
    </div>
  )
}

type AiWhatWeBuildCardsProps = {
  items: readonly AiWhatWeBuildItem[]
}

export function AiWhatWeBuildCards({ items }: AiWhatWeBuildCardsProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] shadow-[var(--service-card-shadow)] transition-transform hover:-translate-y-0.5"
        >
          <CompactShowcasePreview slug={item.showcaseSlug} imageAlt={item.imageAlt} />
          <div className="flex flex-1 flex-col p-5 md:p-6">
            <h3 className="text-lg font-semibold text-[var(--site-fg)]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--site-fg-muted)]">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

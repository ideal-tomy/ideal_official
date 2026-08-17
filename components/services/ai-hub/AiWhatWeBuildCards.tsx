'use client'

import {
  CapabilityShowcaseDemo,
  type CapabilityShowcaseSlug,
} from '@/components/ai-capability-gallery/showcases/CapabilityShowcaseDemo'
import { useInViewAutoPlay } from '@/components/ai-capability-gallery/hooks/useInViewAutoPlay'
import { WhatWeBuildEditorial } from '@/components/services/WhatWeBuildEditorial'
import type { AiWhatWeBuildItem } from '@/data/services/ai-hub'

function ShowcasePreview({
  slug,
  imageAlt,
  compact = false,
}: {
  slug: CapabilityShowcaseSlug
  imageAlt: string
  compact?: boolean
}) {
  const { ref, isInView } = useInViewAutoPlay()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative w-full overflow-hidden bg-[#F4F5F7] ${
        compact ? 'aspect-[16/11]' : 'aspect-[16/10]'
      }`}
      role="img"
      aria-label={imageAlt}
    >
      <div
        className={`pointer-events-none absolute left-1/2 top-0 w-[640px] origin-top -translate-x-1/2 ${
          compact ? 'scale-[0.28] sm:scale-[0.32]' : 'scale-[0.52] sm:scale-[0.56]'
        }`}
      >
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
    <WhatWeBuildEditorial
      items={items.map((item, index) => ({
        title: item.title,
        description: item.description,
        media: (
          <ShowcasePreview
            slug={item.showcaseSlug}
            imageAlt={item.imageAlt}
            compact={index > 0}
          />
        ),
      }))}
    />
  )
}

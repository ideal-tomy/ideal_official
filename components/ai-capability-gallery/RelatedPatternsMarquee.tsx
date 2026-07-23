'use client'

import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import { CapabilityCard } from './CapabilityCard'

type Props = {
  items: Capability[]
  /** 省略時「他のパターン」。空文字で見出しなし */
  title?: string
}

/**
 * 画像付きパターンカードのマーキー。
 */
export function RelatedPatternsMarquee({
  items,
  title = '他のパターン',
}: Props) {
  const ready = items.filter((c) => c.status === 'ready')
  if (ready.length === 0) return null

  const cards = [...ready, ...ready]

  return (
    <div>
      {title ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
          {title}
        </p>
      ) : null}
      <div
        className="related-marquee overflow-hidden"
        aria-label={title || 'デモパターン'}
      >
        <div className="related-marquee-track flex w-max gap-3 py-1">
          {cards.map((cap, i) => (
            <div
              key={`${cap.slug}-${i}`}
              className="w-[188px] shrink-0 sm:w-[200px]"
            >
              <CapabilityCard capability={cap} size="compact" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

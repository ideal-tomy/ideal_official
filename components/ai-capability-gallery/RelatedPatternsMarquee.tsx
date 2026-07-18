'use client'

import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import { CapabilityCard } from './CapabilityCard'

type Props = {
  items: Capability[]
}

/**
 * 他デモへの誘導マーキー。
 * 一覧と同じカードを縮小（〜176px、スマホ幅で約2枚見える）して流す。
 */
export function RelatedPatternsMarquee({ items }: Props) {
  const ready = items.filter((c) => c.status === 'ready')
  if (ready.length === 0) return null

  const cards = [...ready, ...ready]

  return (
    <div>
      <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--site-fg-muted)]">
        他のパターン
      </p>
      <div
        className="related-marquee overflow-hidden"
        aria-label="他のデモパターン"
      >
        <div className="related-marquee-track flex w-max gap-3 py-1">
          {cards.map((cap, i) => (
            <div
              key={`${cap.slug}-${i}`}
              className="w-[168px] shrink-0 sm:w-[176px]"
            >
              <CapabilityCard capability={cap} size="compact" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

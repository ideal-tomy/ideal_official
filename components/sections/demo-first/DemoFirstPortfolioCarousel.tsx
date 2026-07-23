'use client'

import { useRef } from 'react'
import Link from 'next/link'
import type { PortfolioDemo } from '@/data/demo-first/portfolio'

type Props = {
  items: PortfolioDemo[]
}

/** 機能選択向けカルーセル（画像なし・タグとCTA中心） */
export function DemoFirstPortfolioCarousel({ items }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-portfolio-card]')
    const delta = card ? card.offsetWidth + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: direction * delta, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--df-primary)]/45 bg-[var(--df-bg)] text-lg font-bold text-[var(--df-text)] transition-colors hover:border-[var(--df-primary)] hover:bg-[var(--df-primary)]/15"
          aria-label="前のデモへ"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--df-primary)]/45 bg-[var(--df-bg)] text-lg font-bold text-[var(--df-text)] transition-colors hover:border-[var(--df-primary)] hover:bg-[var(--df-primary)]/15"
          aria-label="次のデモへ"
        >
          →
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="df-portfolio-scroller flex gap-3 overflow-x-auto pb-2"
      >
        {items.map((item) => (
          <article
            key={item.id}
            data-portfolio-card
            className="df-portfolio-card flex w-[min(78vw,280px)] shrink-0 snap-start flex-col rounded-[var(--df-radius-card)] border border-[color-mix(in_srgb,var(--df-primary)_20%,transparent)] bg-[var(--df-bg)] px-4 py-4"
          >
            <div className="mb-3 flex flex-wrap gap-1.5">
              {item.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--df-primary)]/45 bg-[var(--df-primary)]/10 px-2.5 py-0.5 text-[11px] font-bold text-[var(--df-primary-deep)]"
                >
                  {tag}
                </span>
              ))}
              {item.status === 'coming_soon' && (
                <span className="rounded-full border border-[var(--site-border)] px-2 py-0.5 text-[10px] text-[var(--df-text-muted)]">
                  準備中
                </span>
              )}
            </div>
            <h3 className="mb-2 text-[16px] font-black leading-snug text-[var(--df-text)]">
              {item.title}
            </h3>
            <p className="mb-4 flex-1 text-[13px] leading-relaxed text-[var(--df-text-muted)]">
              {item.lead}
            </p>

            <div className="mt-auto space-y-2 border-t border-[var(--site-border)] pt-3">
              {item.sampleHref && (
                <Link
                  href={item.sampleHref}
                  className="flex w-full items-center justify-center rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-3 py-2.5 text-sm font-bold text-[var(--df-on-primary)] transition-colors hover:bg-[var(--df-primary-hover)]"
                >
                  体験する
                </Link>
              )}
              {item.externalDemoUrl && (
                <a
                  href={item.externalDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-[var(--df-radius-btn)] border border-[var(--df-primary-deep)]/55 bg-transparent px-3 py-2.5 text-sm font-bold text-[var(--df-primary-deep)] transition-colors hover:bg-[var(--df-primary-deep)]/10"
                >
                  本格デモ ↗
                </a>
              )}
              {!item.sampleHref && !item.externalDemoUrl && (
                <span className="block text-center text-sm text-[var(--df-text-muted)]">
                  近日公開
                </span>
              )}
              {item.externalNote && (
                <p className="text-[11px] leading-relaxed text-[var(--df-text-muted)]">
                  {item.externalNote}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

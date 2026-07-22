'use client'

import { useRef } from 'react'
import Link from 'next/link'
import type { PortfolioDemo } from '@/data/demo-first/portfolio'

type Props = {
  items: PortfolioDemo[]
}

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
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-lg font-bold text-white transition-colors hover:bg-white/20"
          aria-label="前のデモへ"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-lg font-bold text-white transition-colors hover:bg-white/20"
          aria-label="次のデモへ"
        >
          →
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="df-portfolio-scroller flex gap-4 overflow-x-auto pb-2"
      >
        {items.map((item) => (
          <article
            key={item.id}
            data-portfolio-card
            className="df-portfolio-card flex w-[min(85vw,320px)] shrink-0 snap-start flex-col rounded-[var(--df-radius-card)] border border-white/35 bg-white/10 p-6 backdrop-blur-[2px]"
          >
            <div className="mb-3 flex flex-wrap gap-2">
              {item.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/80 px-3 py-0.5 text-xs font-bold text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mb-2 text-[17px] font-black leading-[1.6]">{item.title}</h3>
            <p className="mb-5 flex-1 text-[13.5px] leading-relaxed opacity-90">
              {item.lead}
            </p>

            <div className="mt-auto space-y-2 border-t border-white/25 pt-4">
              {item.sampleHref && (
                <Link
                  href={item.sampleHref}
                  className="flex w-full items-center justify-center rounded-[var(--df-radius-btn)] bg-white px-4 py-2.5 text-sm font-bold text-[var(--df-primary-deep)] transition-transform hover:-translate-y-0.5"
                >
                  サンプルで触る
                </Link>
              )}
              {item.externalDemoUrl && (
                <a
                  href={item.externalDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-[var(--df-radius-btn)] border border-white/70 bg-white/10 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/20"
                >
                  本格デモを開く ↗
                </a>
              )}
              {item.externalNote && (
                <p className="text-[11px] leading-relaxed text-white/75">
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

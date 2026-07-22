'use client'

import { useRef } from 'react'
import Image from 'next/image'
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--df-primary)]/45 bg-[var(--df-bg-card)] text-lg font-bold text-[var(--df-on-primary)] transition-colors hover:border-[var(--df-primary)] hover:bg-[var(--df-primary)]/15"
          aria-label="前のデモへ"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--df-primary)]/45 bg-[var(--df-bg-card)] text-lg font-bold text-[var(--df-on-primary)] transition-colors hover:border-[var(--df-primary)] hover:bg-[var(--df-primary)]/15"
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
            className="df-portfolio-card flex w-[min(85vw,320px)] shrink-0 snap-start flex-col overflow-hidden rounded-[var(--df-radius-card)] border border-[var(--site-border)] bg-[var(--df-bg-card)]"
          >
            <div className="relative aspect-[16/9] bg-[linear-gradient(160deg,var(--df-hero-2),var(--df-primary-hover))]">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 768px) 85vw, 320px"
                className="object-cover object-center opacity-90"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[var(--df-bg-card)] via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="mb-3 flex flex-wrap gap-2">
                {item.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--df-primary)]/50 bg-[var(--df-primary)]/10 px-3 py-0.5 text-xs font-bold text-[var(--df-primary-deep)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mb-2 text-[17px] font-black leading-[1.6] text-[var(--df-text)]">
                {item.title}
              </h3>
              <p className="mb-5 flex-1 text-[13.5px] leading-relaxed text-[var(--df-text-muted)]">
                {item.lead}
              </p>

              <div className="mt-auto space-y-2 border-t border-[var(--site-border)] pt-4">
                {item.sampleHref && (
                  <Link
                    href={item.sampleHref}
                    className="flex w-full items-center justify-center rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-4 py-2.5 text-sm font-bold text-[var(--df-on-primary)] transition-colors hover:bg-[var(--df-primary-hover)]"
                  >
                    サンプルで触る
                  </Link>
                )}
                {item.externalDemoUrl && (
                  <a
                    href={item.externalDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-[var(--df-radius-btn)] border border-[var(--df-primary-deep)]/55 bg-transparent px-4 py-2.5 text-sm font-bold text-[var(--df-primary-deep)] transition-colors hover:bg-[var(--df-primary-deep)]/10"
                  >
                    本格デモを開く ↗
                  </a>
                )}
                {item.externalNote && (
                  <p className="text-[11px] leading-relaxed text-[var(--df-text-muted)]">
                    {item.externalNote}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

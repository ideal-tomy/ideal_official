'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { CapabilityCard } from './CapabilityCard'

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M12.5 4.5 7 10l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M7.5 4.5 13 10l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * 7パターンの横スクロール目次。
 * sticky で Showcase 閲覧中もすぐ他パターンへ。PC は矢印で移動。
 */
export function CapabilityCardGrid() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  const [pageLabel, setPageLabel] = useState('1 / 7')

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return

    const { scrollLeft, scrollWidth, clientWidth } = el
    const maxScroll = scrollWidth - clientWidth
    setCanPrev(scrollLeft > 4)
    setCanNext(scrollLeft < maxScroll - 4)

    const card = el.querySelector<HTMLElement>('[data-toc-card]')
    const cardPitch = card ? card.offsetWidth + 12 : clientWidth * 0.4
    const index = Math.min(
      capabilities.length,
      Math.max(1, Math.round(scrollLeft / cardPitch) + 1),
    )
    setPageLabel(`${index} / ${capabilities.length}`)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    const ro = new ResizeObserver(updateScrollState)
    ro.observe(el)
    window.addEventListener('resize', updateScrollState)

    return () => {
      el.removeEventListener('scroll', updateScrollState)
      ro.disconnect()
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const scrollByCards = (dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-toc-card]')
    const delta = card ? (card.offsetWidth + 12) * dir : el.clientWidth * 0.7 * dir
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section id="capabilities" className="bg-[var(--site-bg)]">
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 md:pt-8 lg:px-8 lg:pt-10">
        <header className="mb-3 flex items-end justify-between gap-3 md:mb-4">
          <h2 className="text-lg font-bold text-[var(--site-fg)] md:text-xl lg:text-2xl">
            7つの業務変化パターン
          </h2>
          <p className="hidden text-xs tabular-nums text-[var(--site-fg-muted)] md:block">
            {pageLabel}
          </p>
        </header>
      </div>

      {/* sticky 目次バー（ヘッダ下に固定） */}
      <div className="sticky top-16 z-30 border-b border-[var(--site-border)] bg-[var(--site-bg)]/95 py-2.5 backdrop-blur-md lg:top-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* PC 矢印 */}
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            disabled={!canPrev}
            aria-label="前のパターンへ"
            className="absolute left-1 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--site-border)] bg-[var(--site-bg-elevated)] text-[var(--site-fg)] shadow-md transition-opacity hover:border-[var(--df-primary)]/50 disabled:pointer-events-none disabled:opacity-0 md:left-2 md:flex lg:left-3"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            disabled={!canNext}
            aria-label="次のパターンへ"
            className="absolute right-1 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--site-border)] bg-[var(--site-bg-elevated)] text-[var(--site-fg)] shadow-md transition-opacity hover:border-[var(--df-primary)]/50 disabled:pointer-events-none disabled:opacity-0 md:right-2 md:flex lg:right-3"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:px-10 lg:px-12 [&::-webkit-scrollbar]:hidden"
            aria-label="業務変化パターン一覧"
          >
            {capabilities.map((capability) => (
              <div
                key={capability.id}
                data-toc-card
                className="w-[10.5rem] shrink-0 snap-start sm:w-[12rem] md:w-[13.5rem]"
              >
                <CapabilityCard
                  capability={capability}
                  size="compact"
                  hideTitle
                  href={
                    capability.status === 'ready'
                      ? `#capability-${capability.slug}`
                      : undefined
                  }
                />
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[var(--site-bg)] to-transparent md:right-10 md:w-12 lg:right-12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-[var(--site-bg)] to-transparent md:left-10 md:block md:w-12 lg:left-12"
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}

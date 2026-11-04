'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, type CSSProperties, type RefObject } from 'react'
import {
  demoIntroHref,
  type TopFeaturedDemo,
} from '@/data/demo-first/top-featured-demos'
import { DemoCardMotion } from './DemoCardMotion'

/** 重なったときに前のカードの上端が残るよう、隣り合うカードの青を変える */
const CARD_TONES = [
  'linear-gradient(150deg, #1f5ac4 0%, #2b6fe0 55%, #5b8fe8 100%)',
  'linear-gradient(150deg, #173f8f 0%, #2a5bc8 55%, #4f7fe0 100%)',
  'linear-gradient(150deg, #1d6fa8 0%, #2e8fcb 55%, #5fb0dd 100%)',
  'linear-gradient(150deg, #23346f 0%, #3a4fa8 55%, #5d6fcf 100%)',
  'linear-gradient(150deg, #155f99 0%, #1f7abf 55%, #3399cc 100%)',
  'linear-gradient(150deg, #2f3f86 0%, #5d5f97 55%, #7f84c4 100%)',
  'linear-gradient(150deg, #143a73 0%, #1f5ac4 55%, #2e8fcb 100%)',
  'linear-gradient(150deg, #1a4c9e 0%, #3a74d6 55%, #7fb2e8 100%)',
]

const STACK_STEP = 9
const STACK_GAP_BELOW_HEADER = 12

function stickyHeaderHeight(): number {
  for (const header of Array.from(document.querySelectorAll('header'))) {
    const { position, display } = window.getComputedStyle(header)
    if (display !== 'none' && (position === 'sticky' || position === 'fixed')) {
      return header.getBoundingClientRect().height
    }
  }
  return 0
}

function useStackedCards(listRef: RefObject<HTMLOListElement | null>) {
  useEffect(() => {
    const list = listRef.current
    if (!list) return

    const mobile = window.matchMedia('(max-width: 767px)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const cards = Array.from(list.querySelectorAll<HTMLElement>('[data-stack-card]'))
    let frame = 0

    const paint = (card: HTMLElement, progress: number) => {
      card.style.transform =
        progress > 0
          ? `translate3d(0, ${(-7 * progress).toFixed(1)}px, 0) scale(${(1 - 0.07 * progress).toFixed(3)})`
          : ''
      const dim = card.querySelector<HTMLElement>('[data-stack-dim]')
      if (dim) dim.style.opacity = progress > 0 ? (0.45 * progress).toFixed(3) : ''
    }

    const update = () => {
      frame = 0
      const top = Math.round(stickyHeaderHeight() + STACK_GAP_BELOW_HEADER)
      list.style.setProperty('--df-stack-top', `${top}px`)
      const animate = mobile.matches && !reduce.matches

      cards.forEach((card, index) => {
        const next = cards[index + 1]
        if (!animate || !next) {
          paint(card, 0)
          return
        }
        const pin = top + index * STACK_STEP
        const start = pin + card.offsetHeight
        const end = pin + 30
        const progress = (start - next.getBoundingClientRect().top) / (start - end)
        paint(card, Math.min(1, Math.max(0, progress)))
      })
    }

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    const reveal = (card: Element) => {
      if (card instanceof HTMLElement) card.dataset.in = 'true'
    }
    let observer: IntersectionObserver | null = null
    if (reduce.matches || !('IntersectionObserver' in window)) {
      cards.forEach(reveal)
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            reveal(entry.target)
            observer?.unobserve(entry.target)
          })
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
      )
      cards.forEach((card) => observer?.observe(card))
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    mobile.addEventListener('change', schedule)
    reduce.addEventListener('change', schedule)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      observer?.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      mobile.removeEventListener('change', schedule)
      reduce.removeEventListener('change', schedule)
      cards.forEach((card) => paint(card, 0))
    }
  }, [listRef])
}

type Props = {
  demos: TopFeaturedDemo[]
}

/** TOP §03 — 代表デモ8枚。スマホ幅ではスクロールでカードが重なる */
export function TopFeaturedDemoShowcase({ demos }: Props) {
  const listRef = useRef<HTMLOListElement>(null)
  useStackedCards(listRef)

  return (
    <ol
      ref={listRef}
      className="mx-auto w-[min(100%-32px,1080px)] pb-3 md:w-[min(100%-48px,1080px)] md:space-y-6 md:pb-0"
      style={{ '--df-stack-top': '69px' } as CSSProperties}
    >
      {demos.map((demo, index) => (
        <li
          key={demo.id}
          data-stack-card
          className="group sticky mt-4 origin-top will-change-transform first:mt-0 md:static md:mt-0"
          style={{ top: `calc(var(--df-stack-top) + ${index * STACK_STEP}px)` }}
        >
          <Link
            href={demoIntroHref(demo.id)}
            className="relative flex min-h-[300px] flex-col rounded-[26px] px-5 pt-9 pb-8 text-white shadow-[0_10px_28px_rgba(26,58,140,0.18)] ring-1 ring-white/15 ring-inset focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[var(--df-primary)] md:min-h-[320px] md:px-10 md:pt-12 md:pb-10"
            style={{ background: CARD_TONES[index % CARD_TONES.length] }}
          >
            <span
              data-stack-dim
              aria-hidden
              className="pointer-events-none absolute inset-0 z-[4] rounded-[26px] bg-[#0b1f4a] opacity-0"
            />
            <span
              aria-hidden
              className="absolute top-3.5 right-1 z-[2] w-[150px] opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.18,.85,.24,1)] [transform:translate3d(-40px,32px,0)_scale(.9)] group-data-[in=true]:opacity-100 group-data-[in=true]:[transform:rotate(-9deg)] motion-reduce:opacity-100 motion-reduce:transition-none motion-reduce:[transform:rotate(-9deg)] md:-top-6 md:right-10 md:w-[200px]"
            >
              <span className="block h-[236px] rounded-[20px] border border-white/25 bg-white p-1.5 shadow-[0_18px_40px_rgba(11,31,74,0.35)] md:h-[300px]">
                <span className="relative block h-full overflow-hidden rounded-[14px] bg-[#e8eef8]">
                  <Image
                    src={demo.cardImage}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 200px, 150px"
                    className="object-cover object-top"
                  />
                </span>
              </span>
            </span>
            <DemoCardMotion id={demo.id} />
            <span className="relative z-[3] text-xs font-bold tracking-wide text-white/90">
              {demo.category}
            </span>
            <h3 className="relative z-[3] mt-5 text-[26px] leading-[1.32] font-black tracking-[-0.02em] [text-shadow:0_2px_14px_rgba(11,31,74,0.35)] md:mt-6 md:text-[34px]">
              {demo.cardTitle.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h3>
            <span className="relative z-[3] mt-auto self-start rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-[var(--df-primary-hover)] shadow-[0_8px_22px_rgba(11,31,74,0.3)] transition-transform group-active:scale-[.97]">
              くわしく見る
            </span>
          </Link>
        </li>
      ))}
    </ol>
  )
}

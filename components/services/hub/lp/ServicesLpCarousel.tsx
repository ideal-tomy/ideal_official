'use client'

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { servicesLpAbout, type ServicesLpAboutCard } from '@/data/services/hub'
import { delay } from './ServicesLpParts'

const AUTOPLAY_MS = 2800

const cards: readonly ServicesLpAboutCard[] = servicesLpAbout.cards

const bar = (d: number, width: string) => ({ ...delay(d), '--w': width }) as CSSProperties

function Mini({ card }: { card: ServicesLpAboutCard }) {
  if (card.kind === 'rows') {
    return (
      <div className="svc-mini" aria-hidden>
        {card.rows.map((row) => (
          <span key={row.label} className={`svc-mini-row${row.hit ? ' svc-mini-hit' : ''}`}>
            {row.label}
            <em>{row.value}</em>
          </span>
        ))}
      </div>
    )
  }
  if (card.kind === 'web') {
    return (
      <div className="svc-mini svc-mini-web" aria-hidden>
        <i className="svc-mini-h" style={bar(0.1, '78%')} />
        <i style={bar(0.35, '100%')} />
        <i style={bar(0.55, '64%')} />
        <span className="svc-mini-cta">{card.cta}</span>
      </div>
    )
  }
  return (
    <div className="svc-mini svc-mini-chat" aria-hidden>
      <span className="svc-mini-q" style={delay(0.1)}>
        {card.question}
      </span>
      <span className="svc-mini-a" style={delay(0.5)}>
        {card.answer}
      </span>
      <span className="svc-mini-src" style={delay(0.9)}>
        {card.source}
      </span>
    </div>
  )
}

export function ServicesLpCarousel() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const visibleRef = useRef(false)
  const hoverRef = useRef(false)
  const scrollTimer = useRef<number | null>(null)

  const go = useCallback((next: number) => {
    const track = trackRef.current
    const target = (next + cards.length) % cards.length
    setIndex(target)
    const card = track?.children[target] as HTMLElement | undefined
    if (!track || !card) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior: reduce ? 'auto' : 'smooth',
    })
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry?.isIntersecting ?? false
    })
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      const track = trackRef.current
      if (
        !track ||
        !visibleRef.current ||
        hoverRef.current ||
        document.hidden ||
        track.contains(document.activeElement)
      ) {
        return
      }
      go(index + 1)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [go, index])

  /** 指で送ったときは、中央に来たカードを選ぶ */
  const onScroll = () => {
    if (scrollTimer.current) window.clearTimeout(scrollTimer.current)
    scrollTimer.current = window.setTimeout(() => {
      const track = trackRef.current
      if (!track) return
      const center = track.scrollLeft + track.clientWidth / 2
      let nearest = 0
      let best = Number.POSITIVE_INFINITY
      Array.from(track.children).forEach((child, i) => {
        const el = child as HTMLElement
        const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center)
        if (distance < best) {
          best = distance
          nearest = i
        }
      })
      setIndex(nearest)
    }, 140)
  }

  return (
    <>
      <div
        ref={trackRef}
        className="svc-carousel"
        aria-label="できること"
        onScroll={onScroll}
        onMouseEnter={() => {
          hoverRef.current = true
        }}
        onMouseLeave={() => {
          hoverRef.current = false
        }}
      >
        {cards.map((card, i) => (
          <article
            key={card.id}
            className="svc-member"
            data-active={i === index ? '' : undefined}
            aria-label={`${card.tag}：${card.foot}`}
          >
            <span className="svc-member__tag">{card.tag}</span>
            <Mini card={card} />
            <div className="svc-member__foot">
              <small>{card.footLabel}</small>
              <b>{card.foot}</b>
            </div>
          </article>
        ))}
      </div>
      <div className="svc-carousel-nav">
        <button type="button" onClick={() => go(index - 1)} aria-label="前のカード">
          ←
        </button>
        <div className="svc-dots">
          {cards.map((card, i) => (
            <button
              key={card.id}
              type="button"
              onClick={() => go(i)}
              aria-label={card.tag}
              aria-current={i === index ? 'true' : undefined}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(index + 1)} aria-label="次のカード">
          →
        </button>
      </div>
    </>
  )
}

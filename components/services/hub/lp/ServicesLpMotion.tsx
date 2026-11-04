'use client'

import { useEffect } from 'react'

/**
 * .svc-rv（見出しなど）と .svc-obs（画面の例）に、画面に入ったら is-in を付ける。
 * data-ready が付くまでは、隠さずにそのまま表示する。
 */
export function ServicesLpMotion({ rootId }: { rootId: string }) {
  useEffect(() => {
    const root = document.getElementById(rootId)
    if (!root) return

    const reveals = Array.from(root.querySelectorAll<HTMLElement>('.svc-rv'))
    const windows = Array.from(root.querySelectorAll<HTMLElement>('.svc-obs'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || !('IntersectionObserver' in window)) {
      ;[...reveals, ...windows].forEach((el) => el.classList.add('is-in'))
      root.setAttribute('data-ready', '')
      return
    }

    const isAbove = (el: HTMLElement) => el.getBoundingClientRect().bottom < 0
    ;[...reveals, ...windows].filter(isAbove).forEach((el) => el.classList.add('is-in'))
    root.setAttribute('data-ready', '')

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          revealObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -10% 0px' },
    )
    reveals.forEach((el) => revealObserver.observe(el))

    const windowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const enough =
            entry.intersectionRatio >= 0.45 ||
            entry.intersectionRect.height >= window.innerHeight * 0.5
          if (!entry.isIntersecting || !enough) return
          entry.target.classList.add('is-in')
          windowObserver.unobserve(entry.target)
        })
      },
      { threshold: [0, 0.15, 0.3, 0.45, 0.6] },
    )
    windows.forEach((el) => windowObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      windowObserver.disconnect()
    }
  }, [rootId])

  return null
}

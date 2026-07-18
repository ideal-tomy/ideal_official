'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'

/**
 * デモ実行開始時に結果エリアへスムーズスクロール（スマホ向け）。
 * reduced-motion 時は instant。
 */
export function useScrollDemoResult(active: boolean) {
  const resultRef = useRef<HTMLDivElement>(null)
  const prefersReduced = usePrefersReducedMotion()
  const prevActive = useRef(false)

  useEffect(() => {
    const rising = active && !prevActive.current
    prevActive.current = active
    if (!rising || !resultRef.current) return

    resultRef.current.scrollIntoView({
      behavior: prefersReduced ? 'auto' : 'smooth',
      block: 'nearest',
    })
  }, [active, prefersReduced])

  return resultRef
}

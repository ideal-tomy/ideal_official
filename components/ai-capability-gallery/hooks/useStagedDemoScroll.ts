'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'
import { scrollRailToAfter } from '@/components/ai-capability-gallery/demos/DemoBeforeAfterRail'

type Options = {
  /** After へ移る前のフォールバック遅延（完了イベントが無い場合） */
  fallbackDelayMs?: number
}

/**
 * 実行開始 → Before へ短いスクロール
 * 完了（または fallback）→ After（縦 scroll + 横 snap）
 */
export function useStagedDemoScroll(
  isProcessing: boolean,
  isComplete: boolean,
  options: Options = {},
) {
  const { fallbackDelayMs = 1200 } = options
  const beforeRef = useRef<HTMLDivElement>(null)
  const afterRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLDivElement>(null)
  const prefersReduced = usePrefersReducedMotion()
  const prevProcessing = useRef(false)
  const prevComplete = useRef(false)

  useEffect(() => {
    const started = isProcessing && !prevProcessing.current
    prevProcessing.current = isProcessing
    if (!started) return

    const behavior = prefersReduced ? 'auto' : 'smooth'
    beforeRef.current?.scrollIntoView({ behavior, block: 'nearest' })

    if (prefersReduced) return

    const t = window.setTimeout(() => {
      if (prevComplete.current) return
      afterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      scrollRailToAfter(railRef.current, afterRef.current, true)
    }, fallbackDelayMs)

    return () => window.clearTimeout(t)
  }, [isProcessing, prefersReduced, fallbackDelayMs])

  useEffect(() => {
    const completed = isComplete && !prevComplete.current
    prevComplete.current = isComplete
    if (!completed) return

    const behavior = prefersReduced ? 'auto' : 'smooth'
    afterRef.current?.scrollIntoView({ behavior, block: 'start' })
    scrollRailToAfter(railRef.current, afterRef.current, !prefersReduced)
  }, [isComplete, prefersReduced])

  return { beforeRef, afterRef, railRef }
}

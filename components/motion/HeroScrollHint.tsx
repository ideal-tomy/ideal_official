'use client'

import { motion } from 'framer-motion'
import { useEffect, useLayoutEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  getHeroRevealCompleteDelay,
  heroMotion,
  heroRevealItemCounts,
} from '@/lib/motion-tokens'
import { useRouteMotion } from '@/lib/route-motion-context'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'

interface HeroScrollHintProps {
  itemCount?: number
}

const revealEase = [0.45, 0, 0.55, 1] as const

export function HeroScrollHint({
  itemCount = heroRevealItemCounts.top,
}: HeroScrollHintProps) {
  const pathname = usePathname()
  const { phase, isInitialLoad } = useRouteMotion()
  const prefersReduced = usePrefersReducedMotion()
  const [visible, setVisible] = useState(false)

  useLayoutEffect(() => {
    setVisible(false)
  }, [pathname])

  useEffect(() => {
    if (prefersReduced) return
    // HeroReveal と揃えて enter 開始から計測（ready 待ちしない）
    if (phase !== 'entering' && phase !== 'ready') return

    const contentDelay = isInitialLoad
      ? heroMotion.initialContentDelay
      : heroMotion.contentDelay
    const delay = getHeroRevealCompleteDelay(itemCount, contentDelay) * 1000

    const timer = window.setTimeout(() => setVisible(true), delay)
    return () => window.clearTimeout(timer)
  }, [phase, pathname, itemCount, prefersReduced, isInitialLoad])

  if (prefersReduced) {
    return null
  }

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: revealEase }}
      aria-hidden
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7"
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}

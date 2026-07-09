'use client'

import { motion } from 'framer-motion'
import {
  Children,
  isValidElement,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from 'react'
import { usePathname } from 'next/navigation'
import { heroMotion, routeTransition } from '@/lib/motion-tokens'
import { useRouteMotion } from '@/lib/route-motion-context'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'

interface HeroRevealProps {
  children: ReactNode
  className?: string
}

const revealEase = routeTransition.curve

export function HeroReveal({ children, className = '' }: HeroRevealProps) {
  const pathname = usePathname()
  const { phase, isInitialLoad } = useRouteMotion()
  const prefersReduced = usePrefersReducedMotion()
  const [shouldReveal, setShouldReveal] = useState(false)

  useLayoutEffect(() => {
    setShouldReveal(false)
  }, [pathname])

  useEffect(() => {
    if (prefersReduced) {
      setShouldReveal(true)
      return
    }

    // ページ enter と並列開始（ready 待ちしない）
    if (phase !== 'entering' && phase !== 'ready') return

    const contentDelay = isInitialLoad
      ? heroMotion.initialContentDelay
      : heroMotion.contentDelay

    const timer = window.setTimeout(
      () => setShouldReveal(true),
      contentDelay * 1000,
    )

    return () => window.clearTimeout(timer)
  }, [phase, pathname, prefersReduced, isInitialLoad])

  const childArray = Children.toArray(children)

  return (
    <div className={className}>
      {childArray.map((child, index) => {
        if (!isValidElement(child)) return child

        if (prefersReduced) {
          return <div key={index}>{child}</div>
        }

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldReveal ? 1 : 0 }}
            transition={{
              duration: heroMotion.itemDuration,
              delay: shouldReveal ? index * heroMotion.staggerDelay : 0,
              ease: revealEase,
            }}
          >
            {child}
          </motion.div>
        )
      })}
    </div>
  )
}

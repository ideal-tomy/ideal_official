'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'

const MD_QUERY = '(min-width: 768px)'

/**
 * スマホのみ: スクロールに合わせて軽い rotateX。
 * PC・reduced-motion では見た目のみ素通し（ref は常に同一要素へ付ける）。
 */
export function MobileScrollTilt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(true)
  const [mounted, setMounted] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    setMounted(true)
    const media = window.matchMedia(MD_QUERY)
    const update = () => setIsDesktop(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const tiltEnabled = mounted && !isDesktop && !prefersReduced

  // target は常に同じ DOM ノードへ。条件分岐で ref を外すと hydration エラーになる。
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 0.65, 1],
    tiltEnabled ? [10, 0, 0, 0, -8] : [0, 0, 0, 0, 0],
  )
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    tiltEnabled ? [0.85, 1, 1, 0.9] : [1, 1, 1, 1],
  )

  return (
    <motion.div
      ref={ref}
      className="h-full will-change-transform"
      style={
        tiltEnabled
          ? {
              rotateX,
              opacity,
              transformPerspective: 900,
              transformStyle: 'preserve-3d',
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  )
}

'use client'

import { AnimatePresence, motion, type Transition } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  reducedMotion,
  routeMotion,
  type RouteMotionVariant,
} from '@/lib/motion-tokens'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'

interface PageTransitionProps {
  children: ReactNode
  variant: RouteMotionVariant
  routeKey: string
}

function ease(curve: readonly [number, number, number, number]) {
  return curve as Transition['ease']
}

function opacityOnlyVariants(
  enterDuration: number,
  exitDuration: number,
  fadeEnd: number,
  curve: Transition['ease'],
) {
  const opacityEnter = enterDuration * fadeEnd
  const opacityExit = exitDuration * fadeEnd

  return {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: opacityEnter, ease: curve },
    },
    exit: {
      opacity: 0,
      transition: { duration: opacityExit, ease: curve },
    },
  }
}

function pageVariants(variant: RouteMotionVariant, prefersReduced: boolean) {
  const config = routeMotion[variant]
  const enterDuration = prefersReduced
    ? reducedMotion.routeDuration
    : config.duration
  const exitDuration = prefersReduced
    ? reducedMotion.routeDuration
    : config.reverse
  const curve = ease(config.curve)

  if (variant === 'crossfade') {
    return {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { duration: enterDuration, ease: curve },
      },
      exit: {
        opacity: 0,
        transition: { duration: exitDuration, ease: curve },
      },
    }
  }

  if (variant === 'result' && config.scaleFrom != null) {
    const opacityEnter = enterDuration * config.fadeEnd
    const opacityExit = exitDuration * config.fadeEnd
    return {
      initial: { opacity: 0, scale: config.scaleFrom },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          opacity: { duration: opacityEnter, ease: curve },
          scale: { duration: enterDuration, ease: curve },
        },
      },
      exit: {
        opacity: 0,
        scale: config.scaleFrom,
        transition: {
          opacity: { duration: opacityExit, ease: curve },
          scale: { duration: exitDuration, ease: curve },
        },
      },
    }
  }

  // standard / modal: ページ全体はクロスフェードのみ（スライドなし）
  return opacityOnlyVariants(
    enterDuration,
    exitDuration,
    config.fadeEnd,
    curve,
  )
}

export function PageTransition({
  children,
  variant,
  routeKey,
}: PageTransitionProps) {
  const prefersReduced = usePrefersReducedMotion()
  const variants = pageVariants(variant, prefersReduced)

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={routeKey}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

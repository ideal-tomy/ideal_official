'use client'

import { AnimatePresence, motion, type Transition } from 'framer-motion'
import {
  useLayoutEffect,
  useRef,
  type ReactNode,
} from 'react'
import {
  reducedMotion,
  routeMotion,
  routeTransition,
  type RouteMotionVariant,
} from '@/lib/motion-tokens'
import { useRouteMotion } from '@/lib/route-motion-context'
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
  const curve = ease(config.curve)

  if (variant === 'crossfade') {
    const enterDuration = prefersReduced ? 0 : routeTransition.enterDuration
    const exitDuration = prefersReduced ? 0 : routeTransition.exitDuration
    const crossfadeCurve = ease(routeTransition.curve)

    return {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { duration: enterDuration, ease: crossfadeCurve },
      },
      exit: {
        opacity: 0,
        transition: { duration: exitDuration, ease: crossfadeCurve },
      },
    }
  }

  const enterDuration = prefersReduced
    ? reducedMotion.routeDuration
    : config.duration
  const exitDuration = prefersReduced
    ? reducedMotion.routeDuration
    : config.reverse

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
  const { setPhase, setIsInitialLoad } = useRouteMotion()
  const variants = pageVariants(variant, prefersReduced)
  const prevRouteKey = useRef(routeKey)
  const isFirstMount = useRef(true)

  useLayoutEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false
      setPhase('ready')
      return
    }

    if (prevRouteKey.current !== routeKey) {
      prevRouteKey.current = routeKey
      setIsInitialLoad(false)
      // popLayout では新ページが即 mount されるため、
      // HeroReveal が並列開始できるよう entering を先に立てる
      setPhase('entering')
    }
  }, [routeKey, setPhase, setIsInitialLoad])

  const handleAnimationComplete = (definition: string) => {
    if (definition !== 'animate') return
    setPhase('ready')
  }

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.div
        key={routeKey}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        onAnimationComplete={handleAnimationComplete}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

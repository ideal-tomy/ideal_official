'use client'

import { motion } from 'framer-motion'
import { Children, type ReactNode } from 'react'
import { popupMotion } from '@/lib/motion-tokens'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'

interface StaggerRevealProps {
  children: ReactNode
  play?: boolean
  baseDelay?: number
  itemDuration?: number
  className?: string
}

const hidden = { opacity: 0, y: '2%' }
const visible = { opacity: 1, y: 0 }

function getItemVariants(itemDuration: number) {
  return {
    hidden,
    visible: {
      ...visible,
      transition: {
        duration: itemDuration,
        ease: [0.33, 1, 0.68, 1] as const,
      },
    },
  }
}

export function StaggerReveal({
  children,
  play = true,
  baseDelay = popupMotion.staggerDelay,
  itemDuration = popupMotion.itemDuration,
  className = '',
}: StaggerRevealProps) {
  const prefersReduced = usePrefersReducedMotion()
  const filtered = Children.toArray(children).filter(Boolean)

  if (filtered.length === 0) {
    return null
  }

  if (prefersReduced) {
    return (
      <div className={className}>
        {filtered.map((child, i) => (
          <motion.div key={i}>{child}</motion.div>
        ))}
      </div>
    )
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: baseDelay,
        delayChildren: 0,
      },
    },
  }

  const items = filtered.map((child, i) => (
    <motion.div key={i} variants={getItemVariants(itemDuration)}>
      {child}
    </motion.div>
  ))

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={play ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {items}
    </motion.div>
  )
}

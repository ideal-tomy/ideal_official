'use client'

import { Dialog } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Fragment, useEffect, useState, type ReactNode } from 'react'
import { popupMotion } from '@/lib/motion-tokens'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'
import { zIndex } from '@/lib/design-tokens'
import { StaggerReveal } from './StaggerReveal'

interface PremiumDialogProps {
  open: boolean
  onClose: () => void
  title?: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  panelClassName?: string
  mobileBottomSheet?: boolean
  zIndexClass?: string
}

export function PremiumDialog({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
  panelClassName = '',
  mobileBottomSheet = false,
  zIndexClass = zIndex.modal,
}: PremiumDialogProps) {
  const prefersReduced = usePrefersReducedMotion()
  const [showContent, setShowContent] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  const backdropDuration = prefersReduced ? 0.15 : popupMotion.backdrop
  const contentDelayMs = prefersReduced
    ? 0
    : popupMotion.contentDelay * 1000
  const exitDuration = prefersReduced ? 0.15 : popupMotion.exit

  useEffect(() => {
    if (!open) {
      setShowContent(false)
      setIsExiting(false)
      return
    }

    const timer = window.setTimeout(() => setShowContent(true), contentDelayMs)
    return () => {
      window.clearTimeout(timer)
    }
  }, [open, contentDelayMs])

  const handleClose = () => {
    if (isExiting) return
    setIsExiting(true)
    // 中身だけ先に隠さず、パネル全体の opacity で一緒に消す
    window.setTimeout(() => {
      setIsExiting(false)
      onClose()
    }, exitDuration * 1000)
  }

  const staggerItems: ReactNode[] = []
  if (title) staggerItems.push(<Fragment key="title">{title}</Fragment>)
  if (subtitle) staggerItems.push(<Fragment key="subtitle">{subtitle}</Fragment>)
  if (children) staggerItems.push(<Fragment key="body">{children}</Fragment>)
  if (footer) staggerItems.push(<Fragment key="footer">{footer}</Fragment>)

  const panelAlign = mobileBottomSheet
    ? 'items-end sm:items-center'
    : 'items-center'

  const panelShape = mobileBottomSheet
    ? 'rounded-t-2xl sm:rounded-xl w-full sm:max-w-lg max-h-[min(92dvh,92vh)] sm:max-h-[85vh] pb-[env(safe-area-inset-bottom,0px)] overscroll-contain'
    : 'rounded-lg w-full max-h-[90vh]'

  return (
    <AnimatePresence>
      {open ? (
        <Dialog
          static
          open
          onClose={handleClose}
          className={`relative ${zIndexClass}`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: backdropDuration, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 bg-[var(--site-bg)]/70"
            style={{
              backdropFilter: `blur(${popupMotion.backdropBlurPx}px)`,
              WebkitBackdropFilter: `blur(${popupMotion.backdropBlurPx}px)`,
            }}
            aria-hidden
          />

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={`flex min-h-full justify-center p-0 sm:p-4 text-center ${panelAlign}`}
            >
              <Dialog.Panel
                className={`
                  transform overflow-y-auto text-left align-middle
                  ${panelShape}
                `}
              >
                {/* bg / border / shadow はここに置き、exit で箱と文字を同時にフェード */}
                <motion.div
                  className={`shadow-xl ${panelClassName}`}
                  initial={
                    mobileBottomSheet
                      ? { opacity: 0, y: 32, scale: 0.98 }
                      : { opacity: 0, scale: 0.96 }
                  }
                  animate={
                    isExiting
                      ? {
                          opacity: 0,
                          y: mobileBottomSheet ? '5%' : 0,
                          scale: 0.98,
                        }
                      : { opacity: 1, y: 0, scale: 1 }
                  }
                  transition={{
                    duration: isExiting ? exitDuration : backdropDuration,
                    ease: isExiting
                      ? popupMotion.exitCurve
                      : [0.33, 1, 0.68, 1],
                  }}
                >
                  <StaggerReveal
                    play={showContent}
                    className="flex flex-col gap-3 sm:gap-4"
                  >
                    {staggerItems}
                  </StaggerReveal>
                </motion.div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      ) : null}
    </AnimatePresence>
  )
}

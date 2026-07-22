'use client'

import { Dialog } from '@headlessui/react'
import type { ReactNode } from 'react'
import { typography, colors, borders, zIndex } from '@/lib/design-tokens'
import { PremiumDialog } from '@/components/motion/PremiumDialog'

interface ConciergePanelProps {
  open: boolean
  onClose: () => void
  title: string
  /** 閲覧中ページの短いラベル（文脈オープン時） */
  contextLabel?: string
  children: ReactNode
}

export function ConciergePanel({
  open,
  onClose,
  title,
  contextLabel,
  children,
}: ConciergePanelProps) {
  return (
    <PremiumDialog
      open={open}
      onClose={onClose}
      mobileBottomSheet
      zIndexClass={zIndex.modal}
      panelClassName={`
        bg-gray-950 ${borders.border} border-brand/40
        p-5 sm:p-6
      `}
      title={
        <Dialog.Title
          as="h2"
          className={`${typography.h4} ${colors.text.primary} pr-10`}
        >
          {title}
        </Dialog.Title>
      }
      subtitle={
        <p className={`${typography.caption} ${colors.text.muted}`}>
          {contextLabel
            ? `「${contextLabel}」を見ている方向けに、サイト内の最適なページへご案内します。`
            : '聞きたいことを書くか、候補から選んでください。サイト内のご案内のみお答えします。'}
        </p>
      }
    >
      {children}
    </PremiumDialog>
  )
}

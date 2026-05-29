'use client'

import { Dialog } from '@headlessui/react'
import type { ReactNode } from 'react'
import { typography, colors, borders, zIndex } from '@/lib/design-tokens'
import { PremiumDialog } from '@/components/motion/PremiumDialog'

interface ConciergePanelProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export function ConciergePanel({
  open,
  onClose,
  title,
  children,
}: ConciergePanelProps) {
  return (
    <PremiumDialog
      open={open}
      onClose={onClose}
      mobileBottomSheet
      zIndexClass={zIndex.modal}
      panelClassName={`
        bg-gray-950 ${borders.border} border-blue-400/40
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
          選択内容を整理し、お問い合わせに引き継ぎます（チャット AI は未接続の
          MVP です）。
        </p>
      }
    >
      {children}
    </PremiumDialog>
  )
}

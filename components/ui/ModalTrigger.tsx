'use client'

import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import { colors, typography, transitions, borders } from '../../lib/design-tokens'
import { ModalTriggerProps } from '../../types/service'
import { PremiumDialog } from '../motion/PremiumDialog'

/**
 * モーダルトリガーコンポーネント
 * 単一責任: トリガー要素とモーダルコンテンツの管理のみ
 */
export function ModalTrigger({
  children,
  modalContent,
  title,
  size = 'md',
  className = '',
}: ModalTriggerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  const getMaxWidth = () => {
    switch (size) {
      case 'sm':
        return 'max-w-md'
      case 'md':
        return 'max-w-2xl'
      case 'lg':
        return 'max-w-4xl'
      case 'xl':
        return 'max-w-6xl'
      default:
        return 'max-w-2xl'
    }
  }

  return (
    <>
      <div onClick={openModal} className={`cursor-pointer ${className}`}>
        {children}
      </div>

      <PremiumDialog
        open={isOpen}
        onClose={closeModal}
        panelClassName={`
          ${colors.bg.secondary} ${borders.border}
          p-6 ${getMaxWidth()}
        `}
        title={
          title ? (
            <Dialog.Title
              as="h3"
              className={`${typography.h3} ${colors.text.primary}`}
            >
              {title}
            </Dialog.Title>
          ) : undefined
        }
        footer={<ModalCloseFooter onClose={closeModal} />}
      >
        <div className={`${typography.body} ${colors.text.secondary}`}>
          {modalContent}
        </div>
      </PremiumDialog>
    </>
  )
}

function ModalCloseFooter({ onClose }: { onClose: () => void }) {
  return (
    <div className="mt-6 flex justify-end">
      <button
        type="button"
        onClick={onClose}
        className={`
          px-4 py-2 text-sm rounded-lg
          ${colors.text.muted} hover:${colors.text.primary}
          ${colors.state.focus} focus:outline-none
          ${transitions.colors}
        `}
      >
        閉じる
      </button>
    </div>
  )
}

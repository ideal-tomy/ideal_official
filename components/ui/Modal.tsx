'use client'

import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import { colors, typography, transitions, borders } from '../../lib/design-tokens'
import { ModalProps } from '../../types/service'
import { PremiumDialog } from '../motion/PremiumDialog'

/**
 * モーダルコンポーネント
 * 単一責任: モーダルの表示と開閉ロジックのみを管理
 */
export function Modal({
  children,
  buttonText = '詳細を見る',
  title,
  size = 'md',
  className = '',
}: ModalProps) {
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
      <button
        type="button"
        onClick={openModal}
        className={`
          px-6 py-3 rounded-lg
          ${colors.accent.bg} ${colors.text.primary}
          ${colors.accent.bgHover} ${transitions.colors}
          ${colors.state.focus} focus:outline-none
          ${className}
        `}
      >
        {buttonText}
      </button>

      {isOpen ? (
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
            {children}
          </div>
        </PremiumDialog>
      ) : null}
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

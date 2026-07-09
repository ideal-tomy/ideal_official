'use client'

import { Dialog } from '@headlessui/react'
import { useCallback, useState, type ReactNode } from 'react'
import { colors, typography, transitions, borders } from '../../lib/design-tokens'
import { PremiumDialog } from '../motion/PremiumDialog'

export interface ModalTriggerProps {
  children: React.ReactNode
  /** 従来どおり、すでに持っているコンテンツ（任意） */
  modalContent?: ReactNode
  /** 遅延ロード用 ID（modalPack と併用） */
  modalId?: string
  /** クリック時に本文を取得するローダー */
  loadModalContent?: (id: string) => Promise<ReactNode>
  buttonText?: string
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

/**
 * モーダルトリガー
 * PremiumDialog は open 時のみマウントし、本文は必要なら遅延ロードする。
 */
export function ModalTrigger({
  children,
  modalContent,
  modalId,
  loadModalContent,
  title,
  size = 'md',
  className = '',
}: ModalTriggerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<ReactNode>(modalContent ?? null)
  const [isLoading, setIsLoading] = useState(false)

  const closeModal = () => setIsOpen(false)

  const openModal = useCallback(async () => {
    setIsOpen(true)

    if (content != null) return
    if (!modalId || !loadModalContent) return

    setIsLoading(true)
    try {
      const loaded = await loadModalContent(modalId)
      setContent(loaded)
    } finally {
      setIsLoading(false)
    }
  }, [content, modalId, loadModalContent])

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

      {/* open 時のみ Dialog をマウント（framer-motion コストをカード数分抱えない） */}
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
            {isLoading ? (
              <div className="space-y-3 animate-pulse" aria-busy="true">
                <div className="h-4 bg-gray-700 rounded w-3/4" />
                <div className="h-4 bg-gray-700 rounded w-full" />
                <div className="h-4 bg-gray-700 rounded w-5/6" />
                <div className="h-4 bg-gray-700 rounded w-2/3" />
              </div>
            ) : (
              content
            )}
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

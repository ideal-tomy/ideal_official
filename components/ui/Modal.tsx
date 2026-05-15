'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { colors, typography, transitions, borders } from '../../lib/design-tokens'
import { ModalProps } from '../../types/service'

/**
 * モーダルコンポーネント
 * 単一責任: モーダルの表示と開閉ロジックのみを管理
 */
export function Modal({ 
  children, 
  buttonText = "詳細を見る", 
  title,
  size = 'md',
  className = '' 
}: ModalProps) {
  // モーダルの開閉状態のみを管理
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  // サイズに応じた最大幅の設定
  const getMaxWidth = () => {
    switch (size) {
      case 'sm': return 'max-w-md'
      case 'md': return 'max-w-2xl'
      case 'lg': return 'max-w-4xl'
      case 'xl': return 'max-w-6xl'
      default: return 'max-w-2xl'
    }
  }

  return (
    <>
      {/* モーダルを開くトリガーボタン */}
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

      {/* モーダル本体 */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          
          {/* 背景オーバーレイ */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          </Transition.Child>

          {/* モーダルコンテンツ */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel 
                  className={`
                    w-full ${getMaxWidth()} transform overflow-hidden rounded-lg 
                    ${colors.bg.secondary} ${borders.border} 
                    p-6 text-left align-middle shadow-xl ${transitions.all}
                  `}
                >
                  {/* タイトル */}
                  {title && (
                    <Dialog.Title
                      as="h3"
                      className={`${typography.h3} ${colors.text.primary} mb-4`}
                    >
                      {title}
                    </Dialog.Title>
                  )}

                  {/* モーダルの中身 */}
                  <div className={`${typography.body} ${colors.text.secondary}`}>
                    {children}
                  </div>
                  
                  {/* 閉じるボタン */}
                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={closeModal}
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


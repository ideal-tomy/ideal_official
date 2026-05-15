'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, type ReactNode } from 'react'
import { typography, colors, borders, zIndex } from '@/lib/design-tokens'

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
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className={`relative ${zIndex.modal}`} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-8 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-8 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`
                  w-full max-h-[92vh] sm:max-h-[85vh] overflow-y-auto
                  sm:max-w-lg
                  transform bg-gray-950 ${borders.border} border-blue-400/40
                  rounded-t-2xl sm:rounded-xl
                  p-5 sm:p-6 text-left shadow-xl
                `}
              >
                <Dialog.Title
                  as="h2"
                  className={`${typography.h4} ${colors.text.primary} mb-1 pr-10`}
                >
                  {title}
                </Dialog.Title>
                <p className={`${typography.caption} ${colors.text.muted} mb-6`}>
                  選択内容を整理し、お問い合わせに引き継ぎます（チャット AI は未接続の
                  MVP です）。
                </p>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

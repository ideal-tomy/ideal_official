'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { typography, transitions } from '@/lib/design-tokens'

/**
 * アコーディオンアイテムの型定義
 */
export interface AccordionItem {
  /** アコーディオンのタイトル */
  title: React.ReactNode
  /** アコーディオンの内容 */
  content: React.ReactNode
  /** アイテムのID（オプション） */
  id?: string
}

/**
 * アコーディオンコンポーネントのProps
 */
export interface AccordionProps {
  /** アコーディオンアイテムの配列 */
  items: AccordionItem[]
  /** 追加のCSSクラス */
  className?: string
  /** デフォルトで開くアイテムのID（オプション） */
  defaultOpenId?: string
  /** 複数同時に開くことを許可するか */
  allowMultiple?: boolean
  /** アイコンの表示/非表示 */
  showIcon?: boolean
  /** カスタムアイコン */
  customIcon?: React.ReactNode
  /** 見た目のバリアント */
  variant?: 'default' | 'card' | 'plain'
}

/**
 * アコーディオンコンポーネント
 * 単一責任: アコーディオンの表示と開閉ロジックのみを管理
 */
export function Accordion({
  items,
  className = '',
  defaultOpenId,
  allowMultiple = false,
  showIcon = true,
  customIcon,
  variant = 'default',
}: AccordionProps) {
  const isCard = variant === 'card'
  const isPlain = variant === 'plain'

  const listSpacing = isPlain ? 'divide-y divide-[var(--site-border)]' : isCard ? 'space-y-3' : 'space-y-2'

  return (
    <div className={`w-full ${listSpacing} ${className}`}>
      {items.map((item, index) => (
        <Disclosure 
          key={item.id || index} 
          as="div"
          defaultOpen={defaultOpenId === item.id}
          className={
            isCard
              ? 'overflow-hidden rounded-xl border border-[var(--site-border)]/50 bg-[var(--site-bg-elevated)]/40'
              : undefined
          }
        >
          {({ open }) => (
            <>
              {/* アコーディオンのボタン部分 */}
              <Disclosure.Button 
                className={`
                  flex w-full items-center justify-between text-left
                  ${isCard ? 'px-5 py-4 text-base font-semibold sm:px-6 sm:py-5 sm:text-lg' : ''}
                  ${isPlain ? 'py-4 text-base font-semibold sm:text-lg' : ''}
                  ${!isCard && !isPlain ? `px-0 py-4 ${typography.h4}` : ''}
                  text-[var(--site-fg)]
                  hover:text-[var(--site-fg)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-inset
                  ${transitions.all}
                `}
              >
                <span className="flex-1 pr-4">{item.title}</span>
                
                {/* 開閉アイコン */}
                {showIcon && (
                  <div className="flex-shrink-0">
                    {customIcon ? (
                      <div className={`${open ? 'transform rotate-180' : ''} ${transitions.transform}`}>
                        {customIcon}
                      </div>
                    ) : (
                      <svg 
                        className={`
                          w-5 h-5 text-brand 
                          ${open ? 'transform rotate-180' : ''} 
                          ${transitions.transform}
                        `} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    )}
                  </div>
                )}
              </Disclosure.Button>

              {/* アコーディオンの内容部分 */}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
              >
                <Disclosure.Panel 
                  className={`
                    ${
                      isCard
                        ? 'border-t border-[var(--site-border)]/40 px-5 pb-5 pt-0 sm:px-6 sm:pb-6'
                        : isPlain
                          ? 'pb-6 pt-0'
                          : 'mt-2 px-0 pb-6 pt-4'
                    }
                    text-base leading-relaxed text-[var(--site-fg-muted)] sm:text-lg
                  `}
                >
                  {item.content}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}

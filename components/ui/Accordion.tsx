'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { colors, typography, transitions } from '../../lib/design-tokens'

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
  variant?: 'default' | 'card'
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

  return (
    <div className={`w-full ${isCard ? 'space-y-3' : 'space-y-2'} ${className}`}>
      {items.map((item, index) => (
        <Disclosure 
          key={item.id || index} 
          as="div"
          defaultOpen={defaultOpenId === item.id}
          className={isCard ? 'rounded-xl border border-[var(--site-border)]/50 bg-[var(--site-bg-elevated)]/40 overflow-hidden' : undefined}
        >
          {({ open }) => (
            <>
              {/* アコーディオンのボタン部分 */}
              <Disclosure.Button 
                className={`
                  flex justify-between items-center w-full text-left
                  ${isCard ? 'px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-semibold' : `px-0 py-4 ${typography.h4}`}
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
                    ${isCard ? 'px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-[var(--site-border)]/40' : 'px-0 pt-4 pb-6 mt-2'}
                    text-base sm:text-lg leading-relaxed text-[var(--site-fg-muted)]
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

/**
 * シンプルなアコーディオン（アイコンなし）
 */
export function SimpleAccordion({
  items,
  className = '',
  defaultOpenId,
  allowMultiple = false
}: Omit<AccordionProps, 'showIcon' | 'customIcon'>) {
  return (
    <Accordion
      items={items}
      className={className}
      defaultOpenId={defaultOpenId}
      allowMultiple={allowMultiple}
      showIcon={false}
    />
  )
}

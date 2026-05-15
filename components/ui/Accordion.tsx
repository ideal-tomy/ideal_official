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
  customIcon
}: AccordionProps) {
  return (
    <div className={`w-full space-y-2 ${className}`}>
      {items.map((item, index) => (
        <Disclosure 
          key={item.id || index} 
          as="div"
          defaultOpen={defaultOpenId === item.id}
        >
          {({ open }) => (
            <>
              {/* アコーディオンのボタン部分 */}
              <Disclosure.Button 
                className={`
                  flex justify-between items-center w-full px-0 py-4 text-left
                  ${typography.h4} text-white
                  hover:text-gray-300
                  focus:outline-none
                  ${transitions.all}
                  transition-all duration-200
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
                          w-5 h-5 text-blue-400 
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
                    px-0 pt-4 pb-6
                    ${typography.body} ${colors.text.secondary}
                    mt-2
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

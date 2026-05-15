'use client'

import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { colors, typography, transitions } from '../../lib/design-tokens'
import { TabContainerProps } from '../../types/service'

/**
 * タブコンテナコンポーネント
 * 単一責任: タブの表示と切り替えロジックのみを管理
 */
export function TabContainer({ tabs, defaultTab, className = '' }: TabContainerProps) {
  return (
    <div className={className}>
      <Tab.Group defaultIndex={defaultTab ? tabs.findIndex(tab => tab.id === defaultTab) : 0}>
        {/* タブボタン部分 - 高級感のあるテキストベースデザイン */}
        <div className="flex justify-center mb-12">
          <Tab.List className="inline-flex gap-8 border-b border-gray-700">
            {tabs.map((tab) => (
              <Tab as={Fragment} key={tab.id}>
                {({ selected }) => (
                  <button
                    className={`
                      px-2 py-4 text-xl font-semibold
                      ${transitions.colors}
                      focus:outline-none
                      focus-visible:outline-none
                      focus:ring-0
                      focus-visible:ring-0
                      relative
                      ${selected
                        ? `${colors.text.primary} border-b-2 border-blue-400 pb-4 -mb-px`
                        : `${colors.text.secondary} hover:${colors.text.primary}`
                      }
                    `}
                  >
                    {tab.name}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>

        {/* タブコンテンツ部分 */}
        <Tab.Panels className="mt-8">
          {tabs.map((tab) => (
            <Tab.Panel 
              key={tab.id} 
              className={`
                ${typography.body} 
                ${colors.text.secondary}
                focus:outline-none
                focus-visible:outline-none
                focus:ring-0
                focus-visible:ring-0
              `}
            >
              {tab.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

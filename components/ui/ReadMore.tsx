'use client'

import { useState } from 'react'
import { colors, typography, transitions } from '../../lib/design-tokens'

export interface ReadMoreProps {
  /** 短縮表示するテキスト */
  previewText: string
  /** 完全なテキスト */
  fullText: React.ReactNode
  /** 追加のCSSクラス */
  className?: string
  /** カスタムの「続きを読む」テキスト */
  readMoreText?: string
  /** カスタムの「閉じる」テキスト */
  readLessText?: string
}

/**
 * テキストの折りたたみ表示コンポーネント
 * 長いテキストを「続きを読む」で折りたたみ表示
 */
export function ReadMore({
  previewText,
  fullText,
  className = '',
  readMoreText = '続きを読む',
  readLessText = '閉じる'
}: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`${className}`}>
      {/* プレビューテキスト */}
      <div className={`${typography.body} ${colors.text.secondary} mb-4`}>
        {previewText}
      </div>

      {/* 続きを読むボタン */}
      <button
        onClick={toggleExpanded}
        className={`
          inline-flex items-center text-sm font-medium
          ${colors.accent.text} hover:${colors.text.primary}
          transition-colors duration-200
          cursor-pointer
          focus:outline-none
          ${transitions.all}
        `}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? readLessText : readMoreText}
      >
        {isExpanded ? readLessText : readMoreText}
        <svg
          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
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
      </button>

      {/* 完全なテキスト（展開時のみ表示） */}
      {isExpanded && (
        <div className="mt-4 animate-in slide-in-from-top-2 duration-300">
          <div className={`${typography.body} ${colors.text.secondary} space-y-4`}>
            {fullText}
          </div>
          
          {/* スマホ用の閉じるボタン（画面下部に固定） */}
          <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
            <button
              onClick={toggleExpanded}
              className={`
                w-full py-3 px-4 rounded-lg
                bg-gray-800/90 backdrop-blur-sm
                border border-gray-600
                text-white font-medium
                hover:bg-gray-700/90
                transition-all duration-200
                shadow-lg
              `}
            >
              {readLessText}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

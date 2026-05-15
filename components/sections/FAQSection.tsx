'use client'

import { colors, typography, spacing } from '../../lib/design-tokens'
import { useState } from 'react'

/**
 * FAQSection コンポーネント
 * 単一責任: FAQセクションの表示のみを管理
 */

export interface FAQData {
  /** FAQのID */
  id: string
  /** 質問 */
  question: string
  /** 回答 */
  answer: string
  /** カテゴリ（オプション） */
  category?: string
}

export interface FAQSectionProps {
  /** セクションのタイトル */
  title?: string
  /** セクションのサブタイトル */
  subtitle?: string
  /** セクションの説明文 */
  description?: string
  /** FAQデータの配列 */
  faqs: FAQData[]
  /** 追加のCSSクラス */
  className?: string
  /** 背景色のバリアント */
  variant?: 'default' | 'dark' | 'accent'
  /** パディングのサイズ */
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  /** アコーディオンの配置 */
  alignment?: 'left' | 'center' | 'right'
  /** デフォルトで開くFAQのID（オプション） */
  defaultOpenId?: string
}

export function FAQSection({
  title,
  subtitle,
  description,
  faqs,
  className = '',
  variant = 'default',
  padding = 'lg',
  alignment = 'center',
  defaultOpenId
}: FAQSectionProps) {
  // バリアント別のスタイル
  const getVariantStyles = () => {
    return 'bg-black'
  }

  // パディングサイズ
  const getPaddingStyles = () => {
    switch (padding) {
      case 'sm':
        return 'py-8'
      case 'md':
        return 'py-12'
      case 'lg':
        return 'py-16'
      case 'xl':
        return 'py-20'
      default:
        return 'py-16'
    }
  }

  // アコーディオンの配置
  const getAlignmentStyles = () => {
    switch (alignment) {
      case 'left':
        return 'text-left'
      case 'right':
        return 'text-right'
      default:
        return 'text-center'
    }
  }

  return (
    <section className={`${getVariantStyles()} ${getPaddingStyles()} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー部分 */}
        {(title || subtitle || description) && (
          <div className={`mb-12 ${getAlignmentStyles()}`}>
            {subtitle && (
              <p className={`text-sm font-medium ${colors.accent.text} mb-2`}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-lg ${colors.text.secondary} max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* FAQアコーディオン */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              defaultOpen={faq.id === defaultOpenId}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQアイテムコンポーネント
interface FAQItemProps {
  faq: FAQData
  defaultOpen?: boolean
}

function FAQItem({ faq, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`
      ${colors.bg.secondary} ${colors.border.default} border rounded-lg
      overflow-hidden
      transition-all duration-300
      hover:shadow-lg
    `}>
      {/* 質問部分 */}
      <button
        className={`
          w-full px-6 py-4 text-left
          ${colors.state.focus}
          focus:outline-none
          transition-colors duration-200
          hover:${colors.bg.primary}
        `}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <div className="flex items-center justify-between">
          <h3 className={`text-lg font-semibold ${colors.text.primary} pr-4`}>
            {faq.question}
          </h3>
          <div className={`
            flex-shrink-0 w-6 h-6 flex items-center justify-center
            transition-transform duration-200
            ${isOpen ? 'rotate-180' : ''}
          `}>
            <svg
              className="w-4 h-4"
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
          </div>
        </div>
      </button>

      {/* 回答部分 */}
      <div
        id={`faq-answer-${faq.id}`}
        className={`
          transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          overflow-hidden
        `}
      >
        <div className="px-6 pt-4 pb-4">
          <p className={`${colors.text.secondary} leading-relaxed`}>
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

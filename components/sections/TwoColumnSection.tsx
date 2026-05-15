import React from 'react'
import { colors, typography, spacing } from '../../lib/design-tokens'

/**
 * TwoColumnSection コンポーネント
 * 単一責任: 2カラムレイアウトのセクション表示のみを管理
 */

export interface TwoColumnSectionProps {
  /** セクションのタイトル */
  title?: string
  /** セクションのサブタイトル */
  subtitle?: string
  /** セクションの説明文 */
  description?: string
  /** 左カラムのコンテンツ */
  leftContent: React.ReactNode
  /** 右カラムのコンテンツ */
  rightContent: React.ReactNode
  /** 追加のCSSクラス */
  className?: string
  /** 背景色のバリアント */
  variant?: 'default' | 'dark' | 'accent'
  /** パディングのサイズ */
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  /** カラムの比率 */
  columnRatio?: 'equal' | 'left-heavy' | 'right-heavy'
  /** カラムの順序（モバイルでの表示順） */
  reverseOnMobile?: boolean
  /** テキストの配置 */
  textAlign?: 'left' | 'center' | 'right'
}

export function TwoColumnSection({
  title,
  subtitle,
  description,
  leftContent,
  rightContent,
  className = '',
  variant = 'default',
  padding = 'lg',
  columnRatio = 'equal',
  reverseOnMobile = false,
  textAlign = 'left'
}: TwoColumnSectionProps) {
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

  // カラム比率
  const getColumnStyles = () => {
    switch (columnRatio) {
      case 'left-heavy':
        return 'lg:grid-cols-3'
      case 'right-heavy':
        return 'lg:grid-cols-3'
      default:
        return 'lg:grid-cols-2'
    }
  }

  // 左カラムの幅
  const getLeftColumnStyles = () => {
    switch (columnRatio) {
      case 'left-heavy':
        return 'lg:col-span-2'
      case 'right-heavy':
        return 'lg:col-span-1'
      default:
        return 'lg:col-span-1'
    }
  }

  // 右カラムの幅
  const getRightColumnStyles = () => {
    switch (columnRatio) {
      case 'left-heavy':
        return 'lg:col-span-1'
      case 'right-heavy':
        return 'lg:col-span-2'
      default:
        return 'lg:col-span-1'
    }
  }

  // テキスト配置
  const getTextAlignStyles = () => {
    switch (textAlign) {
      case 'center':
        return 'text-center'
      case 'right':
        return 'text-right'
      default:
        return 'text-left'
    }
  }


  return (
    <section className={`${getVariantStyles()} ${getPaddingStyles()} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー部分 */}
        {(title || subtitle || description) && (
          <div className="mb-12 text-center">
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
              <p className={`text-lg ${colors.text.secondary} max-w-3xl mx-auto`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* 2カラムコンテンツ */}
        <div className={`
          grid grid-cols-1 gap-8 lg:gap-12
          ${getColumnStyles()}
          ${reverseOnMobile ? 'lg:grid-flow-col-dense' : ''}
        `}>
          {/* 左カラム */}
          <div className={`
            ${getLeftColumnStyles()}
            ${reverseOnMobile ? 'lg:order-1' : ''}
            h-full flex flex-col
            ${getTextAlignStyles()}
          `}>
            {leftContent}
          </div>

          {/* 右カラム */}
          <div className={`
            ${getRightColumnStyles()}
            ${reverseOnMobile ? 'lg:order-2' : ''}
            h-full flex flex-col
            ${getTextAlignStyles()}
          `}>
            {rightContent}
          </div>
        </div>
      </div>
    </section>
  )
}

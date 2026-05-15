import { colors, typography, spacing } from '../../lib/design-tokens'

/**
 * SingleColumnSection コンポーネント
 * 単一責任: 単一カラムレイアウトのセクション表示のみを管理
 */

export interface SingleColumnSectionProps {
  /** セクションのタイトル */
  title?: string
  /** セクションのサブタイトル */
  subtitle?: string
  /** セクションの説明文 */
  description?: string
  /** セクションのコンテンツ */
  children: React.ReactNode
  /** 追加のCSSクラス */
  className?: string
  /** 背景色のバリアント */
  variant?: 'default' | 'dark' | 'accent'
  /** パディングのサイズ */
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  /** テキストの配置 */
  textAlign?: 'left' | 'center' | 'right'
}

export function SingleColumnSection({
  title,
  subtitle,
  description,
  children,
  className = '',
  variant = 'default',
  padding = 'lg',
  textAlign = 'center'
}: SingleColumnSectionProps) {
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

  // テキスト配置
  const getTextAlignStyles = () => {
    switch (textAlign) {
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
          <div className={`mb-12 ${getTextAlignStyles()}`}>
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
              <p className={`text-lg ${colors.text.secondary} max-w-2xl mx-auto`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* コンテンツ部分 */}
        <div className={getTextAlignStyles()}>
          {children}
        </div>
      </div>
    </section>
  )
}

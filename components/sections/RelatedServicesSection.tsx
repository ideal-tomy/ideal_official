import { colors, typography, spacing } from '@/lib/design-tokens'
import Link from 'next/link'
import Image from 'next/image'

/**
 * RelatedServicesSection コンポーネント
 * 単一責任: 関連サービスセクションの表示のみを管理
 */

export interface RelatedServiceData {
  /** サービスのID */
  id: string
  /** サービスのタイトル */
  title: string
  /** サービスの説明文 */
  description: string
  /** サービスの画像URL（オプション） */
  image?: string
  /** サービスのアイコン（オプション） */
  icon?: string
  /** サービスのリンクURL */
  href: string
  /** サービスのタグ（オプション） */
  tags?: string[]
}

export interface RelatedServicesSectionProps {
  /** セクションのタイトル */
  title?: string
  /** セクションのサブタイトル */
  subtitle?: string
  /** セクションの説明文 */
  description?: string
  /** 関連サービスデータの配列 */
  services: RelatedServiceData[]
  /** 追加のCSSクラス */
  className?: string
  /** 背景色のバリアント */
  variant?: 'default' | 'dark' | 'accent'
  /** パディングのサイズ */
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  /** カードの配置 */
  cardAlignment?: 'left' | 'center' | 'right'
  /** カードのサイズ */
  cardSize?: 'sm' | 'md' | 'lg'
}

export function RelatedServicesSection({
  title,
  subtitle,
  description,
  services,
  className = '',
  variant = 'default',
  padding = 'lg',
  cardAlignment = 'center',
  cardSize = 'md'
}: RelatedServicesSectionProps) {
  // バリアント別のスタイル
  const getVariantStyles = () => {
    return 'bg-[var(--site-bg)]'
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

  // カード配置
  const getCardAlignmentStyles = () => {
    switch (cardAlignment) {
      case 'left':
        return 'justify-start'
      case 'right':
        return 'justify-end'
      default:
        return 'justify-center'
    }
  }

  // カードサイズ
  const getCardSizeStyles = () => {
    switch (cardSize) {
      case 'sm':
        return 'p-4'
      case 'lg':
        return 'p-8'
      default:
        return 'p-6'
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
              <h2 className="mb-4 text-3xl font-bold text-brand md:text-4xl">
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

        {/* 関連サービスグリッド */}
        <div className={`
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8
          ${getCardAlignmentStyles()}
        `}>
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className={`
                group flex h-full flex-col
                ${colors.bg.secondary} ${colors.border.default} border rounded-xl
                ${getCardSizeStyles()}
                ${colors.state.focus}
                focus:outline-none cursor-pointer
                transition-all duration-300
                hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[var(--service-card-shadow)]
                block
              `}
            >
              {/* 画像またはアイコン */}
              {(service.image || service.icon) && (
                <div className="mb-4 text-center">
                  {service.image ? (
                    <div className="relative h-32 w-full rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={75}
                        priority={false}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="text-4xl mb-2">{service.icon}</div>
                  )}
                </div>
              )}

              {/* タイトル */}
              <h3 className={`text-xl font-semibold ${colors.text.primary} mb-3`}>
                {service.title}
              </h3>

              {/* 説明文 */}
              <p className={`${colors.text.secondary} mb-4`}>
                {service.description}
              </p>

              {service.tags && service.tags.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto text-right">
                <span className="inline-flex items-center text-sm font-medium text-brand transition-colors group-hover:text-brand-hover">
                  詳細を見る
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

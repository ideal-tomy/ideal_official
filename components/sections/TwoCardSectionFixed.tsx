import { colors, typography, spacing } from '../../lib/design-tokens'
import Link from 'next/link'
import Image from 'next/image'

/**
 * TwoCardSectionFixed コンポーネント
 * RelatedServicesSectionと同じ画像表示ロジックを使用
 */

export interface TwoCardData {
  id: string
  title: string
  description: string
  image: string
  link: string
  linkText: string
  priority?: boolean  // Above the fold画像を優先読み込み
}

export interface TwoCardSectionFixedProps {
  title?: string
  subtitle?: string
  description?: string
  cards: TwoCardData[]
  className?: string
}

export function TwoCardSectionFixed({
  title,
  subtitle,
  description,
  cards,
  className = ''
}: TwoCardSectionFixedProps) {
  return (
    <section className={`bg-black pt-0 pb-16 md:pb-24 ${className}`}>
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

        {/* 2カードグリッド */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className={`
                ${colors.bg.secondary} ${colors.border.default} border rounded-lg
                p-6
                ${colors.state.hover} ${colors.state.focus}
                focus:outline-none cursor-pointer
                transition-all duration-300
                hover:scale-105 hover:shadow-lg
                block h-96
              `}
            >
              {/* 画像部分（上半分） */}
              {card.image && (
                <div className="mb-4 text-center">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={1200}
                      height={450}
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                      priority={card.priority || false}
                      loading={card.priority ? undefined : "lazy"}
                    />
                  </div>
                </div>
              )}

              {/* コンテンツ部分（下半分） */}
              <div className="h-48 flex flex-col justify-between">
                <div>
                  <h3 className={`text-xl font-semibold ${colors.text.primary} mb-3`}>
                    {card.title}
                  </h3>
                  <p className={`${colors.text.secondary} text-sm leading-relaxed`}>
                    {card.description}
                  </p>
                </div>

                {/* CTAリンク */}
                <div className="mt-4">
                  <span className={`
                    inline-flex items-center text-sm font-medium
                    text-blue-400 hover:text-white
                    transition-colors duration-200
                  `}>
                    {card.linkText}
                    <svg
                      className="ml-2 w-4 h-4"
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

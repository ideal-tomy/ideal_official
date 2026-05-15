import { colors, typography, spacing } from '../../lib/design-tokens'
import Link from 'next/link'
import Image from 'next/image'

/**
 * ServiceGridSectionFixed コンポーネント
 * RelatedServicesSectionと同じ画像表示ロジックを使用
 */

export interface ServiceData {
  id: string
  title: string
  description: string
  image: string
  link: string
  linkText: string
}

export interface ServiceGridSectionFixedProps {
  title?: string
  subtitle?: string
  description?: string
  services: ServiceData[]
  className?: string
}

// デフォルトエクスポートに変更（dynamic import対応）
export default function ServiceGridSectionFixed({
  title,
  subtitle,
  description,
  services,
  className = ''
}: ServiceGridSectionFixedProps) {
  return (
    <section className={`bg-black py-16 md:py-24 ${className}`}>
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

        {/* サービスグリッド */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className={`
                ${colors.bg.secondary} ${colors.border.default} border rounded-lg
                p-6
                ${colors.state.hover} ${colors.state.focus}
                focus:outline-none cursor-pointer
                transition-all duration-300
                hover:scale-105 hover:shadow-lg
                block
              `}
            >
              {/* 画像部分（上半分） */}
              {service.image && (
                <div className="mb-4 text-center">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      quality={75}
                      priority={false}
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {/* コンテンツ部分（下半分） */}
              <div>
                <h3 className={`text-lg font-semibold ${colors.text.primary} mb-3`}>
                  {service.title}
                </h3>
                <p className={`${colors.text.secondary} text-sm leading-relaxed mb-4`}>
                  {service.description}
                </p>

                {/* CTAリンク */}
                <div className="text-center">
                  <span className={`
                    inline-flex items-center text-sm font-medium
                    text-blue-400 hover:text-white
                    transition-colors duration-200
                  `}>
                    {service.linkText}
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

        {/* 全サービス一覧へのリンク */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className={`
              inline-flex items-center px-6 py-3 ${colors.accent.bg} text-white font-medium rounded-lg ${colors.accent.bgHover} transition-colors duration-200
            `}
          >
            全サービス一覧を見る
            <svg
              className="ml-2 w-5 h-5"
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
          </Link>
        </div>
      </div>
    </section>
  )
}

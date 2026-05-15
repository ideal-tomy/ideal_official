import Link from 'next/link'
import { colors, typography, transitions } from '../../lib/design-tokens'
import { ServiceNavigationProps } from '../../types/service'

/**
 * サービスナビゲーションコンポーネント
 * 単一責任: サービス間のナビゲーション表示のみを管理
 */
export function ServiceNavigation({ 
  serviceLinks, 
  currentServiceId,
  className = '' 
}: ServiceNavigationProps) {
  return (
    <section className={`py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* スクロールインジケーター（スマホ表示時のみ） */}
        <div className="lg:hidden flex justify-center mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>左右にスワイプしてスクロール</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        
        <div className="flex overflow-x-auto gap-2 sm:gap-4 pb-4 scrollbar-hide lg:flex-nowrap lg:justify-center lg:overflow-visible lg:pb-0 snap-x snap-mandatory px-4 lg:px-0">
          {serviceLinks.map((link) => {
            const isActive = currentServiceId === link.id
            
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium flex-shrink-0 snap-start
                  ${transitions.colors}
                  ${colors.state.focus}
                  focus:outline-none
                  ${isActive
                    ? `${colors.accent.bg} ${colors.text.primary}`
                    : `${colors.text.secondary} hover:${colors.text.primary} hover:bg-gray-800/50`
                  }
                `}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

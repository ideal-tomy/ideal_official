import { colors, typography, transitions } from '../../lib/design-tokens'
import { ServiceCardData } from '../../types/service'

/**
 * 機能カードコンポーネント
 * 単一責任: 機能カードの表示のみを管理
 */
interface FeatureCardProps {
  data?: ServiceCardData
  // 直接プロパティとしても受け取れるようにする
  title?: string
  description?: string
  icon?: React.ReactNode
  tags?: string[]
  className?: string
  onClick?: () => void
}

export function FeatureCard({ 
  data,
  title,
  description,
  icon,
  tags,
  className = '',
  onClick 
}: FeatureCardProps) {
  // dataが提供されている場合はそれを使用、そうでなければ直接のプロパティを使用
  const cardData = data || {
    id: '',
    title: title || '',
    description: description || '',
    icon,
    tags,
    onClick
  }
  return (
    <div
      className={`
        relative overflow-hidden rounded-lg border border-brand/30 p-6
        bg-gradient-to-br from-brand-deep/30 to-brand/20
        hover:border-brand hover:shadow-lg hover:shadow-[0_8px_24px_var(--color-brand-glow)]
        ${transitions.all}
        ${onClick ? 'cursor-pointer' : ''}
        ${colors.state.focus}
        focus:outline-none
        ${className}
      `}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      } : undefined}
    >
      {/* 背景エフェクト */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-brand-deep/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* コンテンツ */}
      <div className="relative z-10">
        {/* アイコン */}
        {cardData.icon && (
          <div className="mb-4 flex justify-center">
            <div className="p-3 rounded-lg bg-brand-deep/30 border border-brand/20">
              {cardData.icon}
            </div>
          </div>
        )}
        
        <h3 className={`${typography.h3} ${colors.text.primary} mb-3 text-center`}>
          {cardData.title}
        </h3>
        
        <p className={`${typography.body} ${colors.text.secondary} mb-4 text-center`}>
          {cardData.description}
        </p>
        
        {/* タグ */}
        {cardData.tags && cardData.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {cardData.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-brand-deep/50 text-brand-hover border border-brand/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}


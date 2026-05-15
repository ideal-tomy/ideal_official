import { colors, typography, transitions, borders } from '../../lib/design-tokens'
import { ServiceCardProps } from '../../types/service'

/**
 * サービスカードコンポーネント
 * 単一責任: サービスカードの表示のみを管理
 */
export function ServiceCard({ 
  data,
  title,
  description,
  icon,
  tags,
  variant = 'default', 
  className = '',
  onClick 
}: ServiceCardProps) {
  // dataが提供されている場合はそれを使用、そうでなければ直接のプロパティを使用
  const cardData = data || {
    id: '',
    title: title || '',
    description: description || '',
    icon,
    tags,
    onClick
  }
  // バリアントに応じたスタイルの設定
  const getVariantStyles = () => {
    switch (variant) {
      case 'feature':
        return `
          bg-gradient-to-br from-blue-900/20 to-purple-900/20
          border-blue-500/30 hover:border-blue-400
        `
      case 'technology':
        return `
          bg-gradient-to-br from-green-900/20 to-cyan-900/20
          border-green-500/30 hover:border-green-400
        `
      default:
        return `
          bg-gray-900/50
          border-gray-700 hover:border-gray-600
        `
    }
  }

  // アイコンの表示
  const renderIcon = () => {
    if (!cardData.icon) return null
    
    return (
      <div className="mb-4 flex justify-center">
        <div className="p-3 rounded-lg bg-gray-800/50">
          {cardData.icon}
        </div>
      </div>
    )
  }

  // タグの表示
  const renderTags = () => {
    if (!cardData.tags || cardData.tags.length === 0) return null
    
    return (
      <div className="mt-4 flex flex-wrap gap-2">
        {cardData.tags.map((tag, index) => (
          <span
            key={index}
            className={`
              px-3 py-1 text-sm rounded-full
              ${variant === 'feature' 
                ? 'bg-blue-900/50 text-blue-300' 
                : variant === 'technology'
                ? 'bg-green-900/50 text-green-300'
                : 'bg-gray-800 text-gray-300'
              }
            `}
          >
            {tag}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div
      className={`
        relative overflow-hidden rounded-lg border p-6
        ${getVariantStyles()}
        ${transitions.all}
        ${onClick ? 'cursor-pointer' : ''}
        hover:shadow-lg hover:shadow-blue-500/10
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
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* コンテンツ */}
      <div className="relative z-10">
        {renderIcon()}
        
        <h3 className={`${typography.h3} ${colors.text.primary} mb-3`}>
          {cardData.title}
        </h3>
        
        <p className={`${typography.body} ${colors.text.secondary} mb-4`}>
          {cardData.description}
        </p>
        
        {renderTags()}
      </div>
    </div>
  )
}


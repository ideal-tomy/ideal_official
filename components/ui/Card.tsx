/**
 * Card コンポーネント
 * 
 * 再利用可能なカードコンポーネント
 * タイトル、説明文、画像（オプション）、ホバーエフェクト
 */

import { ReactNode } from 'react'
import Image from 'next/image'
import { colors, borders, transitions, shadows } from '../../lib/design-tokens'

interface CardProps {
  title: string
  description: string
  imageUrl?: string
  imageAlt?: string
  icon?: ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export function Card({
  title,
  description,
  imageUrl,
  imageAlt = '',
  icon,
  className = '',
  onClick,
  href,
}: CardProps) {
  const cardContent = (
    <>
      {/* 画像またはアイコン */}
      {imageUrl ? (
        <div className="relative w-full h-48 mb-6">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ) : icon ? (
        <div className="mb-6 text-blue-400">{icon}</div>
      ) : null}

      {/* タイトル */}
      <h3 className={`${colors.text.primary} text-xl lg:text-2xl font-bold mb-4`}>
        {title}
      </h3>

      {/* 説明文 */}
      <p className={`${colors.text.muted} text-base leading-relaxed`}>
        {description}
      </p>
    </>
  )

  const baseClasses = `
    ${colors.bg.secondary}
    ${borders.rounded}
    ${borders.border}
    ${shadows.hover}
    hover:bg-gray-800 hover:-translate-y-2
    ${transitions.all}
    p-6
    ${className}
  `

  // href が指定されている場合は <a> タグとしてレンダリング
  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} block cursor-pointer`}
        onClick={onClick}
      >
        {cardContent}
      </a>
    )
  }

  // onClick が指定されている場合は <button> タグとしてレンダリング
  if (onClick) {
    return (
      <button
        type="button"
        className={`${baseClasses} w-full text-left cursor-pointer`}
        onClick={onClick}
      >
        {cardContent}
      </button>
    )
  }

  // それ以外は <div> タグとしてレンダリング
  return <div className={baseClasses}>{cardContent}</div>
}


import { HeroSectionProps } from '../../types/service'
import { typography, colors, layout } from '../../lib/design-tokens'
import { HeroReveal } from '../motion/HeroReveal'
import { HeroBackground } from '../motion/HeroBackground'

/**
 * ヒーローセクションコンポーネント
 * 下層ページ用 — トップと同じ宇宙背景・全画面レイアウト
 */
export function HeroSection({
  title,
  subText,
  className = '',
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex min-h-[70vh] items-center justify-center overflow-hidden ${className}`}
    >
      <HeroBackground />

      <HeroReveal className={`relative z-10 ${layout.container} text-center`}>
        <h1 className={`${typography.h1} ${colors.text.primary} mb-6`}>
          {title}
        </h1>
        <p className={`${typography.bodyLarge} ${colors.text.muted} max-w-3xl mx-auto`}>
          {subText}
        </p>
      </HeroReveal>
    </section>
  )
}

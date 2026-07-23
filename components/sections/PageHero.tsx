import type { ReactNode } from 'react'
import { HeroBackground } from '@/components/motion/HeroBackground'

/** トップ（DemoFirstHero）と同じセクション骨格 — メディア上は白文字 */
export const pageHeroSectionClassOnMedia =
  'relative -mt-16 overflow-hidden px-0 pt-28 pb-4 text-white md:mt-0 md:flex md:min-h-[min(92svh,900px)] md:flex-col md:justify-center md:py-24'

export const pageHeroSectionClassOnMediaNoOverlap =
  'relative overflow-hidden px-0 pt-28 pb-4 text-white md:flex md:min-h-[min(92svh,900px)] md:flex-col md:justify-center md:py-24'

/** グラデ背景（テーマ連動） */
export const pageHeroSectionClass =
  'relative -mt-16 overflow-hidden px-0 pt-28 pb-4 text-[var(--site-fg)] md:mt-0 md:flex md:min-h-[min(92svh,900px)] md:flex-col md:justify-center md:py-24'

export const pageHeroSectionClassNoOverlap =
  'relative overflow-hidden px-0 pt-28 pb-4 text-[var(--site-fg)] md:flex md:min-h-[min(92svh,900px)] md:flex-col md:justify-center md:py-24'

export const pageHeroTitleClass =
  'text-[clamp(26px,6.5vw,56px)] font-black leading-tight tracking-[0.04em] text-[var(--site-fg)] md:text-[clamp(34px,5.5vw,56px)] md:leading-[1.25]'

export const pageHeroTitleClassOnMedia =
  'text-[clamp(26px,6.5vw,56px)] font-black leading-tight tracking-[0.04em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,.55)] md:text-[clamp(34px,5.5vw,56px)] md:leading-[1.25]'

export const pageHeroDescriptionClass =
  'mt-4 max-w-[560px] text-[clamp(15px,3.6vw,18px)] font-normal text-[var(--site-fg-muted)] md:mt-6'

export const pageHeroDescriptionClassOnMedia =
  'mt-4 max-w-[560px] text-[clamp(15px,3.6vw,18px)] font-normal text-white/95 [text-shadow:0_1px_12px_rgba(0,0,0,.5)] md:mt-6'

export const pageHeroActionsClass =
  'mt-5 flex w-full flex-nowrap gap-3 sm:w-auto sm:max-w-md md:mt-8'

type PageHeroProps = {
  title: string
  /** 説明文（目安: 意味として2行） */
  description: string
  children?: ReactNode
  /** 未指定時はテーマ連動グラデーション背景 */
  background?: ReactNode
  className?: string
  id?: string
  /** false のときヘッダー重なり用の -mt-16 を付けない */
  overlapHeader?: boolean
  /**
   * 写真など暗いオーバーレイ上に載せるとき true（白文字）
   * background 指定時はデフォルト true
   */
  onMedia?: boolean
}

/**
 * 下層ページ共通ヒーロー。余白・タイポはトップと同一。
 */
export function PageHero({
  title,
  description,
  children,
  background,
  className = '',
  id,
  overlapHeader = true,
  onMedia,
}: PageHeroProps) {
  const media = onMedia ?? Boolean(background)

  const sectionClass = media
    ? overlapHeader
      ? pageHeroSectionClassOnMedia
      : pageHeroSectionClassOnMediaNoOverlap
    : overlapHeader
      ? pageHeroSectionClass
      : pageHeroSectionClassNoOverlap

  return (
    <section id={id} className={`${sectionClass} ${className}`.trim()}>
      {background ?? <HeroBackground />}
      <div className="relative z-10 mx-auto w-[min(100%-48px,1080px)]">
        <h1 className={media ? pageHeroTitleClassOnMedia : pageHeroTitleClass}>
          {title}
        </h1>
        <p
          className={
            media ? pageHeroDescriptionClassOnMedia : pageHeroDescriptionClass
          }
        >
          {description}
        </p>
        {children}
      </div>
    </section>
  )
}

import type { ReactNode } from 'react'
import { HeroBackground } from '@/components/motion/HeroBackground'

/** トップ（DemoFirstHero）と同じセクション骨格 */
export const pageHeroSectionClass =
  'relative -mt-16 overflow-hidden px-0 pt-28 pb-4 text-white md:mt-0 md:flex md:min-h-[min(92svh,900px)] md:flex-col md:justify-center md:py-24'

/** ヘッダー重なりなし（パンくず直下など） */
export const pageHeroSectionClassNoOverlap =
  'relative overflow-hidden px-0 pt-28 pb-4 text-white md:flex md:min-h-[min(92svh,900px)] md:flex-col md:justify-center md:py-24'

export const pageHeroTitleClass =
  'text-[clamp(26px,6.5vw,56px)] font-black leading-tight tracking-[0.04em] [text-shadow:0_2px_24px_rgba(0,0,0,.55)] md:text-[clamp(34px,5.5vw,56px)] md:leading-[1.25]'

export const pageHeroDescriptionClass =
  'mt-4 max-w-[560px] text-[clamp(15px,3.6vw,18px)] font-normal text-white/95 [text-shadow:0_1px_12px_rgba(0,0,0,.5)] md:mt-6'

export const pageHeroActionsClass =
  'mt-5 flex w-full flex-wrap gap-3 sm:w-auto sm:max-w-md md:mt-8'

type PageHeroProps = {
  title: string
  /** 説明文（目安: 意味として2行） */
  description: string
  children?: ReactNode
  /** 未指定時は宇宙グラデーション背景 */
  background?: ReactNode
  className?: string
  id?: string
  /** false のときヘッダー重なり用の -mt-16 を付けない */
  overlapHeader?: boolean
}

/**
 * 下層ページ共通ヒーロー。余白・タイポはトップと同一。
 * タイトル1行・説明2行を前提にする。
 */
export function PageHero({
  title,
  description,
  children,
  background,
  className = '',
  id,
  overlapHeader = true,
}: PageHeroProps) {
  const sectionClass = overlapHeader
    ? pageHeroSectionClass
    : pageHeroSectionClassNoOverlap

  return (
    <section id={id} className={`${sectionClass} ${className}`.trim()}>
      {background ?? <HeroBackground />}
      <div className="relative z-10 mx-auto w-[min(100%-48px,1080px)]">
        <h1 className={pageHeroTitleClass}>{title}</h1>
        <p className={pageHeroDescriptionClass}>{description}</p>
        {children}
      </div>
    </section>
  )
}

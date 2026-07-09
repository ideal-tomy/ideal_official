/**
 * Motion tokens — ported from Engrowth EngrowthRouteTokens / EngrowthPopupTokens
 */

export type RouteMotionVariant = 'standard' | 'modal' | 'result' | 'crossfade'

export type RouteMotionConfig = {
  duration: number
  reverse: number
  slideY?: number
  fadeEnd: number
  scaleFrom?: number
  curve: readonly [number, number, number, number]
}

export const routeMotion: Record<RouteMotionVariant, RouteMotionConfig> = {
  /** ページ全体は opacity のみ。ヒーロー・スクロールも opacity のみ */
  standard: {
    duration: 1.1,
    reverse: 0.9,
    slideY: 0,
    fadeEnd: 0.5,
    curve: [0.33, 1, 0.68, 1],
  },
  modal: {
    duration: 0.9,
    reverse: 0.8,
    slideY: 0,
    fadeEnd: 0.35,
    curve: [0.33, 1, 0.68, 1],
  },
  result: {
    duration: 1.3,
    reverse: 1.0,
    scaleFrom: 0.98,
    fadeEnd: 0.35,
    curve: [0.33, 1, 0.68, 1],
  },
  crossfade: {
    duration: 0.18,
    reverse: 0.2,
    fadeEnd: 1,
    curve: [0.45, 0, 0.55, 1],
  },
} as const

/** ページ遷移の enter / exit（sync クロスフェード用。exit 待ちを短く重ねる） */
export const routeTransition = {
  exitDuration: 0.2,
  enterDuration: 0.18,
  curve: [0.45, 0, 0.55, 1] as const,
} as const

export const popupMotion = {
  backdrop: 0.9,
  contentDelay: 0.3,
  staggerDelay: 0.25,
  itemDuration: 0.9,
  exit: 0.6,
  exitCurve: [0.4, 0, 1, 1] as const,
  backdropBlurPx: 8,
} as const

/** ヒーロー内要素の段階フェード（ページ enter と並列開始） */
export const heroMotion = {
  /** ページ enter 開始後、ヒーロー表示までの待機 */
  contentDelay: 0.05,
  /** 初回ロード時 */
  initialContentDelay: 0.04,
  staggerDelay: 0.08,
  itemDuration: 0.4,
} as const

/** トップ Hero の HeroReveal 子要素数（h1, p, CTA） */
export const heroRevealItemCounts = {
  top: 3,
} as const

/** ヒーロー reveal 完了までの秒数（ScrollHint 連動用） */
export function getHeroRevealCompleteDelay(
  itemCount: number,
  contentDelay: number = heroMotion.contentDelay,
): number {
  if (itemCount <= 0) {
    return contentDelay + heroMotion.itemDuration
  }
  const lastIndex = itemCount - 1
  return (
    contentDelay +
    lastIndex * heroMotion.staggerDelay +
    heroMotion.itemDuration
  )
}

/** スクロール連動のセクション表示（opacity のみ） */
export const scrollMotion = {
  duration: 0.6,
  itemDuration: 0.55,
  staggerDelay: 0.1,
  viewportMargin: '-10% 0px -5% 0px',
  curve: [0.33, 1, 0.68, 1] as const,
} as const

/** Reduced-motion overrides */
export const reducedMotion = {
  routeDuration: 0.15,
  popupBackdrop: 0.15,
  popupItem: 0.15,
  staggerDelay: 0,
} as const

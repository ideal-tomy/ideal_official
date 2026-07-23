/**
 * デザイントークン
 * 
 * docs/design.md に基づいたデザインシステムの定数を定義
 * すべてのコンポーネントでこれらの値を使用することで、一貫性を保つ
 */

// スペーシング（余白）
export const spacing = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '6rem',  // 96px
} as const

// カラーパレット（Tailwind CSS クラス名）
export const colors = {
  // ベース背景（テーマ連動）
  bg: {
    primary: 'bg-[var(--site-bg)]',
    secondary: 'bg-[var(--site-bg-elevated)]',
    gradient: 'bg-gradient-to-b from-[var(--site-bg)] to-[var(--site-bg-elevated)]',
  },
  // テキスト（テーマ連動）
  text: {
    primary: 'text-[var(--site-fg)]',
    secondary: 'text-[var(--site-fg)]/90',
    muted: 'text-[var(--site-fg-muted)]',
    disabled: 'text-[var(--site-fg-muted)]/70',
  },
  // アクセント（ライト=青 / ダーク=オレンジ — CSS 変数 brand が切替）
  accent: {
    primary: 'text-brand',
    secondary: 'text-brand-hover',
    bg: 'bg-brand',
    bgHover: 'hover:bg-brand-hover',
    text: 'text-brand',
    border: 'border-brand',
    ring: 'focus:ring-brand',
    deep: 'text-brand-deep',
    glow: 'shadow-[0_0_24px_var(--color-brand-glow)]',
  },
  // アクセント（高級感）
  luxury: {
    border: 'border-[var(--site-border)]',
    gold: 'text-brand-deep',
  },
  // ボーダー
  border: {
    default: 'border-[var(--site-border)]',
    accent: 'border-brand/40',
    muted: 'border-[var(--site-border)]',
  },
  // 状態カラー
  state: {
    hover: 'hover:bg-[var(--site-bg-elevated)]',
    focus: 'focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-[var(--site-bg)]',
    disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
  },
} as const

// タイポグラフィ（フォントサイズ）
export const typography = {
  // 見出し
  h1: 'text-2xl sm:text-3xl lg:text-6xl font-bold',
  h2: 'text-3xl lg:text-5xl font-bold',
  h3: 'text-2xl lg:text-3xl font-bold',
  h4: 'text-xl lg:text-2xl font-bold',
  // 本文
  body: 'text-base lg:text-lg leading-relaxed',
  bodyLarge: 'text-lg lg:text-xl leading-relaxed',
  // その他
  small: 'text-sm lg:text-base',
  caption: 'text-xs lg:text-sm text-[var(--site-fg-muted)]',
} as const

// トランジション（アニメーション）
export const transitions = {
  colors: 'transition-colors duration-300',
  transform: 'transition-transform duration-300',
  opacity: 'transition-opacity duration-500',
  all: 'transition-all duration-300 ease-in-out',
} as const

// レイアウト
export const layout = {
  // コンテナ幅
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  containerNarrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  containerWide: 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',
  // セクション余白
  section: 'py-14 md:py-24 lg:py-32',
  sectionSmall: 'py-12 lg:py-16',
  // ヘッダー・フッター
  header: 'h-16 lg:h-20',
  footer: 'py-12 lg:py-16',
} as const

// ボーダー
export const borders = {
  rounded: 'rounded-lg',
  roundedFull: 'rounded-full',
  border: 'border border-[var(--site-border)]',
  borderTop: 'border-t border-[var(--site-border)]',
} as const

// シャドウ
export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  hover: 'hover:shadow-2xl',
} as const

// Z-Index（重なり順）
export const zIndex = {
  dropdown: 'z-10',
  sticky: 'z-20',
  fixed: 'z-30',
  modalBackdrop: 'z-40',
  modal: 'z-50',
  popover: 'z-60',
  tooltip: 'z-70',
} as const

// ブレークポイント（参考：Tailwind CSS デフォルト）
export const breakpoints = {
  sm: '640px',   // スマートフォン横向き、小型タブレット
  md: '768px',   // タブレット
  lg: '1024px',  // ノートPC、デスクトップ
  xl: '1280px',  // 大型デスクトップ
  '2xl': '1536px', // 超大型ディスプレイ
} as const


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
  // ベース背景
  bg: {
    primary: 'bg-black',
    secondary: 'bg-gray-900',
    gradient: 'bg-gradient-to-b from-black to-gray-900',
  },
  // テキスト
  text: {
    primary: 'text-white',
    secondary: 'text-gray-200',
    muted: 'text-gray-400',
    disabled: 'text-gray-500',
  },
  // アクセント（最先端）
  accent: {
    primary: 'text-blue-400',
    secondary: 'text-cyan-400',
    bg: 'bg-blue-500',
    bgHover: 'hover:bg-blue-600',
    text: 'text-blue-400',
  },
  // アクセント（高級感）
  luxury: {
    border: 'border-gray-700',
    gold: 'text-yellow-400',
  },
  // ボーダー
  border: {
    default: 'border-gray-700',
    accent: 'border-blue-400',
    muted: 'border-gray-600',
  },
  // 状態カラー
  state: {
    hover: 'hover:bg-gray-800',
    focus: 'focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900',
    disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
  },
} as const

// タイポグラフィ（フォントサイズ）
export const typography = {
  // 見出し
  h1: 'text-4xl lg:text-6xl font-bold',
  h2: 'text-3xl lg:text-5xl font-bold',
  h3: 'text-2xl lg:text-3xl font-bold',
  h4: 'text-xl lg:text-2xl font-bold',
  // 本文
  body: 'text-base lg:text-lg leading-relaxed',
  bodyLarge: 'text-lg lg:text-xl leading-relaxed',
  // その他
  small: 'text-sm lg:text-base',
  caption: 'text-xs lg:text-sm text-gray-400',
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
  section: 'py-24 lg:py-32',
  sectionSmall: 'py-12 lg:py-16',
  // ヘッダー・フッター
  header: 'h-16 lg:h-20',
  footer: 'py-12 lg:py-16',
} as const

// ボーダー
export const borders = {
  rounded: 'rounded-lg',
  roundedFull: 'rounded-full',
  border: 'border border-gray-700',
  borderTop: 'border-t border-gray-800',
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


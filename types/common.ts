/**
 * 共通型定義
 * 単一責任の原則に従い、共通で使用される型定義のみを管理
 */

// 基本的なバリアント型定義
export type Variant = 'default' | 'dark' | 'accent'
export type Size = 'sm' | 'md' | 'lg' | 'xl'
export type Alignment = 'left' | 'center' | 'right'

// レスポンシブブレークポイント型定義
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// カラーバリアント型定義
export type ColorVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'

// アニメーション型定義
export type AnimationType = 'fade' | 'slide' | 'scale' | 'bounce'
export type AnimationDirection = 'up' | 'down' | 'left' | 'right'

// レイアウト型定義
export type LayoutType = 'grid' | 'flex' | 'block'
export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12

// フォーム関連の型定義
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'
  required?: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
}

// ナビゲーション関連の型定義
export interface NavItem {
  id: string
  label: string
  href: string
  icon?: React.ReactNode
  children?: NavItem[]
  external?: boolean
}

// メタデータの型定義
export interface MetaData {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

// API レスポンスの型定義
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// ページネーションの型定義
export interface PaginationData {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
}

// フィルターの型定義
export interface FilterOption {
  value: string
  label: string
  count?: number
}

// ソートの型定義
export interface SortOption {
  field: string
  direction: 'asc' | 'desc'
  label: string
}

// 検索の型定義
export interface SearchParams {
  query?: string
  filters?: Record<string, string[]>
  sort?: SortOption
  page?: number
  limit?: number
}

// ユーティリティ型定義
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type Required<T, K extends keyof T> = T & { [P in K]-?: T[P] }
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// イベントハンドラーの型定義
export type EventHandler<T = void> = (event: React.SyntheticEvent) => T
export type AsyncEventHandler<T = void> = (event: React.SyntheticEvent) => Promise<T>

// 状態管理の型定義
export interface State<T> {
  data: T | null
  loading: boolean
  error: string | null
}

// アクションの型定義
export interface Action<T = any> {
  type: string
  payload?: T
}

// リデューサーの型定義
export type Reducer<S, A> = (state: S, action: A) => S

// コンテキストの型定義
export interface ContextValue<T> {
  value: T
  setValue: (value: T) => void
}

// フックの型定義
export interface UseStateReturn<T> {
  value: T
  setValue: (value: T) => void
}

export interface UseAsyncReturn<T> {
  data: T | null
  loading: boolean
  error: string | null
  execute: () => Promise<void>
}

// コンポーネントの共通Props型定義
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
  id?: string
  'data-testid'?: string
}

// フォーカス可能な要素の型定義
export interface FocusableProps {
  tabIndex?: number
  onFocus?: EventHandler
  onBlur?: EventHandler
  onKeyDown?: EventHandler<KeyboardEvent>
}

// アクセシビリティの型定義
export interface AccessibilityProps {
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-expanded'?: boolean
  'aria-hidden'?: boolean
  role?: string
}

// パフォーマンス関連の型定義
export interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  bundleSize: number
}

// エラーハンドリングの型定義
export interface ErrorBoundaryProps {
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

// 国際化の型定義
export interface I18nData {
  locale: string
  messages: Record<string, string>
  formats: Record<string, any>
}

// テーマの型定義
export interface ThemeData {
  colors: Record<string, string>
  fonts: Record<string, string>
  spacing: Record<string, string>
  breakpoints: Record<string, string>
}

// カードデータの型定義
export interface CardData {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
  image?: string
  modalTitle?: string
  modalSize?: 'sm' | 'md' | 'lg' | 'xl'
  modalContent?: React.ReactNode
}
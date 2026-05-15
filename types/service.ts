/**
 * サービスページ用の型定義
 * 単一責任の原則に従い、型定義のみを管理
 */

// タブデータの型定義
export interface TabData {
  id: string
  name: string
  content: React.ReactNode
}

// タブコンテナのProps型定義
export interface TabContainerProps {
  tabs: TabData[]
  defaultTab?: string
  className?: string
}

// サービスカードの型定義
export interface ServiceCardData {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
  tags?: string[]
  onClick?: () => void
}

// セクションデータの型定義
export interface SectionData {
  id: string
  type: 'hero' | 'single' | 'two-column' | 'three-cards' | 'tabs' | 'related'
  title?: string
  content: React.ReactNode
  className?: string
}

// セクションのProps型定義
export interface SectionProps {
  data: SectionData
  className?: string
}

// モーダルのProps型定義
export interface ModalProps {
  children: React.ReactNode
  buttonText?: string
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

// モーダルトリガーのProps型定義
export interface ModalTriggerProps {
  children: React.ReactNode
  modalContent: React.ReactNode
  buttonText?: string
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

// HeroセクションのProps型定義
export interface HeroSectionProps {
  title: string
  subText: string
  className?: string
}

// サービスナビゲーションリンクのデータ型定義
export interface ServiceLinkData {
  id: string
  name: string
  href: string
}

// サービスナビゲーションのProps型定義
export interface ServiceNavigationProps {
  serviceLinks: ServiceLinkData[]
  currentServiceId?: string // 現在のサービスをハイライトするために使用
  className?: string
}

// サービスカードのバリアント型定義
export type ServiceCardVariant = 'default' | 'feature' | 'technology'

// サービスカードのProps型定義
export interface ServiceCardProps {
  data?: ServiceCardData
  // 直接プロパティとしても受け取れるようにする
  title?: string
  description?: string
  icon?: React.ReactNode
  tags?: string[]
  variant?: ServiceCardVariant
  className?: string
  onClick?: () => void
}

// 機能カードのProps型定義
export interface FeatureCardProps {
  data?: ServiceCardData
  title?: string
  description?: string
  icon?: React.ReactNode
  tags?: string[]
  className?: string
  onClick?: () => void
}

// 技術カードのProps型定義
export interface TechnologyCardProps {
  data?: ServiceCardData
  title?: string
  description?: string
  icon?: React.ReactNode
  tags?: string[]
  className?: string
  onClick?: () => void
}

// カードデータの型定義（ThreeCardSection用）
export interface CardData {
  title: string
  description: string
  icon?: React.ReactNode
  image?: string
  tags?: string[]
  href?: string
  onClick?: () => void
}

// 関連サービスデータの型定義
export interface RelatedServiceData {
  id: string
  title: string
  description: string
  image?: string
  icon?: string
  href: string
  tags?: string[]
}

// FAQデータの型定義
export interface FAQData {
  id: string
  question: string
  answer: string
  category?: string
}

// サービスページ全体のデータ型定義
export interface ServicePageData {
  id: string
  title: string
  description: string
  hero: {
    title: string
    subtitle: string
  }
  sections: ServiceSectionData[]
  relatedServices?: RelatedServiceData[]
  faqs?: FAQData[]
}

// サービスセクションデータの型定義
export interface ServiceSectionData {
  id: string
  type: 'hero' | 'single' | 'two-column' | 'three-cards' | 'tabs' | 'related' | 'faq'
  title?: string
  subtitle?: string
  description?: string
  content?: React.ReactNode
  data?: any // セクション固有のデータ
  className?: string
  variant?: 'default' | 'dark' | 'accent'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  tabLayout?: 'auto' | 'compact' | 'wide' // タブレイアウトの設定
}

// サービス一覧の型定義
export interface ServiceListData {
  id: string
  name: string
  description: string
  href: string
  icon?: React.ReactNode
  tags?: string[]
  featured?: boolean
}

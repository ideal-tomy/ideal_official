/**
 * サービスページ用の型定義
 * 実際に参照されている型のみを残す
 */

export interface ModalProps {
  children: React.ReactNode
  buttonText?: string
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export interface ServiceLinkData {
  id: string
  name: string
  href: string
}

export interface ServiceNavigationProps {
  serviceLinks: ServiceLinkData[]
  currentServiceId?: string
  className?: string
}

export interface RelatedServiceData {
  id: string
  title: string
  description: string
  image?: string
  icon?: string
  href: string
  tags?: string[]
}

export interface FAQData {
  id: string
  question: string
  answer: string
  category?: string
}

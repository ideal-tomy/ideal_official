import { ServiceLinkData } from '../../types/service'

/** サービスページ横断ナビ（ServiceNavigation 用） */
export const serviceNavLinks: ServiceLinkData[] = [
  { id: 'web-development', name: 'Webサイト制作', href: '/services/web-development' },
  { id: 'app-development', name: 'アプリ開発', href: '/services/app-development' },
  { id: 'ai-consulting', name: 'AI', href: '/services/ai-consulting' },
  { id: 'blockchain-development', name: 'ブロックチェーン・DAO', href: '/services/blockchain-development' },
  { id: 'metaverse', name: 'メタバース・空間構築', href: '/services/metaverse' },
]

/** Header / Footer ドロップダウン用 */
export const headerFooterServiceLinks: { href: string; label: string }[] = [
  { href: '/services/web-development', label: 'Webサイト制作' },
  { href: '/services/app-development', label: 'アプリ開発' },
  { href: '/services/ai-consulting', label: 'AI' },
  { href: '/services/blockchain-development', label: 'ブロックチェーン・DAO' },
  { href: '/services/metaverse', label: 'メタバース・空間構築' },
]

/** RelatedServicesSection 等で使う共通リンク（旧 serviceLinks 互換） */
export const serviceLinks: ServiceLinkData[] = serviceNavLinks

export const SERVICE_IDS = {
  web: 'web-development',
  app: 'app-development',
  ai: 'ai-consulting',
  blockchain: 'blockchain-development',
  metaverse: 'metaverse',
} as const

export type ServiceId = (typeof SERVICE_IDS)[keyof typeof SERVICE_IDS]

export const getServiceLabel = (id: string): string => {
  const found = serviceNavLinks.find((s) => s.id === id)
  return found?.name ?? id
}

export const getCurrentServiceId = (pathname: string): string => {
  const pathSegments = pathname.split('/')
  const servicePath = pathSegments[pathSegments.length - 1]

  switch (servicePath) {
    case 'ai-consulting':
      return 'ai-consulting'
    case 'web-development':
      return 'web-development'
    case 'app-development':
      return 'app-development'
    case 'blockchain-development':
      return 'blockchain-development'
    case 'metaverse':
      return 'metaverse'
    case 'dao-design':
      return 'blockchain-development'
    default:
      return 'web-development'
  }
}

/**
 * サービス一覧データ
 * トップページのサービス紹介セクション用
 */

export interface ServiceOverviewData {
  id: string
  title: string
  description: string
  image: string
  link: string
  linkText: string
  category: string
  featured: boolean
}

export const servicesOverviewData: ServiceOverviewData[] = [
  {
    id: 'web-development',
    title: 'Webサイト制作',
    description: 'コーポレートサイト、EC、業務Webアプリまで。Next.jsを中心としたモダンな開発を提供します。',
    image: '/images/top_web.png',
    link: '/services/web-development',
    linkText: 'Web開発詳細へ>>',
    category: 'Web開発',
    featured: true,
  },
  {
    id: 'app-development',
    title: 'アプリ開発',
    description: 'iOS・Android、クロスプラットフォーム、スマホゲームまで幅広く対応します。',
    image: '/images/top_app.png',
    link: '/services/app-development',
    linkText: 'アプリ開発詳細へ>>',
    category: 'アプリ開発',
    featured: true,
  },
  {
    id: 'ai-consulting',
    title: 'AI',
    description: 'AI導入コンサル、業務自動化、プロダクトへのAI組み込みを支援します。',
    image: '/images/top_ai.png',
    link: '/services/ai-consulting',
    linkText: 'AI関連詳細へ>>',
    category: 'AI',
    featured: true,
  },
  {
    id: 'blockchain-development',
    title: 'ブロックチェーン・DAO',
    description: 'トークン、スマートコントラクト、DAOガバナンス・組織ルールメイクまで支援します。',
    image: '/images/sv_bc.png',
    link: '/services/blockchain-development',
    linkText: 'ブロックチェーン・DAO詳細へ>>',
    category: 'ブロックチェーン',
    featured: true,
  },
]

export const getFeaturedServices = (): ServiceOverviewData[] => {
  return servicesOverviewData.filter((service) => service.featured)
}

export const getServicesByCategory = (category: string): ServiceOverviewData[] => {
  return servicesOverviewData.filter((service) => service.category === category)
}

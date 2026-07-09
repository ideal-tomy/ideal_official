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
    title: 'Webアプリ・業務ツール',
    description: 'Excelや手作業の業務を、動くWebアプリや業務ツールに変えます。',
    image: '/images/top_app.png',
    link: '/services/app-development',
    linkText: '操作デモを見る →',
    category: '業務ツール',
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
    title: 'Blockchain / DAO',
    description: '分散型技術の思想・研究・実験。Philosophy、Research、PoCデモへの入口。',
    image: '/images/sv_bc.png',
    link: '/lab/blockchain',
    linkText: 'LAB を見る →',
    category: 'LAB',
    featured: false,
  },
]

export const getFeaturedServices = (): ServiceOverviewData[] => {
  return servicesOverviewData.filter((service) => service.featured)
}

export const getServicesByCategory = (category: string): ServiceOverviewData[] => {
  return servicesOverviewData.filter((service) => service.category === category)
}

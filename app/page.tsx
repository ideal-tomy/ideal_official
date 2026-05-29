/**
 * トップページ
 * 
 * サーバーコンポーネント（データフェッチなし）
 * Hero, TwoCardSection, ServiceGridSection, DAOOverviewSection, CallToAction セクションで構成
 */

import { Hero } from '../components/sections/Hero'
import { TwoCardSectionFixed } from '../components/sections/TwoCardSectionFixed'
import ServiceGridSectionFixed from '../components/sections/ServiceGridSectionFixed'
import DAOOverviewSection from '../components/sections/DAOOverviewSection'
import CallToAction from '../components/sections/CallToAction'

export default function Home() {
  // 私たちの取り組みデータ（2枚並び）
  const twoCardData = [
    {
      id: 'it-services',
      title: 'ITサービス提供',
      description:
        'Webサイト制作、アプリ開発（ゲーム含む）、AI導入など、スタートアップの技術支援とコンサル会社の実装パートナーとして伴走します。',
      image: '/images/sv_web.png',
      link: '/services',
      linkText: 'ITサービス一覧へ>>',
      priority: true,
    },
    {
      id: 'dao-research',
      title: 'DAO研究・取り組み',
      description:
        '分散型自律組織（DAO）の研究を通じて、透明性と自律性を重視した組織のあり方を探求しています。思想・研究はこちらから。',
      image: '/images/sv_DAO.png',
      link: '/philosophy',
      linkText: 'DAO研究・取り組みへ>>',
      priority: true,
    },
  ]

  // 提供サービスデータ（4枚並び）
  const serviceData = [
    {
      id: 'web-development',
      title: 'Webサイト制作',
      description: 'Next.jsを中心としたコーポレートサイト、EC、業務Webアプリの開発に対応します。',
      image: '/images/top_web.png',
      link: '/services/web-development',
      linkText: 'Web開発詳細へ>>',
    },
    {
      id: 'app-development',
      title: 'アプリ開発',
      description: 'ネイティブ・クロスプラットフォームアプリ、スマホゲームの企画・開発に対応します。',
      image: '/images/top_app.png',
      link: '/services/app-development',
      linkText: 'アプリ開発詳細へ>>',
    },
    {
      id: 'ai-consulting',
      title: 'AI',
      description: 'AI導入コンサル、業務自動化、プロダクトへのAI組み込みを支援します。',
      image: '/images/top_ai.png',
      link: '/services/ai-consulting',
      linkText: 'AI関連詳細へ>>',
    },
    {
      id: 'blockchain-development',
      title: 'ブロックチェーン・DAO',
      description: 'トークン、スマートコントラクト、DAOガバナンス・組織ルールメイクまで支援します。',
      image: '/images/top_bc.png',
      link: '/services/blockchain-development',
      linkText: 'ブロックチェーン・DAO詳細へ>>',
    },
  ]

  return (
    <>
      <Hero />
      <TwoCardSectionFixed
        cards={twoCardData}
      />
      <ServiceGridSectionFixed
        title="提供サービス"
        description="Web・アプリ・AIを中心に、スタートアップの技術支援とコンサル会社の実装パートナーとして伴走します。"
        services={serviceData}
      />
      <DAOOverviewSection />
      <CallToAction />
    </>
  )
}

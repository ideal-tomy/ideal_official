import { Metadata } from 'next'
import { HeroSection } from '../../components/sections/HeroSection'
import { ServiceNavigation } from '../../components/sections/ServiceNavigation'
import { Section } from '../../components/ui/Section'
import { colors, typography } from '../../lib/design-tokens'
import { ServiceLinkData } from '../../types/service'

export const metadata: Metadata = {
  title: 'ヒーローセクションコンポーネントテスト | ideal',
  description: 'ヒーローセクションとサービスナビゲーションコンポーネントの動作確認用ページ',
}

/**
 * ヒーローセクションコンポーネントのテストページ
 * 単一責任: ヒーローセクションコンポーネントの動作確認のみ
 */
export default function TestHeroPage() {
  // テスト用のサービスリンクデータ
  const serviceLinks: ServiceLinkData[] = [
    { id: 'ai', name: 'AI', href: '/services/ai-consulting' },
    { id: 'app', name: 'アプリ開発', href: '/services/app-development' },
    { id: 'blockchain', name: 'ブロックチェーン', href: '/services/blockchain-development' },
    { id: 'career', name: 'キャリアコンサル', href: '/services/career-consulting' },
    { id: 'english', name: '英語コンサル', href: '/services/english-consulting' },
    { id: 'game', name: 'ゲーム開発', href: '/services/game-development' },
    { id: 'metaverse', name: 'メタバース', href: '/services/metaverse' },
    { id: 'nft', name: 'NFT', href: '/services/nft' },
    { id: 'study', name: '留学コンサル', href: '/services/study-abroad' },
    { id: 'web', name: 'Web開発', href: '/services/web-development' }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* ヒーローセクションのテスト */}
      <HeroSection
        title="AI開発"
        subText="最新のAI技術で、ビジネスに革新をもたらす"
      />

      {/* サービスナビゲーションのテスト */}
      <ServiceNavigation
        serviceLinks={serviceLinks}
        currentServiceId="ai"
      />

      {/* コンテンツセクション */}
      <Section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
              AI技術の可能性
            </h2>
            <p className={`${typography.body} ${colors.text.secondary} mb-4`}>
              人工知能（AI）は、ビジネスプロセスの自動化、データ分析、意思決定支援など、様々な領域で革新的なソリューションを提供します。IDEALでは、最新のAI技術と実務経験を組み合わせ、クライアント様の課題に最適なAIソリューションを提供します。
            </p>
            <p className={`${typography.body} ${colors.text.secondary}`}>
              機械学習、深層学習、自然言語処理など、先進的なAI技術を活用し、ビジネスの効率化と価値創造を実現します。
            </p>
          </div>
        </div>
      </Section>

      {/* 異なるサービスでのテスト */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`${typography.h2} ${colors.text.primary} mb-8 text-center`}>
            異なるサービスでの表示テスト
          </h2>
          
          <div className="space-y-16">
            {/* アプリ開発 */}
            <div>
              <HeroSection
                title="アプリ開発"
                subText="最新のモバイル技術で、ビジネスのデジタル化を実現"
              />
              <ServiceNavigation
                serviceLinks={serviceLinks}
                currentServiceId="app"
              />
            </div>

            {/* ブロックチェーン開発 */}
            <div>
              <HeroSection
                title="ブロックチェーン開発"
                subText="分散型技術で、ビジネスの未来を創造する"
              />
              <ServiceNavigation
                serviceLinks={serviceLinks}
                currentServiceId="blockchain"
              />
            </div>

            {/* ゲーム開発 */}
            <div>
              <HeroSection
                title="ゲーム制作"
                subText="没入感のあるゲーム体験を創造。PC・モバイル・コンソール向けのゲーム開発サービス"
              />
              <ServiceNavigation
                serviceLinks={serviceLinks}
                currentServiceId="game"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


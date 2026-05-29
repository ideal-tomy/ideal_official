import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { HeroSection } from '../../../components/sections/HeroSection'
import { ServiceNavigation } from '../../../components/sections/ServiceNavigation'
import { SingleColumnSection } from '../../../components/sections/SingleColumnSection'
import { TwoColumnSection } from '../../../components/sections/TwoColumnSection'

// 重いコンポーネントを動的インポート（レンダリングブロック解消）
const ThreeCardSection = dynamic(() => import('../../../components/sections/ThreeCardSection').then(mod => ({ default: mod.ThreeCardSection })), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-64" />
})

const TabSection = dynamic(() => import('../../../components/sections/TabSection').then(mod => ({ default: mod.TabSection })), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-64" />
})

const FAQSection = dynamic(() => import('../../../components/sections/FAQSection').then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-64" />
})

const RelatedServicesSection = dynamic(() => import('../../../components/sections/RelatedServicesSection').then(mod => ({ default: mod.RelatedServicesSection })), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-64" />
})

import { webDevelopmentData } from '../../../data/services/web-development'
import { serviceNavLinks } from '../../../data/services/service-links'
import { serviceIntroContent } from '../../../data/services/service-intro-content'
import { ServiceIntroBanner } from '../../../components/sections/ServiceIntroBanner'
import { ServiceBannerSection } from '../../../components/sections/ServiceBannerSection'
import { ServiceAiCta } from '../../../components/sections/ServiceAiCta'
import {
  getThreeCardsData,
  getTwoColumnData,
  getTabsData,
} from '../../../lib/service-section-data'

export const metadata: Metadata = {
  title: 'Web開発 | ideal',
  description: '高品質なWeb開発サービス。レスポンシブデザイン、SEO最適化、高速パフォーマンスを実現します。',
  openGraph: {
    title: 'Web開発 | ideal',
    description: '高品質なWeb開発サービス。レスポンシブデザイン、SEO最適化、高速パフォーマンスを実現します。',
  },
}

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* セクション0: ヒーローセクション */}
      <div className="border-b border-blue-400">
        <HeroSection
          title={webDevelopmentData.hero.title}
          subText={webDevelopmentData.hero.subtitle}
        />
      </div>

      {/* サービスナビゲーション */}
      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="web-development"
      />

      <ServiceIntroBanner {...serviceIntroContent['web-development']} />

      {/* セクション1: 技術説明 */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title={webDevelopmentData.sections[0].title}
          description={webDevelopmentData.sections[0].description}
          variant="dark"
        >
          {webDevelopmentData.sections[0].content}
        </SingleColumnSection>
      </div>

      <ServiceBannerSection
        title={webDevelopmentData.sections[1].title!}
        description={webDevelopmentData.sections[1].description!}
        imageSrc="/images/web_para.png"
      >
        {webDevelopmentData.sections[1].content}
      </ServiceBannerSection>

      {/* セクション3: 活用方法 */}
      <div className="border-b border-blue-400">
        <ThreeCardSection
          title={webDevelopmentData.sections[2].title}
          description={webDevelopmentData.sections[2].description}
          cards={getThreeCardsData(webDevelopmentData.sections[2].data).cards}
          variant="dark"
          enableMobileScroll={true}
        />
      </div>

      {/* セクション4: 説明セクション */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title={webDevelopmentData.sections[3].title}
          description={webDevelopmentData.sections[3].description}
          variant="dark"
        >
          {webDevelopmentData.sections[3].content}
        </SingleColumnSection>
      </div>

      {/* セクション5: 比較セクション */}
      <div className="border-b border-blue-400">
        <TwoColumnSection
          title={webDevelopmentData.sections[4].title}
          leftContent={getTwoColumnData(webDevelopmentData.sections[4].data).leftContent}
          rightContent={getTwoColumnData(webDevelopmentData.sections[4].data).rightContent}
          variant="dark"
          textAlign="center"
        />
      </div>

      {/* セクション6: 導入要素 */}
      <div className="border-b border-blue-400">
        <ThreeCardSection
          title={webDevelopmentData.sections[5].title}
          description={webDevelopmentData.sections[5].description}
          cards={getThreeCardsData(webDevelopmentData.sections[5].data).cards}
          variant="dark"
          enableMobileScroll={true}
        />
      </div>

      {/* セクション7: 理由説明 */}
      <div className="border-b border-blue-400">
        <TwoColumnSection
          title={webDevelopmentData.sections[6].title}
          leftContent={getTwoColumnData(webDevelopmentData.sections[6].data).leftContent}
          rightContent={getTwoColumnData(webDevelopmentData.sections[6].data).rightContent}
          variant="dark"
        />
      </div>

      {/* セクション8: 技術提供 */}
      <div className="border-b border-blue-400">
        <TabSection
          title={webDevelopmentData.sections[7].title}
          tabs={getTabsData(webDevelopmentData.sections[7].data).tabs.map((tab) => {
            const content = tab.content
            const isThreeCards =
              content &&
              typeof content === 'object' &&
              'type' in content &&
              (content as { type: string }).type === 'three-cards'

            return {
              ...tab,
              content: isThreeCards ? (
                <ThreeCardSection
                  cards={getThreeCardsData(content).cards}
                  variant="dark"
                  padding="sm"
                  enableMobileScroll={true}
                />
              ) : (
                content
              ),
            }
          })}
          defaultTab={getTabsData(webDevelopmentData.sections[7].data).defaultTab}
          variant="dark"
        />
      </div>

      {/* セクション9: FAQ */}
      <div className="border-b border-blue-400">
        <FAQSection
          title="よくある質問"
          faqs={webDevelopmentData.faqs || []}
          variant="dark"
        />
      </div>

      {/* セクション10: 関連サービス */}
      <div className="border-b border-blue-400">
        <RelatedServicesSection
          title="関連サービス"
          services={webDevelopmentData.relatedServices || []}
          variant="dark"
        />
      </div>

      <ServiceAiCta serviceId="web-development" />
    </div>
  )
}

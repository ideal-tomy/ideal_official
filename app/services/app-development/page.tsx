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

export const metadata: Metadata = {
  title: 'アプリ開発 | ideal',
  description: 'iOS・Android・Webアプリの開発サービス。ネイティブアプリからクロスプラットフォームまで対応します。',
  openGraph: {
    title: 'アプリ開発 | ideal',
    description: 'iOS・Android・Webアプリの開発サービス。ネイティブアプリからクロスプラットフォームまで対応します。',
  },
}

import { serviceIntroContent } from '../../../data/services/service-intro-content'
import { ServiceIntroBanner } from '../../../components/sections/ServiceIntroBanner'
import { ServiceBannerSection } from '../../../components/sections/ServiceBannerSection'
import { ServiceAiCta } from '../../../components/sections/ServiceAiCta'
import { serviceNavLinks } from '../../../data/services/service-links'

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* セクション0: ヒーローセクション */}
      <div className="border-b border-blue-400">
        <HeroSection
          title="アプリ開発"
          subText="iOS・Android対応のアプリやスマホゲーム作成まで"
        />
      </div>

      {/* セクション0.5: サービスナビゲーション */}
      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="app-development"
      />

      <ServiceIntroBanner {...serviceIntroContent['app-development']} />


      {/* セクション1: 技術説明 */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title="アプリ技術の可能性"
          description="モバイルアプリは、ビジネスのデジタル化、顧客とのコミュニケーション、サービスの提供など、様々な領域で革新的なソリューションを提供します。IDEALでは、最新のモバイル技術と実務経験を組み合わせ、クライアント様の課題に最適なアプリソリューションを提供します。"
          variant="dark"
        >
          <div className="mt-6">
            <p className="text-gray-300 leading-relaxed">
              ネイティブアプリとクロスプラットフォームの技術的優位性を活かし、
              ユーザーエクスペリエンスを最大化するアプリケーションを開発します。
            </p>
          </div>
        </SingleColumnSection>
      </div>

      <ServiceBannerSection
        title="アプリ活用がもたらす大きな恩恵"
        description="スマートフォンの普及により、アプリは企業と顧客を直接つなぐ重要なチャネルとなっています。"
        imageSrc="/images/app_para.png"
      >
        <div className="mt-6">
          <p className="text-gray-300 leading-relaxed">
            中小企業こそ、アプリを活用することで顧客との距離を縮め、
            効率的なビジネス運営を実現できます。
          </p>
        </div>
      </ServiceBannerSection>

      {/* セクション3: 活用方法 */}
      <div className="border-b border-blue-400">
        <ThreeCardSection
          title="具体的な活用方法"
          description="アプリ開発技術を活用した具体的なビジネスソリューションをご提案します"
          enableMobileScroll={true}
          modalPack="app-development"
          cards={[
            {
              title: '会員アプリ',
              description: '顧客管理、ポイントシステム、プッシュ通知など、顧客との継続的な関係構築を支援します。',
              tags: ['CRM', 'ポイント', '通知'],
              modalTitle: '会員アプリ',
              modalId: '会員アプリ',
              modalSize: "lg"
            },
            {
              title: 'ゲームアプリ',
              description: 'エンターテインメント性の高いゲームアプリで、ブランド認知度向上と収益化を実現します。',
              tags: ['Unity', 'ゲーム', 'エンターテインメント'],
              modalTitle: 'ゲームアプリ',
              modalId: 'ゲームアプリ',
              modalSize: "lg"
            },
            {
              title: '社内業務アプリ',
              description: '従業員の業務効率化、情報共有、勤怠管理など、社内システムのデジタル化を支援します。',
              tags: ['業務効率化', '勤怠管理', '情報共有'],
              modalTitle: '社内業務アプリ',
              modalId: '社内業務アプリ',
              modalSize: "lg"
            }
          ]}
          variant="dark"
        />
      </div>

      {/* セクション4: 説明セクション */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title="スマホアプリが生み出す効率化"
          description="スマホネイティブ世代を中心とした顧客、または社員やアルバイトに至るまで、スマホによるサービス提供環境や情報発信環境、社内業務の連携、ゲームによってメッセージを伝えるブランディングなど、活用方法は多岐にわたります。"
          variant="dark"
        >
          <div></div>
        </SingleColumnSection>
      </div>

      {/* セクション5: 比較セクション */}
      <div className="border-b border-blue-400">
        <TwoColumnSection
          title="従来技術との比較"
          textAlign="center"
          leftContent={
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">従来のアプリ開発</h3>
              <ul className="space-y-3 text-gray-300 inline-block text-left">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>単一プラットフォーム対応</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>開発効率が低い</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>メンテナンス性が低い</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>パフォーマンスが低い</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>セキュリティ対策が不十分</span>
                </li>
              </ul>
            </div>
          }
          rightContent={
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">最新のアプリ開発</h3>
              <ul className="space-y-3 text-gray-300 inline-block text-left">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>クロスプラットフォーム対応</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>効率的な開発</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>高いメンテナンス性</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>最適化されたパフォーマンス</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>包括的なセキュリティ対策</span>
                </li>
              </ul>
            </div>
          }
          variant="dark"
        />
      </div>

      {/* セクション6: 導入要素 */}
      <div className="border-b border-blue-400">
        <ThreeCardSection
          title="導入に必要な要素"
          description="アプリ開発成功のための3つの重要な要素をご説明します"
          enableMobileScroll={true}
          modalPack="app-development"
          cards={[
            {
              title: "技術要素",
              description: "アプリ開発に必要な技術的な要素を整理します。",
              tags: ["フロントエンド開発", "バックエンド開発", "データベース設計", "クラウドインフラ", "セキュリティ対策"],
              modalTitle: "技術要素",
              modalId: "技術要素",
              modalSize: "lg"
            },
            {
              title: "ビジネス要素",
              description: "アプリ開発に必要なビジネス的な要素を整理します。",
              tags: ["要件定義", "コンテンツ戦略", "マーケティング計画", "運用体制", "ROI分析"],
              modalTitle: "ビジネス要素",
              modalId: "ビジネス要素",
              modalSize: "lg"
            },
            {
              title: "人材要素",
              description: "アプリ開発に必要な人材的な要素を整理します。",
              tags: ["フロントエンド開発者", "バックエンド開発者", "UI/UXデザイナー", "プロジェクトマネージャー", "コンテンツ制作者"],
              modalTitle: "人材要素",
              modalId: "人材要素",
              modalSize: "lg"
            }
          ]}
          variant="dark"
        />
      </div>

      {/* セクション7: 理由説明 */}
      <div className="border-b border-blue-400">
        <TwoColumnSection
          title="なぜ今、導入が必要なのか"
          description="モバイル時代において、アプリケーションは企業の顔であり、ビジネスの成長を支える重要なプラットフォームです。以下の理由から、今アプリケーションの開発が重要です："
          leftContent={
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">市場動向と消費者変化</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">📱</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    モバイルアプリの利用が増加し、ビジネスチャンスが拡大
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">🌍</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    グローバル市場での競争力強化のため、多言語対応が重要に
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">👤</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    ユーザー体験の質が、ビジネスの成功を左右する
                  </p>
                </div>
              </div>
            </div>
          }
          rightContent={
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">技術革新と競争優位性</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">⚡</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    最新のアプリ開発技術による高速なパフォーマンス
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">🔒</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    セキュリティ対策の強化による信頼性の向上
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">📊</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    データ分析とマーケティングの統合
                  </p>
                </div>
              </div>
            </div>
          }
          variant="dark"
        />
      </div>

      {/* セクション8: 技術提供 */}
      <div className="border-b border-blue-400">
        <TabSection
          title="技術提供"
          tabs={[
            {
              id: 'development',
              name: '開発',
              content: (
                <ThreeCardSection
                  padding="sm"
                  enableMobileScroll={true}
          modalPack="app-development"
                  cards={[
                    {
                      title: 'iOSアプリ開発',
                      description: 'SwiftやObjective-Cを使用し、高品質なiOSアプリケーションを開発します。',
                      tags: ['Swift', 'Objective-C', 'iOS'],
                      modalTitle: 'iOSアプリ開発',
                      modalId: 'iOSアプリ開発',
                      modalSize: "lg"
                    },
                    {
                      title: 'Androidアプリ開発',
                      description: 'KotlinやJavaを使用し、安定性の高いAndroidアプリケーションを開発します。',
                      tags: ['Kotlin', 'Java', 'Android'],
                      modalTitle: 'Androidアプリ開発',
                      modalId: 'Androidアプリ開発',
                      modalSize: "lg"
                    },
                    {
                      title: 'クロスプラットフォーム開発',
                      description: 'React NativeやFlutterを使用し、効率的なクロスプラットフォーム開発を実現します。',
                      tags: ['React Native', 'Flutter', 'クロスプラットフォーム'],
                      modalTitle: 'クロスプラットフォーム開発',
                      modalId: 'クロスプラットフォーム開発',
                      modalSize: "lg"
                    }
                  ]}
                  variant="dark"
                />
              )
            },
            {
              id: 'consulting',
              name: 'コンサルティング',
              content: (
                <ThreeCardSection
                  padding="sm"
                  enableMobileScroll={true}
          modalPack="app-development"
                  cards={[
                    {
                      title: 'アプリ戦略立案',
                      description: '企業のアプリ戦略の策定、ユースケースの特定、ROI分析など、包括的な導入計画を支援します。',
                      tags: ['戦略立案', 'ROI分析', '導入計画'],
                      modalTitle: 'アプリ戦略立案',
                      modalId: 'アプリ戦略立案',
                      modalSize: "lg"
                    },
                    {
                      title: 'セキュリティ対策',
                      description: '最新のセキュリティ基準に準拠し、安全で信頼性の高いアプリケーションを構築します。',
                      tags: ['セキュリティ', '暗号化', '認証'],
                      modalTitle: 'セキュリティ対策',
                      modalId: 'セキュリティ対策',
                      modalSize: "lg"
                    },
                    {
                      title: '運用サポート',
                      description: 'アプリケーションの継続的な運営支援、コンテンツ管理、パフォーマンス最適化をサポートします。',
                      tags: ['運用支援', 'コンテンツ管理', '最適化'],
                      modalTitle: '運用サポート',
                      modalId: '運用サポート',
                      modalSize: "lg"
                    }
                  ]}
                  variant="dark"
                />
              )
            }
          ]}
          defaultTab="development"
          variant="dark"
        />
      </div>

      {/* セクション9: FAQ */}
      <div className="border-b border-blue-400">
        <FAQSection
          title="よくある質問"
          faqs={[
            {
              id: 'faq-1',
              question: 'アプリ開発にはどのくらいの期間がかかりますか？',
              answer: 'プロジェクトの規模や複雑さによって異なりますが、一般的には3ヶ月から6ヶ月程度です。'
            },
            {
              id: 'faq-2',
              question: 'iOSとAndroidの両方に対応できますか？',
              answer: 'はい、ネイティブ開発またはクロスプラットフォーム開発で両方に対応可能です。'
            },
            {
              id: 'faq-3',
              question: 'アプリの運用・保守はどのように行いますか？',
              answer: '継続的なアップデート、バグ修正、セキュリティ更新など、包括的な運用サポートを提供します。'
            },
            {
              id: 'faq-4',
              question: 'ゲームアプリの開発も可能ですか？',
              answer: 'はい、UnityやUnreal Engineを使用したゲームアプリ開発も対応しています。'
            },
            {
              id: 'faq-5',
              question: 'アプリストアへの申請サポートはありますか？',
              answer: 'App StoreやGoogle Play Storeへの申請から公開まで、一貫してサポートします。'
            }
          ]}
          variant="dark"
        />
      </div>

      {/* セクション10: 関連サービス */}
      <div className="border-b border-blue-400">
        <RelatedServicesSection
          title="関連サービス"
          services={[
            {
              id: 'web-development',
              title: 'Web開発',
              description: 'モダンなWebアプリケーションの開発',
              tags: ['React', 'Next.js', 'TypeScript'],
              href: '/services/web-development'
            },
            {
              id: 'ai-consulting',
              title: 'AI',
              description: 'AI技術を活用したビジネスソリューション',
              tags: ['機械学習', '深層学習', '自然言語処理'],
              href: '/services/ai-consulting'
            },
            {
              id: 'metaverse',
              title: 'メタバース',
              description: 'VR空間構築から、企画・運用・活用提案まで',
              tags: ['VR', 'AR', '3D空間'],
              href: '/services/metaverse'
            }
          ]}
          variant="dark"
        />
      </div>
      <ServiceAiCta serviceId="app-development" />
    </div>
  )
}

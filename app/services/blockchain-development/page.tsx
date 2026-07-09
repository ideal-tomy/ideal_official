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

import { serviceNavLinks } from '../../../data/services/service-links'
import { serviceIntroContent } from '../../../data/services/service-intro-content'
import { PhilosophyCallout } from '../../../components/sections/PhilosophyCallout'
import { BlockchainDaoSections } from '../../../components/sections/BlockchainDaoSections'
import { ServiceIntroBanner } from '../../../components/sections/ServiceIntroBanner'
import { ServiceBannerSection } from '../../../components/sections/ServiceBannerSection'
import { ServiceAiCta } from '../../../components/sections/ServiceAiCta'

export const metadata: Metadata = {
  title: 'ブロックチェーン・DAO | ideal',
  description:
    'トークン発行、スマートコントラクト、DApp、NFT、DAOガバナンス設計、DAO法に基づく組織ルールメイクまで支援します。',
  openGraph: {
    title: 'ブロックチェーン・DAO | ideal',
    description:
      'トークン発行、スマートコントラクト、DApp、NFT、DAOガバナンス設計、DAO法に基づく組織ルールメイクまで支援します。',
  },
}

export default function BlockchainDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* セクション0: ヒーローセクション */}
      <div className="border-b border-blue-400">
        <HeroSection
          title="ブロックチェーン・DAO"
          subText="トークン発行、スマートコントラクト、DApp、DAOガバナンス・組織ルールメイク"
        />
      </div>

      <PhilosophyCallout />

      {/* セクション0.5: サービスナビゲーション */}
      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="blockchain-development"
      />

      <ServiceIntroBanner {...serviceIntroContent['blockchain-development']} />

      {/* セクション1: 技術説明 */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title="ブロックチェーン技術の可能性"
          description="ブロックチェーンは単なる技術ではなく、金融、サプライチェーン、ヘルスケア、不動産など様々な領域で革命を起こす可能性を秘めています。IDEALでは最先端の技術と創造的なアイデアを組み合わせ、クライアント様のビジョンに合わせた独自のブロックチェーンソリューションを構築します。"
          variant="dark"
        >
          <div className="mt-6">
            <p className="text-gray-300 leading-relaxed">
              分散型台帳技術、スマートコントラクト、トークンエコノミー、クロスチェーン相互運用性など、次世代のデジタルビジネス基盤を提供します。
          </p>
        </div>
        </SingleColumnSection>
      </div>

      <ServiceBannerSection
        title="中小企業にこそ、ブロックチェーンがもたらす大きな可能性"
        description="かつては大企業だけのものだったブロックチェーン技術。クラウドサービスやWeb3プラットフォームの進化により、少ない初期投資で効果的なブロックチェーン活用が可能になりました。取引の透明性と信頼性を重視する中小企業だからこそ、分散型台帳技術による革新の恩恵を最大限に受けることができます。"
        imageSrc="/images/bc_para.png"
      >
        <div className="mt-6">
          <p className="text-gray-300 leading-relaxed">
            中小企業こそ、ブロックチェーンを活用することで取引の透明性を向上させ、
            効率的なビジネス運営を実現できます。
          </p>
        </div>
      </ServiceBannerSection>

      {/* セクション3: 活用方法 */}
      <div className="border-b border-blue-400">
        <ThreeCardSection
          title="具体的な活用方法"
          description="ブロックチェーン技術を活用した具体的なビジネスソリューションをご提案します"
          enableMobileScroll={true}
          modalPack="blockchain"
          cards={[
            {
              title: '取引の透明化',
              description: 'スマートコントラクトによる取引の自動化や、取引履歴の改ざん防止により、信頼性の高いビジネスを実現します。',
              tags: ['スマートコントラクト', '透明性', '信頼性'],
              modalTitle: '取引の透明化',
              modalId: '取引の透明化',
              modalSize: "lg"
            },
            {
              title: '資産のトークン化',
              description: '不動産や知的財産権のトークン化により、新しい資金調達や取引の機会を創出します。',
              tags: ['トークン化', '資金調達', '流動性'],
              modalTitle: '資産のトークン化',
              modalId: '資産のトークン化',
              modalSize: "lg"
            },
            {
              title: 'サプライチェーン管理',
              description: 'ブロックチェーンによる追跡システムにより、製品の品質保証と取引の透明性を確保します。',
              tags: ['トレーサビリティ', '品質保証', '透明性'],
              modalTitle: 'サプライチェーン管理',
              modalId: 'サプライチェーン管理',
              modalSize: "lg"
            }
          ]}
          variant="dark"
        />
      </div>

      {/* セクション4: 説明セクション */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title="Web3時代の新しいビジネスモデルを創造する"
          description="ブロックチェーンの導入は、単なる業務効率化だけでなく、新しい価値の創造と取引の仕組みを実現します。私たちは、技術導入を通じて、企業がWeb3時代のビジネスチャンスを最大限に活かせるようサポートします。"
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
              <h3 className="text-xl font-semibold text-white mb-4">従来の中央集権型システム</h3>
              <ul className="space-y-3 text-gray-300 inline-block text-left">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>単一の管理者による一元管理</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>単一障害点のリスク</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>高い運用コスト</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>透明性の欠如</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>データ改ざんのリスク</span>
                </li>
              </ul>
            </div>
          }
          rightContent={
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">ブロックチェーンシステム</h3>
              <ul className="space-y-3 text-gray-300 inline-block text-left">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>分散型の管理構造</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>高い耐障害性と可用性</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>運用コストの削減</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>透明性と追跡可能性</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>改ざん防止と高いセキュリティ</span>
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
          description="ブロックチェーン導入成功のための3つの重要な要素をご説明します"
          enableMobileScroll={true}
          modalPack="blockchain"
          cards={[
            {
              title: "技術要素",
              description: "ブロックチェーン導入に必要な技術的な要素を整理します。",
              tags: ["分散型台帳技術", "スマートコントラクト", "暗号技術", "コンセンサスアルゴリズム", "P2Pネットワーク"],
              modalTitle: "技術要素",
              modalId: "技術要素",
              modalSize: "lg"
            },
            {
              title: "ビジネス要素",
              description: "ブロックチェーン導入に必要なビジネス的な要素を整理します。",
              tags: ["明確なユースケース特定", "ガバナンス設計", "規制対応", "ROI分析", "運用・保守体制"],
              modalTitle: "ビジネス要素",
              modalId: "ビジネス要素",
              modalSize: "lg"
            },
            {
              title: "人材要素",
              description: "ブロックチェーン導入に必要な人材的な要素を整理します。",
              tags: ["ブロックチェーン開発者", "セキュリティ専門家", "システムアーキテクト", "バックエンドエンジニア", "ビジネスアナリスト"],
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
          description="ブロックチェーンは単なるトレンドではなく、ビジネスの透明性と効率性を根本から変革する次世代のデジタル基盤です。以下の理由から、企業が今ブロックチェーン戦略を導入することが重要です："
          leftContent={
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">市場動向と消費者変化</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">📈</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    金融、サプライチェーン、ヘルスケアなど様々な産業でのブロックチェーン導入が加速
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">🔍</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    企業間取引やデータ共有における透明性と信頼性の重要性の高まり
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">⚖️</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    規制環境の整備とブロックチェーン技術の標準化の進展
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
                    <span className="text-white text-xs">🚀</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    ブロックチェーンやスマートコントラクトなどの技術の成熟により、ビジネスプロセスの革新が可能
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">🏆</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    先行企業がブロックチェーンネットワーク内での存在感を確立し始めており、参入障壁が今後高まる可能性
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">💡</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    競合他社との差別化と新たな顧客体験の創出による競争優位性の確保
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
          modalPack="blockchain"
                  cards={[
                    {
                      title: 'ブロックチェーン基盤開発',
                      description: '企業の要件に最適化されたプライベートまたはコンソーシアム型ブロックチェーンネットワークを構築します。スケーラビリティ、セキュリティ、パフォーマンスを考慮した設計で、ビジネスプロセスの効率化と透明性向上を実現します。',
                      tags: ['プライベートチェーン', 'コンソーシアム', 'スケーラビリティ'],
                      modalTitle: 'ブロックチェーン基盤開発',
                      modalId: 'ブロックチェーン基盤開発',
                      modalSize: "lg"
                    },
                    {
                      title: 'スマートコントラクト開発',
                      description: 'ビジネスロジックをコード化した自己実行型の契約プログラムを開発します。中間者を介さない直接取引の自動化により、効率性と透明性を向上させます。厳格なセキュリティ監査とテストにより、安全性を確保します。',
                      tags: ['Solidity', '自動実行', 'セキュリティ'],
                      modalTitle: 'スマートコントラクト開発',
                      modalId: 'スマートコントラクト開発',
                      modalSize: "lg"
                    },
                    {
                      title: '分散型アプリケーション(DApp)開発',
                      description: 'ブロックチェーン技術を活用した分散型アプリケーションを開発します。中央管理者に依存しない自律的なシステムにより、ユーザーに直接価値を提供し、データの所有権をユーザーに還元します。Web3の理念に基づいた次世代アプリケーションを構築します。',
                      tags: ['DApp', 'Web3', '分散型'],
                      modalTitle: '分散型アプリケーション(DApp)開発',
                      modalId: '分散型アプリケーション(DApp)開発',
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
          modalPack="blockchain"
                  cards={[
                    {
                      title: 'ブロックチェーン戦略立案',
                      description: '企業のビジネスモデルや業界特性を分析し、ブロックチェーン技術の最適な活用方法を提案します。具体的なユースケースの特定、投資対効果の分析、段階的な導入ロードマップの策定まで、包括的な戦略立案をサポートします。',
                      tags: ['戦略立案', 'ユースケース', 'ROI分析'],
                      modalTitle: 'ブロックチェーン戦略立案',
                      modalId: 'ブロックチェーン戦略立案',
                      modalSize: "lg"
                    },
                    {
                      title: 'トークンエコノミー設計',
                      description: '持続可能なトークン経済システムの設計。インセンティブ設計、価値循環の仕組み構築を支援します。',
                      tags: ['トークンエコノミー', 'インセンティブ', '価値循環'],
                      modalTitle: 'トークンエコノミー設計',
                      modalId: 'トークンエコノミー設計',
                      modalSize: "lg"
                    },
                    {
                      title: 'セキュリティ監査・コンサルティング',
                      description: 'ブロックチェーンシステムやスマートコントラクトの包括的なセキュリティ監査を実施します。潜在的な脆弱性を特定し、リスク評価と対策提案を行います。継続的なセキュリティモニタリングと定期的な監査体制の構築も支援し、システムの安全性を長期的に確保します。',
                      tags: ['セキュリティ監査', '脆弱性診断', 'リスク評価'],
                      modalTitle: 'セキュリティ監査・コンサルティング',
                      modalId: 'セキュリティ監査・コンサルティング',
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

      <BlockchainDaoSections />

      {/* セクション9: FAQ */}
      <div className="border-b border-blue-400">
        <FAQSection
          title="よくある質問"
          faqs={[
            {
              id: 'faq-1',
              question: 'ブロックチェーン開発にはどのくらいの期間がかかりますか？',
              answer: 'プロジェクトの規模や複雑さによって異なりますが、一般的には3ヶ月から6ヶ月程度です。'
            },
            {
              id: 'faq-2',
              question: 'どのブロックチェーンプラットフォームに対応していますか？',
              answer: 'Ethereum、Polygon、BSC、Solanaなど、主要なブロックチェーンプラットフォームに対応しています。'
            },
            {
              id: 'faq-3',
              question: 'スマートコントラクトのセキュリティは大丈夫ですか？',
              answer: '厳格なセキュリティ監査とテストを実施し、安全性を確保しています。'
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
            }
          ]}
          variant="dark"
        />
            </div>
      <ServiceAiCta serviceId="blockchain-development" />
    </div>
  )
}

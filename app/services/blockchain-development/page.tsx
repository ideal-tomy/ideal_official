import { Metadata } from 'next'
import Image from 'next/image'
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

      {/* セクション2: ターゲット説明（CSS Media Query パララックス） */}
      <div className="border-b border-blue-400 relative overflow-hidden">
        {/* 背景画像 - レスポンシブパララックス効果 */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 z-0 hidden md:block parallax-bg"
          style={{ 
            backgroundImage: 'url(/images/bc_para.png)'
          }}
        />
        
        {/* 黒の半透明オーバーレイ - デスクトップのみ */}
        <div className="absolute inset-0 bg-black/50 z-0 hidden md:block" />
        
        {/* コンテンツ */}
        <div className="relative z-10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                中小企業にこそ、ブロックチェーンがもたらす大きな可能性
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                かつては大企業だけのものだったブロックチェーン技術。クラウドサービスやWeb3プラットフォームの進化により、少ない初期投資で効果的なブロックチェーン活用が可能になりました。取引の透明性と信頼性を重視する中小企業だからこそ、分散型台帳技術による革新の恩恵を最大限に受けることができます。
              </p>
              <div className="mt-6">
                <p className="text-gray-300 leading-relaxed">
                  中小企業こそ、ブロックチェーンを活用することで取引の透明性を向上させ、
                  効率的なビジネス運営を実現できます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* セクション3: 活用方法 */}
      <div className="border-b border-blue-400">
        <ThreeCardSection
          title="具体的な活用方法"
          description="ブロックチェーン技術を活用した具体的なビジネスソリューションをご提案します"
          enableMobileScroll={true}
          cards={[
            {
              title: '取引の透明化',
              description: 'スマートコントラクトによる取引の自動化や、取引履歴の改ざん防止により、信頼性の高いビジネスを実現します。',
              tags: ['スマートコントラクト', '透明性', '信頼性'],
              modalTitle: '取引の透明化',
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">取引の透明化</h3>
              <div className="space-y-4">
                <div>
                      <h4 className="font-semibold text-blue-400 mb-2">スマートコントラクトによる自動化</h4>
                      <p className="text-gray-300">条件が満たされた時に自動実行される契約により、人的ミスを排除し、取引の信頼性を向上</p>
                </div>
                <div>
                      <h4 className="font-semibold text-blue-400 mb-2">改ざん防止</h4>
                      <p className="text-gray-300">ブロックチェーンの暗号技術により、取引履歴の改ざんを防止し、データの整合性を保証</p>
                </div>
                <div>
                      <h4 className="font-semibold text-blue-400 mb-2">監査可能性</h4>
                      <p className="text-gray-300">すべての取引がブロックチェーン上に記録され、第三者による監査が容易に実行可能</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            },
            {
              title: '資産のトークン化',
              description: '不動産や知的財産権のトークン化により、新しい資金調達や取引の機会を創出します。',
              tags: ['トークン化', '資金調達', '流動性'],
              modalTitle: '資産のトークン化',
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">資産のトークン化</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">不動産のトークン化</h4>
                      <p className="text-gray-300">高額な不動産を分割所有可能にし、小口投資による不動産投資の機会を創出</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">知的財産権のトークン化</h4>
                      <p className="text-gray-300">特許や商標などの知的財産権をトークン化し、新しい収益モデルを構築</p>
                </div>
                <div>
                      <h4 className="font-semibold text-blue-400 mb-2">流動性の向上</h4>
                      <p className="text-gray-300">従来流動性の低かった資産をトークン化することで、24時間365日の取引が可能に</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            },
            {
              title: 'サプライチェーン管理',
              description: 'ブロックチェーンによる追跡システムにより、製品の品質保証と取引の透明性を確保します。',
              tags: ['トレーサビリティ', '品質保証', '透明性'],
              modalTitle: 'サプライチェーン管理',
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">サプライチェーン管理</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">製品の追跡</h4>
                      <p className="text-gray-300">原材料から最終製品まで、すべての工程をブロックチェーン上で追跡可能</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">品質保証</h4>
                      <p className="text-gray-300">各段階での品質データを記録し、製品の品質を保証</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">透明性の確保</h4>
                      <p className="text-gray-300">サプライチェーン全体の透明性を確保し、消費者への信頼性向上</p>
              </div>
            </div>
          </div>
              ),
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
          cards={[
            {
              title: "技術要素",
              description: "ブロックチェーン導入に必要な技術的な要素を整理します。",
              tags: ["分散型台帳技術", "スマートコントラクト", "暗号技術", "コンセンサスアルゴリズム", "P2Pネットワーク"],
              modalTitle: "技術要素",
              modalContent: (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">技術要素</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">分散型台帳技術</h4>
                      <p className="text-gray-300">複数のノードでデータを共有・同期する分散型の台帳システム</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">スマートコントラクト</h4>
                      <p className="text-gray-300">条件が満たされた時に自動実行されるプログラム</p>
            </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">暗号技術</h4>
                      <p className="text-gray-300">データの暗号化、デジタル署名、ハッシュ関数によるセキュリティ確保</p>
            </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">コンセンサスアルゴリズム</h4>
                      <p className="text-gray-300">ネットワーク内での合意形成メカニズム（PoW、PoS、DPoSなど）</p>
            </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">P2Pネットワーク</h4>
                      <p className="text-gray-300">中央サーバーを介さない直接的なノード間通信</p>
            </div>
          </div>
        </div>
              ),
              modalSize: "lg"
            },
            {
              title: "ビジネス要素",
              description: "ブロックチェーン導入に必要なビジネス的な要素を整理します。",
              tags: ["明確なユースケース特定", "ガバナンス設計", "規制対応", "ROI分析", "運用・保守体制"],
              modalTitle: "ビジネス要素",
              modalContent: (
              <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">ビジネス要素</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">明確なユースケース特定</h4>
                      <p className="text-gray-300">ブロックチェーン技術が解決する具体的な課題の特定と効果の測定</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">ガバナンス設計</h4>
                      <p className="text-gray-300">分散型システムにおける意思決定プロセスとルールの設計</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">規制対応</h4>
                      <p className="text-gray-300">各国の規制要件への対応とコンプライアンス体制の構築</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">ROI分析</h4>
                      <p className="text-gray-300">投資対効果の算出と継続的な効果測定</p>
                    </div>
                <div>
                      <h4 className="font-semibold text-blue-400 mb-2">運用・保守体制</h4>
                      <p className="text-gray-300">システムの継続的な運用とメンテナンス体制の構築</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            },
            {
              title: "人材要素",
              description: "ブロックチェーン導入に必要な人材的な要素を整理します。",
              tags: ["ブロックチェーン開発者", "セキュリティ専門家", "システムアーキテクト", "バックエンドエンジニア", "ビジネスアナリスト"],
              modalTitle: "人材要素",
              modalContent: (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">人材要素</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">ブロックチェーン開発者</h4>
                      <p className="text-gray-300">スマートコントラクトやDAppの開発を行う技術者</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">セキュリティ専門家</h4>
                      <p className="text-gray-300">ブロックチェーンシステムのセキュリティ監査と対策の専門家</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">システムアーキテクト</h4>
                      <p className="text-gray-300">ブロックチェーンシステム全体の設計とアーキテクチャ構築</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">バックエンドエンジニア</h4>
                      <p className="text-gray-300">ブロックチェーンと連携するバックエンドシステムの開発</p>
                </div>
                <div>
                      <h4 className="font-semibold text-blue-400 mb-2">ビジネスアナリスト</h4>
                      <p className="text-gray-300">ビジネス要件の分析とブロックチェーン活用の提案</p>
                    </div>
                  </div>
                </div>
              ),
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
                  cards={[
                    {
                      title: 'ブロックチェーン基盤開発',
                      description: '企業の要件に最適化されたプライベートまたはコンソーシアム型ブロックチェーンネットワークを構築します。スケーラビリティ、セキュリティ、パフォーマンスを考慮した設計で、ビジネスプロセスの効率化と透明性向上を実現します。',
                      tags: ['プライベートチェーン', 'コンソーシアム', 'スケーラビリティ'],
                      modalTitle: 'ブロックチェーン基盤開発',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            企業向けブロックチェーン基盤構築
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            企業の要件に最適化されたプライベートまたはコンソーシアム型ブロックチェーンネットワークを構築します。
                          </p>
                          <div className="space-y-4">
                            <h5 className="text-xl font-semibold text-white">技術特徴</h5>
                            <ul className="space-y-2 text-gray-300">
                              <li>• スケーラビリティの最適化</li>
                              <li>• セキュリティの強化</li>
                              <li>• パフォーマンスの向上</li>
                              <li>• カスタマイズ可能な設計</li>
                            </ul>
          </div>
        </div>
                      ),
                      modalSize: "lg"
                    },
                    {
                      title: 'スマートコントラクト開発',
                      description: 'ビジネスロジックをコード化した自己実行型の契約プログラムを開発します。中間者を介さない直接取引の自動化により、効率性と透明性を向上させます。厳格なセキュリティ監査とテストにより、安全性を確保します。',
                      tags: ['Solidity', '自動実行', 'セキュリティ'],
                      modalTitle: 'スマートコントラクト開発',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            安全なスマートコントラクト開発
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            ビジネスロジックをコード化した自己実行型の契約プログラムを開発します。
                          </p>
                          <div className="space-y-4">
                            <h5 className="text-xl font-semibold text-white">開発プロセス</h5>
                            <ul className="space-y-2 text-gray-300">
                              <li>• 要件定義と設計</li>
                              <li>• コーディングとテスト</li>
                              <li>• セキュリティ監査</li>
                              <li>• デプロイと運用</li>
                            </ul>
                          </div>
              </div>
                      ),
                      modalSize: "lg"
                    },
                    {
                      title: '分散型アプリケーション(DApp)開発',
                      description: 'ブロックチェーン技術を活用した分散型アプリケーションを開発します。中央管理者に依存しない自律的なシステムにより、ユーザーに直接価値を提供し、データの所有権をユーザーに還元します。Web3の理念に基づいた次世代アプリケーションを構築します。',
                      tags: ['DApp', 'Web3', '分散型'],
                      modalTitle: '分散型アプリケーション(DApp)開発',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            Web3時代のDApp開発
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            ブロックチェーン技術を活用した分散型アプリケーションを開発します。
                          </p>
                          <div className="space-y-4">
                            <h5 className="text-xl font-semibold text-white">DAppの特徴</h5>
                            <ul className="space-y-2 text-gray-300">
                              <li>• 中央管理者不要</li>
                              <li>• データの所有権</li>
                              <li>• 透明性と信頼性</li>
                              <li>• ユーザー主導の運営</li>
                            </ul>
            </div>
              </div>
                      ),
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
                  cards={[
                    {
                      title: 'ブロックチェーン戦略立案',
                      description: '企業のビジネスモデルや業界特性を分析し、ブロックチェーン技術の最適な活用方法を提案します。具体的なユースケースの特定、投資対効果の分析、段階的な導入ロードマップの策定まで、包括的な戦略立案をサポートします。',
                      tags: ['戦略立案', 'ユースケース', 'ROI分析'],
                      modalTitle: 'ブロックチェーン戦略立案',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            包括的なブロックチェーン戦略立案
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            企業のビジネスモデルや業界特性を分析し、ブロックチェーン技術の最適な活用方法を提案します。
                          </p>
                          <div className="space-y-4">
                            <h5 className="text-xl font-semibold text-white">サービス内容</h5>
                            <ul className="space-y-2 text-gray-300">
                              <li>• ビジネスモデル分析</li>
                              <li>• ユースケース特定</li>
                              <li>• ROI分析</li>
                              <li>• 導入ロードマップ策定</li>
                            </ul>
            </div>
              </div>
                      ),
                      modalSize: "lg"
                    },
                    {
                      title: 'トークンエコノミー設計',
                      description: '持続可能なトークン経済システムの設計。インセンティブ設計、価値循環の仕組み構築を支援します。',
                      tags: ['トークンエコノミー', 'インセンティブ', '価値循環'],
                      modalTitle: 'トークンエコノミー設計',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            持続可能なトークンエコノミー設計
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            持続可能なトークン経済システムの設計を行い、インセンティブ設計と価値循環の仕組み構築を支援します。
                          </p>
                          <div className="space-y-4">
                            <h5 className="text-xl font-semibold text-white">設計要素</h5>
                            <ul className="space-y-2 text-gray-300">
                              <li>• トークン設計</li>
                              <li>• インセンティブ設計</li>
                              <li>• 価値循環システム</li>
                              <li>• 経済モデル構築</li>
                            </ul>
            </div>
              </div>
                      ),
                      modalSize: "lg"
                    },
                    {
                      title: 'セキュリティ監査・コンサルティング',
                      description: 'ブロックチェーンシステムやスマートコントラクトの包括的なセキュリティ監査を実施します。潜在的な脆弱性を特定し、リスク評価と対策提案を行います。継続的なセキュリティモニタリングと定期的な監査体制の構築も支援し、システムの安全性を長期的に確保します。',
                      tags: ['セキュリティ監査', '脆弱性診断', 'リスク評価'],
                      modalTitle: 'セキュリティ監査・コンサルティング',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            包括的なセキュリティ監査
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            ブロックチェーンシステムやスマートコントラクトの包括的なセキュリティ監査を実施します。
                          </p>
                          <div className="space-y-4">
                            <h5 className="text-xl font-semibold text-white">監査内容</h5>
                            <ul className="space-y-2 text-gray-300">
                              <li>• コード監査</li>
                              <li>• 脆弱性診断</li>
                              <li>• リスク評価</li>
                              <li>• 対策提案</li>
                            </ul>
                          </div>
                        </div>
                      ),
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

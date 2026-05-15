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

export const metadata: Metadata = {
  title: 'メタバース・空間構築 | ideal',
  description:
    '3D・VR・AR・アバターを中心とした仮想空間の設計・構築。ブロックチェーン・AI連携は別途ご相談ください。',
  openGraph: {
    title: 'メタバース・空間構築 | ideal',
    description:
      '3D・VR・AR・アバターを中心とした仮想空間の設計・構築。ブロックチェーン・AI連携は別途ご相談ください。',
  },
}

import { serviceIntroContent } from '../../../data/services/service-intro-content'
import { ServiceIntroBanner } from '../../../components/sections/ServiceIntroBanner'
import { ServiceAiCta } from '../../../components/sections/ServiceAiCta'
import { serviceNavLinks } from '../../../data/services/service-links'

export default function MetaversePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* セクション0: ヒーローセクション */}
      <div className="border-b border-blue-400">
        <HeroSection
          title="メタバース・空間構築"
          subText="3D・VR・AR・アバター。ブロックチェーン・AI連携は別途ご相談"
        />
      </div>

      {/* セクション0.5: サービスナビゲーション */}
      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="metaverse"
      />

      <ServiceIntroBanner {...serviceIntroContent['metaverse']} />


      {/* セクション1: 技術説明 */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title="メタバース技術の可能性"
          description="メタバースは単なる仮想空間ではなく、ビジネス、エンターテイメント、教育、社会活動など様々な領域で革命を起こす可能性を秘めています。IDEALでは最先端の技術と創造的なアイデアを組み合わせ、クライアント様のビジョンに合わせた独自のメタバース環境を構築します。"
          variant="dark"
        >
          <div className="mt-6">
            <p className="text-gray-300 leading-relaxed">
              没入感のある3D仮想空間、インタラクティブな体験、ブロックチェーンを活用したデジタル資産管理など、次世代のデジタル体験を提供します。
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
            backgroundImage: 'url(/images/meta_para.png)'
          }}
        />
        
        {/* 黒の半透明オーバーレイ - デスクトップのみ */}
        <div className="absolute inset-0 bg-black/50 z-0 hidden md:block" />
        
        {/* コンテンツ */}
        <div className="relative z-10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                中小企業にこそ、メタバースがもたらす大きな恩恵
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                かつては大企業だけのものだったメタバース技術。クラウドサービスやWeb3技術の進化により、少ない初期投資で効果的なメタバース活用が可能になりました。意思決定の速さと組織の柔軟性を活かせる中小企業だからこそ、バーチャル空間による新しいビジネス機会を最大限に活用できます。
              </p>
              <div className="mt-6">
                <p className="text-gray-300 leading-relaxed">
                  中小企業こそ、メタバースを活用することで地理的制約を超え、
                  効率的なビジネス展開を実現できます。
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
          description="メタバース技術を活用した具体的なビジネスソリューションをご提案します"
          enableMobileScroll={true}
          cards={[
            {
              title: 'バーチャルショールーム',
              description: '3D商品展示や仮想店舗体験により、時間や場所を問わず、魅力的な商品プレゼンテーションを実現します。',
              tags: ['3D展示', '仮想店舗', '商品体験'],
              modalTitle: 'バーチャルショールーム',
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">バーチャルショールーム</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">3D商品展示</h4>
                      <p className="text-gray-300">リアルな3Dモデルで商品を360度から確認でき、詳細な情報を提供</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">仮想店舗体験</h4>
                      <p className="text-gray-300">実店舗のような体験をオンラインで提供し、顧客エンゲージメントを向上</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">24時間アクセス</h4>
                      <p className="text-gray-300">時間や場所を問わず、世界中の顧客に商品をアピール可能</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            },
            {
              title: 'バーチャルイベント',
              description: '展示会やセミナー、商談会などをメタバース空間で開催し、地理的制約のない集客を実現します。',
              tags: ['展示会', 'セミナー', '商談会'],
              modalTitle: 'バーチャルイベント',
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">バーチャルイベント</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">展示会・セミナー</h4>
                      <p className="text-gray-300">メタバース空間で大規模なイベントを開催し、世界中から参加者を集客</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">インタラクティブな体験</h4>
                      <p className="text-gray-300">参加者同士の交流やリアルタイムのQ&Aなど、双方向のコミュニケーション</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">コスト削減</h4>
                      <p className="text-gray-300">会場費や移動費を削減し、効率的なイベント運営を実現</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            },
            {
              title: '仮想トレーニング',
              description: 'VR/AR技術を活用した実践的な従業員教育により、効果的かつ安全な技能習得を実現します。',
              tags: ['VR教育', '技能訓練', '安全教育'],
              modalTitle: '仮想トレーニング',
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">仮想トレーニング</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">実践的な訓練</h4>
                      <p className="text-gray-300">VR技術により、危険な作業や高額な機材を使う訓練を安全に実施</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">繰り返し学習</h4>
                      <p className="text-gray-300">何度でも繰り返し練習でき、効率的なスキル習得が可能</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">データ分析</h4>
                      <p className="text-gray-300">訓練データを分析し、個々の習熟度に合わせた教育プログラムを提供</p>
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
          title="メタバースが創る、新しい働き方とビジネスチャンス"
          description="メタバースの導入は、単なるバーチャル空間の構築だけでなく、ビジネスモデルの革新と新たな顧客体験の創造を可能にします。私たちは、最先端技術の導入を通じて、企業の持続的な成長と新しいビジネス機会の創出をサポートします。"
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
              <h3 className="text-xl font-semibold text-white mb-4">2D・平面的なコンテンツ</h3>
              <ul className="space-y-3 text-gray-300 inline-block text-left">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>限定的な表現力</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>低い没入感</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>一方向的な情報伝達</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>物理的制約の影響</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>限定的なインタラクション</span>
                </li>
              </ul>
            </div>
          }
          rightContent={
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">没入感ある3Dコンテンツ</h3>
              <ul className="space-y-3 text-gray-300 inline-block text-left">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>豊かな表現力と臨場感</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>高い没入感と体験価値</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>双方向のコミュニケーション</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>物理的制約からの解放</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>リアルタイムインタラクション</span>
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
          description="メタバース導入成功のための3つの重要な要素をご説明します"
          enableMobileScroll={true}
          cards={[
            {
              title: "技術要素",
              description: "メタバース導入に必要な技術的な要素を整理します。",
              tags: ["3Dモデリングとレンダリング", "VR/ARデバイス対応", "クラウドインフラストラクチャ", "リアルタイム通信プロトコル", "ブロックチェーン統合"],
              modalTitle: "技術要素",
              modalContent: (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">技術要素</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">3Dモデリングとレンダリング</h4>
                      <p className="text-gray-300">高品質な3Dモデルの作成とリアルタイムレンダリング技術</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">VR/ARデバイス対応</h4>
                      <p className="text-gray-300">各種VRヘッドセットやARデバイスへの最適化</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">クラウドインフラストラクチャ</h4>
                      <p className="text-gray-300">スケーラブルなクラウド環境の構築と運用</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">リアルタイム通信プロトコル</h4>
                      <p className="text-gray-300">低遅延でのマルチユーザー通信の実現</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">ブロックチェーン統合</h4>
                      <p className="text-gray-300">NFTやデジタル資産管理のための基盤構築</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            },
            {
              title: "ビジネス要素",
              description: "メタバース導入に必要なビジネス的な要素を整理します。",
              tags: ["明確な目標とKPI設定", "ユーザー獲得戦略", "コンテンツ制作計画", "収益化モデル", "運用・保守体制"],
              modalTitle: "ビジネス要素",
              modalContent: (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">ビジネス要素</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">明確な目標とKPI設定</h4>
                      <p className="text-gray-300">メタバース導入の目的と成功指標の明確化</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">ユーザー獲得戦略</h4>
                      <p className="text-gray-300">ターゲットユーザーの特定とマーケティング戦略の策定</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">コンテンツ制作計画</h4>
                      <p className="text-gray-300">魅力的なコンテンツの継続的な制作と更新</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">収益化モデル</h4>
                      <p className="text-gray-300">持続可能なビジネスモデルの構築</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">運用・保守体制</h4>
                      <p className="text-gray-300">システムの安定運用と継続的な改善体制の確立</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            },
            {
              title: "人材要素",
              description: "メタバース導入に必要な人材的な要素を整理します。",
              tags: ["3Dデザイナー", "VR/AR開発者", "UI/UXデザイナー", "バックエンドエンジニア", "コンテンツクリエイター"],
              modalTitle: "人材要素",
              modalContent: (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">人材要素</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">3Dデザイナー</h4>
                      <p className="text-gray-300">高品質な3Dモデルやアセットの制作</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">VR/AR開発者</h4>
                      <p className="text-gray-300">VR/ARアプリケーションの開発と最適化</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">UI/UXデザイナー</h4>
                      <p className="text-gray-300">直感的で使いやすいインターフェースの設計</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">バックエンドエンジニア</h4>
                      <p className="text-gray-300">サーバーサイドシステムとインフラの構築</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">コンテンツクリエイター</h4>
                      <p className="text-gray-300">魅力的なコンテンツの企画と制作</p>
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
          description="メタバースは単なるトレンドではなく、デジタル世界と実世界の境界をさらに曖昧にしていく次世代のインターネットの形です。以下の理由から、企業が今メタバース戦略を導入することが重要です："
          leftContent={
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">市場動向と消費者変化</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">🚀</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    大手テクノロジー企業がメタバースに大規模投資を行っており、市場が急速に成長中
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">🌐</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    パンデミック後の世界でバーチャル体験とリモートコラボレーションの需要が増大
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">👥</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    Z世代やミレニアル世代など、デジタルネイティブな消費者の台頭
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
                    <span className="text-white text-xs">💎</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    ブロックチェーンやNFTなどの技術の成熟により、デジタル資産の価値が確立
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">🏆</span>
                  </span>
                  <p className="text-gray-300 text-sm">
                    先行企業がメタバース内での存在感を確立し始めており、参入障壁が今後高まる可能性
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
                      title: 'VR/AR技術',
                      description: '最新のVR/AR技術を活用し、没入感の高いメタバース体験を実現します。ヘッドセットやモバイルデバイスでのアクセスに対応し、ユーザーが直感的に操作できるインターフェースを提供します。',
                      tags: ['VR', 'AR', 'ヘッドセット'],
                      modalTitle: 'VR/AR技術',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            最新のVR/AR技術
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            最新のVR/AR技術を活用し、没入感の高いメタバース体験を実現します。
                          </p>
                          <div className="space-y-4">
                            <h5 className="text-xl font-semibold text-white">技術特徴</h5>
                            <ul className="space-y-2 text-gray-300">
                              <li>• 高い没入感の実現</li>
                              <li>• マルチデバイス対応</li>
                              <li>• 直感的な操作性</li>
                              <li>• リアルタイムレンダリング</li>
                            </ul>
                          </div>
                        </div>
                      ),
                      modalSize: "lg"
                    },
                    {
                      title: 'ゲームエンジン',
                      description: 'UnityやUnreal Engineなどの高性能ゲームエンジンを使用し、リアルタイムのインタラクションと美しいグラフィックを実現します。パフォーマンス最適化とクロスプラットフォーム対応で、様々なデバイスでの利用を可能にします。',
                      tags: ['Unity', 'Unreal Engine', 'クロスプラットフォーム'],
                      modalTitle: 'ゲームエンジン',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            高性能ゲームエンジン
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            UnityやUnreal Engineなどの高性能ゲームエンジンを使用し、リアルタイムのインタラクションと美しいグラフィックを実現します。
                          </p>
                          <div className="space-y-4">
                            <h5 className="text-xl font-semibold text-white">開発環境</h5>
                            <ul className="space-y-2 text-gray-300">
                              <li>• Unity開発</li>
                              <li>• Unreal Engine開発</li>
                              <li>• パフォーマンス最適化</li>
                              <li>• クロスプラットフォーム対応</li>
                            </ul>
                          </div>
                        </div>
                      ),
                      modalSize: "lg"
                    },
                    {
                      title: 'ブロックチェーン',
                      description: 'ブロックチェーン技術を活用し、デジタル資産の所有権管理や安全な取引を可能にするNFTシステムを実装します。メタバース内のデジタル資産を安全に売買、交換できる環境を構築します。',
                      tags: ['NFT', 'デジタル資産', 'Web3'],
                      modalTitle: 'ブロックチェーン',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            ブロックチェーン統合
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            ブロックチェーン技術を活用し、デジタル資産の所有権管理や安全な取引を可能にするNFTシステムを実装します。
                          </p>
                          <div className="space-y-4">
                            <h5 className="text-xl font-semibold text-white">実装機能</h5>
                            <ul className="space-y-2 text-gray-300">
                              <li>• NFTシステム</li>
                              <li>• デジタル資産管理</li>
                              <li>• 安全な取引環境</li>
                              <li>• Web3統合</li>
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
                      title: '仮想空間構築',
                      description: '企業のブランディングやマーケティング目的に最適化されたメタバース環境を設計し構築します。バーチャルショールーム、イベントスペース、トレーニング環境など、目的に合わせた空間を実現します。',
                      tags: ['空間設計', 'ブランディング', 'マーケティング'],
                      modalTitle: '仮想空間構築',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            最適化された仮想空間構築
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            企業のブランディングやマーケティング目的に最適化されたメタバース環境を設計し構築します。
                          </p>
                          <div className="space-y-4">
                            <h5 className="text-xl font-semibold text-white">サービス内容</h5>
                            <ul className="space-y-2 text-gray-300">
                              <li>• 空間設計とコンセプト策定</li>
                              <li>• バーチャルショールーム構築</li>
                              <li>• イベントスペース設計</li>
                              <li>• トレーニング環境構築</li>
                            </ul>
                          </div>
                        </div>
                      ),
                      modalSize: "lg"
                    },
                    {
                      title: 'ユーザーエクスペリエンス',
                      description: 'メタバース内での直感的な操作と没入感を実現するインタラクションとUI/UXを設計します。ユーザーテストとフィードバックに基づく改善を通じて、最適なユーザー体験を実現します。',
                      tags: ['UI/UX', 'インタラクション', 'ユーザビリティ'],
                      modalTitle: 'ユーザーエクスペリエンス',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            最適なユーザー体験設計
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            メタバース内での直感的な操作と没入感を実現するインタラクションとUI/UXを設計します。
                          </p>
                          <div className="space-y-4">
                            <h5 className="text-xl font-semibold text-white">設計要素</h5>
                            <ul className="space-y-2 text-gray-300">
                              <li>• UI/UX設計</li>
                              <li>• インタラクション設計</li>
                              <li>• ユーザーテスト</li>
                              <li>• 継続的な改善</li>
                            </ul>
                          </div>
                        </div>
                      ),
                      modalSize: "lg"
                    },
                    {
                      title: '運用サポート',
                      description: 'メタバース環境の安定的な運用と定期的な改善を支援します。システムのメンテナンス、コンテンツの更新、パフォーマンスの最適化、セキュリティ対策など、包括的なサポートを提供します。',
                      tags: ['運用支援', 'メンテナンス', '最適化'],
                      modalTitle: '運用サポート',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            包括的な運用サポート
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            メタバース環境の安定的な運用と定期的な改善を支援します。
                          </p>
                          <div className="space-y-4">
                            <h5 className="text-xl font-semibold text-white">サポート内容</h5>
                            <ul className="space-y-2 text-gray-300">
                              <li>• システムメンテナンス</li>
                              <li>• コンテンツ更新</li>
                              <li>• パフォーマンス最適化</li>
                              <li>• セキュリティ対策</li>
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

      {/* セクション9: FAQ */}
      <div className="border-b border-blue-400">
        <FAQSection
          title="よくある質問"
          faqs={[
            {
              id: 'faq-1',
              question: 'メタバース構築にはどのくらいの期間がかかりますか？',
              answer: 'プロジェクトの規模や複雑さによって異なりますが、一般的には3ヶ月から6ヶ月程度です。'
            },
            {
              id: 'faq-2',
              question: 'VRヘッドセットは必要ですか？',
              answer: 'VRヘッドセットがあればより没入感のある体験ができますが、PCやスマートフォンからもアクセス可能です。'
            },
            {
              id: 'faq-3',
              question: 'スマートフォンでも体験できますか？',
              answer: 'はい、スマートフォンやタブレットからもメタバース空間にアクセスできるよう最適化します。'
            },
            {
              id: 'faq-4',
              question: '既存のWebサイトとの連携は可能ですか？',
              answer: 'はい、既存のWebサイトやシステムとの連携も可能です。APIを通じてデータ連携を実現します。'
            },
            {
              id: 'faq-5',
              question: 'メタバース空間のカスタマイズはどこまで可能ですか？',
              answer: '空間デザイン、インタラクション、機能など、ほぼすべての要素をカスタマイズ可能です。'
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
              id: 'app-development',
              title: 'アプリ開発',
              description: 'iOS・Android対応のアプリやスマホゲーム作成',
              tags: ['iOS', 'Android', 'ゲーム'],
              href: '/services/app-development'
            },
            {
              id: 'web-development',
              title: 'Web開発',
              description: 'モダンなWebアプリケーションの開発',
              tags: ['React', 'Next.js', 'TypeScript'],
              href: '/services/web-development'
            },
            {
              id: 'blockchain-development',
              title: 'ブロックチェーン',
              description: '分散型アプリケーション（DApp）開発・NFT活用',
              tags: ['ブロックチェーン', 'NFT', 'Web3'],
              href: '/services/blockchain-development'
            }
          ]}
          variant="dark"
        />
      </div>
      <ServiceAiCta serviceId="metaverse" />
    </div>
  )
}

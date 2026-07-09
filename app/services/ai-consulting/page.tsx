import { Metadata } from 'next'
import Link from 'next/link'
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

import { aiServiceData } from '../../../data/services/ai'

export const metadata: Metadata = {
  title: 'AI | ideal',
  description: 'AI導入・活用コンサルティングサービス。機械学習、深層学習、自然言語処理の専門知識でビジネスを革新します。',
  openGraph: {
    title: 'AI | ideal',
    description: 'AI導入・活用コンサルティングサービス。機械学習、深層学習、自然言語処理の専門知識でビジネスを革新します。',
  },
}

import { ServiceIntroBanner } from '../../../components/sections/ServiceIntroBanner'
import { ServiceBannerSection } from '../../../components/sections/ServiceBannerSection'
import { ServiceAiCta } from '../../../components/sections/ServiceAiCta'
import { serviceNavLinks } from '../../../data/services/service-links'
import { serviceIntroContent } from '../../../data/services/service-intro-content'

export default function AIConsultingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* セクション0: ヒーローセクション */}
      <div className="border-b border-blue-400">
        <HeroSection
          title={aiServiceData.hero.title}
          subText={aiServiceData.hero.subtitle}
        />
      </div>

      {/* サービスナビゲーション */}
      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="ai-consulting"
      />

      <ServiceIntroBanner {...serviceIntroContent['ai-consulting']} />

      <div className="border-b border-blue-400">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-xl border border-blue-400/25 bg-blue-500/5 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400/90 mb-2">
                Demo Gallery
              </p>
              <h2 className="text-xl font-semibold text-white mb-2">
                AI Capability Demo Gallery
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                7つの業務変化パターンを、実際に触って体験できます。まずは写真の自動分類デモからお試しください。
              </p>
            </div>
            <Link
              href="/ai-capability-gallery"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-colors"
            >
              デモギャラリーを見る →
            </Link>
          </div>
        </div>
      </div>

      {/* 1. AI技術の可能性 - 単一カラムセクション */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title={aiServiceData.sections[1].title!}
          description={aiServiceData.sections[1].description!}
          variant="dark"
        >
          {aiServiceData.sections[1].content}
        </SingleColumnSection>
      </div>

      <ServiceBannerSection
        title={aiServiceData.sections[2].title!}
        description={aiServiceData.sections[2].description!}
        imageSrc="/images/ai_para.png"
      >
        <div className="mt-6">
          <p className="text-gray-300 leading-relaxed">
            中小企業こそ、新しい技術の恩恵を最大限に活用できる柔軟性と意思決定の速さを持っています。
            限られたリソースを最大限に活用し、競争優位性を獲得するためのAI戦略を策定します。
          </p>
        </div>
      </ServiceBannerSection>

      {/* 3. 具体的な活用方法 - 3カードセクション */}
      <div className="border-b border-blue-400">
        <ThreeCardSection
          title="具体的な活用方法"
          description="AI技術を活用した具体的なビジネスソリューションをご提案します"
          enableMobileScroll={true}
          modalPack="ai"
          cards={[
            {
              title: '業務効率化・自動化',
              description: 'AIが定型業務を代行し、ヒューマンエラーを削減。従業員をより創造的なコア業務へと解放し、企業全体の生産性を飛躍的に向上させます。',
              tags: ['自動化', '効率化', 'ChatGPT'],
              modalTitle: '業務効率化・自動化',
              modalId: '業務効率化・自動化',
              modalSize: "lg"
            },
            {
              title: 'マーケティング・顧客分析',
              description: 'AIが膨大な顧客データやSNSトレンドを分析。最適なターゲット層に、最適なタイミングでメッセージを届け、マーケティングROIを最大化します。',
              tags: ['SNS', 'データ分析', '最適化'],
              modalTitle: 'マーケティング・顧客分析',
              modalId: 'マーケティング・顧客分析',
              modalSize: "lg"
            },
            {
              title: '品質管理・需要予測',
              description: 'AIの画像認識による不良品検知や、時系列データ分析による需要予測。製造業から小売業まで、あらゆるビジネスのリスクを最小化します。',
              tags: ['品質管理', '予測分析', '在庫管理'],
              modalTitle: '品質管理・需要予測',
              modalId: '品質管理・需要予測',
              modalSize: "lg"
            }
          ]}
          variant="dark"
        />
      </div>

      {/* 5. 説明セクション */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title="AI人材が働くすべての人たちに最適なワークライフバランスを"
          description="AI導入は業務効率化だけでなく、従業員の働き方も変革します。創造的な業務に時間を割けるよう、技術導入を通じて、すべての従業員がより充実した仕事と私生活を実現できる環境づくりをサポートします。"
          variant="dark"
        >
          <div></div>
        </SingleColumnSection>
      </div>

      {/* 6. 従来技術との比較 - 2カラムセクション */}
      <div className="border-b border-blue-400">
        <TwoColumnSection
          title="従来技術との比較"
          textAlign="center"
        leftContent={
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">従来のシステム開発</h3>
            <ul className="space-y-3 text-gray-300 inline-block text-left">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>ルールベースの固定的な処理</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>人手による大量のデータ処理</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>限定的なパターン認識</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>スケーリングが困難</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>新しい状況への適応が遅い</span>
              </li>
            </ul>
          </div>
        }
        rightContent={
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">最新のAIソリューション</h3>
            <ul className="space-y-3 text-gray-300 inline-block text-left">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>データからの自動学習と適応</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>大規模データの高速処理</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>複雑なパターンの認識</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>効率的なスケーリング</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>リアルタイムでの状況対応</span>
              </li>
            </ul>
          </div>
        }
        variant="dark"
        />
      </div>

       {/* 7. 導入に必要な要素 - 3カラムセクション */}
       <div className="border-b border-blue-400">
         <ThreeCardSection
           title="導入に必要な要素"
           description="AI導入成功のための3つの重要な要素をご説明します"
           enableMobileScroll={true}
          modalPack="ai"
           cards={[
             {
               title: "技術要素",
               description: "AI導入に必要な技術的な要素を整理します。",
               tags: ["機械学習", "深層学習", "データ処理"],
               modalTitle: "技術要素",
               modalId: "技術要素",
               modalSize: "lg"
             },
             {
               title: "ビジネス要素",
               description: "AI導入に必要なビジネス的な要素を整理します。",
               tags: ["戦略", "ROI", "変革管理"],
               modalTitle: "ビジネス要素",
               modalId: "ビジネス要素",
               modalSize: "lg"
             },
             {
               title: "人材要素",
               description: "AI導入に必要な人材的な要素を整理します。",
               tags: ["データサイエンティスト", "エンジニア", "専門家"],
               modalTitle: "人材要素",
               modalId: "人材要素",
               modalSize: "lg"
             }
           ]}
           variant="dark"
         />
       </div>

      {/* 8. なぜ今、導入が必要なのか - 2カラムセクション */}
      <div className="border-b border-blue-400">
        <TwoColumnSection
          title="なぜ今、導入が必要なのか"
          description="AIは単なるトレンドではなく、ビジネスプロセスと意思決定の方法を根本から変革する技術です。以下の理由から、企業が今AI戦略を導入することが重要です："
        leftContent={
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">市場動向とビジネス変革</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">📈</span>
                </span>
                <p className="text-gray-300 text-sm">
                  大手企業からスタートアップまで、AIへの投資が急増しており、市場が急速に拡大中
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">🎯</span>
                </span>
                <p className="text-gray-300 text-sm">
                  データ駆動型意思決定の重要性が高まり、AIを活用した分析が競争優位性の源泉に
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">👤</span>
                </span>
                <p className="text-gray-300 text-sm">
                  顧客はパーソナライズされた体験を期待しており、AIによる個別化が標準に
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
                  大規模言語モデルやディープラーニングの進化により、AIの適用範囲が急速に拡大
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">⚡</span>
                </span>
                <p className="text-gray-300 text-sm">
                  先行企業がAIを活用した業務効率化や新サービス開発で優位性を確立し始めている
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">💡</span>
                </span>
                <p className="text-gray-300 text-sm">
                  AIによる自動化と高度な分析で、人的リソースを創造的業務に集中させることが可能に
                </p>
              </div>
            </div>
          </div>
        }
        variant="dark"
        />
      </div>

      {/* 9. 技術提供 - タブセクション（2つ目） */}
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
          modalPack="ai"
                cards={[
                  {
                    title: '機械学習モデル開発',
                    description: 'ビジネスニーズに合わせた機械学習モデルの設計と開発',
                    tags: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
                    modalTitle: '機械学習モデル開発',
                    modalId: '機械学習モデル開発',
                    modalSize: "lg"
                  },
                  {
                    title: '自然言語処理',
                    description: 'テキストデータの分析、生成、翻訳などのNLPソリューション',
                    tags: ['BERT', 'GPT', 'Transformers'],
                    modalTitle: '自然言語処理',
                    modalId: '自然言語処理',
                    modalSize: "lg"
                  },
                  {
                    title: '画像認識システム',
                    description: '深層学習を用いた画像認識・分類システムの開発',
                    tags: ['OpenCV', 'CNNs', 'YOLO'],
                    modalTitle: '画像認識システム',
                    modalId: '画像認識システム',
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
          modalPack="ai"
                cards={[
                  {
                    title: 'AI戦略コンサルティング',
                    description: 'ビジネス目標に合わせたAI導入戦略の策定',
                    tags: ['戦略立案', 'ロードマップ作成', 'KPI設定'],
                    modalTitle: 'AI戦略コンサルティング',
                    modalId: 'AI戦略コンサルティング',
                    modalSize: "lg"
                  },
                  {
                    title: 'データ分析コンサルティング',
                    description: 'データ収集、前処理、分析手法の最適化支援',
                    tags: ['データマイニング', '統計分析', '可視化'],
                    modalTitle: 'データ分析コンサルティング',
                    modalId: 'データ分析コンサルティング',
                    modalSize: "lg"
                  },
                  {
                    title: 'AI実装支援',
                    description: 'AI導入プロジェクトの実装と運用サポート',
                    tags: ['プロジェクト管理', 'チーム構築', '技術支援'],
                    modalTitle: 'AI実装支援',
                    modalId: 'AI実装支援',
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

      {/* 10. FAQセクション */}
      <div className="border-b border-blue-400">
        <FAQSection
          title="よくある質問"
          faqs={aiServiceData.faqs!}
          variant="dark"
        />
      </div>

      {/* 11. 関連サービスセクション */}
      <div className="border-b border-blue-400">
        <RelatedServicesSection
          title="関連サービス"
          services={aiServiceData.relatedServices!}
          variant="dark"
        />
      </div>
      <ServiceAiCta serviceId="ai-consulting" />
    </div>
  )
}
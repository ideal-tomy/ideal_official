import { Metadata } from 'next'
import { ServiceCard } from '../../components/ui/ServiceCard'
import { FeatureCard } from '../../components/ui/FeatureCard'
import { TechnologyCard } from '../../components/ui/TechnologyCard'
import { Section } from '../../components/ui/Section'
import { colors, typography } from '../../lib/design-tokens'
import { ServiceCardData } from '../../types/service'

export const metadata: Metadata = {
  title: 'カードコンポーネントテスト | ideal',
  description: 'カードコンポーネントの動作確認用ページ',
}

/**
 * カードコンポーネントのテストページ
 * 単一責任: カードコンポーネントの動作確認のみ
 */
export default function TestCardsPage() {
  // テスト用のサービスカードデータ
  const serviceCards: ServiceCardData[] = [
    {
      id: 'ai-consulting',
      title: 'AI戦略コンサルティング',
      description: 'ビジネス目標に合わせたAI導入戦略の策定から実装まで、一貫したサポートを提供します。',
      tags: ['戦略立案', 'ロードマップ作成', 'KPI設定'],
      onClick: () => console.log('AI戦略コンサルティング clicked')
    },
    {
      id: 'machine-learning',
      title: '機械学習モデル開発',
      description: 'ビジネスニーズに合わせた機械学習モデルの設計と開発を行います。',
      tags: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
      onClick: () => console.log('機械学習モデル開発 clicked')
    },
    {
      id: 'nlp',
      title: '自然言語処理',
      description: 'テキストデータの分析、生成、翻訳などのNLPソリューションを提供します。',
      tags: ['BERT', 'GPT', 'Transformers'],
      onClick: () => console.log('自然言語処理 clicked')
    }
  ]

  const featureCards: ServiceCardData[] = [
    {
      id: 'efficiency',
      title: '業務効率化',
      description: 'ChatGPTによる定型業務の自動化や、画像認識による在庫管理など、人手不足を補い、コア業務に集中できる環境を実現します。',
      tags: ['導入コスト: 月額3万円〜']
    },
    {
      id: 'marketing',
      title: 'マーケティング強化',
      description: '顧客データの分析やSNSマーケティングの最適化により、限られた予算で最大の効果を引き出します。',
      tags: ['導入コスト: 月額5万円〜']
    },
    {
      id: 'quality',
      title: '品質管理・予測',
      description: 'AIによる品質チェックや需要予測により、ミスを減らし、効率的な在庫管理を実現します。',
      tags: ['導入コスト: 月額7万円〜']
    }
  ]

  const technologyCards: ServiceCardData[] = [
    {
      id: 'ml-development',
      title: '機械学習モデル開発',
      description: 'ビジネスニーズに合わせた機械学習モデルの設計と開発',
      tags: ['TensorFlow', 'PyTorch', 'Scikit-learn']
    },
    {
      id: 'nlp-solutions',
      title: '自然言語処理',
      description: 'テキストデータの分析、生成、翻訳などのNLPソリューション',
      tags: ['BERT', 'GPT', 'Transformers']
    },
    {
      id: 'image-recognition',
      title: '画像認識システム',
      description: '深層学習を用いた画像認識・分類システムの開発',
      tags: ['OpenCV', 'CNNs', 'YOLO']
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center">
            <h1 className={`${typography.h1} ${colors.text.primary} mb-8`}>
              カードコンポーネントテスト
            </h1>
            <p className={`${typography.bodyLarge} ${colors.text.secondary} mb-12`}>
              各種カードコンポーネントの動作確認
            </p>
          </div>

          {/* ServiceCard のテスト */}
          <div className="space-y-8">
            <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
              ServiceCard（基本サービスカード）
            </h2>
            <p className={`${typography.body} ${colors.text.secondary} mb-8`}>
              基本的なサービスカードコンポーネントの動作確認
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCards.map((card) => (
                <ServiceCard
                  key={card.id}
                  data={card}
                  variant="default"
                />
              ))}
            </div>
          </div>

          {/* FeatureCard のテスト */}
          <div className="space-y-8">
            <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
              FeatureCard（機能カード）
            </h2>
            <p className={`${typography.body} ${colors.text.secondary} mb-8`}>
              機能カード専用コンポーネントの動作確認
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureCards.map((card) => (
                <FeatureCard
                  key={card.id}
                  data={card}
                />
              ))}
            </div>
          </div>

          {/* TechnologyCard のテスト */}
          <div className="space-y-8">
            <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
              TechnologyCard（技術カード）
            </h2>
            <p className={`${typography.body} ${colors.text.secondary} mb-8`}>
              技術カード専用コンポーネントの動作確認
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyCards.map((card) => (
                <TechnologyCard
                  key={card.id}
                  data={card}
                />
              ))}
            </div>
          </div>

          {/* バリアント比較テスト */}
          <div className="space-y-8">
            <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
              バリアント比較
            </h2>
            <p className={`${typography.body} ${colors.text.secondary} mb-8`}>
              同じデータで異なるバリアントの表示比較
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className={`${typography.h3} ${colors.text.primary} mb-4 text-center`}>
                  Default
                </h3>
                <ServiceCard
                  data={serviceCards[0]}
                  variant="default"
                />
              </div>
              
              <div>
                <h3 className={`${typography.h3} ${colors.text.primary} mb-4 text-center`}>
                  Feature
                </h3>
                <ServiceCard
                  data={serviceCards[0]}
                  variant="feature"
                />
              </div>
              
              <div>
                <h3 className={`${typography.h3} ${colors.text.primary} mb-4 text-center`}>
                  Technology
                </h3>
                <ServiceCard
                  data={serviceCards[0]}
                  variant="technology"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}


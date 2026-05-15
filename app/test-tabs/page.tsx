import { Metadata } from 'next'
import { TabContainer } from '../../components/ui/TabContainer'
import { TabData } from '../../types/service'
import { Section } from '../../components/ui/Section'
import { colors, typography } from '../../lib/design-tokens'

export const metadata: Metadata = {
  title: 'タブコンポーネントテスト | ideal',
  description: 'タブコンポーネントの動作確認用ページ',
}

/**
 * タブコンポーネントのテストページ
 * 単一責任: タブコンポーネントの動作確認のみ
 */
export default function TestTabsPage() {
  // テスト用のタブデータ
  const tabs: TabData[] = [
    {
      id: 'overview',
      name: 'AI概要',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
              機械学習
            </h3>
            <p className={`${typography.body} ${colors.text.secondary}`}>
              データから学習し、パターンを認識して予測や分類を行う機械学習技術。ビジネスの意思決定支援や自動化に活用します。
            </p>
          </div>
          <div>
            <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
              深層学習
            </h3>
            <p className={`${typography.body} ${colors.text.secondary}`}>
              複雑なニューラルネットワークを用いて、画像認識、自然言語処理、音声認識などの高度なタスクを実現します。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'process',
      name: '開発プロセス',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
              1. 要件定義とデータ評価
            </h3>
            <p className={`${typography.body} ${colors.text.secondary}`}>
              ビジネス目標の明確化、必要なデータの特定、データ品質の評価を行います。
            </p>
          </div>
          <div>
            <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
              2. データ前処理と設計
            </h3>
            <p className={`${typography.body} ${colors.text.secondary}`}>
              データのクリーニング、特徴量エンジニアリング、モデルアーキテクチャの設計を行います。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      name: '主要機能',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
              予測分析
            </h3>
            <p className={`${typography.body} ${colors.text.secondary}`}>
              機械学習モデルを活用した高精度な予測分析。需要予測、売上予測、リスク分析など、データに基づく意思決定を支援します。
            </p>
          </div>
          <div>
            <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
              自然言語処理
            </h3>
            <p className={`${typography.body} ${colors.text.secondary}`}>
              テキストデータの高度な分析と生成。チャットボット、文書分類、感情分析、要約生成など、言語処理に関する様々なソリューションを提供します。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cases',
      name: '活用事例',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
              金融・フィンテック
            </h3>
            <p className={`${typography.body} ${colors.text.secondary}`}>
              リスク評価、不正検知、市場分析、ポートフォリオ最適化など、金融分野での高度な分析と自動化を実現します。
            </p>
          </div>
          <div>
            <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
              製造業
            </h3>
            <p className={`${typography.body} ${colors.text.secondary}`}>
              予知保全、品質管理、生産最適化、需要予測など、製造プロセスの効率化と品質向上を支援します。
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className={`${typography.h1} ${colors.text.primary} mb-8 text-center`}>
            タブコンポーネントテスト
          </h1>
          <p className={`${typography.bodyLarge} ${colors.text.secondary} mb-12 text-center`}>
            Headless UIを使用したタブコンポーネントの動作確認
          </p>
          
          <TabContainer 
            tabs={tabs}
            defaultTab="overview"
            className="bg-gray-900 border border-gray-700 rounded-lg p-8"
          />
        </div>
      </Section>
    </div>
  )
}

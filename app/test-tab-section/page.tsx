'use client'

import { TabSection } from '../../components/sections/TabSection'
import { ServiceCard } from '../../components/ui/ServiceCard'
import { FeatureCard } from '../../components/ui/FeatureCard'
import { TechnologyCard } from '../../components/ui/TechnologyCard'
import Image from 'next/image'

export default function TestTabSectionPage() {
  // サンプルタブデータ
  const serviceTabs = [
    {
      id: 'overview',
      name: '概要',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">サービス概要</h3>
              <p className="text-gray-300">
                私たちは最新のテクノロジーを活用して、お客様のビジネス課題を解決します。
                AI、ブロックチェーン、Web開発など、幅広い分野で専門的なサービスを提供しています。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">AI</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">Web開発</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">ブロックチェーン</span>
              </div>
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/test01.jpg"
                alt="AI技術とデータ分析のコンセプト画像"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      name: '主要機能',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="AI戦略コンサル"
              description="企業のAI導入戦略を策定し、最適なソリューションを提案します。"
              icon="🤖"
              tags={['AI', '戦略', 'コンサル']}
              onClick={() => console.log('AI戦略コンサル clicked')}
            />
            <FeatureCard
              title="Web開発"
              description="モダンなWebサイト制作からECサイト構築まで対応します。"
              icon="🌐"
              tags={['Web', '開発', 'EC']}
              onClick={() => console.log('Web開発 clicked')}
            />
            <FeatureCard
              title="ブロックチェーン"
              description="DeFi、NFT、スマートコントラクトなど、ブロックチェーン技術を活用した開発を行います。"
              icon="⛓️"
              tags={['Blockchain', 'DeFi', 'NFT']}
              onClick={() => console.log('ブロックチェーン clicked')}
            />
          </div>
        </div>
      )
    },
    {
      id: 'technology',
      name: '技術スタック',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <TechnologyCard
              title="React"
              description="モダンなフロントエンド開発に最適なライブラリです。"
              icon="⚛️"
              tags={['JavaScript', 'フロントエンド']}
              onClick={() => console.log('React clicked')}
            />
            <TechnologyCard
              title="Node.js"
              description="サーバーサイド開発に最適なJavaScriptランタイムです。"
              icon="🟢"
              tags={['JavaScript', 'サーバーサイド']}
              onClick={() => console.log('Node.js clicked')}
            />
            <TechnologyCard
              title="Python"
              description="AI・機械学習開発に最適なプログラミング言語です。"
              icon="🐍"
              tags={['AI', '機械学習', 'データサイエンス']}
              onClick={() => console.log('Python clicked')}
            />
          </div>
        </div>
      )
    }
  ]

  const processTabs = [
    {
      id: 'planning',
      name: '企画・設計',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">企画・設計フェーズ</h3>
              <p className="text-gray-300">
                お客様のニーズを詳しくヒアリングし、最適なソリューションを設計します。
                技術的な実現可能性とビジネス価値を両立した提案を行います。
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• 要件定義とヒアリング</li>
                <li>• 技術選定とアーキテクチャ設計</li>
                <li>• プロジェクト計画の策定</li>
                <li>• コストとスケジュールの見積もり</li>
              </ul>
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/test02.jpg"
                alt="グローバルなテクノロジーとメディアのコンセプト画像"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'development',
      name: '開発・実装',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/test01.jpg"
                alt="AI技術とデータ分析のコンセプト画像"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">開発・実装フェーズ</h3>
              <p className="text-gray-300">
                設計に基づいて実際の開発を進めます。アジャイル開発手法を採用し、
                定期的なレビューとフィードバックを行いながら高品質な成果物を提供します。
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• アジャイル開発手法の採用</li>
                <li>• 定期的なレビューとフィードバック</li>
                <li>• 品質管理とテストの実施</li>
                <li>• 継続的な改善と最適化</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'deployment',
      name: '運用・保守',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">運用・保守フェーズ</h3>
              <p className="text-gray-300">
                システムの安定稼働をサポートし、継続的な改善を行います。
                24時間365日の監視体制と迅速な対応で、お客様のビジネスを支えます。
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• 24時間365日の監視体制</li>
                <li>• 迅速な障害対応と復旧</li>
                <li>• 定期的なセキュリティアップデート</li>
                <li>• パフォーマンス監視と最適化</li>
              </ul>
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/test02.jpg"
                alt="グローバルなテクノロジーとメディアのコンセプト画像"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* ヘッダー */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            TabSection テストページ
          </h1>
          <p className="text-gray-300 text-center mt-4">
            タブセクションコンポーネントの動作確認
          </p>
        </div>
      </div>

      {/* テスト1: 基本レイアウト */}
      <TabSection
        title="基本レイアウトテスト"
        subtitle="サービス詳細"
        description="タブ切り替えで異なるコンテンツを表示します。"
        tabs={serviceTabs}
        defaultTab="overview"
      />

      {/* テスト2: ダークバリアント */}
      <TabSection
        title="ダークバリアント"
        description="背景色がダークなバリアントです。"
        tabs={processTabs}
        defaultTab="planning"
        variant="dark"
        padding="xl"
      />

      {/* テスト3: アクセントバリアント */}
      <TabSection
        title="アクセントバリアント"
        description="アクセントカラーを使用したバリアントです。"
        tabs={serviceTabs}
        defaultTab="features"
        variant="accent"
      />

      {/* テスト4: 右寄せタブ */}
      <TabSection
        title="右寄せタブ"
        description="タブを右寄せで配置したバリアントです。"
        tabs={processTabs}
        defaultTab="development"
        className="border-t border-gray-700"
      />

      {/* テスト5: 4つのタブ（コンパクトレイアウト） */}
      <TabSection
        title="4つのタブ（コンパクトレイアウト）"
        subtitle="AI概要、開発プロセス、主要機能、活用事例"
        description="4つのタブをコンパクトに配置したレイアウトです。"
        tabs={[
          ...serviceTabs,
          {
            id: 'use-cases',
            name: '活用事例',
            content: (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">製造業でのAI活用</h3>
                    <p className="text-gray-300">
                      品質管理の自動化、予知保全、需要予測など、製造業におけるAI活用事例をご紹介します。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm">品質管理</span>
                      <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm">予知保全</span>
                      <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm">需要予測</span>
                    </div>
                  </div>
                  <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <Image
                      src="/images/test01.jpg"
                      alt="AI技術とデータ分析のコンセプト画像"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            )
          }
        ]}
        defaultTab="overview"
        className="border-t border-gray-700"
      />

      {/* テスト6: 2つのタブ（ワイドレイアウト） */}
      <TabSection
        title="2つのタブ（ワイドレイアウト）"
        subtitle="技術提供"
        description="2つのタブをワイドに配置したレイアウトです。"
        tabs={[
          {
            id: 'development',
            name: '開発',
            content: (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30">
                    <div className="text-2xl mb-4">🚀</div>
                    <h3 className="text-lg font-semibold text-white mb-2">機械学習モデル開発</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      ビジネスニーズに合わせた機械学習モデルの設計と開発
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">TensorFlow</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">PyTorch</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">Scikit-learn</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30">
                    <div className="text-2xl mb-4">👥</div>
                    <h3 className="text-lg font-semibold text-white mb-2">自然言語処理</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      テキストデータの分析、生成、翻訳などのNLPソリューション
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">BERT</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">GPT</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">Transformers</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30">
                    <div className="text-2xl mb-4">📊</div>
                    <h3 className="text-lg font-semibold text-white mb-2">画像認識システム</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      深層学習を用いた画像認識・分類システムの開発
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">OpenCV</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">CNNs</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">YOLO</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          },
          {
            id: 'consulting',
            name: 'コンサルティング',
            content: (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">AI戦略コンサルティング</h3>
                    <p className="text-gray-300">
                      企業のAI導入戦略を策定し、最適なソリューションを提案します。
                      技術的な実現可能性とビジネス価値を両立した戦略を立案します。
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• AI導入戦略の策定</li>
                      <li>• 技術選定とアーキテクチャ設計</li>
                      <li>• ROI分析と投資対効果の評価</li>
                      <li>• 組織変革と人材育成支援</li>
                    </ul>
                  </div>
                  <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <Image
                      src="/images/test02.jpg"
                      alt="グローバルなテクノロジーとメディアのコンセプト画像"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            )
          }
        ]}
        defaultTab="development"
        variant="dark"
      />

      {/* テスト7: カスタムクラス */}
      <TabSection
        title="カスタムクラス"
        description="追加のCSSクラスを適用したテストです。"
        tabs={serviceTabs}
        defaultTab="technology"
        className="border-t border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800"
        padding="sm"
      />

      {/* フッター */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            TabSection コンポーネントのテスト完了
          </p>
        </div>
      </div>
    </div>
  )
}

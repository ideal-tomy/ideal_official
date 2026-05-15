'use client'

import { ThreeCardSection } from '../../components/sections/ThreeCardSection'
import Image from 'next/image'

export default function TestThreeCardsPage() {
  // サンプルカードデータ
  const sampleCards = [
    {
      title: 'Web開発',
      description: 'モダンなWebサイト制作からECサイト構築まで、お客様のニーズに合わせたWeb開発を提供します。',
      icon: '🌐',
      tags: ['React', 'Next.js', 'TypeScript'],
      onClick: () => console.log('Web開発 clicked')
    },
    {
      title: 'アプリ開発',
      description: 'iOS・Androidアプリの開発から、クロスプラットフォーム対応まで幅広く対応します。',
      icon: '📱',
      tags: ['React Native', 'Flutter', 'Swift'],
      onClick: () => console.log('アプリ開発 clicked')
    },
    {
      title: 'ゲーム制作',
      description: '2D・3Dゲームの企画から開発まで、エンターテインメント性の高いゲームを制作します。',
      icon: '🎮',
      tags: ['Unity', 'Unreal Engine', 'C#'],
      onClick: () => console.log('ゲーム制作 clicked')
    }
  ]

  const featureCards = [
    {
      title: 'AI戦略コンサル',
      description: '企業のAI導入戦略を策定し、最適なソリューションを提案します。',
      icon: '🤖',
      tags: ['AI', '戦略', 'コンサル'],
      href: '/services/ai-consulting',
      onClick: () => console.log('AI戦略コンサル clicked')
    },
    {
      title: 'ブロックチェーン開発',
      description: 'DeFi、NFT、スマートコントラクトなど、ブロックチェーン技術を活用した開発を行います。',
      icon: '⛓️',
      tags: ['Blockchain', 'DeFi', 'NFT'],
      href: '/services/blockchain-development',
      onClick: () => console.log('ブロックチェーン開発 clicked')
    },
    {
      title: 'システム開発',
      description: '企業の業務効率化を目的としたシステム開発から、既存システムの改修まで対応します。',
      icon: '⚙️',
      tags: ['システム', '効率化', '改修'],
      onClick: () => console.log('システム開発 clicked')
    }
  ]

  const technologyCards = [
    {
      title: 'React',
      description: 'モダンなフロントエンド開発に最適なライブラリです。',
      icon: '⚛️',
      tags: ['JavaScript', 'フロントエンド'],
      onClick: () => console.log('React clicked')
    },
    {
      title: 'Node.js',
      description: 'サーバーサイド開発に最適なJavaScriptランタイムです。',
      icon: '🟢',
      tags: ['JavaScript', 'サーバーサイド'],
      onClick: () => console.log('Node.js clicked')
    },
    {
      title: 'Python',
      description: 'AI・機械学習開発に最適なプログラミング言語です。',
      icon: '🐍',
      tags: ['AI', '機械学習', 'データサイエンス'],
      onClick: () => console.log('Python clicked')
    }
  ]

  // 画像付きカードデータ
  const imageCards = [
    {
      title: 'AI技術の可能性',
      description: 'test01.jpg（ポートレート）を使用したカード例です。縦長の画像を効果的に活用しています。',
      image: '/images/test01.jpg',
      tags: ['AI', 'データ分析', 'グローバル'],
      onClick: () => console.log('AI技術 clicked')
    },
    {
      title: 'グローバルなテクノロジー',
      description: 'test02.jpg（ランドスケープ）を使用したカード例です。横長の画像を効果的に活用しています。',
      image: '/images/test02.jpg',
      tags: ['グローバル', 'テクノロジー', 'メディア'],
      onClick: () => console.log('グローバルテクノロジー clicked')
    },
    {
      title: 'デジタルイノベーション',
      description: '画像とテキストを組み合わせた魅力的なカードレイアウトの例です。',
      icon: '🚀',
      tags: ['イノベーション', 'デジタル', '未来'],
      onClick: () => console.log('デジタルイノベーション clicked')
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* ヘッダー */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            ThreeCardSection テストページ
          </h1>
          <p className="text-gray-300 text-center mt-4">
            3カラムカードレイアウトのセクションコンポーネントの動作確認
          </p>
        </div>
      </div>

      {/* テスト1: 基本レイアウト */}
      <ThreeCardSection
        title="基本レイアウトテスト"
        subtitle="サービス一覧"
        description="3つのサービスをカード形式で表示します。"
        cards={sampleCards}
      />

      {/* テスト2: ダークバリアント */}
      <ThreeCardSection
        title="ダークバリアント"
        description="背景色がダークなバリアントです。"
        cards={featureCards}
        variant="dark"
        padding="xl"
      />

      {/* テスト3: アクセントバリアント */}
      <ThreeCardSection
        title="アクセントバリアント"
        description="アクセントカラーを使用したバリアントです。"
        cards={technologyCards}
        variant="accent"
        cardSize="lg"
      />

      {/* テスト4: 小さいカードサイズ */}
      <ThreeCardSection
        title="小さいカードサイズ"
        description="カードサイズを小さくしたバリアントです。"
        cards={sampleCards}
        cardSize="sm"
        padding="md"
      />

      {/* テスト5: 左寄せ配置 */}
      <ThreeCardSection
        title="左寄せ配置"
        description="カードを左寄せで配置したバリアントです。"
        cards={featureCards}
        cardAlignment="left"
        className="border-t border-gray-700"
      />

      {/* テスト6: 右寄せ配置 */}
      <ThreeCardSection
        title="右寄せ配置"
        description="カードを右寄せで配置したバリアントです。"
        cards={technologyCards}
        cardAlignment="right"
        variant="dark"
      />

      {/* テスト7: カスタムクラス */}
      <ThreeCardSection
        title="カスタムクラス"
        description="追加のCSSクラスを適用したテストです。"
        cards={sampleCards}
        className="border-t border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800"
      />

      {/* テスト8: 画像付きカードテスト */}
      <ThreeCardSection
        title="画像付きカードテスト"
        subtitle="異なるアスペクト比の画像配置例"
        description="ポートレート画像とランドスケープ画像を組み合わせたカードレイアウトの例です。"
        cards={imageCards}
        variant="dark"
        padding="xl"
      />

      {/* テスト9: レスポンシブテスト */}
      <ThreeCardSection
        title="レスポンシブテスト"
        description="様々な画面サイズでの表示を確認します。"
        cards={[
          ...sampleCards,
          ...featureCards,
          ...technologyCards
        ]}
        variant="accent"
        padding="xl"
      />

      {/* フッター */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            ThreeCardSection コンポーネントのテスト完了
          </p>
        </div>
      </div>
    </div>
  )
}

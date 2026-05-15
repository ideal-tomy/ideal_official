'use client'

import { RelatedServicesSection } from '../../components/sections/RelatedServicesSection'

export default function TestRelatedServicesPage() {
  // サンプル関連サービスデータ
  const relatedServices = [
    {
      id: 'web-development',
      title: 'Web開発',
      description: 'モダンなWebサイト制作からECサイト構築まで、お客様のニーズに合わせたWeb開発を提供します。',
      image: '/images/test01.jpg',
      href: '/services/web-development',
      tags: ['React', 'Next.js', 'TypeScript']
    },
    {
      id: 'app-development',
      title: 'アプリ開発',
      description: 'iOS・Androidアプリの開発から、クロスプラットフォーム対応まで幅広く対応します。',
      icon: '📱',
      href: '/services/app-development',
      tags: ['React Native', 'Flutter', 'Swift']
    },
    {
      id: 'game-development',
      title: 'ゲーム制作',
      description: '2D・3Dゲームの企画から開発まで、エンターテインメント性の高いゲームを制作します。',
      icon: '🎮',
      href: '/services/game-development',
      tags: ['Unity', 'Unreal Engine', 'C#']
    }
  ]

  const aiServices = [
    {
      id: 'ai-consulting',
      title: 'AI戦略コンサル',
      description: '企業のAI導入戦略を策定し、最適なソリューションを提案します。',
      image: '/images/test02.jpg',
      href: '/services/ai-consulting',
      tags: ['AI', '戦略', 'コンサル']
    },
    {
      id: 'blockchain-development',
      title: 'ブロックチェーン開発',
      description: 'DeFi、NFT、スマートコントラクトなど、ブロックチェーン技術を活用した開発を行います。',
      icon: '⛓️',
      href: '/services/blockchain-development',
      tags: ['Blockchain', 'DeFi', 'NFT']
    },
    {
      id: 'system-development',
      title: 'システム開発',
      description: '企業の業務効率化を目的としたシステム開発から、既存システムの改修まで対応します。',
      icon: '⚙️',
      href: '/services/system-development',
      tags: ['システム', '効率化', '改修']
    }
  ]

  const technologyServices = [
    {
      id: 'react-development',
      title: 'React開発',
      description: 'モダンなフロントエンド開発に最適なライブラリを使用した開発を行います。',
      icon: '⚛️',
      href: '/services/react-development',
      tags: ['JavaScript', 'フロントエンド']
    },
    {
      id: 'nodejs-development',
      title: 'Node.js開発',
      description: 'サーバーサイド開発に最適なJavaScriptランタイムを使用した開発を行います。',
      icon: '🟢',
      href: '/services/nodejs-development',
      tags: ['JavaScript', 'サーバーサイド']
    },
    {
      id: 'python-development',
      title: 'Python開発',
      description: 'AI・機械学習開発に最適なプログラミング言語を使用した開発を行います。',
      icon: '🐍',
      href: '/services/python-development',
      tags: ['AI', '機械学習', 'データサイエンス']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* ヘッダー */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            RelatedServicesSection テストページ
          </h1>
          <p className="text-gray-300 text-center mt-4">
            関連サービスセクションコンポーネントの動作確認
          </p>
        </div>
      </div>

      {/* テスト1: 基本レイアウト */}
      <RelatedServicesSection
        title="基本レイアウトテスト"
        subtitle="関連サービス一覧"
        description="関連するサービスをカード形式で表示します。"
        services={relatedServices}
      />

      {/* テスト2: ダークバリアント */}
      <RelatedServicesSection
        title="ダークバリアント"
        description="背景色がダークなバリアントです。"
        services={aiServices}
        variant="dark"
        padding="xl"
      />

      {/* テスト3: アクセントバリアント */}
      <RelatedServicesSection
        title="アクセントバリアント"
        description="アクセントカラーを使用したバリアントです。"
        services={technologyServices}
        variant="accent"
        cardSize="lg"
      />

      {/* テスト4: 左寄せ配置 */}
      <RelatedServicesSection
        title="左寄せ配置"
        description="カードを左寄せで配置したバリアントです。"
        services={relatedServices}
        cardAlignment="left"
        className="border-t border-gray-700"
      />

      {/* テスト5: 右寄せ配置 */}
      <RelatedServicesSection
        title="右寄せ配置"
        description="カードを右寄せで配置したバリアントです。"
        services={aiServices}
        cardAlignment="right"
        variant="dark"
      />

      {/* テスト6: 小さいカードサイズ */}
      <RelatedServicesSection
        title="小さいカードサイズ"
        description="カードサイズを小さくしたバリアントです。"
        services={technologyServices}
        cardSize="sm"
        padding="md"
      />

      {/* テスト7: カスタムクラス */}
      <RelatedServicesSection
        title="カスタムクラス"
        description="追加のCSSクラスを適用したテストです。"
        services={relatedServices}
        className="border-t border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800"
      />

      {/* テスト8: レスポンシブテスト */}
      <RelatedServicesSection
        title="レスポンシブテスト"
        description="様々な画面サイズでの表示を確認します。"
        services={[
          ...relatedServices,
          ...aiServices,
          ...technologyServices
        ]}
        variant="accent"
        padding="xl"
      />

      {/* フッター */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            RelatedServicesSection コンポーネントのテスト完了
          </p>
        </div>
      </div>
    </div>
  )
}

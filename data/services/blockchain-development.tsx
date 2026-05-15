/**
 * ブロックチェーン開発サービスデータ定義
 * 単一責任の原則に従い、ブロックチェーン開発サービス関連のデータのみを管理
 */

import { ServicePageData, TabData, CardData, RelatedServiceData, FAQData } from '../../types/service'

// ブロックチェーン開発サービスページのデータ
export const blockchainDevelopmentData: ServicePageData = {
  id: 'blockchain-development',
  title: 'ブロックチェーン開発',
  description: 'DeFi、NFT、スマートコントラクトなど、ブロックチェーン技術を活用した開発を行います。',
  hero: {
    title: 'ブロックチェーン開発',
    subtitle: 'DeFi・NFT・スマートコントラクトの開発'
  },
  sections: [
    {
      id: 'hero',
      type: 'hero',
      title: 'ブロックチェーン開発',
      subtitle: 'DeFi・NFT・スマートコントラクトの開発'
    },
    {
      id: 'overview',
      type: 'single',
      title: 'ブロックチェーン技術の可能性',
      description: 'Ethereum、Polygon、Solanaなどのブロックチェーンプラットフォームを使用し、次世代の分散型アプリケーションを開発します。'
    },
    {
      id: 'technologies',
      type: 'three-cards',
      title: '使用技術',
      description: '最新のブロックチェーン技術を活用した高品質な開発を行います。',
      data: {
        cards: [
          {
            title: 'Ethereum',
            description: '最も普及しているスマートコントラクトプラットフォームです。',
            icon: '⛓️',
            tags: ['Solidity', 'スマートコントラクト', 'DeFi']
          },
          {
            title: 'Polygon',
            description: 'Ethereumのスケーラビリティ問題を解決するレイヤー2ソリューションです。',
            icon: '🔷',
            tags: ['レイヤー2', 'スケーラビリティ', '低コスト']
          },
          {
            title: 'Solana',
            description: '高性能なブロックチェーンプラットフォームです。',
            icon: '☀️',
            tags: ['高性能', '低手数料', 'Rust']
          }
        ]
      }
    },
    {
      id: 'services',
      type: 'tabs',
      title: 'サービス内容',
      description: 'DeFiからNFTまで、幅広いブロックチェーン開発サービスを提供します。',
      data: {
        tabs: [
          {
            id: 'defi',
            name: 'DeFi',
            content: '分散型金融（DeFi）アプリケーションの開発'
          },
          {
            id: 'nft',
            name: 'NFT',
            content: 'NFTマーケットプレイス・NFTプロジェクトの開発'
          },
          {
            id: 'smart-contracts',
            name: 'スマートコントラクト',
            content: 'スマートコントラクトの設計・開発・監査'
          },
          {
            id: 'dapp',
            name: 'DApp',
            content: '分散型アプリケーション（DApp）の開発'
          }
        ]
      }
    },
    {
      id: 'process',
      type: 'single',
      title: '開発プロセス',
      description: '企画から運用まで、一貫した開発プロセスで高品質なブロックチェーンソリューションを提供します。'
    },
    {
      id: 'features',
      type: 'two-column',
      title: '主な特徴',
      description: '最新技術とセキュリティを重視した高品質なブロックチェーン開発を提供します。',
      data: {
        leftContent: 'セキュリティ重視',
        rightContent: 'スケーラビリティ'
      }
    }
  ],
  relatedServices: [
    {
      id: 'web-development',
      title: 'Web開発',
      description: 'Web3アプリケーション・DAppのフロントエンド開発',
      href: '/services/web-development',
      tags: ['Web3', 'DApp', 'フロントエンド']
    },
    {
      id: 'ai-consulting',
      title: 'AI',
      description: 'AI技術を活用したスマートコントラクトの開発',
      href: '/services/ai-consulting',
      tags: ['AI', 'スマートコントラクト', '機械学習']
    },
    {
      id: 'app-development',
      title: 'アプリ開発',
      description: 'ブロックチェーン機能を統合したモバイルアプリ開発',
      href: '/services/app-development',
      tags: ['モバイル', 'ブロックチェーン', 'ウォレット']
    }
  ],
  faqs: [
    {
      id: 'blockchains',
      question: 'どのようなブロックチェーンプラットフォームに対応していますか？',
      answer: 'Ethereum、Polygon、Solana、Binance Smart Chain、Avalancheなど、主要なブロックチェーンプラットフォームに対応しています。プロジェクトの要件に応じて最適なプラットフォームを選択いたします。',
      category: '技術'
    },
    {
      id: 'security',
      question: 'セキュリティ対策はどのように行っていますか？',
      answer: 'スマートコントラクトの監査、セキュリティテスト、ベストプラクティスの実装など、包括的なセキュリティ対策を行っています。また、外部のセキュリティ監査会社との連携も可能です。',
      category: 'セキュリティ'
    },
    {
      id: 'development-time',
      question: 'ブロックチェーン開発にはどのくらいの期間がかかりますか？',
      answer: 'プロジェクトの規模により異なりますが、スマートコントラクトで1-3ヶ月、DAppで3-6ヶ月、大規模なDeFiプロジェクトで6-12ヶ月以上となることが一般的です。',
      category: '期間'
    },
    {
      id: 'maintenance',
      question: 'ブロックチェーンアプリの保守・運用サポートはありますか？',
      answer: 'はい、ブロックチェーンアプリの保守・運用サポートも提供しています。スマートコントラクトの監視、アップデート、セキュリティパッチの適用など、継続的なサポートを提供いたします。',
      category: '運用'
    }
  ]
}

// タブデータの詳細定義
export const blockchainDevelopmentTabData: TabData[] = [
  {
    id: 'defi',
    name: 'DeFi',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">DeFiアプリケーション開発</h3>
            <p className="text-gray-300">
              分散型金融（DeFi）アプリケーションの開発を行います。
              DEX、レンディング、ステーキング、流動性マイニングなど、様々なDeFiプロトコルに対応しています。
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• DEX（分散型取引所）</li>
              <li>• レンディングプロトコル</li>
              <li>• ステーキング</li>
              <li>• 流動性マイニング</li>
            </ul>
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <img
              src="/images/test01.jpg"
              alt="DeFiアプリケーションの例"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'nft',
    name: 'NFT',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <img
              src="/images/test02.jpg"
              alt="NFTプロジェクトの例"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">NFTプロジェクト開発</h3>
            <p className="text-gray-300">
              NFTマーケットプレイス・NFTプロジェクトの開発を行います。
              アート、ゲーム、メタバースなど、様々なジャンルのNFTプロジェクトに対応しています。
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• NFTマーケットプレイス</li>
              <li>• NFTミント機能</li>
              <li>• ゲーム内NFT</li>
              <li>• メタバースNFT</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
]

// カードデータの詳細定義
export const blockchainDevelopmentCardData: CardData[] = [
  {
    title: 'Ethereum',
    description: '最も普及しているスマートコントラクトプラットフォームです。',
    icon: '⛓️',
    tags: ['Solidity', 'スマートコントラクト', 'DeFi']
  },
  {
    title: 'Polygon',
    description: 'Ethereumのスケーラビリティ問題を解決するレイヤー2ソリューションです。',
    icon: '🔷',
    tags: ['レイヤー2', 'スケーラビリティ', '低コスト']
  },
  {
    title: 'Solana',
    description: '高性能なブロックチェーンプラットフォームです。',
    icon: '☀️',
    tags: ['高性能', '低手数料', 'Rust']
  }
]

// 関連サービスデータの詳細定義
export const blockchainDevelopmentRelatedServices: RelatedServiceData[] = [
  {
    id: 'web-development',
    title: 'Web開発',
    description: 'Web3アプリケーション・DAppのフロントエンド開発',
    href: '/services/web-development',
    tags: ['Web3', 'DApp', 'フロントエンド']
  },
  {
    id: 'ai-consulting',
    title: 'AI',
    description: 'AI技術を活用したスマートコントラクトの開発',
    href: '/services/ai-consulting',
    tags: ['AI', 'スマートコントラクト', '機械学習']
  },
  {
    id: 'app-development',
    title: 'アプリ開発',
    description: 'ブロックチェーン機能を統合したモバイルアプリ開発',
    href: '/services/app-development',
    tags: ['モバイル', 'ブロックチェーン', 'ウォレット']
  }
]

// FAQデータの詳細定義
export const blockchainDevelopmentFAQs: FAQData[] = [
  {
    id: 'blockchains',
    question: 'どのようなブロックチェーンプラットフォームに対応していますか？',
    answer: 'Ethereum、Polygon、Solana、Binance Smart Chain、Avalancheなど、主要なブロックチェーンプラットフォームに対応しています。プロジェクトの要件に応じて最適なプラットフォームを選択いたします。',
    category: '技術'
  },
  {
    id: 'security',
    question: 'セキュリティ対策はどのように行っていますか？',
    answer: 'スマートコントラクトの監査、セキュリティテスト、ベストプラクティスの実装など、包括的なセキュリティ対策を行っています。また、外部のセキュリティ監査会社との連携も可能です。',
    category: 'セキュリティ'
  },
  {
    id: 'development-time',
    question: 'ブロックチェーン開発にはどのくらいの期間がかかりますか？',
    answer: 'プロジェクトの規模により異なりますが、スマートコントラクトで1-3ヶ月、DAppで3-6ヶ月、大規模なDeFiプロジェクトで6-12ヶ月以上となることが一般的です。',
    category: '期間'
  },
  {
    id: 'maintenance',
    question: 'ブロックチェーンアプリの保守・運用サポートはありますか？',
    answer: 'はい、ブロックチェーンアプリの保守・運用サポートも提供しています。スマートコントラクトの監視、アップデート、セキュリティパッチの適用など、継続的なサポートを提供いたします。',
    category: '運用'
  }
]

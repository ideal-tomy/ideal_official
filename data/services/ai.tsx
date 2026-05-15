/**
 * AIサービスデータ定義
 * 単一責任の原則に従い、AIサービス関連のデータのみを管理
 */

import React from 'react'
import Image from 'next/image'
import { ServicePageData, TabData, CardData, RelatedServiceData, FAQData } from '../../types/service'

// AIサービスページのデータ
export const aiServiceData: ServicePageData = {
  id: 'ai-consulting',
  title: 'AI',
  description: 'AI戦略の策定から技術選定、実装支援まで一貫したサポートを提供します。',
  hero: {
    title: 'AI技術の可能性',
    subtitle: '中小企業にこそ、AIがもたらす大きな恩恵'
  },
  sections: [
    {
      id: 'hero',
      type: 'hero',
      title: 'AI技術の可能性',
      subtitle: '中小企業にこそ、AIがもたらす大きな恩恵'
    },
    {
      id: 'overview',
      type: 'single',
      title: 'AI技術の可能性',
      description: 'AI（人工知能）は、ビジネスプロセスの自動化、データ分析、意思決定支援など、様々な領域で革新的なソリューションを提供します。IDEALでは、最新のAI技術と実践的な経験を組み合わせ、お客様に最適なAIソリューションを提供します。',
      variant: 'dark',
      className: 'border border-blue-400/30'
    },
    {
      id: 'benefits',
      type: 'single',
      title: '中小企業にこそ、AIがもたらす大きな恩恵',
      description: 'AI技術は、かつて大企業だけのものでしたが、クラウドサービスの発達とAIツールの普及により、中小企業でも手軽に導入できるようになりました。中小企業こそ、新しい技術の恩恵を最大限に活用できる柔軟性と意思決定の速さを持っています。',
      variant: 'accent'
    },
    {
      id: 'features',
      type: 'three-cards',
      title: '具体的な活用方法',
      description: 'AI技術を活用した具体的なソリューションをご提案します。',
      variant: 'dark',
      data: {
        cards: [
          {
            title: '業務効率化',
            description: 'ChatGPTを活用した定型業務の自動化、画像認識による在庫管理など、人手不足の解消と従業員のコア業務への集中を実現します。',
            icon: '⚡',
            tags: ['自動化', '効率化', 'ChatGPT']
          },
          {
            title: 'マーケティング強化',
            description: 'SNSマーケティングの最適化や顧客データ分析により、限られた予算で最大の効果を実現します。',
            icon: '📈',
            tags: ['SNS', 'データ分析', '最適化']
          },
          {
            title: '品質管理・予測',
            description: 'AIによる品質チェックと予測分析により、エラーの削減と効率的な在庫管理を実現します。',
            icon: '🎯',
            tags: ['品質管理', '予測分析', '在庫管理']
          }
        ]
      }
    },
    {
      id: 'tabs-main',
      type: 'tabs',
      title: 'AI人材が働くすべての人たちに最適なワークライフバランスを',
      description: 'AI導入は業務効率化だけでなく、従業員の働き方も変革します。創造的な業務に時間を割けるよう、技術導入を通じて、すべての従業員がより充実した仕事と私生活を実現できる環境づくりをサポートします。',
      variant: 'dark',
      tabLayout: 'compact',
      data: {
        tabs: [
          {
            id: 'ai-process',
            name: 'AI開発プロセス',
            content: 'AI導入の企画から運用まで、段階的なプロセスをサポートします。'
          },
          {
            id: 'main-features',
            name: '主要機能',
            content: '機械学習、自然言語処理、画像認識など、主要なAI機能を紹介します。'
          },
          {
            id: 'use-cases',
            name: '活用事例',
            content: '実際の導入事例を通じて、AIの効果的な活用方法を学べます。'
          }
        ]
      }
    },
    {
      id: 'comparison',
      type: 'two-column',
      title: '従来技術との比較',
      variant: 'accent',
      data: {
        leftContent: '従来のシステム開発',
        rightContent: '最新のAIソリューション'
      }
    },
    {
      id: 'requirements',
      type: 'three-cards',
      title: '導入に必要な要素',
      description: 'AI導入に必要な技術的・組織的な要素を整理し、段階的な導入計画を策定します。',
      variant: 'dark',
      data: {
        cards: [
          {
            title: '技術要素',
            description: 'AI導入に必要な技術的な要素を整理します。',
            icon: '⚙️',
            tags: ['機械学習', '深層学習', 'データ処理']
          },
          {
            title: 'ビジネス要素',
            description: 'AI導入に必要なビジネス的な要素を整理します。',
            icon: '📊',
            tags: ['戦略', 'ROI', '変革管理']
          },
          {
            title: '人材要素',
            description: 'AI導入に必要な人材的な要素を整理します。',
            icon: '👥',
            tags: ['データサイエンティスト', 'エンジニア', '専門家']
          }
        ]
      }
    },
    {
      id: 'why-now',
      type: 'two-column',
      title: 'なぜ今、導入が必要なのか',
      description: 'AIは単なるトレンドではなく、ビジネスプロセスと意思決定の方法を根本から変革する技術です。以下の理由から、企業が今AI戦略を導入することが重要です：',
      variant: 'accent',
      data: {
        leftContent: '市場動向とビジネス変革',
        rightContent: '技術革新と競争優位性'
      }
    },
    {
      id: 'technology',
      type: 'tabs',
      title: '技術提供',
      description: '開発とコンサルティングを組み合わせた包括的なAIソリューションを提供します。',
      variant: 'dark',
      tabLayout: 'wide',
      data: {
        tabs: [
          {
            id: 'development',
            name: '開発',
            content: 'AIシステムの設計・開発・実装まで一貫したサポートを提供します。'
          },
          {
            id: 'consulting',
            name: 'コンサルティング',
            content: 'AI戦略の策定から組織変革まで、経営視点でのコンサルティングを提供します。'
          }
        ]
      }
    }
  ],
  relatedServices: [
    {
      id: 'blockchain-development',
      title: 'ブロックチェーン開発',
      description: '分散型台帳技術を活用した透明性と信頼性の高いシステム構築',
      href: '/services/blockchain-development',
      tags: ['Blockchain', 'DeFi', 'NFT']
    },
    {
      id: 'metaverse-development',
      title: 'メタバース開発',
      description: '仮想空間での新しいユーザー体験とビジネスモデルの創出',
      href: '/services/metaverse-development',
      tags: ['Metaverse', 'VR', 'AR']
    },
    {
      id: 'nft-development',
      title: 'NFT開発',
      description: 'デジタル資産の新たな価値を創造する、次世代のソリューション',
      href: '/services/nft-development',
      tags: ['NFT', 'Digital Asset', 'Blockchain']
    }
  ],
  faqs: [
    {
      id: 'preparation',
      question: 'AI導入にはどのような準備が必要ですか？',
      answer: 'AI導入には、データの整理、組織の準備、技術的な基盤の構築など、多面的な準備が必要です。まずは現状分析から始め、段階的な導入計画を策定します。',
      category: '導入準備'
    },
    {
      id: 'timeline',
      question: 'AI導入にはどのくらいの期間が必要ですか？',
      answer: 'プロジェクトの規模により異なりますが、小規模なAI機能で3-6ヶ月、中規模なシステムで6-12ヶ月、大規模なAIプラットフォームで12ヶ月以上となることが一般的です。',
      category: '期間'
    },
    {
      id: 'benefits',
      question: 'ビジネスにAIを導入するメリットは？',
      answer: 'AI導入により、業務効率化、コスト削減、新たな収益機会の創出、顧客体験の向上、競争優位性の獲得など、多面的なメリットが期待できます。',
      category: 'メリット'
    }
  ]
}

// タブデータの詳細定義
export const aiTabData: TabData[] = [
  {
    id: 'overview',
    name: 'AI概要',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">AI技術の基本概念</h3>
            <p className="text-gray-300">
              AI（人工知能）は、人間の知的能力をコンピュータで再現する技術です。
              機械学習、深層学習、自然言語処理などの技術を組み合わせて、
              ビジネスの課題解決に活用します。
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">機械学習</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">深層学習</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">NLP</span>
            </div>
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/images/test01.jpg"
              alt="AI技術の概念図"
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
    id: 'process',
    name: '開発プロセス',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-3">1. 企画・設計</h4>
            <p className="text-gray-300 text-sm">
              ビジネス課題の分析からAIソリューションの設計まで、
              戦略的な企画段階をサポートします。
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-3">2. 開発・実装</h4>
            <p className="text-gray-300 text-sm">
              AIモデルの開発からシステム実装まで、
              技術的な実装段階をサポートします。
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-3">3. 運用・改善</h4>
            <p className="text-gray-300 text-sm">
              システムの運用監視から継続的な改善まで、
              長期的なサポートを提供します。
            </p>
          </div>
        </div>
      </div>
    )
  }
]

// カードデータの詳細定義
export const aiCardData: CardData[] = [
  {
    title: '機械学習',
    description: 'データから学習し、パターンを認識して予測や分類を行う機械学習技術。ビジネスの意思決定支援や自動化に活用します。',
    icon: '🤖',
    tags: ['機械学習', '予測分析', '自動化']
  },
  {
    title: '自然言語処理',
    description: 'テキストデータの解析、生成、翻訳などを行うAI技術。チャットボット、感情分析、文書分析などに活用します。',
    icon: '💬',
    tags: ['NLP', 'チャットボット', '文書分析']
  },
  {
    title: '深層学習',
    description: '複雑なニューラルネットワークを用いて、画像認識、自然言語処理、音声認識などの高度なタスクを実現します。',
    icon: '🧠',
    tags: ['深層学習', '画像認識', '音声認識']
  }
]

// 関連サービスデータの詳細定義
export const aiRelatedServices: RelatedServiceData[] = [
  {
    id: 'web-development',
    title: 'Web開発',
    description: 'AI機能を統合したモダンなWebアプリケーションの開発',
    href: '/services/web-development',
    tags: ['React', 'Next.js', 'AI統合']
  },
  {
    id: 'app-development',
    title: 'アプリ開発',
    description: 'AI機能を活用したモバイルアプリケーションの開発',
    href: '/services/app-development',
    tags: ['React Native', 'AI', 'モバイル']
  },
  {
    id: 'blockchain-development',
    title: 'ブロックチェーン開発',
    description: 'AIとブロックチェーンを組み合わせた次世代ソリューション',
    href: '/services/blockchain-development',
    tags: ['Blockchain', 'AI', 'DeFi']
  }
]

// FAQデータの詳細定義
export const aiFAQs: FAQData[] = [
  {
    id: 'ai-consulting',
    question: 'AIではどのような支援を行いますか？',
    answer: 'AI戦略の策定から技術選定、実装支援まで一貫したサポートを提供します。お客様のビジネスに最適なAIソリューションを提案し、導入から運用までサポートいたします。',
    category: '技術'
  },
  {
    id: 'implementation',
    question: 'AI導入にはどのくらいの期間がかかりますか？',
    answer: 'プロジェクトの規模により異なりますが、小規模なAI機能で3-6ヶ月、中規模なシステムで6-12ヶ月、大規模なAIプラットフォームで12ヶ月以上となることが一般的です。',
    category: '導入'
  },
  {
    id: 'cost',
    question: 'AI導入のコストはどのくらいですか？',
    answer: '初期投資は100万円から500万円程度が一般的ですが、ROI（投資対効果）は導入から1-2年で回収できるケースが多く、長期的には大幅なコスト削減と収益向上が期待できます。',
    category: '費用'
  },
  {
    id: 'maintenance',
    question: 'AIシステムの保守・運用はどうなりますか？',
    answer: '24時間365日の監視体制と迅速な障害対応を行っています。AIモデルの継続的な学習・改善、データ品質管理、セキュリティアップデートなど、包括的なサポートを提供いたします。',
    category: '運用'
  }
]

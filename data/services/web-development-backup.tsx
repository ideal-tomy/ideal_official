/**
 * Web開発サービスデータ定義
 * 単一責任の原則に従い、Web開発サービス関連のデータのみを管理
 */

import { ServicePageData, TabData, CardData, RelatedServiceData, FAQData } from '../../types/service'

// Web開発サービスページのデータ
export const webDevelopmentData: ServicePageData = {
  id: 'web-development',
  title: 'Web開発',
  description: 'モダンなWebサイト制作からECサイト構築まで、お客様のニーズに合わせたWeb開発を提供します。',
  hero: {
    title: 'モダンなWeb開発',
    subtitle: '最新技術で実現する高品質なWebサイト'
  },
  sections: [
    {
      id: 'hero',
      type: 'hero',
      title: 'モダンなWeb開発',
      subtitle: '最新技術で実現する高品質なWebサイト'
    },
    {
      id: 'overview',
      type: 'single',
      title: 'Web開発の可能性',
      description: 'React、Next.js、TypeScriptなどの最新技術を活用し、パフォーマンスとユーザビリティを重視したWebサイトを制作します。'
    },
    {
      id: 'technologies',
      type: 'three-cards',
      title: '使用技術',
      description: '最新のWeb技術を活用した高品質な開発を行います。',
      data: {
        cards: [
          {
            title: 'React',
            description: 'コンポーネントベースのUIライブラリで、再利用可能で保守性の高いコードを実現します。',
            icon: '⚛️',
            tags: ['JavaScript', 'UI', 'コンポーネント']
          },
          {
            title: 'Next.js',
            description: 'Reactベースのフレームワークで、SSR、SSG、API Routesなどの機能を提供します。',
            icon: '🚀',
            tags: ['フレームワーク', 'SSR', 'SSG']
          },
          {
            title: 'TypeScript',
            description: '型安全性を提供するJavaScriptのスーパーセットで、開発効率と品質を向上させます。',
            icon: '📘',
            tags: ['型安全性', '開発効率', '品質向上']
          }
        ]
      }
    },
    {
      id: 'services',
      type: 'tabs',
      title: 'サービス内容',
      description: 'Webサイト制作からECサイト構築まで、幅広いWeb開発サービスを提供します。',
      data: {
        tabs: [
          {
            id: 'corporate',
            name: 'コーポレートサイト',
            content: '企業のブランドイメージを表現するコーポレートサイトの制作'
          },
          {
            id: 'ec',
            name: 'ECサイト',
            content: 'オンラインショッピングに最適化されたECサイトの構築'
          },
          {
            id: 'webapp',
            name: 'Webアプリ',
            content: '業務効率化を目的としたWebアプリケーションの開発'
          },
          {
            id: 'maintenance',
            name: '保守・運用',
            content: 'Webサイトの継続的な保守・運用サポート'
          }
        ]
      }
    },
    {
      id: 'process',
      type: 'single',
      title: '開発プロセス',
      description: '企画から運用まで、一貫した開発プロセスで高品質なWebサイトを提供します。'
    },
    {
      id: 'features',
      type: 'two-column',
      title: '主な特徴',
      description: '最新技術とベストプラクティスを組み合わせた高品質なWeb開発を提供します。',
      data: {
        leftContent: 'レスポンシブデザイン',
        rightContent: 'SEO最適化'
      }
    }
  ],
  relatedServices: [
    {
      id: 'ai-consulting',
      title: 'AI',
      description: 'AI機能を統合したWebアプリケーションの開発',
      href: '/services/ai-consulting',
      tags: ['AI', 'Web', '統合']
    },
    {
      id: 'app-development',
      title: 'アプリ開発',
      description: 'Web技術を活用したクロスプラットフォームアプリ開発',
      href: '/services/app-development',
      tags: ['PWA', 'Web', 'モバイル']
    },
    {
      id: 'blockchain-development',
      title: 'ブロックチェーン開発',
      description: 'Web3技術を活用した次世代Webアプリケーション',
      href: '/services/blockchain-development',
      tags: ['Web3', 'Blockchain', 'DApp']
    }
  ],
  faqs: [
    {
      id: 'technologies',
      question: 'どのような技術を使用していますか？',
      answer: 'React、Next.js、TypeScript、Tailwind CSSなどの最新技術を活用しています。また、Node.js、PostgreSQL、MongoDBなどのバックエンド技術も対応可能です。',
      category: '技術'
    },
    {
      id: 'responsive',
      question: 'レスポンシブデザインに対応していますか？',
      answer: 'はい、すべてのWebサイトでレスポンシブデザインに対応しています。モバイル、タブレット、デスクトップのすべてのデバイスで最適な表示を実現します。',
      category: 'デザイン'
    },
    {
      id: 'seo',
      question: 'SEO対策は行っていますか？',
      answer: 'はい、SEO対策も含めてWebサイトを制作します。メタタグの最適化、構造化データの実装、ページ速度の最適化など、検索エンジンでの表示順位向上をサポートします。',
      category: 'SEO'
    },
    {
      id: 'maintenance',
      question: '制作後の保守・運用サポートはありますか？',
      answer: 'はい、制作後の保守・運用サポートも提供しています。定期的なセキュリティアップデート、コンテンツ更新、パフォーマンス監視など、継続的なサポートを提供いたします。',
      category: '運用'
    }
  ]
}

// タブデータの詳細定義
export const webDevelopmentTabData: TabData[] = [
  {
    id: 'corporate',
    name: 'コーポレートサイト',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">コーポレートサイト制作</h3>
            <p className="text-gray-300">
              企業のブランドイメージを表現し、信頼性と専門性を伝えるコーポレートサイトを制作します。
              最新のデザイントレンドとユーザビリティを重視した設計を行います。
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• ブランドアイデンティティの表現</li>
              <li>• ユーザビリティの最適化</li>
              <li>• レスポンシブデザイン対応</li>
              <li>• SEO対策の実装</li>
            </ul>
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <img
              src="/images/test02.jpg"
              alt="コーポレートサイトの例"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'ec',
    name: 'ECサイト',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <img
              src="/images/test01.jpg"
              alt="ECサイトの例"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">ECサイト構築</h3>
            <p className="text-gray-300">
              オンラインショッピングに最適化されたECサイトを構築します。
              決済システムの統合、在庫管理、顧客管理機能など、包括的なECソリューションを提供します。
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• 決済システムの統合</li>
              <li>• 在庫管理システム</li>
              <li>• 顧客管理機能</li>
              <li>• セキュリティ対策</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
]

// カードデータの詳細定義
export const webDevelopmentCardData: CardData[] = [
  {
    title: 'React',
    description: 'コンポーネントベースのUIライブラリで、再利用可能で保守性の高いコードを実現します。',
    icon: '⚛️',
    tags: ['JavaScript', 'UI', 'コンポーネント']
  },
  {
    title: 'Next.js',
    description: 'Reactベースのフレームワークで、SSR、SSG、API Routesなどの機能を提供します。',
    icon: '🚀',
    tags: ['フレームワーク', 'SSR', 'SSG']
  },
  {
    title: 'TypeScript',
    description: '型安全性を提供するJavaScriptのスーパーセットで、開発効率と品質を向上させます。',
    icon: '📘',
    tags: ['型安全性', '開発効率', '品質向上']
  }
]

// 関連サービスデータの詳細定義
export const webDevelopmentRelatedServices: RelatedServiceData[] = [
  {
    id: 'ai-consulting',
    title: 'AI',
    description: 'AI機能を統合したWebアプリケーションの開発',
    href: '/services/ai-consulting',
    tags: ['AI', 'Web', '統合']
  },
  {
    id: 'app-development',
    title: 'アプリ開発',
    description: 'Web技術を活用したクロスプラットフォームアプリ開発',
    href: '/services/app-development',
    tags: ['PWA', 'Web', 'モバイル']
  },
  {
    id: 'blockchain-development',
    title: 'ブロックチェーン開発',
    description: 'Web3技術を活用した次世代Webアプリケーション',
    href: '/services/blockchain-development',
    tags: ['Web3', 'Blockchain', 'DApp']
  }
]

// FAQデータの詳細定義
export const webDevelopmentFAQs: FAQData[] = [
  {
    id: 'technologies',
    question: 'どのような技術を使用していますか？',
    answer: 'React、Next.js、TypeScript、Tailwind CSSなどの最新技術を活用しています。また、Node.js、PostgreSQL、MongoDBなどのバックエンド技術も対応可能です。',
    category: '技術'
  },
  {
    id: 'responsive',
    question: 'レスポンシブデザインに対応していますか？',
    answer: 'はい、すべてのWebサイトでレスポンシブデザインに対応しています。モバイル、タブレット、デスクトップのすべてのデバイスで最適な表示を実現します。',
    category: 'デザイン'
  },
  {
    id: 'seo',
    question: 'SEO対策は行っていますか？',
    answer: 'はい、SEO対策も含めてWebサイトを制作します。メタタグの最適化、構造化データの実装、ページ速度の最適化など、検索エンジンでの表示順位向上をサポートします。',
    category: 'SEO'
  },
  {
    id: 'maintenance',
    question: '制作後の保守・運用サポートはありますか？',
    answer: 'はい、制作後の保守・運用サポートも提供しています。定期的なセキュリティアップデート、コンテンツ更新、パフォーマンス監視など、継続的なサポートを提供いたします。',
    category: '運用'
  }
]

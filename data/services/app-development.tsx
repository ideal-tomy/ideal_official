/**
 * アプリ開発サービスデータ定義
 * 単一責任の原則に従い、アプリ開発サービス関連のデータのみを管理
 */

import { ServicePageData, TabData, CardData, RelatedServiceData, FAQData } from '../../types/service'

// アプリ開発サービスページのデータ
export const appDevelopmentData: ServicePageData = {
  id: 'app-development',
  title: 'アプリ開発',
  description: 'iOS・Androidアプリの開発から、クロスプラットフォーム対応まで幅広く対応します。',
  hero: {
    title: 'モバイルアプリ開発',
    subtitle: 'iOS・Android・クロスプラットフォーム対応'
  },
  sections: [
    {
      id: 'hero',
      type: 'hero',
      title: 'モバイルアプリ開発',
      subtitle: 'iOS・Android・クロスプラットフォーム対応'
    },
    {
      id: 'overview',
      type: 'single',
      title: 'アプリ開発の可能性',
      description: 'React Native、Flutter、Swift、Kotlinなどの最新技術を活用し、高品質なモバイルアプリケーションを開発します。'
    },
    {
      id: 'technologies',
      type: 'three-cards',
      title: '使用技術',
      description: '最新のモバイル開発技術を活用した高品質なアプリ開発を行います。',
      data: {
        cards: [
          {
            title: 'React Native',
            description: 'JavaScriptでiOS・Android両方のアプリを開発できるクロスプラットフォームフレームワークです。',
            icon: '⚛️',
            tags: ['JavaScript', 'クロスプラットフォーム', 'React']
          },
          {
            title: 'Flutter',
            description: 'Googleが開発したDart言語を使用したクロスプラットフォームフレームワークです。',
            icon: '🦋',
            tags: ['Dart', 'クロスプラットフォーム', 'Google']
          },
          {
            title: 'Swift/Kotlin',
            description: 'ネイティブアプリ開発に最適化されたプログラミング言語です。',
            icon: '📱',
            tags: ['ネイティブ', 'iOS', 'Android']
          }
        ]
      }
    },
    {
      id: 'services',
      type: 'tabs',
      title: 'サービス内容',
      description: 'ネイティブアプリからクロスプラットフォームアプリまで、幅広いアプリ開発サービスを提供します。',
      data: {
        tabs: [
          {
            id: 'native',
            name: 'ネイティブアプリ',
            content: 'iOS（Swift）・Android（Kotlin）のネイティブアプリ開発'
          },
          {
            id: 'cross-platform',
            name: 'クロスプラットフォーム',
            content: 'React Native・Flutterを使用したクロスプラットフォームアプリ開発'
          },
          {
            id: 'pwa',
            name: 'PWA',
            content: 'Progressive Web Appの開発・最適化'
          },
          {
            id: 'maintenance',
            name: '保守・運用',
            content: 'アプリの継続的な保守・運用サポート'
          }
        ]
      }
    },
    {
      id: 'process',
      type: 'single',
      title: '開発プロセス',
      description: '企画からリリースまで、一貫した開発プロセスで高品質なアプリを提供します。'
    },
    {
      id: 'features',
      type: 'two-column',
      title: '主な特徴',
      description: '最新技術とベストプラクティスを組み合わせた高品質なアプリ開発を提供します。',
      data: {
        leftContent: 'クロスプラットフォーム対応',
        rightContent: 'ネイティブ性能'
      }
    }
  ],
  relatedServices: [
    {
      id: 'web-development',
      title: 'Web開発',
      description: 'Web技術を活用したPWA・SPAの開発',
      href: '/services/web-development',
      tags: ['PWA', 'SPA', 'Web']
    },
    {
      id: 'ai-consulting',
      title: 'AI',
      description: 'AI機能を統合したスマートアプリの開発',
      href: '/services/ai-consulting',
      tags: ['AI', 'スマートアプリ', '機械学習']
    },
    {
      id: 'game-development',
      title: 'ゲーム制作',
      description: 'モバイルゲームの企画・開発',
      href: '/services/game-development',
      tags: ['ゲーム', 'モバイル', 'エンターテインメント']
    }
  ],
  faqs: [
    {
      id: 'technologies',
      question: 'どのような技術を使用していますか？',
      answer: 'React Native、Flutter、Swift、Kotlinなどの最新技術を活用しています。プロジェクトの要件に応じて最適な技術を選択いたします。',
      category: '技術'
    },
    {
      id: 'cross-platform',
      question: 'クロスプラットフォームアプリの性能はどうですか？',
      answer: 'React NativeやFlutterなどの最新技術により、ネイティブアプリに近い性能を実現できます。また、開発コストと期間を大幅に削減できます。',
      category: '性能'
    },
    {
      id: 'app-store',
      question: 'App Store・Google Playへの公開サポートはありますか？',
      answer: 'はい、App Store・Google Playへの公開サポートも提供しています。審査基準の確認、ストア最適化、公開手順のサポートなど、包括的なサポートを提供いたします。',
      category: '公開'
    },
    {
      id: 'maintenance',
      question: 'アプリの保守・運用サポートはありますか？',
      answer: 'はい、アプリの保守・運用サポートも提供しています。バグ修正、機能追加、OSアップデート対応、パフォーマンス監視など、継続的なサポートを提供いたします。',
      category: '運用'
    }
  ]
}

// タブデータの詳細定義
export const appDevelopmentTabData: TabData[] = [
  {
    id: 'native',
    name: 'ネイティブアプリ',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">ネイティブアプリ開発</h3>
            <p className="text-gray-300">
              iOS（Swift）・Android（Kotlin）のネイティブアプリ開発を行います。
              各プラットフォームの特性を活かした最高性能のアプリを提供します。
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• iOS（Swift）アプリ開発</li>
              <li>• Android（Kotlin）アプリ開発</li>
              <li>• プラットフォーム固有機能の活用</li>
              <li>• 最高性能の実現</li>
            </ul>
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <img
              src="/images/test01.jpg"
              alt="ネイティブアプリの例"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'cross-platform',
    name: 'クロスプラットフォーム',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <img
              src="/images/test02.jpg"
              alt="クロスプラットフォームアプリの例"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">クロスプラットフォーム開発</h3>
            <p className="text-gray-300">
              React Native・Flutterを使用したクロスプラットフォームアプリ開発を行います。
              一つのコードベースでiOS・Android両方のアプリを効率的に開発できます。
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• React Native開発</li>
              <li>• Flutter開発</li>
              <li>• 一つのコードベース</li>
              <li>• 開発効率の向上</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
]

// カードデータの詳細定義
export const appDevelopmentCardData: CardData[] = [
  {
    title: 'React Native',
    description: 'JavaScriptでiOS・Android両方のアプリを開発できるクロスプラットフォームフレームワークです。',
    icon: '⚛️',
    tags: ['JavaScript', 'クロスプラットフォーム', 'React']
  },
  {
    title: 'Flutter',
    description: 'Googleが開発したDart言語を使用したクロスプラットフォームフレームワークです。',
    icon: '🦋',
    tags: ['Dart', 'クロスプラットフォーム', 'Google']
  },
  {
    title: 'Swift/Kotlin',
    description: 'ネイティブアプリ開発に最適化されたプログラミング言語です。',
    icon: '📱',
    tags: ['ネイティブ', 'iOS', 'Android']
  }
]

// 関連サービスデータの詳細定義
export const appDevelopmentRelatedServices: RelatedServiceData[] = [
  {
    id: 'web-development',
    title: 'Web開発',
    description: 'Web技術を活用したPWA・SPAの開発',
    href: '/services/web-development',
    tags: ['PWA', 'SPA', 'Web']
  },
  {
    id: 'ai-consulting',
    title: 'AI',
    description: 'AI機能を統合したスマートアプリの開発',
    href: '/services/ai-consulting',
    tags: ['AI', 'スマートアプリ', '機械学習']
  },
  {
    id: 'game-development',
    title: 'ゲーム制作',
    description: 'モバイルゲームの企画・開発',
    href: '/services/game-development',
    tags: ['ゲーム', 'モバイル', 'エンターテインメント']
  }
]

// FAQデータの詳細定義
export const appDevelopmentFAQs: FAQData[] = [
  {
    id: 'technologies',
    question: 'どのような技術を使用していますか？',
    answer: 'React Native、Flutter、Swift、Kotlinなどの最新技術を活用しています。プロジェクトの要件に応じて最適な技術を選択いたします。',
    category: '技術'
  },
  {
    id: 'cross-platform',
    question: 'クロスプラットフォームアプリの性能はどうですか？',
    answer: 'React NativeやFlutterなどの最新技術により、ネイティブアプリに近い性能を実現できます。また、開発コストと期間を大幅に削減できます。',
    category: '性能'
  },
  {
    id: 'app-store',
    question: 'App Store・Google Playへの公開サポートはありますか？',
    answer: 'はい、App Store・Google Playへの公開サポートも提供しています。審査基準の確認、ストア最適化、公開手順のサポートなど、包括的なサポートを提供いたします。',
    category: '公開'
  },
  {
    id: 'maintenance',
    question: 'アプリの保守・運用サポートはありますか？',
    answer: 'はい、アプリの保守・運用サポートも提供しています。バグ修正、機能追加、OSアップデート対応、パフォーマンス監視など、継続的なサポートを提供いたします。',
    category: '運用'
  }
]

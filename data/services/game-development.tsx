/**
 * ゲーム開発サービスデータ定義
 * 単一責任の原則に従い、ゲーム開発サービス関連のデータのみを管理
 */

import { ServicePageData, TabData, CardData, RelatedServiceData, FAQData } from '../../types/service'

// ゲーム開発サービスページのデータ
export const gameDevelopmentData: ServicePageData = {
  id: 'game-development',
  title: 'ゲーム制作',
  description: '2D・3Dゲームの企画から開発まで、エンターテインメント性の高いゲームを制作します。',
  hero: {
    title: 'ゲーム制作',
    subtitle: '2D・3Dゲームの企画から開発まで'
  },
  sections: [
    {
      id: 'hero',
      type: 'hero',
      title: 'ゲーム制作',
      subtitle: '2D・3Dゲームの企画から開発まで'
    },
    {
      id: 'overview',
      type: 'single',
      title: 'ゲーム制作の可能性',
      description: 'Unity、Unreal Engine、Godotなどの最新ゲームエンジンを使用し、高品質なゲームを制作します。'
    },
    {
      id: 'technologies',
      type: 'three-cards',
      title: '使用技術',
      description: '最新のゲーム開発技術を活用した高品質なゲーム制作を行います。',
      data: {
        cards: [
          {
            title: 'Unity',
            description: '2D・3Dゲーム開発に最適なクロスプラットフォームゲームエンジンです。',
            icon: '🎮',
            tags: ['C#', 'クロスプラットフォーム', '2D/3D']
          },
          {
            title: 'Unreal Engine',
            description: '高品質な3Dゲーム開発に最適なゲームエンジンです。',
            icon: '🚀',
            tags: ['C++', '3D', '高品質']
          },
          {
            title: 'Godot',
            description: 'オープンソースの軽量ゲームエンジンです。',
            icon: '🎯',
            tags: ['GDScript', 'オープンソース', '軽量']
          }
        ]
      }
    },
    {
      id: 'services',
      type: 'tabs',
      title: 'サービス内容',
      description: '2Dゲームから3Dゲームまで、幅広いゲーム制作サービスを提供します。',
      data: {
        tabs: [
          {
            id: '2d-games',
            name: '2Dゲーム',
            content: '2Dゲームの企画・設計・開発'
          },
          {
            id: '3d-games',
            name: '3Dゲーム',
            content: '3Dゲームの企画・設計・開発'
          },
          {
            id: 'mobile-games',
            name: 'モバイルゲーム',
            content: 'スマートフォン向けゲームの開発'
          },
          {
            id: 'vr-games',
            name: 'VRゲーム',
            content: 'VR（仮想現実）ゲームの開発'
          }
        ]
      }
    },
    {
      id: 'process',
      type: 'single',
      title: '開発プロセス',
      description: '企画からリリースまで、一貫した開発プロセスで高品質なゲームを提供します。'
    },
    {
      id: 'features',
      type: 'two-column',
      title: '主な特徴',
      description: '最新技術とクリエイティブな発想を組み合わせた高品質なゲーム制作を提供します。',
      data: {
        leftContent: '2D・3D対応',
        rightContent: 'クロスプラットフォーム'
      }
    }
  ],
  relatedServices: [
    {
      id: 'app-development',
      title: 'アプリ開発',
      description: 'モバイルゲームの開発・最適化',
      href: '/services/app-development',
      tags: ['モバイル', 'ゲーム', 'アプリ']
    },
    {
      id: 'web-development',
      title: 'Web開発',
      description: 'Webゲーム・ブラウザゲームの開発',
      href: '/services/web-development',
      tags: ['Web', 'ブラウザゲーム', 'HTML5']
    },
    {
      id: 'ai-consulting',
      title: 'AI',
      description: 'AI技術を活用したスマートゲームの開発',
      href: '/services/ai-consulting',
      tags: ['AI', 'スマートゲーム', '機械学習']
    }
  ],
  faqs: [
    {
      id: 'engines',
      question: 'どのようなゲームエンジンを使用していますか？',
      answer: 'Unity、Unreal Engine、Godotなどの最新ゲームエンジンを使用しています。プロジェクトの要件に応じて最適なエンジンを選択いたします。',
      category: '技術'
    },
    {
      id: 'platforms',
      question: 'どのプラットフォームに対応していますか？',
      answer: 'PC（Windows・Mac・Linux）、モバイル（iOS・Android）、コンソール（PlayStation・Xbox・Nintendo Switch）、VR（Oculus・HTC Vive）など、幅広いプラットフォームに対応しています。',
      category: 'プラットフォーム'
    },
    {
      id: 'development-time',
      question: 'ゲーム開発にはどのくらいの期間がかかりますか？',
      answer: 'プロジェクトの規模により異なりますが、小規模な2Dゲームで3-6ヶ月、中規模な3Dゲームで6-12ヶ月、大規模なゲームで12ヶ月以上となることが一般的です。',
      category: '期間'
    },
    {
      id: 'maintenance',
      question: 'ゲームの保守・運用サポートはありますか？',
      answer: 'はい、ゲームの保守・運用サポートも提供しています。バグ修正、コンテンツ追加、パフォーマンス最適化、セキュリティアップデートなど、継続的なサポートを提供いたします。',
      category: '運用'
    }
  ]
}

// タブデータの詳細定義
export const gameDevelopmentTabData: TabData[] = [
  {
    id: '2d-games',
    name: '2Dゲーム',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">2Dゲーム開発</h3>
            <p className="text-gray-300">
              2Dゲームの企画・設計・開発を行います。
              プラットフォーマー、パズル、アクション、RPGなど、様々なジャンルの2Dゲームに対応しています。
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• プラットフォーマー</li>
              <li>• パズルゲーム</li>
              <li>• アクションゲーム</li>
              <li>• RPG</li>
            </ul>
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <img
              src="/images/test01.jpg"
              alt="2Dゲームの例"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    )
  },
  {
    id: '3d-games',
    name: '3Dゲーム',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <img
              src="/images/test02.jpg"
              alt="3Dゲームの例"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">3Dゲーム開発</h3>
            <p className="text-gray-300">
              3Dゲームの企画・設計・開発を行います。
              アクション、RPG、シミュレーション、レーシングなど、様々なジャンルの3Dゲームに対応しています。
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• アクションゲーム</li>
              <li>• RPG</li>
              <li>• シミュレーション</li>
              <li>• レーシング</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
]

// カードデータの詳細定義
export const gameDevelopmentCardData: CardData[] = [
  {
    title: 'Unity',
    description: '2D・3Dゲーム開発に最適なクロスプラットフォームゲームエンジンです。',
    icon: '🎮',
    tags: ['C#', 'クロスプラットフォーム', '2D/3D']
  },
  {
    title: 'Unreal Engine',
    description: '高品質な3Dゲーム開発に最適なゲームエンジンです。',
    icon: '🚀',
    tags: ['C++', '3D', '高品質']
  },
  {
    title: 'Godot',
    description: 'オープンソースの軽量ゲームエンジンです。',
    icon: '🎯',
    tags: ['GDScript', 'オープンソース', '軽量']
  }
]

// 関連サービスデータの詳細定義
export const gameDevelopmentRelatedServices: RelatedServiceData[] = [
  {
    id: 'app-development',
    title: 'アプリ開発',
    description: 'モバイルゲームの開発・最適化',
    href: '/services/app-development',
    tags: ['モバイル', 'ゲーム', 'アプリ']
  },
  {
    id: 'web-development',
    title: 'Web開発',
    description: 'Webゲーム・ブラウザゲームの開発',
    href: '/services/web-development',
    tags: ['Web', 'ブラウザゲーム', 'HTML5']
  },
  {
    id: 'ai-consulting',
    title: 'AI',
    description: 'AI技術を活用したスマートゲームの開発',
    href: '/services/ai-consulting',
    tags: ['AI', 'スマートゲーム', '機械学習']
  }
]

// FAQデータの詳細定義
export const gameDevelopmentFAQs: FAQData[] = [
  {
    id: 'engines',
    question: 'どのようなゲームエンジンを使用していますか？',
    answer: 'Unity、Unreal Engine、Godotなどの最新ゲームエンジンを使用しています。プロジェクトの要件に応じて最適なエンジンを選択いたします。',
    category: '技術'
  },
  {
    id: 'platforms',
    question: 'どのプラットフォームに対応していますか？',
    answer: 'PC（Windows・Mac・Linux）、モバイル（iOS・Android）、コンソール（PlayStation・Xbox・Nintendo Switch）、VR（Oculus・HTC Vive）など、幅広いプラットフォームに対応しています。',
    category: 'プラットフォーム'
  },
  {
    id: 'development-time',
    question: 'ゲーム開発にはどのくらいの期間がかかりますか？',
    answer: 'プロジェクトの規模により異なりますが、小規模な2Dゲームで3-6ヶ月、中規模な3Dゲームで6-12ヶ月、大規模なゲームで12ヶ月以上となることが一般的です。',
    category: '期間'
  },
  {
    id: 'maintenance',
    question: 'ゲームの保守・運用サポートはありますか？',
    answer: 'はい、ゲームの保守・運用サポートも提供しています。バグ修正、コンテンツ追加、パフォーマンス最適化、セキュリティアップデートなど、継続的なサポートを提供いたします。',
    category: '運用'
  }
]

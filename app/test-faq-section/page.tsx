'use client'

import { FAQSection } from '../../components/sections/FAQSection'

export default function TestFAQSectionPage() {
  // サンプルFAQデータ
  const generalFAQs = [
    {
      id: 'what-services',
      question: 'どのようなサービスを提供していますか？',
      answer: '私たちはAI戦略コンサル、Web開発、アプリ開発、ゲーム制作、ブロックチェーン開発など、幅広いテクノロジーサービスを提供しています。お客様のビジネス課題に最適なソリューションを提案いたします。'
    },
    {
      id: 'development-process',
      question: '開発プロセスはどのようになっていますか？',
      answer: '企画・設計から開発・実装、運用・保守まで一貫したサポートを提供します。アジャイル開発手法を採用し、定期的なレビューとフィードバックを行いながら高品質な成果物を提供いたします。'
    },
    {
      id: 'pricing',
      question: '料金体系について教えてください。',
      answer: 'プロジェクトの規模や複雑さに応じて、適切な料金体系をご提案いたします。初期相談は無料で行っており、お客様の予算に合わせた最適なソリューションをご提供いたします。'
    },
    {
      id: 'timeline',
      question: '開発期間はどのくらいかかりますか？',
      answer: 'プロジェクトの規模により異なりますが、小規模なWebサイトで1-2ヶ月、中規模なアプリケーションで3-6ヶ月、大規模なシステムで6ヶ月以上となることが一般的です。詳細なスケジュールは初期相談時にご提案いたします。'
    }
  ]

  const technicalFAQs = [
    {
      id: 'ai-consulting',
      question: 'AIではどのような支援を行いますか？',
      answer: 'AI戦略の策定から技術選定、実装支援まで一貫したサポートを提供します。お客様のビジネスに最適なAIソリューションを提案し、導入から運用までサポートいたします。'
    },
    {
      id: 'web-technologies',
      question: '使用している技術スタックは何ですか？',
      answer: 'フロントエンドではReact、Next.js、TypeScript、バックエンドではNode.js、Python、データベースではPostgreSQL、MongoDBなどを使用しています。プロジェクトの要件に応じて最適な技術を選択いたします。'
    },
    {
      id: 'security',
      question: 'セキュリティ対策はどのように行っていますか？',
      answer: 'OWASP Top 10に基づいたセキュリティ対策を実施し、定期的なセキュリティ監査とペネトレーションテストを行っています。また、GDPRや個人情報保護法に準拠したデータ保護対策も実施しております。'
    },
    {
      id: 'maintenance',
      question: '開発後の保守・運用サポートはありますか？',
      answer: '24時間365日の監視体制と迅速な障害対応を行っています。定期的なセキュリティアップデート、パフォーマンス監視、機能改善など、継続的なサポートを提供いたします。'
    }
  ]

  const businessFAQs = [
    {
      id: 'contract',
      question: '契約形態について教えてください。',
      answer: '固定価格契約、時間単価契約、リテーナー契約など、お客様のニーズに応じた柔軟な契約形態をご提案いたします。プロジェクトの性質や予算に合わせて最適な契約形態を選択いたします。'
    },
    {
      id: 'communication',
      question: '開発中のコミュニケーションはどのように行いますか？',
      answer: '定期的な進捗報告会議、SlackやTeamsを活用した日常的なコミュニケーション、プロジェクト管理ツールでの進捗共有など、透明性の高いコミュニケーションを心がけています。'
    },
    {
      id: 'intellectual-property',
      question: '知的財産権について教えてください。',
      answer: '開発したソフトウェアの知的財産権は原則としてお客様に帰属いたします。ただし、既存のライブラリやフレームワークの利用については、それぞれのライセンスに従って適切に管理いたします。'
    },
    {
      id: 'support',
      question: '開発後のサポート体制はどうなっていますか？',
      answer: '開発完了後も継続的なサポートを提供いたします。バグ修正、機能追加、セキュリティアップデート、パフォーマンス改善など、お客様のビジネス成長をサポートいたします。'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* ヘッダー */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            FAQSection テストページ
          </h1>
          <p className="text-gray-300 text-center mt-4">
            FAQセクションコンポーネントの動作確認
          </p>
        </div>
      </div>

      {/* テスト1: 基本レイアウト */}
      <FAQSection
        title="基本レイアウトテスト"
        subtitle="よくある質問"
        description="お客様からよくいただく質問と回答をまとめました。"
        faqs={generalFAQs}
        defaultOpenId="what-services"
      />

      {/* テスト2: ダークバリアント */}
      <FAQSection
        title="ダークバリアント"
        description="背景色がダークなバリアントです。"
        faqs={technicalFAQs}
        variant="dark"
        padding="xl"
      />

      {/* テスト3: アクセントバリアント */}
      <FAQSection
        title="アクセントバリアント"
        description="アクセントカラーを使用したバリアントです。"
        faqs={businessFAQs}
        variant="accent"
        alignment="left"
      />

      {/* テスト4: 右寄せ配置 */}
      <FAQSection
        title="右寄せ配置"
        description="アコーディオンを右寄せで配置したバリアントです。"
        faqs={generalFAQs}
        alignment="right"
        className="border-t border-gray-700"
      />

      {/* テスト5: 小さいパディング */}
      <FAQSection
        title="小さいパディング"
        description="パディングサイズを小さくしたバリアントです。"
        faqs={technicalFAQs}
        padding="sm"
        variant="dark"
      />

      {/* テスト6: カスタムクラス */}
      <FAQSection
        title="カスタムクラス"
        description="追加のCSSクラスを適用したテストです。"
        faqs={businessFAQs}
        className="border-t border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800"
        defaultOpenId="contract"
      />

      {/* テスト7: レスポンシブテスト */}
      <FAQSection
        title="レスポンシブテスト"
        description="様々な画面サイズでの表示を確認します。"
        faqs={[
          ...generalFAQs,
          ...technicalFAQs,
          ...businessFAQs
        ]}
        variant="accent"
        padding="xl"
      />

      {/* フッター */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            FAQSection コンポーネントのテスト完了
          </p>
        </div>
      </div>
    </div>
  )
}

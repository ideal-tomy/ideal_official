/**
 * AI サービスページ用データ（FAQ / 関連サービス）
 * 本文セクションは data/services/ai-hub.ts 側。
 */

export const aiServiceData = {
  relatedServices: [
    {
      id: 'web-development',
      title: 'Webサイト・LP制作',
      description: 'AI機能を統合したモダンなWebアプリケーションの開発',
      href: '/services/web-development',
      tags: ['React', 'Next.js', 'AI統合'],
    },
    {
      id: 'app-development',
      title: 'Webアプリ・業務ツール開発',
      description: 'AIを組み込んだ業務Web・管理画面の開発',
      href: '/services/app-development',
      tags: ['業務Web', 'AI', '自動化'],
    },
    {
      id: 'blockchain-lab',
      title: 'Blockchain / DAO Lab',
      description: '分散型技術の思想・研究・実験',
      href: '/lab/blockchain',
      tags: ['DAO', 'Research', 'LAB'],
    },
  ],
  faqs: [
    {
      id: 'preparation',
      question: 'AI導入にはどのような準備が必要ですか？',
      answer:
        'AI導入には、データの整理、組織の準備、技術的な基盤の構築など、多面的な準備が必要です。まずは現状分析から始め、段階的な導入計画を策定します。',
      category: '導入準備',
    },
    {
      id: 'timeline',
      question: 'AI導入にはどのくらいの期間が必要ですか？',
      answer:
        'プロジェクトの規模により異なりますが、小規模なAI機能で3-6ヶ月、中規模なシステムで6-12ヶ月、大規模なAIプラットフォームで12ヶ月以上となることが一般的です。',
      category: '期間',
    },
    {
      id: 'benefits',
      question: 'ビジネスにAIを導入するメリットは？',
      answer:
        'AI導入により、業務効率化、コスト削減、新たな収益機会の創出、顧客体験の向上、競争優位性の獲得など、多面的なメリットが期待できます。',
      category: 'メリット',
    },
  ],
}

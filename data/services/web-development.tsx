/**
 * Web サービスページ用データ（FAQ / 関連サービス）
 * 本文セクションは data/services/web-hub.tsx 側。
 */

export const webDevelopmentData = {
  faqs: [
    {
      id: 'faq-1',
      question: 'ウェブ開発にはどのような技術が必要ですか？',
      answer:
        'フロントエンド（React、next.js、Angular）、バックエンド（Node.js、Python、PHP）、データベース（MySQL、PostgreSQL、MongoDB）、クラウドインフラ（AWS、GCP、Azure）など、プロジェクトの要件に応じて最適な技術スタックを選択します。',
    },
    {
      id: 'faq-2',
      question: 'ウェブサイトの開発期間はどのくらいですか？',
      answer:
        'プロジェクトの規模や要件によって異なりますが、一般的なコーポレートサイトで1-2ヶ月、ECサイトで3-6ヶ月、大規模なウェブアプリケーションで6ヶ月以上を想定しています。',
    },
    {
      id: 'faq-3',
      question: 'セキュリティ対策はどのように行っていますか？',
      answer:
        'SSL/TLS証明書の導入、セキュアな認証システムの実装、定期的なセキュリティ監査、脆弱性診断など、包括的なセキュリティ対策を実施しています。',
    },
  ],
  relatedServices: [
    {
      id: 'ai-consulting',
      title: 'AIプロトタイプ・自動化',
      description: 'AI導入・活用コンサルティングサービス',
      tags: ['機械学習', '深層学習', '自然言語処理'],
      href: '/services/ai-consulting',
    },
    {
      id: 'app-development',
      title: 'Webアプリ・業務ツール開発',
      description: '業務Web・管理画面・現場入力ツールの開発',
      tags: ['業務Web', '管理画面', 'PWA'],
      href: '/services/app-development',
    },
    {
      id: 'blockchain-development',
      title: 'Blockchain / DAO Lab',
      description: '分散型技術の思想・研究・実験',
      tags: ['DAO', 'スマートコントラクト', 'Research'],
      href: '/lab/blockchain',
    },
  ],
}

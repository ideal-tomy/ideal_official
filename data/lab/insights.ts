export interface LabInsight {
  slug: string
  title: string
  subtitle: string
  description: string
  category: 'ai' | 'web' | 'org'
  publishedAt: string
  relatedHref?: string
  relatedLabel?: string
  sections: {
    heading: string
    paragraphs: string[]
    bullets?: string[]
  }[]
}

export const labInsights: LabInsight[] = [
  {
    slug: 'ai-vs-traditional',
    title: 'AIと従来システム開発の違い',
    subtitle: 'ルール固定から、データで適応するへ',
    description:
      '従来のシステム開発とAIソリューションの違いを、処理の考え方・スケール・変化への対応から整理します。',
    category: 'ai',
    publishedAt: '2026-07-10',
    relatedHref: '/services/ai-consulting',
    relatedLabel: 'AI Hub へ',
    sections: [
      {
        heading: '従来のシステム開発',
        paragraphs: [
          '従来の業務システムは、あらかじめ決めたルールに沿って動くことが前提です。例外が増えるほど分岐が増え、変更のたびに改修コストがかかります。',
        ],
        bullets: [
          'ルールベースの固定的な処理',
          '人手による大量のデータ処理',
          '限定的なパターン認識',
          'スケーリングが困難',
          '新しい状況への適応が遅い',
        ],
      },
      {
        heading: 'AIソリューションの考え方',
        paragraphs: [
          'AIは、データからパターンを学び、状況に応じて出力を変えます。すべてを自動化するのではなく、「人が判断しやすい形」に情報を整える用途が現場では特に効きます。',
        ],
        bullets: [
          'データからの学習と適応',
          '大規模データの高速処理',
          '複雑なパターンの認識',
          '効率的なスケーリング',
          'リアルタイムでの状況対応',
        ],
      },
      {
        heading: '現場での使い分け',
        paragraphs: [
          'ルールが明確で変わらない処理は従来型が向きます。写真・音声・文書・曖昧な入力など、人が毎回解釈していた領域はAIの介入余地が大きいです。',
          'ideal では、まずデモで「どこが変わるか」を共有し、そのあと実装範囲を決めます。',
        ],
      },
    ],
  },
  {
    slug: 'ai-three-elements',
    title: 'AI導入に必要な3要素',
    subtitle: '技術・ビジネス・人材を同時に見る',
    description:
      'AI導入を成功させるために揃えるべき技術・ビジネス・人材の観点を短く整理します。',
    category: 'ai',
    publishedAt: '2026-07-10',
    relatedHref: '/ai-capability-gallery',
    relatedLabel: 'デモを体験',
    sections: [
      {
        heading: '技術要素',
        paragraphs: [
          'モデル選定だけでなく、データの流れ・既存システム連携・運用監視まで含めて設計します。PoCで動いても、現場データと接続できなければ価値は出ません。',
        ],
        bullets: ['機械学習 / LLM / 画像認識などの適材適所', 'データ前処理と品質', 'セキュリティと権限設計'],
      },
      {
        heading: 'ビジネス要素',
        paragraphs: [
          '「何を自動化したいか」より先に、「どの業務のどの一手間を減らすか」を決めます。ROIは機能数ではなく、現場の時間とミスの削減で測ります。',
        ],
        bullets: ['課題の優先順位', '成功指標（時間・品質・リードタイム）', '変革の進め方と合意形成'],
      },
      {
        heading: '人材要素',
        paragraphs: [
          '社内にデータサイエンティストが揃っていなくても始められます。重要なのは、現場の業務を説明できる人と、実装を担うパートナーの役割分担です。',
        ],
        bullets: ['現場オーナー', '実装パートナー', '運用・改善の担当'],
      },
    ],
  },
  {
    slug: 'why-ai-now',
    title: 'なぜ今AI導入が必要か',
    subtitle: 'トレンドではなく、業務の前提が変わった',
    description:
      '市場・顧客期待・技術成熟の観点から、いまAIを検討する意味を整理します。',
    category: 'ai',
    publishedAt: '2026-07-10',
    relatedHref: '/cases',
    relatedLabel: '活用イメージを読む',
    sections: [
      {
        heading: '市場と意思決定の変化',
        paragraphs: [
          'データに基づく判断が競争力の源泉になりつつあります。感覚と経験だけに頼る運用は、属人化と再現性の低さとして残りやすくなります。',
        ],
        bullets: [
          'AI投資と活用事例の拡大',
          'データ駆動の意思決定への期待',
          'パーソナライズされた体験への顧客期待',
        ],
      },
      {
        heading: '技術側の成熟',
        paragraphs: [
          '大規模言語モデルや画像認識の実用性が上がり、中小規模の組織でも「特定業務の一部」から始められるようになりました。',
          '重要なのは全社一括導入ではなく、写真整理・音声記録・文書抽出など、変化が見える一点から始めることです。',
        ],
      },
      {
        heading: 'ideal の進め方',
        paragraphs: [
          'デモで変化を共有し、業界フロー（活用イメージ）で置き換えを想像し、プロトタイプから本番へつなぎます。',
        ],
      },
    ],
  },
  {
    slug: 'ai-and-worklife',
    title: 'AIと働き方・ワークライフバランス',
    subtitle: '効率化の先にある、時間の使い方',
    description:
      'AI導入を、単なるコスト削減ではなく、人が創造的な仕事に時間を使える環境づくりとして捉えます。',
    category: 'ai',
    publishedAt: '2026-07-10',
    relatedHref: '/services/ai-consulting',
    relatedLabel: 'AI Hub へ',
    sections: [
      {
        heading: '減らすべきは、創造ではない',
        paragraphs: [
          '定型の転記・分類・探し物・繰り返し確認は、人が本来やる必要のない仕事になりつつあります。ここをAIが担うことで、判断・対人・設計に時間を戻せます。',
        ],
      },
      {
        heading: '現場に優しい導入',
        paragraphs: [
          '新しいツールを増やすだけでは負担が増えます。既存の写真送信・音声メモ・メール受信など、今の動線に乗せる設計が重要です。',
        ],
      },
      {
        heading: '組織としての意味',
        paragraphs: [
          '働き方の改善は福利厚生だけでなく、採用・定着・品質にも効きます。AIは「人を減らす技術」ではなく、「人の時間を取り戻す技術」として設計します。',
        ],
      },
    ],
  },
]

export function getInsightBySlug(slug: string): LabInsight | undefined {
  return labInsights.find((i) => i.slug === slug)
}

export function getAllInsightSlugs(): string[] {
  return labInsights.map((i) => i.slug)
}

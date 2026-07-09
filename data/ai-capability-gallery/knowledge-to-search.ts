export interface KnowledgeQuestion {
  id: string
  question: string
  answer: string
  sourceId: string
}

export interface KnowledgeSource {
  id: string
  title: string
  excerpt: string
}

export interface KnowledgeSampleSet {
  id: string
  name: string
  industry: string
  questions: KnowledgeQuestion[]
  sources: KnowledgeSource[]
}

export const knowledgeProcessingSteps = [
  '質問を解析中…',
  '関連文書を検索中…',
  '回答を生成中…',
  '根拠を整理中…',
  '回答が完了しました',
]

export const knowledgeSampleSets: KnowledgeSampleSet[] = [
  {
    id: 'policy',
    name: '社内規程',
    industry: 'バックオフィス',
    questions: [
      {
        id: 'q1',
        question: '有給休暇は何日取得できますか？',
        answer:
          '入社6ヶ月経過後、年間10日の有給休暇が付与されます。付与日は入社日を基準とした年次付与です。',
        sourceId: 's1',
      },
      {
        id: 'q2',
        question: 'リモートワークの申請方法は？',
        answer:
          '週2日まで事前申請によりリモートワークが可能です。申請は勤怠システムから行い、上長の承認が必要です。',
        sourceId: 's2',
      },
      {
        id: 'q3',
        question: '経費精算の提出期限は？',
        answer:
          '経費精算は支出月の翌月10日までに提出してください。領収書の添付が必須です。',
        sourceId: 's3',
      },
    ],
    sources: [
      {
        id: 's1',
        title: '就業規則 第24条（有給休暇）',
        excerpt:
          '社員は入社6ヶ月経過後、年間10日の有給休暇を付与される。付与日は入社日を基準とする。',
      },
      {
        id: 's2',
        title: 'テレワーク規程 第3条',
        excerpt:
          '週2日までのリモートワークを認める。事前申請と上長承認が必要。勤怠システムから申請する。',
      },
      {
        id: 's3',
        title: '経費精算規程 第5条',
        excerpt:
          '経費精算は支出月の翌月10日までに提出すること。領収書の添付を必須とする。',
      },
    ],
  },
  {
    id: 'construction-manual',
    name: '建設マニュアル',
    industry: '建設',
    questions: [
      {
        id: 'q1',
        question: '型枠の固定作業で注意することは？',
        answer:
          '型枠固定前に配筋の位置・間隔を再確認し、固定金具の締め付けトルクを規定値で実施してください。',
        sourceId: 's1',
      },
      {
        id: 'q2',
        question: '雨天時の作業中止基準は？',
        answer:
          '時間雨量が5mm/hを超える場合、屋外作業を中止し、安全な屋内へ避難してください。',
        sourceId: 's2',
      },
      {
        id: 'q3',
        question: '安全帯の着用ルールは？',
        answer:
          '高さ2m以上の作業では必ず安全帯を着用し、親綱への接続を確認してから作業を開始します。',
        sourceId: 's3',
      },
    ],
    sources: [
      {
        id: 's1',
        title: '型枠工事マニュアル 第4章',
        excerpt:
          '型枠固定前に配筋位置・間隔を再確認。固定金具は規定トルクで締め付けること。',
      },
      {
        id: 's2',
        title: '安全管理規程 第8条',
        excerpt:
          '時間雨量5mm/h超過時は屋外作業を中止し、屋内へ避難する。',
      },
      {
        id: 's3',
        title: '安全衛生マニュアル 第2章',
        excerpt:
          '高さ2m以上の作業では安全帯を必ず着用し、親綱への接続を確認してから作業開始。',
      },
    ],
  },
]

export const knowledgeDetailPage = {
  slug: 'knowledge-to-search',
  metaTitle: 'ナレッジ → 検索 | AI Capability Demo Gallery | ideal',
  metaDescription:
    '社内資料や規程を根拠付きで検索・回答するデモ。社内規程や建設マニュアルの検索を体験できます。',
  eyebrow: 'Knowledge to Search',
  title: '探すから、聞けば見つかるへ。',
  lead: '社内資料や規程を「探す」から「聞けば見つかる」へ変えます。回答だけでなく、根拠となる文書も同時に確認できます。',
  tags: ['規程', 'マニュアル', 'FAQ', '問い合わせ'],
  beforeTitle: 'Before',
  beforeText: '規程やマニュアルを何度も探し回り、該当箇所を見つけるのに時間がかかる。',
  afterTitle: 'After',
  afterText: '質問するだけで回答と出典が同時に得られ、原文プレビューで根拠を確認できる。',
}

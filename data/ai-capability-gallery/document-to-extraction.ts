export interface DocumentParagraph {
  id: string
  text: string
}

export interface ExtractedField {
  id: string
  label: string
  value: string
  paragraphId: string
  risk?: 'high' | 'medium' | 'low'
}

export interface DocumentSampleSet {
  id: string
  name: string
  industry: string
  documentTitle: string
  paragraphs: DocumentParagraph[]
  fields: ExtractedField[]
  summary: { label: string; value: string; risk?: 'high' | 'medium' | 'low' }[]
}

export const documentProcessingSteps = [
  '文書を読み込み中…',
  'テンプレートを適用中…',
  '重要条項を抽出中…',
  'リスク項目を整理中…',
  '抽出が完了しました',
]

export const documentSampleSets: DocumentSampleSet[] = [
  {
    id: 'contract',
    name: '業務委託契約書',
    industry: '契約',
    documentTitle: '業務委託契約書（サンプル）',
    paragraphs: [
      {
        id: 'p1',
        text: '第3条（委託料） 甲は乙に対し、委託業務の対価として月額500,000円（税別）を支払うものとする。支払期日は毎月末日締め、翌月25日払いとする。',
      },
      {
        id: 'p2',
        text: '第8条（秘密保持） 乙は本契約に関して知り得た甲の営業秘密を、契約期間中および終了後3年間、第三者に開示してはならない。',
      },
      {
        id: 'p3',
        text: '第12条（契約期間） 本契約の有効期間は2024年4月1日から2025年3月31日までとする。ただし、双方合意により更新可能とする。',
      },
      {
        id: 'p4',
        text: '第15条（損害賠償） 乙の故意または重大な過失により甲に損害が生じた場合、乙は甲に対し直接損害を賠償する責任を負う。',
      },
    ],
    fields: [
      { id: 'f1', label: '委託料', value: '月額500,000円（税別）', paragraphId: 'p1' },
      { id: 'f2', label: '支払条件', value: '毎月末締め、翌月25日払い', paragraphId: 'p1' },
      { id: 'f3', label: '秘密保持期間', value: '契約終了後3年間', paragraphId: 'p2', risk: 'medium' },
      { id: 'f4', label: '契約期間', value: '2024/4/1 〜 2025/3/31', paragraphId: 'p3' },
      { id: 'f5', label: '損害賠償', value: '故意・重大過失時に直接損害を賠償', paragraphId: 'p4', risk: 'high' },
    ],
    summary: [
      { label: '契約期間', value: '1年間（更新可）' },
      { label: '注意条項', value: '損害賠償条項（高リスク）', risk: 'high' },
      { label: '秘密保持', value: '終了後3年', risk: 'medium' },
    ],
  },
  {
    id: 'invoice',
    name: '請求書',
    industry: '請求',
    documentTitle: '請求書 INV-2024-0312',
    paragraphs: [
      {
        id: 'p1',
        text: '請求先：株式会社サンプル商事 御中。請求日：2024年3月12日。支払期限：2024年3月31日。',
      },
      {
        id: 'p2',
        text: '品目：システム開発費（3月分） 金額：¥1,200,000（税別）。消費税：¥120,000。合計：¥1,320,000。',
      },
      {
        id: 'p3',
        text: '振込先：○○銀行 渋谷支店 普通 1234567 カ）アイデアル',
      },
    ],
    fields: [
      { id: 'f1', label: '請求先', value: '株式会社サンプル商事', paragraphId: 'p1' },
      { id: 'f2', label: '請求日', value: '2024年3月12日', paragraphId: 'p1' },
      { id: 'f3', label: '支払期限', value: '2024年3月31日', paragraphId: 'p1', risk: 'medium' },
      { id: 'f4', label: '合計金額', value: '¥1,320,000（税込）', paragraphId: 'p2' },
      { id: 'f5', label: '振込先', value: '○○銀行 渋谷支店 普通 1234567', paragraphId: 'p3' },
    ],
    summary: [
      { label: '支払期限', value: '2024年3月31日', risk: 'medium' },
      { label: '請求金額', value: '¥1,320,000' },
    ],
  },
]

export const documentDetailPage = {
  slug: 'document-to-extraction',
  metaTitle: '文書 → 抽出 | AI Capability Demo Gallery | ideal',
  metaDescription:
    'PDFや文書から必要情報を抽出し、原文と連動して確認できるデモ。契約書・請求書の抽出を体験できます。',
  eyebrow: 'Document to Extraction',
  title: '文書から、意思決定に必要な情報だけを。',
  lead: 'PDFや文書から必要情報を抽出し、意思決定可能な情報に変えます。抽出結果をクリックすると原文の該当箇所がハイライトされます。',
  tags: ['契約', '請求', 'DD', '点検'],
  beforeTitle: 'Before',
  beforeText: '契約書や請求書を開き、重要条項や金額を目視で探し回る。',
  afterTitle: 'After',
  afterText: '抽出結果をクリックすると原文がハイライトされ、リスク項目も一目で把握できる。',
}

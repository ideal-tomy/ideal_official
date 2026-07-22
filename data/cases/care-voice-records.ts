import type { CaseStudy } from './types'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

export const careVoiceRecords: CaseStudy = {
  slug: 'care-voice-records',
  industry: 'care',
  industryLabel: '介護',
  title: 'ケアの記録が、帰ってから仕事になる。',
  subtitle: '介護 × ケア記録の音声入力',
  lead:
    '聞き取り・メモ・転記・確認。現場の会話が記録に残らない流れを、話すだけで構造化データへ変える活用イメージです。',
  metaTitle: '介護 × ケア記録の音声入力 | 活用イメージ | ideal',
  metaDescription:
    '介護現場のケア記録を、聞き取り→手書きから、話すだけで構造化記録へ。関連デモを体験できます。',
  tags: ['介護', 'ケア記録', '音声', '構造化'],
  before: {
    title: 'いまの流れ',
    summary: '現場では話しているのに、記録は後回しになりがち。',
    steps: [
      { label: '聞き取り', detail: '利用者との会話・観察を現場で把握' },
      { label: 'メモ', detail: '走り書きや頭の中に留める' },
      { label: '転記', detail: '帰宅後やシフト終了後に記録票へ書き写す' },
      { label: '確認', detail: '抜け漏れがないか目視でチェック' },
    ],
  },
  after: {
    title: 'AI介入後の流れ',
    summary: '話した内容が、その場で業務項目に整理される。',
    steps: [
      { label: '話す', detail: '現場で音声メモや会話を録音' },
      { label: '構造化', detail: '日付・対象・観察・対応が項目別に整理' },
      { label: '記録完成', detail: '記録票にそのまま使える形で出力' },
    ],
  },
  relatedDemo: {
    slug: 'voice-to-structured',
    label: '音声 → 構造化',
    href: `${GALLERY_BASE}/voice-to-structured`,
    description:
      '介護ケア記録サンプルで、音声が構造化データに変わる流れを体験できます。',
  },
  externalDemo: {
    label: '医療・福祉ケア記録デモ',
    href: 'https://kaigo-operation-demo.vercel.app/',
  },
  contactHref: '/contact?service=ai-consulting&intent=cases&case=care-voice-records',
  status: 'published',
}

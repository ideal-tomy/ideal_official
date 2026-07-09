import type { StructuredField } from '@/components/ai-capability-gallery/demos/StructuredResult'

export interface VoiceSampleSet {
  id: string
  name: string
  industry: string
  transcript: string
  duration: string
  fields: StructuredField[]
}

export const voiceProcessingSteps = [
  '音声を読み込み中…',
  '音声解析中…',
  '話者意図を判定中…',
  '業務項目に整理中…',
  '構造化が完了しました',
]

export const voiceSampleSets: VoiceSampleSet[] = [
  {
    id: 'construction',
    name: '建設日報',
    industry: '建設',
    duration: '1:24',
    transcript:
      '今日は現場Aで基礎工事を進めました。午前中に配筋の確認を行い、午後は型枠の設置に入りました。雨の影響で作業が少し遅れています。明日は型枠の固定と検査を予定しています。',
    fields: [
      { key: '日付', value: '2024-03-12' },
      { key: '案件名', value: '現場A 基礎工事' },
      { key: '作業内容', value: '配筋確認、型枠設置' },
      { key: '問題点', value: '雨天による作業遅延' },
      { key: '対応内容', value: '午後の型枠設置を優先実施' },
      { key: '次回対応', value: '型枠固定・検査の実施' },
    ],
  },
  {
    id: 'care',
    name: '介護ケア記録',
    industry: '介護',
    duration: '0:58',
    transcript:
      '田中様は本日、朝食を8割摂取されました。血圧は128/82で安定しています。午後に散歩を20分実施。転倒リスクは低めですが、夜間のトイレ介助は継続が必要です。',
    fields: [
      { key: '日付', value: '2024-03-12' },
      { key: '利用者', value: '田中 様' },
      { key: '食事摂取', value: '朝食 8割' },
      { key: 'バイタル', value: '血圧 128/82（安定）' },
      { key: '活動', value: '散歩 20分' },
      { key: '注意事項', value: '夜間トイレ介助を継続' },
    ],
  },
]

export const voiceDetailPage = {
  slug: 'voice-to-structured',
  metaTitle: '音声 → 構造化 | AI Capability Demo Gallery | ideal',
  metaDescription:
    '話し言葉を業務で使える構造化データへ変換するデモ。建設日報や介護ケア記録を体験できます。',
  eyebrow: 'Voice to Structured Data',
  title: '話すだけで、記録が完成する。',
  lead: '非構造な話し言葉を、業務データとして使える形式に変えます。現場報告やケア記録の入力負担を大きく減らせます。',
  tags: ['医療', '介護', '建設', '営業'],
  beforeTitle: 'Before',
  beforeText: '会話や口頭報告がそのまま残らず、後から振り返れない。',
  afterTitle: 'After',
  afterText: '話した内容が日付・作業内容・問題点など、業務項目として自動整理される。',
}

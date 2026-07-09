export interface ReportMaterial {
  id: string
  type: 'photo' | 'voice' | 'memo' | 'data'
  label: string
  preview: string
}

export interface ReportSection {
  id: string
  heading: string
  content: string
  sources: string[]
}

export interface ReportSampleSet {
  id: string
  name: string
  industry: string
  materials: ReportMaterial[]
  sections: ReportSection[]
  title: string
}

export const reportProcessingSteps = [
  '素材を読み込み中…',
  '内容を統合中…',
  '報告書を構成中…',
  '参照元を紐付け中…',
  '報告書が完成しました',
]

export const reportSampleSets: ReportSampleSet[] = [
  {
    id: 'site-report',
    name: '現場報告書',
    industry: '建設',
    title: '現場A 日次報告書（2024-03-12）',
    materials: [
      { id: 'm1', type: 'photo', label: '写真1', preview: '基礎工事の進捗写真' },
      { id: 'm2', type: 'photo', label: '写真2', preview: '型枠設置の写真' },
      { id: 'm3', type: 'voice', label: '音声メモ', preview: '現場責任者の口頭報告（1:24）' },
      { id: 'm4', type: 'data', label: 'Excel進捗', preview: '工程表：基礎工事 85%' },
    ],
    sections: [
      {
        id: 's1',
        heading: '作業概要',
        content: '本日は現場Aにて基礎工事を実施。配筋確認後、型枠設置まで完了した。',
        sources: ['写真1', '音声メモ'],
      },
      {
        id: 's2',
        heading: '進捗状況',
        content: '基礎工事の進捗は85%。予定どおり型枠設置フェーズへ移行。',
        sources: ['Excel進捗', '写真2'],
      },
      {
        id: 's3',
        heading: '課題・次回対応',
        content: '雨天の影響で作業が若干遅延。明日は型枠固定と検査を実施予定。',
        sources: ['音声メモ'],
      },
    ],
  },
  {
    id: 'care-report',
    name: '介護レポート',
    industry: '介護',
    title: 'ケアレポート（田中様 / 2024-03-12）',
    materials: [
      { id: 'm1', type: 'memo', label: '観察メモ', preview: '朝食8割、血圧安定' },
      { id: 'm2', type: 'voice', label: '音声メモ', preview: '担当者のケア記録（0:58）' },
      { id: 'm3', type: 'data', label: 'バイタル記録', preview: 'BP 128/82, 歩行20分' },
    ],
    sections: [
      {
        id: 's1',
        heading: '本日の状態',
        content: '全体的に安定。朝食8割摂取、バイタルも基準範囲内。',
        sources: ['観察メモ', 'バイタル記録'],
      },
      {
        id: 's2',
        heading: '実施したケア',
        content: '午後に散歩を20分実施。転倒リスクは低めと判断。',
        sources: ['音声メモ', 'バイタル記録'],
      },
      {
        id: 's3',
        heading: '今後の注意',
        content: '夜間のトイレ介助は継続が必要。見守り体制を維持する。',
        sources: ['音声メモ'],
      },
    ],
  },
]

export const reportDetailPage = {
  slug: 'multi-input-to-report',
  metaTitle: '複数情報 → 報告書 | AI Capability Demo Gallery | ideal',
  metaDescription:
    '写真・音声・メモ・数値を統合し、参照元付きの報告書を生成するデモ。現場報告書や介護レポートを体験できます。',
  eyebrow: 'Multi-Input to Report',
  title: '素材を集めて、報告書が完成する。',
  lead: '複数種類の素材を統合し、完成した業務文書を生成します。各段落に参照元ラベルが付き、根拠を追跡できます。',
  tags: ['現場報告', '介護', '調査', '監査'],
  beforeTitle: 'Before',
  beforeText: '写真・音声・数値データを手作業でまとめ、報告書を作成するのに時間がかかる。',
  afterTitle: 'After',
  afterText: '素材を読み込むだけで報告書が生成され、各段落に参照元が明示される。',
}

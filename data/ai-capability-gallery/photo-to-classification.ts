export interface SamplePhoto {
  id: string
  originalName: string
  label: string
  color: string
}

export interface ClassifiedPhoto {
  id: string
  originalName: string
  newName: string
  folder: string
  description: string
}

export interface PhotoSampleSet {
  id: string
  name: string
  industry: string
  photos: SamplePhoto[]
  results: ClassifiedPhoto[]
  folders: string[]
}

export const processingSteps = [
  '画像を読み込み中…',
  '内容を判定中…',
  'ファイル名を生成中…',
  'フォルダへ分類中…',
  '整理が完了しました',
]

export const photoSampleSets: PhotoSampleSet[] = [
  {
    id: 'construction',
    name: '建設現場',
    industry: '建設',
    photos: [
      { id: 'c1', originalName: 'IMG_4832.jpg', label: '基礎工事', color: '#6B7280' },
      { id: 'c2', originalName: 'IMG_4833.jpg', label: '鉄筋配筋', color: '#78716C' },
      { id: 'c3', originalName: 'IMG_4834.jpg', label: '型枠設置', color: '#57534E' },
      { id: 'c4', originalName: 'IMG_4835.jpg', label: '安全確認', color: '#44403C' },
    ],
    results: [
      {
        id: 'c1',
        originalName: 'IMG_4832.jpg',
        newName: '現場A_基礎工事_2024-03-12.jpg',
        folder: '基礎工事',
        description: '基礎掘削完了の記録',
      },
      {
        id: 'c2',
        originalName: 'IMG_4833.jpg',
        newName: '現場A_鉄筋配筋_2024-03-12.jpg',
        folder: '鉄筋工事',
        description: '配筋検査前の状態',
      },
      {
        id: 'c3',
        originalName: 'IMG_4834.jpg',
        newName: '現場A_型枠設置_2024-03-13.jpg',
        folder: '型枠工事',
        description: '型枠組立完了',
      },
      {
        id: 'c4',
        originalName: 'IMG_4835.jpg',
        newName: '現場A_安全確認_2024-03-13.jpg',
        folder: '安全管理',
        description: '朝礼・安全確認の記録',
      },
    ],
    folders: ['基礎工事', '鉄筋工事', '型枠工事', '安全管理'],
  },
  {
    id: 'real-estate',
    name: '不動産物件',
    industry: '不動産',
    photos: [
      { id: 'r1', originalName: 'DSC_0012.jpg', label: '外観', color: '#94A3B8' },
      { id: 'r2', originalName: 'DSC_0013.jpg', label: 'リビング', color: '#A8A29E' },
      { id: 'r3', originalName: 'DSC_0014.jpg', label: 'キッチン', color: '#9CA3AF' },
    ],
    results: [
      {
        id: 'r1',
        originalName: 'DSC_0012.jpg',
        newName: '物件B_外観_南向き.jpg',
        folder: '外観',
        description: '建物正面・南向き',
      },
      {
        id: 'r2',
        originalName: 'DSC_0013.jpg',
        newName: '物件B_リビング_広々.jpg',
        folder: '内装',
        description: 'リビングダイニング',
      },
      {
        id: 'r3',
        originalName: 'DSC_0014.jpg',
        newName: '物件B_キッチン_設備.jpg',
        folder: '内装',
        description: 'システムキッチン',
      },
    ],
    folders: ['外観', '内装'],
  },
]

export const photoDetailPage = {
  slug: 'photo-to-classification',
  metaTitle: '写真 → 分類 | AI Capability Demo Gallery | ideal',
  metaDescription:
    '画像を送るだけで内容理解・分類・命名・保存整理まで行うデモ。建設現場や不動産の写真整理を体験できます。',
  eyebrow: 'Photo to Classification',
  title: '散らばった写真が、意味のある整理へ。',
  lead: '画像を送るだけで、内容理解・分類・命名・保存整理まで行います。現場写真や物件写真の整理にそのまま置き換えて想像できます。',
  tags: ['建設', '不動産', '製造', '保険'],
  beforeTitle: 'Before',
  beforeText: 'IMG_4832.jpg のままフォルダに散在。何の写真か開かないと分からない。',
  afterTitle: 'After',
  afterText: '現場A_基礎工事_2024-03-12.jpg のように意味のある名前と、業務に沿ったフォルダへ自動整理。',
}

import type { CaseStudy } from './types'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'

export const constructionPhotoSorting: CaseStudy = {
  slug: 'construction-photo-sorting',
  industry: 'construction',
  industryLabel: '建設',
  title: '現場写真が、戻ってから仕事になる。',
  subtitle: '建設 × 現場写真整理',
  lead:
    '撮る・戻る・整理・分類・転記。現場写真まわりの手作業を、アップロードから報告書候補まで一気に変える流れです。',
  metaTitle: '建設 × 現場写真整理 | Cases | ideal',
  metaDescription:
    '建設現場の写真整理を、撮る→戻る→手作業から、アップロード→AI判定→自動整理へ。関連デモを体験できます。',
  tags: ['建設', '現場写真', '分類', '報告書'],
  before: {
    title: 'いまの流れ',
    summary: '写真は撮れているのに、整理と転記で時間が消える。',
    steps: [
      { label: '撮る', detail: '現場でスマホやカメラに保存' },
      { label: '戻る', detail: '事務所や車内でまとめて確認' },
      { label: '整理', detail: 'IMG_4832.jpg のまま散在' },
      { label: '分類', detail: '工事種別・日付・現場名を手で付ける' },
      { label: '転記', detail: '報告書や共有フォルダへコピー' },
    ],
  },
  after: {
    title: 'AI介入後の流れ',
    summary: '送るだけで、意味のある名前と保存先に整理される。',
    steps: [
      { label: 'アップロード', detail: '現場からそのまま送る' },
      { label: 'AI判定', detail: '内容・工程・安全記録を理解' },
      { label: '自動整理', detail: '命名・フォルダ分けまで実行' },
      { label: '報告書候補', detail: '整理結果を報告の素材に' },
    ],
  },
  relatedDemo: {
    slug: 'photo-to-classification',
    label: '写真 → 分類',
    href: `${GALLERY_BASE}/photo-to-classification`,
    description:
      '建設現場サンプルで、散在した写真が分類・命名される流れを体験できます。',
  },
  contactHref: '/contact?service=ai-consulting&intent=cases&case=construction-photo-sorting',
  status: 'published',
}

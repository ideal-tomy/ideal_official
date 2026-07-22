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
  metaTitle: '建設 × 現場写真整理 | 活用イメージ | ideal',
  metaDescription:
    '建設現場の写真整理を、撮る→戻る→手作業から、アップロード→AI判定→自動整理へ。関連デモを体験できます。',
  tags: ['建設', '現場写真', '分類', '報告書'],
  pain: {
    who: '現場監督・職長・事務担当',
    headline: '写真は撮れている。なのに、退勤後の整理が本番になる。',
    body: '現場ではスマホにどんどん溜まる。事務所に戻ってから、IMG_4832.jpg の山を開き、工事種別や日付を手で付ける。報告書への転記でさらに時間が消えます。撮ること自体はできているのに、「仕事になる形」にする工程が別業務になっています。',
  },
  outcomes: [
    '散在した写真が、意味のある名前と保存先に整理されるイメージが持てる',
    '退勤後のフォルダ分け・命名の手作業が減る方向に寄せられる',
    '整理結果を、報告書や共有の素材として使いやすくなる',
  ],
  demoScope: {
    simpleShows:
      '建設現場サンプルで、散在写真が分類・命名される流れを短い時間で体験できます。',
    simpleLimits:
      '貴社の工事区分ルールや共有フォルダ構成そのものは、要件整理のあとに合わせます。誤分類ゼロの保証はありません。',
    externalShows:
      '建設・現場管理デモで、記録・確認に近い業務画面の感触を確かめられます。',
  },
  fit: {
    goodFor: [
      '現場写真の整理・命名・報告書素材化に時間がかかっているチーム',
      '写真の用途（工程・安全・完了確認）がある程度パターン化している現場',
      'まず「送るだけで整理される」感覚を共有したい管理者',
    ],
    notIdealFor: [
      '写真を撮らない／残せない制約が強い現場',
      '分類軸が毎回まったく異なり、ルール化できない案件ばかりの場合',
      '画像診断や品質合否の自動判定そのものが主目的の場合',
    ],
  },
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
  externalDemo: {
    label: '建設・現場管理デモ',
    href: 'https://kanri-kensetsu.vercel.app/login',
    note: 'ログイン画面が開きます。ページ内の「デモアカウント」から体験できます。',
  },
  contactHref:
    '/contact?service=ai-consulting&intent=cases&case=construction-photo-sorting',
  status: 'published',
}

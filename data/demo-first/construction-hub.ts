import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'
import {
  CONSTRUCTION_HUB_HREF,
  EXTERNAL_DEMO_URLS,
} from '@/data/demo-first/portfolio'
import { buildRoiSimulatorHref } from '@/lib/roiSimulator'

export type ConstructionHubDemo = {
  id: 'con-photo-sort' | 'con-report-draft' | 'con-site-ops'
  step: '①' | '②' | '③'
  title: string
  core: string
  href: string
  external: boolean
  note?: string
  cta: string
}

export const constructionHub = {
  href: CONSTRUCTION_HUB_HREF,
  title: '建設の記録デモ',
  englishLabel: 'Construction',
  wedge:
    '現場で撮る・見る と、事務所に戻ってからの整理・転記・報告・管理のあいだ。',
  proof:
    '現場の記録が、退勤後の山積み作業ではなく、その場〜短時間で仕事の材料・報告・管理に載る。',
  comboLine:
    '撮る → 整える → 報告・管理に載せる。つながると「写真と記録が現場の延長で仕事になる」。',
  demos: [
    {
      id: 'con-photo-sort',
      step: '①',
      title: '写真の仕事化',
      core: '散在写真 → 分類・命名',
      href: `${GALLERY_BASE}/photo-to-classification`,
      external: false,
      note: 'サンプル写真で体験できます（実アップロード不要）。',
      cta: '写真を整える',
    },
    {
      id: 'con-report-draft',
      step: '②',
      title: '報告書・朝礼下書き',
      core: '写真 → 報告書／朝礼 → 確認提出',
      href: EXTERNAL_DEMO_URLS.ocrConstruction,
      external: true,
      note: '整えた写真が、報告書の下書きになる。',
      cta: '下書きを出す',
    },
    {
      id: 'con-site-ops',
      step: '③',
      title: '現場オペ画面',
      core: '記録・確認が回る業務アプリ',
      href: EXTERNAL_DEMO_URLS.constructionOps,
      external: true,
      note: 'ログイン画面が開きます。ページ内の「デモアカウント」から体験できます。',
      cta: '管理アプリを開く',
    },
  ] satisfies ConstructionHubDemo[],
  contactHref:
    '/contact?service=ai-consulting&intent=gallery&demo=construction-hub',
} as const

export function getConstructionRoiHref(): string | null {
  return buildRoiSimulatorHref({
    kit: 'report-auto',
    industry: 'construction',
    cat: 'field',
    from: 'ideal-site',
    returnPath: CONSTRUCTION_HUB_HREF,
  })
}

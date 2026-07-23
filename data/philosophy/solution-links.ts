import {
  buildDetailHref,
  type DetailPageSlug,
} from '@/data/research/detail-pages'

export type PhilosophySectionId =
  | 'vision'
  | 'conflict'
  | 'philosophy'
  | 'mechanism'
  | 'structure'
  | 'path'
  | 'declaration'

export type DetailPageStatus = 'ready' | 'planned'

export type SolutionLink = {
  philosophySectionId: PhilosophySectionId
  detailSlug: DetailPageSlug
  title: string
  description: string
  status: DetailPageStatus
  ctaLabel?: string
}

export { buildDetailHref }

export const solutionLinks: SolutionLink[] = [
  {
    philosophySectionId: 'vision',
    detailSlug: 'loop',
    title: 'メタシステムの全体像',
    description: '5工程ループで「選択肢の設計」を体感できるインタラクティブモデル。',
    status: 'ready',
  },
  {
    philosophySectionId: 'conflict',
    detailSlug: 'environment',
    title: '信用コストが解ける環境',
    description: '見えない貢献・ぶれる評価が、自動化によってどう変わるかを Before/After で確認。',
    status: 'ready',
  },
  {
    philosophySectionId: 'philosophy',
    detailSlug: 'environment',
    title: '人が人を評価しなくていい',
    description: '評価と救済の分離がもたらす環境変化を、日常の言葉で翻訳した比較デモ。',
    status: 'ready',
  },
  {
    philosophySectionId: 'mechanism',
    detailSlug: 'loop',
    title: '基本設計の5工程ループ',
    description: '観測→記録→測定→執行→フィードバックの循環を図解とともに確認。',
    status: 'ready',
  },
  {
    philosophySectionId: 'mechanism',
    detailSlug: 'xi-instrument',
    title: 'ξ 整合性計器を動かす',
    description: 'ゲーミング混入率と観測ノイズを変え、測定系の健全性をリアルタイムで診断。',
    status: 'ready',
  },
  {
    philosophySectionId: 'structure',
    detailSlug: 'fork',
    title: 'フォークとポータブル履歴',
    description: '同じ貢献履歴が、DAO の価値関数によってどう評価し直されるかを体験。',
    status: 'ready',
  },
  {
    philosophySectionId: 'path',
    detailSlug: 'gaps',
    title: '残された技術課題',
    description: 'ロードマップ上の未解決の壁を隠さず並べた、正直なギャップ一覧。',
    status: 'ready',
  },
  {
    philosophySectionId: 'declaration',
    detailSlug: 'zkp',
    title: 'プライバシーと透明性の両立',
    description: 'ゼロ知識証明で、中身を明かさず事実だけを検証する仕組みの提案デモ。',
    status: 'ready',
  },
  {
    philosophySectionId: 'declaration',
    detailSlug: 'xi-instrument',
    title: '観測と記録の整合性',
    description: 'AI観測と実インパクトの一致度を ξ 計器で測る、技術的最適化の核心。',
    status: 'ready',
  },
]

export function getSolutionLinksForSection(
  sectionId: PhilosophySectionId,
): SolutionLink[] {
  return solutionLinks.filter((link) => link.philosophySectionId === sectionId)
}

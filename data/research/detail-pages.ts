import type { PhilosophySectionId } from '@/data/philosophy/solution-links'

export type DetailPageSlug =
  | 'environment'
  | 'xi-instrument'
  | 'fork'
  | 'loop'
  | 'zkp'
  | 'gaps'

export type DetailPageStatus = 'ready' | 'planned'

export type DetailPageMeta = {
  slug: DetailPageSlug
  eyebrow: string
  title: string
  lead: string
  philosophyConnection: string
  philosophySections: PhilosophySectionId[]
  status: DetailPageStatus
  metaTitle: string
  metaDescription: string
}

export const POC_INSTRUMENT_BASE = '/research/poc-instrument'
export const POC_INSTRUMENT_LP = '/research/poc-instrument'

export const detailPages: DetailPageMeta[] = [
  {
    slug: 'environment',
    eyebrow: 'The environment',
    title: '人が人を評価しなくていい。その快適さと、公平さ。',
    lead: '日々の活動と様々な変化との相関。見落とされがちな貢献——プラスもマイナスも。それをAIが判定し続けることで、評価そのものの重さと不公平が、静かに解けていきます。',
    philosophyConnection:
      'Philosophy では「信用コストの肥大化」と「評価をごまかす優しさ」の問題を述べました。ここでは、その構造が自動化によってどう変わるかを、Before/After で具体的に示します。',
    philosophySections: ['conflict', 'philosophy'],
    status: 'ready',
    metaTitle: '環境の変化 | Proof of Contribution | ideal',
    metaDescription:
      '見えない貢献・ぶれる評価が、自動化によってどう変わるか。Before/After で環境の変化を確認する技術提案デモ。',
  },
  {
    slug: 'xi-instrument',
    eyebrow: 'ξ integrity instrument',
    title: 'ξ は報酬の乗数ではない。システムの整合性を測る診断計だ。',
    lead: 'Chatterjee の ξ は「Y が X の関数か」を検出する。X＝AIが観測した貢献シグナル、Y＝実際に実現した中長期インパクト。個人を裁くのではなく、測定系そのものが壊れていないかを監視します。',
    philosophyConnection:
      '基本設計（Mechanism）で述べた「補正・調整システム」と、技術的最適化（Declaration）の核心。ゲーミング検知とオラクル健全性のモニタとして ξ を使う提案です。',
    philosophySections: ['mechanism', 'declaration'],
    status: 'ready',
    metaTitle: 'ξ 整合性計器 | Proof of Contribution | ideal',
    metaDescription:
      '観測シグナルと実インパクトの整合性を測るインタラクティブ計器。ゲーミング混入率と観測ノイズを変えて体感できます。',
  },
  {
    slug: 'fork',
    eyebrow: 'Portable identity',
    title: '同じ履歴。価値観だけが変わる。',
    lead: '貢献履歴は個人が主権を持つポータブルな証明書。組織を超えて持ち運べ、移動先DAOの価値関数で評価し直されます。',
    philosophyConnection:
      '組織構造（Structure）で述べた「フォークの自由」と「価値観による分岐」。同じ履歴が、DAO ごとの価値観でどう再評価されるかを体感できます。',
    philosophySections: ['structure'],
    status: 'ready',
    metaTitle: 'フォークとポータブル履歴 | Proof of Contribution | ideal',
    metaDescription:
      'ポータブルな貢献履歴が、DAO の価値関数によってどう評価し直されるかを体験するデモ。',
  },
  {
    slug: 'loop',
    eyebrow: 'The mechanism',
    title: '観測 → 記録 → 測定 → 執行 → フィードバック',
    lead: '人間の裁量を挟まない5つの工程が、一つのループとして永続的に回り続ける。各行動は一過性の評価ではなく、個人に紐づくデジタル資産として積み上がっていく。',
    philosophyConnection:
      'はじめに（Vision）のメタシステム設計と、基本設計（Mechanism）の中核。5工程ループが「選択肢の設計」をどう支えるかを図解します。',
    philosophySections: ['vision', 'mechanism'],
    status: 'ready',
    metaTitle: '5工程ループ | Proof of Contribution | ideal',
    metaDescription:
      '観測・記録・測定・執行・フィードバックの5工程ループを図解と日常の言葉で解説するデモ。',
  },
  {
    slug: 'zkp',
    eyebrow: 'Privacy × transparency',
    title: '中身を明かさずに、事実だけを証明する',
    lead: 'プロセス（どんなルールで評価・執行されるか）は誰でも検証可能に。データ（具体的な発言・コード・行動）は本人の同意なく公開されない。',
    philosophyConnection:
      '技術的最適化（Declaration）で述べたプライバシー保護と個人主権。ゼロ知識証明による両立の提案を体験できます。',
    philosophySections: ['declaration'],
    status: 'ready',
    metaTitle: 'ゼロ知識証明 | Proof of Contribution | ideal',
    metaDescription:
      'プライバシーを守りながら貢献の事実を検証する、ゼロ知識証明の概念デモ。',
  },
  {
    slug: 'gaps',
    eyebrow: 'Honest gaps',
    title: '理想を語る前に、まだ壁がある',
    lead: 'このデモは「技術の進化で解ける」前提の理想像だ。だが現時点で未解決の壁を隠さず並べておく — 解けるふりをしないことが、設計の誠実さだから。',
    philosophyConnection:
      'ロードマップ（Path）で述べた長期研究開発計画の現実。技術的ギャップを正直に開示し、進化が拓く道を示します。',
    philosophySections: ['path'],
    status: 'ready',
    metaTitle: '技術的ギャップ | Proof of Contribution | ideal',
    metaDescription:
      'Proof of Contribution 実現に向けた未解決の技術課題と、進化が拓く道を整理した一覧。',
  },
]

export function getDetailPage(slug: DetailPageSlug): DetailPageMeta | undefined {
  return detailPages.find((p) => p.slug === slug)
}

export function buildDetailHref(
  slug: DetailPageSlug,
  philosophySectionId?: PhilosophySectionId,
): string {
  const base = `${POC_INSTRUMENT_BASE}/${slug}`
  if (!philosophySectionId) return base
  return `${base}?from=philosophy&section=${philosophySectionId}`
}

const philosophySectionLabels: Record<PhilosophySectionId, string> = {
  vision: 'はじめに',
  conflict: '問題と課題',
  philosophy: '価値の再定義',
  mechanism: '基本設計',
  structure: '組織構造',
  path: 'ロードマップ',
  declaration: '新しい最適化',
}

export function getPhilosophySectionLabel(id: PhilosophySectionId): string {
  return philosophySectionLabels[id]
}

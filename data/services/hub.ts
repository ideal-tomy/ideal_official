import { getCaseHref, getCaseBySlug, type CaseStudy } from '@/data/cases'
import {
  getFeaturedCapabilities,
  galleryDemoHref,
} from '@/data/services/ai-hub'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import type { ServiceJourneyStep } from '@/components/services/ServiceJourneyDiagram'

export const servicesHubHero = {
  title: '課題の整理から、作って定着まで。',
  subtitle:
    '同じチームが相談・設計と製作を一気通貫で伴走します。何から手を付けるか決まっていなくても、作りたいものが見えていても、どちらからでも入れます。',
  primaryCta: {
    label: '相談・設計を見る',
    href: '#overview-consult',
  },
  secondaryCta: {
    label: '製作を見る',
    href: '#build',
  },
  mockImage: '/images/sv_app.png',
} as const

export const servicesOverviewCopy = {
  heading: '成功の大半は、作る前に決まる',
  lead: '課題の抽出と設計を同じチームで行い、開発・定着まで一気通貫で伴走します。01〜02の相談だけで終えても、03から製作に入っても構いません。',
  pillars: ['課題抽出', '設計・優先順位', '開発・定着'] as const,
} as const

export const overallJourneySteps: readonly ServiceJourneyStep[] = [
  {
    number: '01',
    title: '課題の整理',
    duration: '課題抽出',
    description: '経営と現場の論点を整理し、どこから手を付けるかを可視化します。',
  },
  {
    number: '02',
    title: '設計',
    duration: '設計・優先順位',
    description: '何を作るか・何を検証するかを決め、過剰な要件膨張を抑えます。',
  },
  {
    number: '03',
    title: '試作・実装',
    duration: '開発',
    description: '小さく試してから本実装へ。同じチームがコードまで担います。',
  },
  {
    number: '04',
    title: '導入',
    duration: '定着準備',
    description: '現場に乗る運用設計と、関係者への共有まで整えます。',
  },
  {
    number: '05',
    title: '運用',
    duration: '継続',
    description: '監視と改善サイクルを回し、使われ続ける状態を維持します。',
  },
]

export const servicesConsultCopy = {
  heading: '相談・設計',
  lead: '「何から着手すべきか」「どこまでを一期で終えるか」を、現場運用まで含めて設計します。相談だけで完了しても問題ありません。',
  outcomes: [
    '論点と優先順位が一枚にまとまる',
    '検証単位と、作らない範囲が明文化される',
    '次の試作・実装に渡せる粒度まで落ちる',
  ],
} as const

export const consultJourneySteps: readonly ServiceJourneyStep[] = [
  {
    number: '01',
    title: '現状把握',
    duration: '1〜2週間',
    description: '経営・現場・システムの実態をそろえ、課題の見取り図を作ります。',
  },
  {
    number: '02',
    title: '論点・ギャップ整理',
    duration: '1〜2週間',
    description: '理想像との差分を構造化し、先に解くべき論点を絞り込みます。',
  },
  {
    number: '03',
    title: '優先順位とロードマップ',
    duration: '1週間',
    description: '効果と実現性の両面で着手順を決め、投資判断の材料になる計画へ落とします。',
  },
  {
    number: '04',
    title: '実行・検証計画',
    duration: '合意',
    description: '次フェーズで迷わないよう、検証単位・体制・成果物を明文化します。',
  },
]

export const servicesBuildCopy = {
  heading: '製作',
  lead: '小さく試してから本実装へ。Webサイト、業務ツール、AIプロトタイプまで、触れる形で方向を合わせます。',
} as const

export const hubProblemItems = [
  { id: 'excel', label: 'Excel・紙の管理が限界' },
  { id: 'manual', label: '転記・確認に時間がかかる' },
  { id: 'silo', label: '現場と事務所の情報が分断' },
  { id: 'error', label: '手作業によるミスが怖い' },
] as const

export const hubSolutionItems = [
  'データを一つの画面に集約',
  '入力→処理→結果を自動化',
  '進捗をリアルタイム共有',
  'ミスを減らし、確認に集中',
] as const

export const hubServices = [
  {
    id: 'web-development',
    buildAnchor: 'build-web',
    title: 'Webサイト・LP制作',
    description:
      'コーポレートサイト、LP、体験型UIまで。構成・デザイン・実装を一貫して伴走します。',
    /** 完成イメージ画像（未設定時はプレースホルダー） */
    image: undefined as string | undefined,
    contactHref: '/contact?service=web-development',
    tags: ['コーポレート', 'LP', '体験UI'],
  },
  {
    id: 'app-development',
    buildAnchor: 'build-app',
    title: 'Webアプリ・業務ツール開発',
    description:
      'Excel、紙、LINEの手作業をWebツールに。入力から結果まで、現場で使える形に落とし込みます。',
    image: undefined as string | undefined,
    contactHref: '/contact?service=app-development',
    tags: ['管理画面', '現場入力', 'LINE'],
  },
  {
    id: 'ai-consulting',
    buildAnchor: 'build-ai',
    title: 'AIプロトタイプ・自動化',
    description:
      '「AIでできないか」を、まず動くデモから検証。自社に近いパターンを選べます。',
    image: undefined as string | undefined,
    contactHref: '/contact?service=ai-consulting',
    tags: ['デモ', '自動化', 'PoC'],
  },
] as const

export const hubProcessSteps = [
  {
    step: 1,
    title: '体験で方向を合わせる',
    description: '動くデモで質感と範囲を先に共有。要件が固まっていなくても始められます。',
  },
  {
    step: 2,
    title: '設計して作る',
    description: '情報設計・画面・実装まで一気通貫。小さく作り、反応を見ながら広げます。',
  },
  {
    step: 3,
    title: '公開後も育てる',
    description: '計測・改善・運用まで伴走。作って終わりにしない開発です。',
  },
] as const

/** ハブに載せる活用イメージ（厳選） */
export const hubFeaturedCaseSlugs = [
  'construction-photo-sorting',
  'care-voice-records',
  'backoffice-workflow-automation',
] as const

export function getHubFeaturedCases(): CaseStudy[] {
  return hubFeaturedCaseSlugs
    .map((slug) => getCaseBySlug(slug))
    .filter((c): c is CaseStudy => c != null && c.status === 'published')
}

export function getHubFeaturedDemos(): Capability[] {
  return getFeaturedCapabilities()
}

export { getCaseHref, galleryDemoHref }

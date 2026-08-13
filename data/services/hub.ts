import { getCaseHref, getCaseBySlug, type CaseStudy } from '@/data/cases'
import {
  getFeaturedCapabilities,
  galleryDemoHref,
} from '@/data/services/ai-hub'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'

export const servicesHubHero = {
  title: 'アイデアを、最速でプロダクトに。',
  subtitle:
    'Webサイト・業務ツール・AIプロトタイプまで。触れるデモで方向を合わせ、小さく作って育てます。',
  primaryCta: {
    label: 'デモを触ってみる',
    href: '/flow',
  },
  secondaryCta: {
    label: 'サービスを選ぶ',
    href: '#services',
  },
  mockImage: '/images/sv_app.png',
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
    title: 'Webサイト・LP制作',
    description:
      '構成・UI・モーション・実装まで一貫。このサイト自体が制作デモです。',
    image: '/images/sv_web.png',
    href: '/services/web-development',
    tags: ['コーポレート', 'LP', '体験UI'],
  },
  {
    id: 'app-development',
    title: 'Webアプリ・業務ツール開発',
    description:
      'Excel、紙、LINEの手作業をWebツールに。入力から結果までデモで体験できます。',
    image: '/images/sv_app.png',
    href: '/services/app-development',
    tags: ['管理画面', '現場入力', 'LINE'],
  },
  {
    id: 'ai-consulting',
    title: 'AIプロトタイプ・自動化',
    description:
      '「AIでできないか」を、まず動くデモから検証。自社に近いパターンを選べます。',
    image: '/images/top_ai.png',
    href: '/services/ai-consulting',
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

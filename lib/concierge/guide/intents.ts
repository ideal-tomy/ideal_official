/**
 * サイト案内 — 意図カタログ（テンプレ正本・課金ゼロ）
 */

import type { GuideIntentDef, GuideIntentId } from './types'

export const GUIDE_INTENTS: Record<Exclude<GuideIntentId, 'off_topic'>, GuideIntentDef> = {
  pricing: {
    id: 'pricing',
    chipLabel: '金額・見積もり',
    keywords: [
      '金額',
      '費用',
      '見積',
      '見積り',
      'いくら',
      '価格',
      'コスト',
      '相場',
      '料金',
      '予算',
      'estimate',
      'price',
      'cost',
    ],
    answer:
      '開発内容に応じた概算は、自動見積もりページで確認できます。チャット内では金額を算出しません。',
    primary: { label: '概算見積もりへ', href: '/estimate' },
    showAsChip: true,
  },
  demos: {
    id: 'demos',
    chipLabel: '何ができるか',
    keywords: [
      '何ができる',
      'なにができる',
      'デモ',
      '触',
      '体験',
      'ギャラリー',
      'できること',
      '機能',
      'capability',
      'demo',
      '試し',
    ],
    answer:
      '触って確かめられるデモは、AI Capability Gallery にまとめています。まずは動くものを見てください。',
    primary: { label: 'デモを見る', href: '/ai-capability-gallery' },
    showAsChip: true,
  },
  cases: {
    id: 'cases',
    chipLabel: '活用イメージ',
    keywords: [
      '実績',
      '事例',
      '活用',
      'イメージ',
      '業界',
      'ケース',
      '導入例',
      'case',
      '自社でも',
      '置き換',
    ],
    answer:
      '公開しているのは「導入実績一覧」ではなく、業務課題への活用イメージです。近い業界・課題からご覧ください。',
    primary: { label: '活用イメージへ', href: '/cases' },
    showAsChip: true,
  },
  contact: {
    id: 'contact',
    chipLabel: '連絡方法',
    keywords: [
      '連絡',
      '問い合わせ',
      'お問い合わせ',
      'メール',
      '電話',
      '相談したい',
      'コンタクト',
      'contact',
      '話を聞き',
    ],
    answer: 'ご連絡はお問い合わせフォームから受け付けています。内容はフォームに記入してください。',
    primary: { label: 'お問い合わせへ', href: '/contact' },
    showAsChip: true,
  },
  how_we_work: {
    id: 'how_we_work',
    chipLabel: '進め方・依頼',
    keywords: [
      '導入',
      '進め方',
      '何が必要',
      'なにが必要',
      '依頼',
      '流れ',
      'どう進',
      'どうやっ',
      '手順',
      'プロセス',
      'はじめる',
      '始める',
      '大変',
      'how we work',
    ],
    answer:
      '最初に必要なのは、課題感と「どこまで触って確かめるか」の範囲です。進め方の全体像は導入の流れページにまとめています。',
    primary: { label: '導入の流れへ', href: '/how-we-work' },
    secondary: { label: '相談する', href: '/contact' },
    showAsChip: true,
  },
  difference: {
    id: 'difference',
    chipLabel: '他社との違い',
    keywords: [
      '他社',
      '違い',
      'なぜideal',
      'なぜ ideal',
      '差別化',
      '強み',
      '特徴',
      'デモファースト',
      'reason',
      '普通の制作',
      'ほかと',
    ],
    answer:
      '提案書の往復より先に動くデモで認識を揃え、ツール単体ではなく意思決定の仕組みを作り、小さく出して現場と育てます。詳しくはトップの Reason をご覧ください。',
    primary: { label: 'Reason を見る', href: '/#reason' },
    showAsChip: true,
  },
}

export const OFF_TOPIC_ANSWER =
  '当サイトの案内に無い内容にはお答えできません。金額・デモ・活用イメージ・進め方・お問い合わせなど、サイト内のご案内であればお手伝いできます。'

export const OFF_TOPIC_FALLBACK_LINK = {
  label: 'お問い合わせへ',
  href: '/contact',
} as const

export const AMBIGUOUS_ANSWER =
  'もう少し具体的に教えてください。下の候補から選ぶか、「金額」「デモ」「進め方」などキーワードを入れてください。'

export const GUIDE_CHIP_INTENTS = (
  Object.values(GUIDE_INTENTS) as GuideIntentDef[]
).filter((i) => i.showAsChip)

export function getGuideIntent(
  id: GuideIntentId,
): GuideIntentDef | undefined {
  if (id === 'off_topic') return undefined
  return GUIDE_INTENTS[id]
}

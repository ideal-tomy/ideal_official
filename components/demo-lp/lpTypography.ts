/**
 * デモLP用タイポグラフィ（lib/content-typography の --lp-* 向けラッパ）
 * 既存 import パスを維持。定義の正本は content-typography。
 */

import {
  contentAffirm,
  contentBody,
  contentBodyMuted,
  contentCaption,
  contentCardMeta,
  contentCardTitle,
  contentCardTitleLg,
  contentH1,
  contentH2,
  contentH2Centered,
  contentHeroBody,
  contentHeroSub,
  contentLead,
  contentLeadCentered,
  contentNote,
  contentQuote,
  contentSectionLabel,
} from '@/lib/content-typography'

export const lpSectionLabel = contentSectionLabel.replace(
  'text-brand',
  'text-[var(--lp-primary)]',
)

export const lpH1 = contentH1
  .replaceAll('text-[var(--site-fg)]', 'text-[var(--lp-ink)]')

export const lpHeroSub = contentHeroSub.replaceAll(
  'text-[var(--site-fg)]',
  'text-[var(--lp-ink)]',
)

export const lpHeroBody = contentHeroBody

export const lpH2 = contentH2.replaceAll(
  'text-[var(--site-fg)]',
  'text-[var(--lp-ink)]',
)

export const lpH2Centered = `${lpH2} text-center`

export const lpLead = contentLead

export const lpLeadCentered = contentLeadCentered

export const lpBody = contentBody

export const lpBodyMuted = contentBodyMuted

export const lpNote = contentNote

export const lpCaption = contentCaption.replaceAll(
  'text-[var(--site-fg)]',
  'text-[var(--lp-ink)]',
)

export const lpCardTitle = contentCardTitle.replaceAll(
  'text-[var(--site-fg)]',
  'text-[var(--lp-ink)]',
)

export const lpCardTitleLg = contentCardTitleLg.replaceAll(
  'text-[var(--site-fg)]',
  'text-[var(--lp-ink)]',
)

export const lpCardMeta = contentCardMeta.replace(
  'text-brand',
  'text-[var(--lp-primary)]',
)

export const lpQuote = contentQuote.replace(
  'bg-brand/[0.07]',
  'bg-[var(--lp-primary)]/[0.07]',
)

export const lpSummaryBox =
  'mt-8 rounded-xl border border-[var(--lp-ink)]/10 bg-[var(--lp-surface)] px-5 py-6'

export const lpSummaryHeadline =
  'text-lg font-bold leading-snug text-[var(--lp-ink)] md:text-xl'

export const lpAffirm = contentAffirm.replaceAll(
  'text-[var(--site-fg)]',
  'text-[var(--lp-ink)]',
)

export const lpCompareOurs = 'text-[var(--lp-ink)] font-medium'

export const lpCompareCommon = 'text-slate-500'

/**
 * デモLP共通タイポグラフィ（GembaShift型LPに合わせた階層）
 *
 * Tier 1: 見出し — 大・太・ink
 * Tier 2: リード — 18–20px・slate-700（opacity で薄くしない）
 * Tier 3: 本文 — 16px・slate-600
 * Tier 4: 注記 — 14px・slate-500
 */

export const lpSectionLabel =
  'mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lp-primary)]'

export const lpH1 =
  'text-3xl font-bold leading-tight tracking-tight text-[var(--lp-ink)] md:text-4xl lg:text-[2.75rem] [text-wrap:balance] [word-break:auto-phrase]'

export const lpHeroSub =
  'text-lg font-semibold leading-snug text-[var(--lp-ink)] md:text-xl [text-wrap:balance]'

export const lpHeroBody =
  'text-base leading-relaxed text-slate-600 md:text-lg md:leading-8'

export const lpH2 =
  'mb-3 text-2xl font-bold tracking-tight text-[var(--lp-ink)] md:text-4xl [text-wrap:balance]'

export const lpH2Centered = `${lpH2} text-center`

export const lpLead =
  'mb-8 max-w-3xl text-lg leading-relaxed text-slate-700 md:text-xl md:leading-8'

export const lpLeadCentered = `${lpLead} mx-auto text-center`

export const lpBody = 'text-base leading-relaxed text-slate-600'

export const lpBodyMuted = 'text-sm leading-relaxed text-slate-500'

export const lpNote = 'text-sm leading-relaxed text-slate-500'

export const lpCaption = 'text-base font-medium leading-relaxed text-[var(--lp-ink)]'

export const lpCardTitle = 'font-bold text-[var(--lp-ink)]'

export const lpCardTitleLg = 'text-lg font-bold text-[var(--lp-ink)]'

export const lpCardMeta =
  'text-xs font-semibold uppercase tracking-wide text-[var(--lp-primary)]'

export const lpQuote =
  'mt-3 rounded-xl bg-[var(--lp-primary)]/[0.07] px-4 py-3 text-base font-bold leading-relaxed text-slate-900 md:text-[17px] md:leading-8'

export const lpSummaryBox =
  'mt-8 rounded-xl border border-[var(--lp-ink)]/10 bg-[var(--lp-surface)] px-5 py-6'

export const lpSummaryHeadline =
  'text-lg font-bold leading-snug text-[var(--lp-ink)] md:text-xl'

export const lpAffirm = 'text-base font-medium leading-relaxed text-[var(--lp-ink)]'

export const lpCompareOurs = 'text-[var(--lp-ink)] font-medium'

export const lpCompareCommon = 'text-slate-500'

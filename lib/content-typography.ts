/**
 * サイト全体で共有するコンテンツ用タイポグラフィ階層
 * （デモLP `lpTypography` の正本。opacity で本文を薄くしない）
 *
 * Tier 1: 見出し — 大・太
 * Tier 2: リード — 18–20px
 * Tier 3: 本文 — 16px
 * Tier 4: 注記 — 14px
 */

/** セクションラベル（小ラベル） */
export const contentSectionLabel =
  'mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand'

export const contentH1 =
  'text-3xl font-bold leading-tight tracking-tight text-[var(--site-fg)] md:text-4xl lg:text-[2.75rem] [text-wrap:balance] [word-break:auto-phrase]'

export const contentHeroSub =
  'text-lg font-semibold leading-snug text-[var(--site-fg)] md:text-xl [text-wrap:balance]'

export const contentHeroBody =
  'text-base leading-relaxed text-slate-600 md:text-lg md:leading-8'

export const contentH2 =
  'mb-3 text-2xl font-bold tracking-tight text-[var(--site-fg)] md:text-4xl [text-wrap:balance]'

export const contentH2Centered = `${contentH2} text-center`

export const contentLead =
  'mb-8 max-w-3xl text-lg leading-relaxed text-slate-700 md:text-xl md:leading-8'

export const contentLeadCentered = `${contentLead} mx-auto text-center`

/** TOP など余白なしで使うリード本文 */
export const contentLeadBare =
  'text-lg leading-relaxed text-slate-700 md:text-xl md:leading-8'

export const contentBody = 'text-base leading-relaxed text-slate-600'

export const contentBodyMuted = 'text-sm leading-relaxed text-slate-500'

export const contentNote = 'text-sm leading-relaxed text-slate-500'

export const contentCaption =
  'text-base font-medium leading-relaxed text-[var(--site-fg)]'

export const contentCardTitle = 'font-bold text-[var(--site-fg)]'

export const contentCardTitleLg = 'text-lg font-bold text-[var(--site-fg)]'

export const contentCardMeta =
  'text-xs font-semibold uppercase tracking-wide text-brand'

export const contentQuote =
  'mt-3 rounded-xl bg-brand/[0.07] px-4 py-3 text-base font-bold leading-relaxed text-slate-900 md:text-[17px] md:leading-8'

export const contentAffirm =
  'text-base font-medium leading-relaxed text-[var(--site-fg)]'

/** design-tokens 互換バンドル */
export const contentTypography = {
  sectionLabel: contentSectionLabel,
  h1: contentH1,
  h2: contentH2,
  lead: contentLead,
  leadBare: contentLeadBare,
  body: contentBody,
  note: contentNote,
  caption: contentCaption,
} as const

import { ReactNode } from 'react'

interface PhilosophySectionShellProps {
  id: string
  label: string
  title: string
  children: ReactNode
  className?: string
}

/** セクション共通ラッパー — 余白・見出し階層・スクロール位置を統一 */
export function PhilosophySectionShell({
  id,
  label,
  title,
  children,
  className = '',
}: PhilosophySectionShellProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 lg:scroll-mt-28 py-14 md:py-20 lg:py-24 border-b border-[var(--site-border)]/50 ${className}`}
    >
      <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-brand/90 mb-3">
        {label}
      </p>
      <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[var(--site-fg)] mb-8 lg:mb-12 tracking-tight leading-tight">
        {title}
      </h2>
      {children}
    </section>
  )
}

interface PhilosophySubheadingProps {
  children: ReactNode
  className?: string
}

/** サブ見出し — 左アクセントライン付き */
export function PhilosophySubheading({ children, className = '' }: PhilosophySubheadingProps) {
  return (
    <h3
      className={`text-lg sm:text-xl lg:text-2xl font-semibold text-[var(--site-fg)] mb-5 mt-10 lg:mt-14 pl-4 sm:pl-5 border-l-2 border-brand/70 leading-snug ${className}`}
    >
      {children}
    </h3>
  )
}

interface PhilosophyProseProps {
  children: ReactNode
  className?: string
  narrow?: boolean
}

/** 本文 — 読みやすい行長・行間・色コントラスト */
export function PhilosophyProse({
  children,
  className = '',
  narrow = true,
}: PhilosophyProseProps) {
  return (
    <div
      className={`philosophy-prose space-y-5 sm:space-y-6 text-[1.0625rem] sm:text-lg text-[var(--site-fg-muted)] leading-[1.85] ${narrow ? 'max-w-3xl' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

interface PhilosophyLeadProps {
  children: ReactNode
}

/** リード文 — セクション内のキーメッセージ */
export function PhilosophyLead({ children }: PhilosophyLeadProps) {
  return (
    <p className="max-w-3xl text-xl sm:text-2xl font-semibold text-[var(--site-fg)] leading-relaxed tracking-tight">
      {children}
    </p>
  )
}

interface PhilosophyCalloutProps {
  children: ReactNode
  className?: string
}

/** ハイライトボックス — 重要な概念のまとめ */
export function PhilosophyCallout({ children, className = '' }: PhilosophyCalloutProps) {
  return (
    <div
      className={`max-w-3xl rounded-xl border border-brand/20 bg-gradient-to-br from-gray-900/90 to-gray-900/50 p-6 sm:p-8 space-y-5 ${className}`}
    >
      {children}
    </div>
  )
}

interface PhilosophyQuoteProps {
  children: ReactNode
}

/** 引用・キーフレーズ */
export function PhilosophyQuote({ children }: PhilosophyQuoteProps) {
  return (
    <blockquote className="max-w-3xl relative pl-5 sm:pl-7 py-3 my-8 lg:my-10 border-l-2 border-brand/60">
      <p className="text-lg sm:text-xl font-semibold text-brand-hover/95 leading-relaxed">
        {children}
      </p>
    </blockquote>
  )
}

interface PhilosophyHighlightProps {
  children: ReactNode
  className?: string
}

/** 本文中の強調ブロック */
export function PhilosophyHighlight({ children, className = '' }: PhilosophyHighlightProps) {
  return (
    <div
      className={`max-w-3xl rounded-lg bg-[var(--site-bg-elevated)]/35 border border-[var(--site-border)]/40 p-5 sm:p-6 space-y-4 ${className}`}
    >
      {children}
    </div>
  )
}

interface PhilosophyEmphasisProps {
  children: ReactNode
  className?: string
}

/** 段落内の強調結論 */
export function PhilosophyEmphasis({ children, className = '' }: PhilosophyEmphasisProps) {
  return (
    <p className={`max-w-3xl text-base sm:text-lg font-semibold text-[var(--site-fg)] leading-relaxed ${className}`}>
      {children}
    </p>
  )
}

/** フル幅コンテンツ（カード・図解など） */
export function PhilosophyWideContent({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`mt-10 lg:mt-14 ${className}`}>{children}</div>
}

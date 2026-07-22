'use client'

import Link from 'next/link'
import {
  getCaseByRelatedDemoSlug,
  getCaseHref,
} from '@/data/cases'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'
import { RelatedPatternsMarquee } from '@/components/ai-capability-gallery/RelatedPatternsMarquee'
import { buildRoiSimulatorHrefForGalleryDemo } from '@/lib/roiSimulator'

export interface CapabilityDetailMeta {
  slug: string
  eyebrow: string
  title: string
  lead: string
  tags: string[]
}

interface AiCapabilityDetailShellProps {
  page: CapabilityDetailMeta
  children: React.ReactNode
  relatedCapabilities?: Capability[]
}

const btnBase =
  'inline-flex flex-1 items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors sm:min-w-[9.5rem]'

export function AiCapabilityDetailShell({
  page,
  children,
  relatedCapabilities = [],
}: AiCapabilityDetailShellProps) {
  const relatedCase = getCaseByRelatedDemoSlug(page.slug)
  const externalDemo = relatedCase?.externalDemo
  const caseHref = relatedCase ? getCaseHref(relatedCase.slug) : '/cases'
  const contactHref = `/contact?service=ai-consulting&intent=gallery&demo=${encodeURIComponent(page.slug)}`
  const estimateHref = buildRoiSimulatorHrefForGalleryDemo(page.slug, {
    returnPath: `${GALLERY_BASE}/${page.slug}`,
  })

  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 md:py-12 lg:px-8 lg:py-20">
        <nav
          className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-[var(--site-border)] pb-3 text-sm md:mb-8 md:pb-6"
          aria-label="デモ一覧ナビゲーション"
        >
          <Link
            href={GALLERY_BASE}
            className="text-[var(--site-fg-muted)] transition-colors hover:text-brand"
          >
            ← デモ一覧
          </Link>
          <span className="hidden text-gray-600 md:inline" aria-hidden="true">
            /
          </span>
          <span className="hidden text-[var(--site-fg-muted)] md:inline">
            {page.eyebrow}
          </span>
        </nav>

        <header className="mb-4 md:mb-10 lg:mb-14">
          <p className="mb-1.5 hidden text-[10px] font-medium uppercase tracking-[0.2em] text-brand/90 md:mb-3 md:block md:text-xs">
            {page.eyebrow}
          </p>

          <div className="mb-2 flex flex-col gap-3 sm:mb-4 md:flex-row md:items-start md:justify-between md:gap-6">
            <h1 className="min-w-0 flex-1 text-xl font-bold leading-snug tracking-tight text-[var(--site-fg)] sm:text-2xl md:text-3xl lg:text-4xl lg:leading-tight">
              {page.title}
            </h1>
            {externalDemo && (
              <div className="shrink-0 md:pt-1">
                <a
                  href={externalDemo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-brand/50 bg-brand/10 px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:border-brand hover:bg-brand/20 sm:w-auto"
                >
                  本格デモを開く
                  <span aria-hidden className="text-xs opacity-80">
                    ↗
                  </span>
                </a>
              </div>
            )}
          </div>

          <p className="mb-4 hidden text-lg leading-relaxed text-[var(--site-fg)]/90 md:block">
            {page.lead}
          </p>

          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {page.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--site-border)] px-2 py-0.5 text-[10px] text-[var(--site-fg-muted)] md:px-2.5 md:py-1 md:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-8 md:space-y-10">{children}</div>

        <footer className="mt-12 border-t border-[var(--site-border)] pt-10 md:mt-16 md:pt-12">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-brand/90">
              Next
            </p>
            <h2 className="mb-3 text-xl font-bold text-[var(--site-fg)] md:text-2xl">
              次に進む
            </h2>
            <p className="mx-auto mb-8 max-w-md text-sm text-[var(--site-fg-muted)]">
              現場の流れを読む・金額感を見る・相談する。どれからでも大丈夫です。
            </p>
            <div className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href={caseHref}
                className={`${btnBase} bg-brand text-white hover:bg-brand-hover`}
              >
                活用イメージ
              </Link>
              {estimateHref ? (
                <a
                  href={estimateHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnBase} border border-[var(--site-border)] text-[var(--site-fg)] hover:border-brand/40 hover:bg-brand/5`}
                >
                  見積もり
                </a>
              ) : (
                <Link
                  href="/estimate"
                  className={`${btnBase} border border-[var(--site-border)] text-[var(--site-fg)] hover:border-brand/40 hover:bg-brand/5`}
                >
                  見積もり
                </Link>
              )}
              <Link
                href={contactHref}
                className={`${btnBase} border border-[var(--site-border)] text-[var(--site-fg)] hover:border-brand/40 hover:bg-brand/5`}
              >
                問い合わせ
              </Link>
            </div>
          </div>

          {relatedCapabilities.length > 0 && (
            <RelatedPatternsMarquee items={relatedCapabilities} />
          )}
        </footer>
      </div>
    </div>
  )
}

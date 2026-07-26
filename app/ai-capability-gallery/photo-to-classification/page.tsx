import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { AiCapabilityDetailShell } from '@/components/ai-capability-gallery/AiCapabilityDetailShell'
import { PhotoToClassificationDemo } from '@/components/ai-capability-gallery/demos/PhotoToClassificationDemo'
import { TwoColumnSection } from '@/components/sections/TwoColumnSection'
import { capabilities } from '@/data/ai-capability-gallery/capabilities'
import { photoDetailPage } from '@/data/ai-capability-gallery/photo-to-classification'

export const metadata: Metadata = {
  title: photoDetailPage.metaTitle,
  description: photoDetailPage.metaDescription,
  openGraph: {
    title: photoDetailPage.metaTitle,
    description: photoDetailPage.metaDescription,
  },
}

const relatedCapabilities = capabilities.filter(
  (c) => c.slug !== photoDetailPage.slug
)

export default function PhotoToClassificationPage() {
  return (
    <Suspense fallback={<div className="bg-[var(--site-bg)] min-h-screen" />}>
      <AiCapabilityDetailShell
        page={{
          slug: photoDetailPage.slug,
          eyebrow: photoDetailPage.eyebrow,
          title: photoDetailPage.title,
          lead: photoDetailPage.lead,
          tags: photoDetailPage.tags,
        }}
        relatedCapabilities={relatedCapabilities}
      >
        <section id="demo">
          <PhotoToClassificationDemo />
        </section>

        <div className="hidden md:block">
          <TwoColumnSection
            title="Before / After"
            leftContent={
              <div className="p-6 rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40">
                <p className="text-xs uppercase tracking-wider text-[var(--site-fg-muted)] mb-2">
                  {photoDetailPage.beforeTitle}
                </p>
                <p className="text-[var(--site-fg-muted)] leading-relaxed">{photoDetailPage.beforeText}</p>
              </div>
            }
            rightContent={
              <div className="p-6 rounded-xl border border-brand/20 bg-brand/5">
                <p className="text-xs uppercase tracking-wider text-brand/80 mb-2">
                  {photoDetailPage.afterTitle}
                </p>
                <p className="text-[var(--site-fg)] leading-relaxed">{photoDetailPage.afterText}</p>
              </div>
            }
            columnRatio="equal"
            padding="md"
          />
        </div>

        <div className="flex flex-col gap-4 rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-xs tracking-[0.16em] text-brand/90">能力ギャラリー</p>
            <p className="mb-1 font-semibold text-[var(--site-fg)]">
              部品サンプルです。建設本線は外部ハブへ
            </p>
            <p className="text-sm text-[var(--site-fg-muted)]">
              建設の3体験（写真・報告書・現場オペ）は外部の建設ハブから体験できます。
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:items-end">
            <a
              href="https://construction-demo-two.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-[var(--df-on-primary)] transition-colors hover:bg-brand-hover"
            >
              建設ハブ（3体験）↗
            </a>
            <Link
              href="/cases/industries/construction-photo-sorting"
              className="inline-flex items-center justify-center rounded-lg border border-brand/40 px-5 py-2.5 text-sm font-medium text-brand-hover transition-colors hover:bg-brand/10"
            >
              活用イメージを読む →
            </Link>
          </div>
        </div>
      </AiCapabilityDetailShell>
    </Suspense>
  )
}

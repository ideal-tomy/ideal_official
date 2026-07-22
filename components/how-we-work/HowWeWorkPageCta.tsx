'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import {
  getCaseByRelatedDemoSlug,
  getCaseHref,
} from '@/data/cases'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'
import { buildRoiSimulatorHref } from '@/lib/roiSimulator'
import { getHowWeWorkHref } from '@/data/how-we-work'

type HowWeWorkPageCtaProps = {
  demoSlug?: string
  estimateKit?: string
  /** return 先（デフォルトはハブ or 活用イメージ） */
  returnPath?: string
}

export function HowWeWorkPageCta({
  demoSlug,
  estimateKit,
  returnPath,
}: HowWeWorkPageCtaProps) {
  const relatedCase = demoSlug
    ? getCaseByRelatedDemoSlug(demoSlug)
    : undefined
  const resolvedReturn =
    returnPath ??
    (relatedCase
      ? getCaseHref(relatedCase.slug)
      : getHowWeWorkHref())
  const roiHref = buildRoiSimulatorHref({
    kit: estimateKit,
    returnPath: resolvedReturn,
  })

  return (
    <section className="mt-12 border-t border-[var(--site-border)] pt-10">
      <h2 className="mb-2 text-xl font-semibold text-[var(--site-fg)]">
        次に進む
      </h2>
      <p className="mb-6 text-sm text-[var(--site-fg-muted)]">
        体験・概算・相談は、いつでも行き来できます。課題が固まっていなくても問い合わせて構いません。
      </p>
      <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
        {demoSlug && (
          <Link href={`${GALLERY_BASE}/${demoSlug}`}>
            <Button variant="secondary" size="md">
              簡易デモに戻る
            </Button>
          </Link>
        )}
        {relatedCase && (
          <Link href={getCaseHref(relatedCase.slug)}>
            <Button variant="outline" size="md">
              活用イメージを読む
            </Button>
          </Link>
        )}
        {roiHref ? (
          <a href={roiHref} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="md">
              概算見積もりへ
            </Button>
          </a>
        ) : (
          <Link href="/estimate">
            <Button variant="primary" size="md">
              概算見積もりへ
            </Button>
          </Link>
        )}
        <Link
          href={
            demoSlug
              ? `/contact?service=ai-consulting&intent=gallery&demo=${encodeURIComponent(demoSlug)}`
              : '/contact?service=ai-consulting&intent=how-we-work'
          }
        >
          <Button variant="outline" size="md">
            お問い合わせ
          </Button>
        </Link>
      </div>
    </section>
  )
}

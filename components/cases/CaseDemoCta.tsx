'use client'

import Link from 'next/link'
import type { CaseStudy } from '@/data/cases'
import { getCaseHref } from '@/data/cases'
import { Button } from '@/components/ui/Button'
import { buildRoiSimulatorHrefForGalleryDemo } from '@/lib/roiSimulator'

interface CaseDemoCtaProps {
  caseStudy: CaseStudy
}

export function CaseDemoCta({ caseStudy }: CaseDemoCtaProps) {
  const { relatedDemo, externalDemo } = caseStudy
  const returnPath = getCaseHref(caseStudy.slug)
  const roiHref = buildRoiSimulatorHrefForGalleryDemo(relatedDemo.slug, {
    returnPath,
  })

  return (
    <section className="border-b border-brand/40 bg-[var(--site-bg)] py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand/90">
          Next
        </p>
        <h2 className="mb-3 text-3xl font-bold text-[var(--site-fg)]">次に進む</h2>
        <p className="mb-10 text-base leading-relaxed text-[var(--site-fg-muted)]">
          体験で確かめたいか、金額感が先か。ここから選べます。
        </p>

        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link href={relatedDemo.href} className="sm:min-w-[10rem] sm:flex-1">
            <Button variant="primary" size="lg" fullWidth>
              簡易デモを体験
            </Button>
          </Link>

          {externalDemo && (
            <a
              href={externalDemo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:min-w-[10rem] sm:flex-1"
            >
              <Button variant="secondary" size="lg" fullWidth>
                業務デモを開く
              </Button>
            </a>
          )}

          {roiHref ? (
            <a
              href={roiHref}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:min-w-[10rem] sm:flex-1"
            >
              <Button variant="outline" size="lg" fullWidth>
                概算見積もりを開く
              </Button>
            </a>
          ) : (
            <Link href="/estimate" className="sm:min-w-[10rem] sm:flex-1">
              <Button variant="outline" size="lg" fullWidth>
                概算見積もりへ
              </Button>
            </Link>
          )}
        </div>

        {externalDemo?.note && (
          <p className="mt-4 text-xs text-[var(--site-fg-muted)]">{externalDemo.note}</p>
        )}
      </div>
    </section>
  )
}

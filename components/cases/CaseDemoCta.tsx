'use client'

import Link from 'next/link'
import type { CaseStudy } from '@/data/cases'
import { Button } from '@/components/ui/Button'
import { OpenConciergeButton } from '@/components/concierge/OpenConciergeButton'
import { getHowWeWorkHref } from '@/data/how-we-work'

interface CaseDemoCtaProps {
  caseStudy: CaseStudy
}

export function CaseDemoCta({ caseStudy }: CaseDemoCtaProps) {
  const { relatedDemo, externalDemo } = caseStudy

  return (
    <section className="border-b border-brand/40 bg-black py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand/90">
          Next
        </p>
        <h2 className="mb-3 text-3xl font-bold text-white">
          体験を深める・概算を見る
        </h2>
        <p className="mb-10 text-base leading-relaxed text-gray-300">
          簡易デモで仕組みを確かめ、業務デモで現場寄りの画面を体験できます。
          依頼後の進め方や金額感も、ここから進められます。
        </p>

        <div className="mb-8 rounded-xl border border-gray-800 bg-gray-900/40 p-5 text-left sm:p-6">
          <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
            簡易デモ
          </p>
          <p className="mb-1 text-lg font-semibold text-white">{relatedDemo.label}</p>
          <p className="mb-4 text-sm leading-relaxed text-gray-400">
            {relatedDemo.description}
          </p>
          <Link href={relatedDemo.href}>
            <Button variant="primary" size="md">
              簡易デモを体験
            </Button>
          </Link>
        </div>

        {externalDemo && (
          <div className="mb-8 rounded-xl border border-gray-800 bg-gray-900/40 p-5 text-left sm:p-6">
            <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
              業務デモ
            </p>
            <p className="mb-1 text-lg font-semibold text-white">
              {externalDemo.label}
            </p>
            {externalDemo.note && (
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                {externalDemo.note}
              </p>
            )}
            {!externalDemo.note && (
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                業務画面に近い形で、活用の流れを体験できます。
              </p>
            )}
            <a href={externalDemo.href} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="md">
                業務デモを開く
              </Button>
            </a>
          </div>
        )}

        <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          <Link href={getHowWeWorkHref(relatedDemo.slug)}>
            <Button variant="secondary" size="lg">
              このデモの導入の進め方
            </Button>
          </Link>
          <Link href="/estimate">
            <Button variant="secondary" size="lg">
              概算見積もりへ
            </Button>
          </Link>
          <Link href={caseStudy.contactHref}>
            <Button variant="outline" size="lg">
              お問い合わせ
            </Button>
          </Link>
          <OpenConciergeButton
            serviceId="ai-consulting"
            variant="outline"
            size="lg"
          >
            自社でも使えるか相談する
          </OpenConciergeButton>
        </div>
      </div>
    </section>
  )
}

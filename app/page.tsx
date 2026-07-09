/**
 * トップページ
 *
 * Hero → デモ入口 → サービス3つ → 事例予告 → LAB控えめ → CTA
 */

import { Hero } from '../components/sections/Hero'
import { DemoEntryBanner } from '../components/sections/DemoEntryBanner'
import ServiceGridSectionFixed from '../components/sections/ServiceGridSectionFixed'
import { LabTeaser } from '../components/sections/LabTeaser'
import CallToAction from '../components/sections/CallToAction'
import Link from 'next/link'
import Image from 'next/image'
import { getPublishedCases, getCaseHref } from '@/data/cases'
import { getCapabilityBySlug } from '@/data/ai-capability-gallery/capabilities'

export default function Home() {
  const serviceData = [
    {
      id: 'web-development',
      title: 'Webサイト・LP制作',
      description:
        '会社サイト、サービスLP、新規事業サイト。構成・UI・モーション・実装まで、このサイト自体が制作デモです。',
      image: '/images/top_web.png',
      link: '/services/web-development',
      linkText: 'Webを体験する →',
    },
    {
      id: 'ai-consulting',
      title: 'AIプロトタイプ・自動化',
      description:
        '「AIでできないか」を、まず動くデモから検証。7つの業務変化パターンから自社に近いものを選べます。',
      image: '/images/top_ai.png',
      link: '/services/ai-consulting',
      linkText: 'AI Hub へ →',
    },
    {
      id: 'app-development',
      title: 'Webアプリ・業務ツール開発',
      description:
        'Excel、紙、LINE、手作業の業務を、使いやすいWebツールに。入力→処理→結果を体験できます。',
      image: '/images/top_app.png',
      link: '/services/app-development',
      linkText: '操作デモを見る →',
    },
  ]

  const cases = getPublishedCases()
  const featuredCase = cases[0]
  const caseDemo = featuredCase
    ? getCapabilityBySlug(featuredCase.relatedDemo.slug)
    : undefined

  return (
    <>
      <Hero />
      <DemoEntryBanner />
      <ServiceGridSectionFixed
        title="社内にIT部門がなくても、
事業に必要な仕組みはつくれる。"
        description="課題整理から、Web・AI・業務ツールの開発、外部業者との調整まで。
外部IT部門として、事業と技術の間をつなぎます。"
        services={serviceData}
      />

      {featuredCase && (
        <section className="bg-black py-16 md:py-20 border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-10">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand/90 mb-3">
                Cases
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                自社の仕事に、置き換えてみる
              </h2>
              <p className="text-base text-gray-400">
                業界の業務フローから、関連デモへ進めます。
              </p>
            </header>

            <Link
              href={getCaseHref(featuredCase.slug)}
              className="group flex flex-col sm:flex-row overflow-hidden rounded-xl border border-gray-800 bg-gray-900/40 hover:border-brand/30 transition-colors"
            >
              {caseDemo && (
                <div className="relative sm:w-56 md:w-64 shrink-0 aspect-[16/10] sm:aspect-auto sm:min-h-[160px]">
                  <Image
                    src={caseDemo.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 256px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    aria-hidden="true"
                  />
                </div>
              )}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <p className="text-xs tracking-[0.16em] text-brand/90 mb-2">
                  {featuredCase.industryLabel}
                </p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {featuredCase.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                  {featuredCase.lead}
                </p>
                <span className="text-sm font-medium text-brand group-hover:text-brand-hover transition-colors">
                  事例を読む →
                </span>
              </div>
            </Link>

            <div className="mt-6 text-center">
              <Link
                href="/cases"
                className="text-sm font-medium text-brand hover:text-brand-hover transition-colors"
              >
                事例一覧 →
              </Link>
            </div>
          </div>
        </section>
      )}

      <LabTeaser />
      <CallToAction />
    </>
  )
}

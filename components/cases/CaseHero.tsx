import Image from 'next/image'
import Link from 'next/link'
import type { CaseStudy } from '@/data/cases'

interface CaseHeroProps {
  caseStudy: CaseStudy
}

/** 詳細ページ用の低背ヒーロー */
export function CaseHero({ caseStudy }: CaseHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--site-bg)] px-4 pb-8 pt-24 text-[var(--site-fg)] md:pb-12 md:pt-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_15%,rgba(96,165,250,0.18),transparent_45%),linear-gradient(to_bottom,var(--site-bg-elevated)_0%,var(--site-bg)_88%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-black leading-tight tracking-[-0.03em] text-[var(--site-fg)] md:text-5xl">
          {caseStudy.title}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--site-fg-muted)] md:text-lg">
          {caseStudy.lead}
        </p>
      </div>
    </section>
  )
}

interface CasesIndexHeroProps {
  title?: string
  subtitle?: string
  primaryCta?: {
    label: string
    href: string
  }
}

const DEFAULT_TITLE = '自社の仕事に、置き換えてみる。'

const DEFAULT_SUBTITLE =
  '現場管理、報告、進捗確認。実際のツールに触れながら、業務の流れを具体的にイメージできます。'

/**
 * /cases 一覧ページ用Hero
 *
 * 左側：HTMLの見出し・説明・CTA
 * 右側：完成済みビジュアル画像1枚
 */
export function CasesIndexHero({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  primaryCta = {
    label: '業種から探す',
    href: '#cases-browse',
  },
}: CasesIndexHeroProps) {
  const titleLines = title.includes('、')
    ? [
        title.slice(0, title.indexOf('、') + 1),
        title.slice(title.indexOf('、') + 1),
      ]
    : [title]

  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-950">
      {/* Hero全体の背景 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_73%_15%,rgba(147,197,253,0.56),transparent_43%),linear-gradient(to_bottom,#eef6ff_0%,#f8fbff_58%,#ffffff_100%)]"
      />

      {/* 左下の淡い白い光 */}
      <div
        aria-hidden="true"
        className="absolute -bottom-44 -left-48 -z-10 h-[520px] w-[720px] rounded-full bg-white/80 blur-3xl"
      />

      <div
        className="
          mx-auto grid min-h-[680px] w-full max-w-[1440px]
          items-center gap-10
          px-5 pb-16 pt-24
          sm:px-8
          md:pb-20 md:pt-24
          lg:grid-cols-[0.82fr_1.18fr] lg:gap-4 lg:px-12
          xl:px-16
        "
      >
        {/* 左側：HTMLコンテンツ */}
        <div className="relative z-20 max-w-[560px] py-4 lg:py-10">
          <p className="mb-7 flex items-center gap-4 text-base font-bold text-blue-600 md:text-lg">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-blue-600"
            />
            活用イメージ
          </p>

          <h1 className="text-[clamp(2.75rem,5.4vw,4.5rem)] font-black leading-[1.16] tracking-[-0.055em] text-slate-950">
            {titleLines.length === 2 ? (
              <>
                <span className="inline-block">{titleLines[0]}</span>{' '}
                <span className="inline-block">{titleLines[1]}</span>
              </>
            ) : (
              title
            )}
          </h1>

          <p className="mt-8 max-w-[520px] text-base leading-8 text-slate-600 md:text-lg md:leading-9">
            {subtitle}
          </p>

          <Link
            href={primaryCta.href}
            className="
              mt-10 inline-flex min-h-14 w-full
              items-center justify-center gap-4
              rounded-xl bg-blue-600 px-8
              text-base font-bold text-white
              shadow-[0_16px_40px_rgba(37,99,235,0.28)]
              transition duration-200
              hover:-translate-y-0.5 hover:bg-blue-700
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-blue-600
              sm:w-auto
            "
          >
            {primaryCta.label}

            <span
              aria-hidden="true"
              className="text-xl leading-none"
            >
              ›
            </span>
          </Link>
        </div>

        {/* 右側：完成済み画像を1枚だけ表示 */}
        <div
          className="
            relative z-10 mx-auto w-full max-w-[780px]
            lg:ml-auto lg:mr-[-2rem]
            xl:mr-[-3rem]
          "
        >
          <div className="relative aspect-square w-full">
            <Image
              src="/images/cases/cases-hero-visual01.png"
              alt="現場管理ダッシュボードとスマートフォンの操作画面"
              fill
              priority
              sizes="(max-width: 1023px) 94vw, 58vw"
              className="select-none object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function CaseBackLink() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-5 sm:px-6 md:pt-8 lg:px-8">
      <Link
        href="/cases"
        className="text-sm text-[var(--site-fg-muted)] transition-colors hover:text-blue-600"
      >
        ← 活用イメージ一覧
      </Link>
    </div>
  )
}
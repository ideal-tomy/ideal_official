import Link from 'next/link'
import type { IndustryCard } from '@/data/demo-first/top-page'

type Props = {
  cards: IndustryCard[]
}

function IndustryIcon({ id }: { id: string }) {
  const common = {
    className: 'h-14 w-14 shrink-0 text-[var(--df-primary-deep)]',
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    'aria-hidden': true as const,
  }

  switch (id) {
    case 'construction':
      return (
        <svg {...common}>
          <path d="M8 40h32M12 40V20l12-10 12 10v20" />
          <path d="M20 40v-8h8v8" />
        </svg>
      )
    case 'care':
      return (
        <svg {...common}>
          <path d="M24 42s-16-9.3-16-21a9 9 0 0 1 16-5.6A9 9 0 0 1 40 21c0 11.7-16 21-16 21z" />
        </svg>
      )
    case 'retail':
      return (
        <svg {...common}>
          <path d="M8 18h32l-3 22H11L8 18z" />
          <path d="M17 18v-4a7 7 0 0 1 14 0v4" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <path d="M6 40V22l10 6V22l10 6V16l16-6v30H6z" />
          <path d="M14 32h4M24 32h4M34 32h4" />
        </svg>
      )
  }
}

export function DemoFirstIndustryService({ cards }: Props) {
  return (
    <section id="service" className="bg-[var(--df-bg)] py-[var(--df-sec-pad)]">
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <p className="hidden text-sm font-bold uppercase tracking-[0.12em] text-[var(--df-primary)] md:block">
          Service
        </p>
        <h2 className="my-2 mb-6 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)]">
          
          <br className="hidden md:inline" />
          デモから始めるDX開発
        </h2>
        <p className="mb-12 max-w-[640px] text-[var(--df-text)]">
          汎用ツールの導入で終わらせず、業界ごとの商習慣・現場ルールを踏まえた仕組みを設計します。まず小さく動くものを作り、現場の反応を見ながら育てていきます。
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.id}
              className="rounded-[var(--df-radius-card)] bg-[var(--df-bg-card)] px-6 py-8"
            >
              <header className="mb-6 flex items-start justify-between border-b border-[var(--df-bg-blue-2)] pb-4">
                <h3 className="text-2xl font-black leading-[1.3] text-[var(--df-primary-deep)]">
                  {card.title}
                  <small className="mt-1 block text-xs font-bold tracking-[0.1em] text-[var(--df-primary)]">
                    {card.englishLabel}
                  </small>
                </h3>
                <IndustryIcon id={card.id} />
              </header>

              <span className="mb-4 inline-block rounded border border-[var(--df-text-muted)] px-3.5 py-0.5 text-[13px] font-bold text-[var(--df-text-muted)]">
                課題
              </span>
              <ul className="mb-6 space-y-2">
                {card.issues.map((issue) => (
                  <li
                    key={issue}
                    className="relative pl-[18px] text-[14.5px] text-[var(--df-text)] before:absolute before:left-0 before:top-[0.75em] before:h-[7px] before:w-[7px] before:rounded-full before:bg-[var(--df-text-muted)]"
                  >
                    {issue}
                  </li>
                ))}
              </ul>

              <span className="mb-4 inline-block rounded bg-[var(--df-primary)] px-3.5 py-0.5 text-[13px] font-bold text-white">
                解決
              </span>
              <ul className="mb-6 space-y-2">
                {card.solutions.map((solution) => (
                  <li
                    key={solution}
                    className="relative pl-[18px] text-[14.5px] text-[var(--df-text)] before:absolute before:left-0 before:top-[0.75em] before:h-[7px] before:w-[7px] before:rounded-full before:bg-[var(--df-primary)]"
                  >
                    {solution}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <Link
                  href={card.tryHref}
                  className="text-sm font-bold text-[var(--df-primary)] hover:underline"
                >
                  触ってみる（{card.tryLabel}）
                </Link>
                {card.detailHref && (
                  <Link
                    href={card.detailHref}
                    className="inline-flex h-10 w-14 items-center justify-center rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] font-bold text-white transition-transform hover:translate-x-1"
                    aria-label={`${card.title}の詳細`}
                  >
                    →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/cases"
            className="text-sm font-bold text-[var(--df-primary)] hover:underline"
          >
            事例一覧を見る →
          </Link>
        </div>
      </div>
    </section>
  )
}

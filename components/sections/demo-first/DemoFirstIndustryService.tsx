import Link from 'next/link'
import { ThemeImage } from '@/components/ui/ThemeImage'
import type { IndustryCard } from '@/data/demo-first/top-page'

type Props = {
  cards: IndustryCard[]
}

export function DemoFirstIndustryService({ cards }: Props) {
  return (
    <section id="service" className="bg-[var(--df-bg)] py-[var(--df-sec-pad)]">
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <p className="hidden text-sm font-bold uppercase tracking-[0.12em] text-[var(--df-primary)] md:block">
          Service
        </p>
        <h2 className="my-2 mb-6 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)]">
          デモから始めるDX開発
        </h2>
        <p className="mb-12 max-w-[640px] text-[var(--df-text)]">
          汎用ツールの導入で終わらせず、業界ごとの商習慣・現場ルールを踏まえた仕組みを設計します。下の「業務デモ」は本格的な体験用アプリです（別タブで開きます）。短いパターンデモは上のセクションからどうぞ。
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.id}
              className="overflow-hidden rounded-[var(--df-radius-card)] bg-[var(--df-bg-card)]"
            >
              <div className="relative aspect-[16/9] bg-[linear-gradient(160deg,var(--df-hero-2),var(--df-primary-hover))]">
                <ThemeImage
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  aria-hidden="true"
                />
              </div>

              <div className="px-6 py-8">
                <header className="mb-6 border-b border-[var(--df-bg-blue-2)] pb-4">
                  <h3 className="text-2xl font-black leading-[1.3] text-[var(--df-primary-deep)]">
                    {card.title}
                    <small className="mt-1 block text-xs font-bold tracking-[0.1em] text-[var(--df-primary)]">
                      {card.englishLabel}
                    </small>
                  </h3>
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

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    {card.tryExternal ? (
                      <a
                        href={card.tryHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[var(--df-primary)] hover:underline"
                      >
                        業務デモを開く（{card.tryLabel}）↗
                      </a>
                    ) : (
                      <Link
                        href={card.tryHref}
                        className="text-sm font-bold text-[var(--df-primary)] hover:underline"
                      >
                        触ってみる（{card.tryLabel}）
                      </Link>
                    )}
                    {card.detailHref && (
                      <Link
                        href={card.detailHref}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--df-primary-deep)] transition-colors hover:text-[var(--df-primary)]"
                        aria-label={card.detailLabel ?? `${card.title}の詳細`}
                      >
                        {card.detailLabel ?? '詳細を見る'}
                        <span
                          className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] font-bold text-white"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    )}
                  </div>
                  {card.tryNote && (
                    <p className="text-xs leading-relaxed text-[var(--df-text-muted)]">
                      {card.tryNote}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/cases"
            className="text-sm font-bold text-[var(--df-primary)] hover:underline"
          >
            活用イメージ一覧を見る →
          </Link>
        </div>
      </div>
    </section>
  )
}

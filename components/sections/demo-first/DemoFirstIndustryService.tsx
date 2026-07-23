'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ThemeImage } from '@/components/ui/ThemeImage'
import { SectionKicker } from './SectionKicker'
import type { IndustryCard } from '@/data/demo-first/top-page'

type Props = {
  cards: IndustryCard[]
}

export function DemoFirstIndustryService({ cards }: Props) {
  const [openId, setOpenId] = useState(cards[0]?.id ?? '')

  return (
    <section
      id="service"
      className="bg-[var(--df-bg-card)] py-[clamp(40px,8vw,64px)] md:py-[var(--df-sec-pad)]"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <SectionKicker index="02" label="業種" />
        <h2 className="my-2 mb-4 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)] md:mb-6">
          デモから始めるDX開発
        </h2>
        <p className="mb-8 max-w-[640px] text-[var(--df-text)] md:mb-12">
          汎用ツールの導入で終わらせず、業界ごとの商習慣・現場ルールを踏まえた仕組みを設計します。気になる業種を開いて、課題と解決の流れを見てください。
        </p>

        <div className="space-y-3">
          {cards.map((card) => {
            const isOpen = openId === card.id
            return (
              <article
                key={card.id}
                className="overflow-hidden rounded-[var(--df-radius-card)] border border-[var(--df-bg-blue-2)] bg-[var(--df-bg)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? '' : card.id)}
                  className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-[var(--df-bg-card)] sm:gap-4 sm:px-5"
                  aria-expanded={isOpen}
                >
                  <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md bg-[linear-gradient(160deg,var(--df-hero-2),var(--df-primary-hover))] sm:h-16 sm:w-24">
                    <ThemeImage
                      src={card.image}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover object-center"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-black leading-tight text-[var(--df-primary-deep)] sm:text-xl">
                      {card.title}
                    </span>
                    <span className="mt-0.5 block text-[11px] font-bold tracking-[0.1em] text-[var(--df-primary)]">
                      {card.englishLabel}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 text-xl font-bold text-[var(--df-primary)] transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[var(--df-bg-blue-2)] px-4 pb-6 pt-5 sm:px-6">
                    <div className="md:grid md:grid-cols-2 md:items-start md:gap-8">
                      <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-lg bg-[linear-gradient(160deg,var(--df-hero-2),var(--df-primary-hover))] md:mb-0">
                        <ThemeImage
                          src={card.image}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 480px"
                          className="object-cover object-center"
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <span className="mb-3 inline-block rounded border border-[var(--df-text-muted)] px-3 py-0.5 text-[13px] font-bold text-[var(--df-text-muted)]">
                          課題
                        </span>
                        <ul className="mb-5 space-y-2">
                          {card.issues.map((issue) => (
                            <li
                              key={issue}
                              className="relative pl-[18px] text-[14.5px] text-[var(--df-text)] before:absolute before:left-0 before:top-[0.75em] before:h-[7px] before:w-[7px] before:rounded-full before:bg-[var(--df-text-muted)]"
                            >
                              {issue}
                            </li>
                          ))}
                        </ul>

                        <span className="mb-3 inline-block rounded bg-[var(--df-primary)] px-3 py-0.5 text-[13px] font-bold text-white">
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
                            >
                              {card.detailLabel ?? '詳細を見る'}
                              <span
                                className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] font-bold text-white"
                                aria-hidden
                              >
                                →
                              </span>
                            </Link>
                          )}
                        </div>
                        {card.tryNote && (
                          <p className="mt-3 text-xs leading-relaxed text-[var(--df-text-muted)]">
                            {card.tryNote}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
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

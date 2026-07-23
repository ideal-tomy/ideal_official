import Link from 'next/link'
import type { ReactNode } from 'react'
import { ReasonEngineDiagram } from './ReasonEngineDiagram'
import { ReasonFlowDiagram } from './ReasonFlowDiagram'
import { ReasonLoopDiagram } from './ReasonLoopDiagram'
import { SectionKicker } from './SectionKicker'

const REASONS: {
  index: string
  title: string
  body: string
  diagram: ReactNode
  diagramClassName: string
}[] = [
  {
    index: '01',
    title: '先に触れる。だからズレない。',
    body: '要件定義書を何往復もする代わりに、まず動くデモを作って一緒に触ります。「思っていたのと違う」が起きるのは開発の後ではなく、契約の前。だから手戻りがありません。',
    diagram: <ReasonFlowDiagram />,
    diagramClassName:
      'rounded-[var(--df-radius-card)] bg-[var(--df-bg-card)] px-5 py-8 sm:px-8',
  },
  {
    index: '02',
    title: '意思決定の仕組みを作る',
    body: 'チャットボットや管理画面はあくまで入口です。私たちが作るのは、現場の知恵とデータを取り込み、「なぜその判断なのか」まで返す業務の背骨。だから使われ続けます。',
    diagram: <ReasonEngineDiagram />,
    diagramClassName:
      'rounded-[var(--df-radius-card)] border border-[var(--df-primary)]/25 bg-[var(--df-bg)] px-4 py-8 shadow-[0_0_0_1px_color-mix(in_srgb,var(--df-primary)_12%,transparent)] sm:px-8',
  },
  {
    index: '03',
    title: '土台作りから育てていく',
    body: '一度に大きく作るほど、外したときの損失も大きくなります。小さく出して反応を見て、良かったものだけを本実装へ。低コストで、確実に定着する順番で進めます。',
    diagram: <ReasonLoopDiagram />,
    diagramClassName:
      'rounded-[var(--df-radius-card)] bg-[var(--df-bg-card)] px-4 py-6 sm:px-8 sm:py-8',
  },
]

export function DemoFirstReason() {
  return (
    <section
      id="reason"
      className="relative overflow-hidden bg-[var(--df-bg-blue)] py-[clamp(56px,12vw,96px)] md:py-[clamp(80px,14vw,120px)]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[var(--df-primary)]"
        aria-hidden
      />
      <div className="relative mx-auto w-[min(100%-48px,1080px)]">
        <header className="mb-12 text-center md:mb-16">
          <SectionKicker index="03" label="理由" className="text-center" />
          <h2 className="my-2 text-[clamp(28px,6.2vw,44px)] font-black leading-[1.35] text-[var(--df-text)]">
            提案書で終わらせず、
            <br />
            触れるものから始める理由。
          </h2>
        </header>

        <div className="space-y-14 md:space-y-20">
          {REASONS.map((reason, i) => {
            const reverse = i % 2 === 1
            return (
              <article
                key={reason.index}
                className={`flex flex-col gap-6 md:items-center md:gap-10 lg:gap-14 ${
                  reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                <div className={`w-full md:w-[52%] ${reason.diagramClassName}`}>
                  {reason.diagram}
                </div>

                <div className="w-full md:w-[48%]">
                  <p className="mb-2 font-mono text-sm font-bold tabular-nums tracking-[0.08em] text-[var(--df-primary)]">
                    {reason.index}
                  </p>
                  <h3 className="mb-4 text-[clamp(20px,3.2vw,28px)] font-black leading-[1.4] text-[var(--df-primary-deep)]">
                    {reason.title}
                  </h3>
                  <p className="max-w-[34rem] text-[15px] leading-relaxed text-[var(--df-text)] md:text-base">
                    {reason.body}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 md:mt-16">
          <a
            href="#demos"
            className="inline-flex items-center gap-2 rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            デモを触ってみる
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[var(--df-radius-btn)] border border-[var(--df-primary)] px-6 py-3 text-sm font-bold text-[var(--df-primary)] transition-colors hover:bg-[var(--df-primary)]/10"
          >
            相談してみる
          </Link>
        </div>
      </div>
    </section>
  )
}

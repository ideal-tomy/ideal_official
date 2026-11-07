import Link from 'next/link'
import type { ReactNode } from 'react'
import { ReasonEngineDiagram } from './ReasonEngineDiagram'
import { ReasonFlowDiagram } from './ReasonFlowDiagram'
import { ReasonLoopDiagram } from './ReasonLoopDiagram'
import styles from './DemoFirstReason.module.css'

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
    diagramClassName: 'px-2 py-6 sm:px-4 sm:py-8',
  },
  {
    index: '02',
    title: '意思決定の仕組みを作る',
    body: 'チャットボットや管理画面はあくまで入口です。私たちが作るのは、現場の知恵とデータを取り込み、「なぜその判断なのか」まで返す業務の背骨。だから使われ続けます。',
    diagram: <ReasonEngineDiagram />,
    diagramClassName: 'px-2 py-6 sm:px-4 sm:py-8',
  },
  {
    index: '03',
    title: '土台作りから育てていく',
    body: '一度に大きく作るほど、外したときの損失も大きくなります。小さく出して反応を見て、良かったものだけを本実装へ。低コストで、確実に定着する順番で進めます。',
    diagram: <ReasonLoopDiagram />,
    diagramClassName: 'px-2 py-4 sm:px-4 sm:py-6',
  },
]

function Wave({ tone }: { tone: 'plain' | 'blue' }) {
  return (
    <svg className={styles.wave} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
      <path
        d="M0,0 C420,78 1020,78 1440,8 L1440,80 L0,80 Z"
        fill={tone === 'blue' ? 'var(--df-bg-blue)' : 'var(--df-bg)'}
      />
    </svg>
  )
}

function ReasonArticle({
  reason,
  reverse,
}: {
  reason: (typeof REASONS)[number]
  reverse: boolean
}) {
  return (
    <article>
      <div className={`${styles.card}${reverse ? ` ${styles.reverse}` : ''}`}>
        <div className={`${styles.diagram} order-2 ${reason.diagramClassName}`}>{reason.diagram}</div>
        <div className={styles.copy}>
          <div className="order-1">
            <p className={styles.index}>{reason.index}</p>
            <h3 className={styles.title}>{reason.title}</h3>
          </div>
          <p className={`${styles.body} order-3`}>{reason.body}</p>
        </div>
      </div>
    </article>
  )
}

export function DemoFirstReason() {
  return (
    <section id="reason" className={styles.section}>
      <div className={`${styles.band} ${styles.bandPlain} ${styles.bandFirst}`}>
        <div className={styles.inner}>
          <header className={styles.head}>
            <h2 className="text-[clamp(28px,6.2vw,44px)] font-black leading-[1.35] text-[var(--df-text)]">
              触れるものから始める理由。
            </h2>
          </header>
          <ReasonArticle reason={REASONS[0]} reverse={false} />
        </div>
        <Wave tone="blue" />
      </div>

      <div className={`${styles.band} ${styles.bandBlue}`}>
        <div className={styles.inner}>
          <ReasonArticle reason={REASONS[1]} reverse />
        </div>
        <Wave tone="plain" />
      </div>

      <div className={`${styles.band} ${styles.bandPlain} ${styles.bandLast}`}>
        <div className={styles.inner}>
          <ReasonArticle reason={REASONS[2]} reverse={false} />
          <div className={styles.actions}>
            <a
              href="#demos"
              className="inline-flex items-center gap-2 rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-6 py-3 text-sm font-bold text-[var(--df-on-primary)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--df-primary-hover)]"
            >
              動くデモを見る
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[var(--df-radius-btn)] border border-[var(--site-border)] px-6 py-3 text-sm font-bold text-[var(--df-text)] transition-colors hover:border-[var(--df-primary)]/50 hover:text-[var(--df-primary)]"
            >
              相談してみる
            </Link>
          </div>
        </div>
        <Wave tone="blue" />
      </div>
    </section>
  )
}

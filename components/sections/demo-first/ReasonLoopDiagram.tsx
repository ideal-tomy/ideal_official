'use client'

/**
 * 土台を中心に、4工程を時計回りで回すサイクル図。
 * SVG 弧＋dashoffset で右回りの流れ、中央はゆっくり点滅。
 */
import styles from './ReasonLoopDiagram.module.css'

/** ノード間を結ぶ時計回りの弧（viewBox 600×520） */
const ARCS = [
  // 上 → 右
  'M 355 86 C 435 105 490 160 505 215',
  // 右 → 下
  'M 505 305 C 490 375 430 420 355 436',
  // 下 → 左
  'M 245 436 C 170 420 110 375 95 305',
  // 左 → 上
  'M 95 215 C 110 145 170 100 245 86',
] as const

export function ReasonLoopDiagram() {
  return (
    <div
      className={styles.diagram}
      role="img"
      aria-label="デモ公開、現場の反応、改善、運用に定着を回しながら土台を作るサイクル"
    >
      <svg
        className={styles.cycleSvg}
        viewBox="0 0 600 520"
        aria-hidden="true"
      >
        <defs>
          <marker
            id="reason-loop-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M 0 0 L 10 5 L 0 10 Z" fill="var(--df-primary)" />
          </marker>
          <filter
            id="reason-loop-glow"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {ARCS.map((path, index) => (
          <path
            key={`base-${index}`}
            d={path}
            className={styles.arcBase}
            markerEnd="url(#reason-loop-arrow)"
          />
        ))}

        {ARCS.map((path, index) => (
          <path
            key={`flow-${index}`}
            d={path}
            className={styles.arcFlow}
            style={{ animationDelay: `${index * -0.18}s` }}
          />
        ))}
      </svg>

      <div className={`${styles.node} ${styles.topNode}`}>デモ公開</div>
      <div className={`${styles.node} ${styles.rightNode}`}>現場の反応</div>
      <div className={`${styles.node} ${styles.bottomNode}`}>改善</div>
      <div className={`${styles.node} ${styles.leftNode}`}>運用に定着</div>

      <div className={styles.center}>
        <span className={styles.centerIcon} aria-hidden="true">
          
        </span>
        <strong className={styles.centerLabel}>土台を作る</strong>
      </div>
    </div>
  )
}

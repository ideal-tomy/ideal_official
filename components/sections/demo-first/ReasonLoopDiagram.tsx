'use client'

/**
 * 真円がタブの下を通り、4タブの中心が円周に載るサイクル図。
 * 矢印先端なし。破線の流れと中央の点滅のみ。
 */
import styles from './ReasonLoopDiagram.module.css'

/** viewBox 正方形・中心と半径（タブ中心＝円周） */
const VB = 560
const CX = 280
const CY = 280
const R = 200

export function ReasonLoopDiagram() {
  return (
    <div
      className={styles.diagram}
      role="img"
      aria-label="デモ公開、現場の反応、改善、運用に定着を回しながら土台を作るサイクル"
    >
      <svg
        className={styles.cycleSvg}
        viewBox={`0 0 ${VB} ${VB}`}
        aria-hidden="true"
      >
        <defs>
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

        {/* ベースの真円（タブより下） */}
        <circle
          cx={CX}
          cy={CY}
          r={R}
          className={styles.orbitBase}
        />
        {/* 右回りに流れる破線 */}
        <circle
          cx={CX}
          cy={CY}
          r={R}
          className={styles.orbitFlow}
        />
      </svg>

      {/* 中心が円周上：上下＝縦中央 / 左右＝横中央 */}
      <div className={`${styles.node} ${styles.topNode}`}>デモ公開</div>
      <div className={`${styles.node} ${styles.rightNode}`}>現場の反応</div>
      <div className={`${styles.node} ${styles.bottomNode}`}>改善</div>
      <div className={`${styles.node} ${styles.leftNode}`}>運用に定着</div>

      <div className={styles.center}>
        <span className={styles.centerIcon} aria-hidden="true">
          ↻
        </span>
        <strong className={styles.centerLabel}>土台を作る</strong>
      </div>
    </div>
  )
}

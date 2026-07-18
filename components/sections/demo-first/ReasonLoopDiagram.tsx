'use client'

import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.45, 0, 0.55, 1] as const

/** viewBox 中央。ラベルは軌道の外側に十分な隙間を空けて配置 */
const CX = 160
const CY = 150
const ORBIT_R = 46
/** 軌道端〜ラベル中心。重なり防止のため ORBIT_R + ラベル半高 + 余白 */
const LABEL_R = 94

/**
 * 時計回り 4 等分（12 / 3 / 6 / 9 時）
 * デモ公開 → 現場の反応 → 改善 → 運用に定着
 */
const STEPS = [
  { label: 'デモ公開', deg: -90, w: 76 },
  { label: '現場の反応', deg: 0, w: 92 },
  { label: '改善', deg: 90, w: 64 },
  { label: '運用に定着', deg: 180, w: 92 },
] as const

const LABEL_H = 34

function polar(deg: number, r: number) {
  const rad = (deg * Math.PI) / 180
  return {
    x: CX + r * Math.cos(rad),
    y: CY + r * Math.sin(rad),
  }
}

function StepLabel({
  label,
  deg,
  w,
  delay,
  animate,
  emphasis,
}: {
  label: string
  deg: number
  w: number
  delay: number
  animate: boolean
  emphasis?: boolean
}) {
  const { x, y } = polar(deg, LABEL_R)

  return (
    <motion.g
      initial={animate ? { opacity: 0, scale: 0.92 } : false}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, delay, ease }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      {/* 軌道線を隠さないよう、軌道側にカード色の余白 */}
      <rect
        x={x - w / 2 - 4}
        y={y - LABEL_H / 2 - 4}
        width={w + 8}
        height={LABEL_H + 8}
        rx={12}
        fill="var(--df-bg-card)"
      />
      <rect
        x={x - w / 2}
        y={y - LABEL_H / 2}
        width={w}
        height={LABEL_H}
        rx={10}
        fill={emphasis ? 'var(--df-primary)' : 'var(--df-bg-card)'}
        stroke="var(--df-primary)"
        strokeOpacity={emphasis ? 0 : 0.55}
        strokeWidth={1.5}
      />
      <text
        x={x}
        y={y + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={emphasis ? '#fff' : 'var(--df-text)'}
        fontSize={12}
        fontWeight={700}
        style={{ fontFamily: 'inherit' }}
      >
        {label}
      </text>
    </motion.g>
  )
}

export function ReasonLoopDiagram() {
  const prefersReduced = useReducedMotion()
  const animate = prefersReduced !== true

  return (
    <div
      className="mx-auto w-full max-w-[400px]"
      role="img"
      aria-label="デモ公開、現場の反応、改善、運用に定着を小さく回すサイクル"
    >
      <svg
        viewBox="0 0 320 300"
        className="mx-auto block h-auto w-full"
        fill="none"
      >
        {/* ガイド円 */}
        <circle
          cx={CX}
          cy={CY}
          r={ORBIT_R}
          stroke="var(--df-primary)"
          strokeOpacity={0.15}
          strokeWidth={1}
        />

        {/* 回転破線 */}
        <motion.g
          animate={animate ? { rotate: 360 } : undefined}
          transition={
            animate
              ? { duration: 10, repeat: Infinity, ease: 'linear' }
              : undefined
          }
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        >
          <circle
            cx={CX}
            cy={CY}
            r={ORBIT_R}
            stroke="var(--df-primary)"
            strokeOpacity={0.7}
            strokeWidth={1.5}
            strokeDasharray="5 7"
          />
        </motion.g>

        {/* 周回ドット */}
        {animate ? (
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          >
            <circle
              cx={CX}
              cy={CY - ORBIT_R}
              r={4}
              fill="var(--df-primary)"
              style={{
                filter:
                  'drop-shadow(0 0 5px color-mix(in srgb, var(--df-primary) 70%, transparent))',
              }}
            />
          </motion.g>
        ) : null}

        {/* 中心 */}
        <text
          x={CX}
          y={CY - 7}
          textAnchor="middle"
          fill="var(--df-primary)"
          fontSize={14}
          style={{ fontFamily: 'inherit' }}
        >
          ↻
        </text>
        <text
          x={CX}
          y={CY + 11}
          textAnchor="middle"
          fill="var(--df-primary)"
          fontSize={11}
          fontWeight={700}
          letterSpacing="0.12em"
          style={{ fontFamily: 'inherit' }}
        >
          小さく回す
        </text>

        {/* 4ステップ（90°等間隔・軌道の外側） */}
        {STEPS.map((step, i) => (
          <StepLabel
            key={step.label}
            label={step.label}
            deg={step.deg}
            w={step.w}
            delay={animate ? 0.08 + i * 0.1 : 0}
            animate={animate}
            emphasis={step.label === '運用に定着'}
          />
        ))}
      </svg>
    </div>
  )
}

import type { ReactNode } from 'react'
import { mockFill } from './mock-tokens'

export function MockFramePhone({
  x,
  y,
  w = 72,
  h = 132,
  children,
}: {
  x: number
  y: number
  w?: number
  h?: number
  children?: ReactNode
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={12}
        fill={mockFill.surface}
        stroke={mockFill.border}
        strokeWidth={1.4}
      />
      <rect
        x={x + w / 2 - 10}
        y={y + 5}
        width={20}
        height={4}
        rx={2}
        fill={mockFill.muted}
        opacity={0.4}
      />
      {children}
    </g>
  )
}

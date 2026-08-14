import type { ReactNode } from 'react'
import { mockFill } from './mock-tokens'

export function MockFrameDesktop({
  x,
  y,
  w,
  h,
  children,
}: {
  x: number
  y: number
  w: number
  h: number
  children?: ReactNode
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill={mockFill.surface}
        stroke={mockFill.border}
        strokeWidth={1}
      />
      {children}
    </g>
  )
}

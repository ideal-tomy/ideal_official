import type { ReactNode } from 'react'
import { mockFill } from './mock-tokens'
import { MockChromeDots } from './MockParts'

export function MockFrameBrowser({
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
      <rect
        x={x}
        y={y}
        width={w}
        height={16}
        rx={8}
        fill={mockFill.bg}
      />
      <rect x={x} y={y + 10} width={w} height={6} fill={mockFill.bg} />
      <MockChromeDots x={x + 10} y={y + 8} />
      <rect
        x={x + 42}
        y={y + 5}
        width={w - 54}
        height={6}
        rx={3}
        fill={mockFill.surface}
        stroke={mockFill.border}
        strokeWidth={0.5}
      />
      {children}
    </g>
  )
}

import { MOCK_VIEWBOX, mockFill } from './mock-tokens'
import { MockFrameBrowser } from './MockFrameBrowser'
import { MockSvgShell } from './MockParts'

function PageSheet({
  x,
  y,
  w,
  h,
  front,
}: {
  x: number
  y: number
  w: number
  h: number
  front: boolean
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={6}
        fill={mockFill.surface}
        stroke={mockFill.border}
        strokeWidth={front ? 1 : 0.7}
        opacity={front ? 1 : 0.85}
      />
      <rect
        x={x}
        y={y}
        width={w}
        height={10}
        rx={6}
        fill={mockFill.accentSoft}
      />
      <rect x={x} y={y + 6} width={w} height={4} fill={mockFill.accentSoft} />
      {front ? (
        <>
          <rect
            x={x + 8}
            y={y + 18}
            width={w - 16}
            height={28}
            rx={3}
            fill={mockFill.accentSoft}
          />
          <rect
            x={x + 8}
            y={y + 52}
            width={w - 16}
            height={14}
            rx={2}
            fill={mockFill.bg}
            stroke={mockFill.border}
            strokeWidth={0.5}
          />
          <rect
            x={x + 8}
            y={y + 70}
            width={w - 16}
            height={14}
            rx={2}
            fill={mockFill.bg}
            stroke={mockFill.border}
            strokeWidth={0.5}
          />
        </>
      ) : (
        <>
          <rect
            x={x + 8}
            y={y + 16}
            width={w - 16}
            height={4}
            rx={1}
            fill={mockFill.muted}
            opacity={0.35}
          />
          <rect
            x={x + 8}
            y={y + h - 10}
            width={w - 16}
            height={3}
            rx={1}
            fill={mockFill.muted}
            opacity={0.3}
          />
        </>
      )}
    </g>
  )
}

export function WebCorporateMock() {
  return (
    <MockSvgShell viewBox={MOCK_VIEWBOX}>
      <rect width="320" height="200" fill={mockFill.bg} rx="12" />
      <MockFrameBrowser x={28} y={22} w={264} h={156}>
        <PageSheet x={86} y={48} w={110} h={108} front={false} />
        <PageSheet x={72} y={56} w={110} h={108} front={false} />
        <PageSheet x={58} y={64} w={118} h={100} front />
      </MockFrameBrowser>
    </MockSvgShell>
  )
}

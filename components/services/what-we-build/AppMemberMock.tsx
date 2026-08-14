import { MOCK_VIEWBOX, mockFill } from './mock-tokens'
import { MockFramePhone } from './MockFramePhone'
import { MockButton, MockSvgShell } from './MockParts'

export function AppMemberMock() {
  return (
    <MockSvgShell viewBox={MOCK_VIEWBOX}>
      <rect width="320" height="200" fill={mockFill.bg} rx="12" />
      <MockFramePhone x={124} y={28} w={72} h={144}>
        <rect
          x={132}
          y={44}
          width={56}
          height={48}
          rx={6}
          fill={mockFill.accentSoft}
          stroke={mockFill.border}
          strokeWidth={0.6}
        />
        <rect
          x={138}
          y={52}
          width={32}
          height={5}
          rx={1}
          fill={mockFill.accent}
          opacity={0.8}
        />
        <rect
          x={138}
          y={62}
          width={44}
          height={4}
          rx={1}
          fill={mockFill.muted}
          opacity={0.4}
        />
        <rect
          x={138}
          y={70}
          width={28}
          height={4}
          rx={1}
          fill={mockFill.muted}
          opacity={0.3}
        />
        <rect
          x={132}
          y={100}
          width={36}
          height={10}
          rx={5}
          fill={mockFill.accentSoft}
          stroke={mockFill.accent}
          strokeWidth={0.7}
        />
        <MockButton x={132} y={120} w={56} h={16} />
        <text
          x={160}
          y={132}
          textAnchor="middle"
          fontSize={7}
          fill={mockFill.surface}
          fontFamily="system-ui, sans-serif"
        >
          予約する
        </text>
      </MockFramePhone>
    </MockSvgShell>
  )
}

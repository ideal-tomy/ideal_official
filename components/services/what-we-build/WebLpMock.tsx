import { MOCK_VIEWBOX, mockFill } from './mock-tokens'
import { MockButton, MockSvgShell } from './MockParts'

export function WebLpMock() {
  return (
    <MockSvgShell viewBox={MOCK_VIEWBOX}>
      <rect width="320" height="200" fill={mockFill.bg} rx="12" />
      <rect
        x={108}
        y={18}
        width={104}
        height={164}
        rx={8}
        fill={mockFill.surface}
        stroke={mockFill.border}
        strokeWidth={1}
      />
      <rect
        x={116}
        y={28}
        width={80}
        height={42}
        rx={3}
        fill={mockFill.accentSoft}
      />
      <rect
        x={116}
        y={78}
        width={80}
        height={10}
        rx={2}
        fill={mockFill.bg}
        stroke={mockFill.border}
        strokeWidth={0.5}
      />
      <rect
        x={116}
        y={92}
        width={62}
        height={8}
        rx={2}
        fill={mockFill.bg}
        stroke={mockFill.border}
        strokeWidth={0.5}
      />
      <rect
        x={116}
        y={108}
        width={80}
        height={18}
        rx={2}
        fill={mockFill.bg}
        stroke={mockFill.border}
        strokeWidth={0.5}
      />
      <MockButton x={128} y={140} w={56} h={16} />
      <rect
        x={204}
        y={32}
        width={3}
        height={132}
        rx={1.5}
        fill={mockFill.muted}
        opacity={0.25}
      />
      <rect
        x={204}
        y={48}
        width={3}
        height={28}
        rx={1.5}
        fill={mockFill.accent}
        opacity={0.7}
      />
    </MockSvgShell>
  )
}

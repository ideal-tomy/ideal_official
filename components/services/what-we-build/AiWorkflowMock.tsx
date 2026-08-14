import { MOCK_VIEWBOX_WIDE, mockFill } from './mock-tokens'
import { MockArrow, MockButton, MockSvgShell } from './MockParts'

export function AiWorkflowMock() {
  return (
    <MockSvgShell viewBox={MOCK_VIEWBOX_WIDE}>
      <rect width="360" height="200" fill={mockFill.bg} rx="12" />

      <rect
        x={24}
        y={56}
        width={88}
        height={88}
        rx={10}
        fill={mockFill.surface}
        stroke={mockFill.border}
        strokeWidth={1}
      />
      <rect
        x={34}
        y={72}
        width={56}
        height={8}
        rx={2}
        fill={mockFill.muted}
        opacity={0.35}
      />
      <rect
        x={34}
        y={88}
        width={68}
        height={10}
        rx={3}
        fill={mockFill.bg}
        stroke={mockFill.border}
        strokeWidth={0.6}
      />
      <MockButton x={40} y={108} w={40} h={12} />

      <MockArrow x1={116} y={100} x2={142} />

      <rect
        x={146}
        y={56}
        width={88}
        height={88}
        rx={10}
        fill={mockFill.accentSoft}
        stroke={mockFill.accent}
        strokeWidth={0.8}
      />
      <rect
        x={158}
        y={78}
        width={64}
        height={6}
        rx={2}
        fill={mockFill.accent}
        opacity={0.7}
      />
      <rect
        x={158}
        y={92}
        width={52}
        height={4}
        rx={1}
        fill={mockFill.muted}
        opacity={0.35}
      />
      <rect
        x={158}
        y={104}
        width={44}
        height={4}
        rx={1}
        fill={mockFill.muted}
        opacity={0.3}
      />

      <MockArrow x1={238} y={100} x2={264} />

      <rect
        x={268}
        y={56}
        width={68}
        height={88}
        rx={10}
        fill={mockFill.surface}
        stroke={mockFill.border}
        strokeWidth={1}
      />
      <rect
        x={278}
        y={72}
        width={48}
        height={10}
        rx={5}
        fill={mockFill.accentSoft}
        stroke={mockFill.accent}
        strokeWidth={0.7}
      />
      <rect
        x={278}
        y={92}
        width={48}
        height={6}
        rx={2}
        fill={mockFill.muted}
        opacity={0.3}
      />
    </MockSvgShell>
  )
}

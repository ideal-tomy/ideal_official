'use client'

import { typography, colors, borders } from '@/lib/design-tokens'
import {
  formatPricingLineRange,
  type ConciergeEstimate,
} from '@/lib/concierge/estimate'

interface ConciergeEstimateBlockProps {
  estimate: ConciergeEstimate
}

export function ConciergeEstimateBlock({
  estimate,
}: ConciergeEstimateBlockProps) {
  return (
    <div
      className={`rounded-md bg-[var(--site-bg)]/70 ${borders.border} border-brand/40 p-3 space-y-3`}
    >
      <div>
        <p className={`${typography.caption} ${colors.text.muted} mb-1`}>
          概算費用（参考）
        </p>
        <p className={`${typography.body} ${colors.text.primary} font-medium`}>
          {estimate.rangeLabel}
        </p>
      </div>

      <div>
        <p className={`${typography.caption} ${colors.text.muted} mb-1.5`}>
          内訳
        </p>
        <ul className="space-y-1.5">
          {estimate.lines.map((line) => (
            <li
              key={line.id}
              className={`flex justify-between gap-3 ${typography.caption} ${colors.text.secondary}`}
            >
              <span>
                {line.kind === 'addon' ? '＋ ' : ''}
                {line.label}
              </span>
              <span className={`shrink-0 ${colors.text.muted}`}>
                {formatPricingLineRange(line)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className={`${typography.caption} ${colors.text.muted} leading-relaxed`}>
        {estimate.disclaimer}
      </p>
    </div>
  )
}

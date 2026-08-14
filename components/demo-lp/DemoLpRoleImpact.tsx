import type { RoleImpactBlock } from '@/lib/demo-lp/types'
import { DemoLpIllustration } from './DemoLpIllustration'
import {
  lpBody,
  lpH2,
  lpLead,
  lpSectionLabel,
  lpSummaryBox,
  lpSummaryHeadline,
} from './lpTypography'

export function DemoLpRoleImpact({ block }: { block: RoleImpactBlock }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className={lpSectionLabel}>{block.label}</p>
        <h2 className={lpH2}>{block.headline}</h2>
        {block.lead ? (
          <p className={`${lpLead} max-w-2xl`}>{block.lead}</p>
        ) : null}

        {block.diagram ? (
          <DemoLpIllustration asset={block.diagram} className="mb-8" />
        ) : null}

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-base">
            <thead>
              <tr className="border-b border-[var(--lp-ink)]/15">
                <th className="py-3 pr-4 font-semibold text-[var(--lp-ink)]">
                  立場
                </th>
                <th className="py-3 pr-4 font-semibold text-[var(--lp-ink)]/55">
                  いま
                </th>
                <th className="py-3 font-semibold text-[var(--lp-primary)]">
                  あと
                </th>
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr
                  key={row.role}
                  className="border-b border-[var(--lp-ink)]/10 align-top"
                >
                  <td className="py-4 pr-4 font-semibold text-[var(--lp-ink)]">
                    {row.role}
                  </td>
                  <td className={`py-4 pr-4 ${lpBody}`}>{row.before}</td>
                  <td className={`py-4 ${lpBody}`}>{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {block.closing ? (
          <div className={`${lpSummaryBox} mt-8 border bg-[var(--lp-surface)]`}>
            <p className={lpSummaryHeadline}>{block.closing}</p>
          </div>
        ) : null}
      </div>
    </section>
  )
}

import type { CaseIndustryGroup } from '@/data/cases'

type CaseIndustryNavProps = {
  groups: CaseIndustryGroup[]
}

/** 業種ジャンプ（横スクロールチップ） */
export function CaseIndustryNav({ groups }: CaseIndustryNavProps) {
  return (
    <nav
      aria-label="業種一覧"
      className="-mx-4 mb-8 overflow-x-auto px-4 md:mx-0 md:mb-10 md:overflow-visible md:px-0"
    >
      <ul className="flex w-max gap-2 pb-1 md:flex-wrap md:w-auto">
        {groups.map((group) => (
          <li key={group.industry}>
            <a
              href={`#industry-${group.industry}`}
              className="inline-flex rounded-full border border-[var(--site-border)] bg-[var(--site-bg)] px-3.5 py-1.5 text-sm font-medium text-[var(--site-fg)] transition-colors hover:border-brand/40 hover:text-brand"
            >
              {group.industryLabel}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

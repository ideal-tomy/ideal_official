import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'

export function LabHubHero() {
  return (
    <PageHero
      title="深く知る場所"
      description="思想・研究・導入の背景解説をここに集約。入口のデモや依頼は軽く、深さは LAB で満たします。"
    />
  )
}

export function LabBreadcrumb({
  items,
}: {
  items: { href?: string; label: string }[]
}) {
  return (
    <nav
      aria-label="パンくず"
      className="mx-auto max-w-3xl px-4 pb-2 pt-8 sm:px-6 lg:px-8"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--site-fg-muted)]">
        <li>
          <Link href="/lab" className="transition-colors hover:text-brand">
            LAB
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-brand">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--site-fg-muted)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

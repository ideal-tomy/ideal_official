import Link from 'next/link'
import { typography, colors, layout } from '@/lib/design-tokens'
import { HeroReveal } from '@/components/motion/HeroReveal'
import { HeroBackground } from '@/components/motion/HeroBackground'

export function LabHubHero() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden border-b border-brand/40">
      <HeroBackground />
      <HeroReveal className={`relative z-10 ${layout.container} text-center`}>
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand/90 mb-4">
          LAB
        </p>
        <h1 className={`${typography.h1} ${colors.text.primary} mb-6`}>
          深く知る場所
        </h1>
        <p className={`${typography.bodyLarge} ${colors.text.muted} max-w-2xl mx-auto`}>
          思想・研究・導入の背景解説をここに集約しています。入口のデモや依頼ページは軽く、深さは LAB で満たします。
        </p>
      </HeroReveal>
    </section>
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
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        <li>
          <Link href="/lab" className="hover:text-brand transition-colors">
            LAB
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-brand transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-300">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

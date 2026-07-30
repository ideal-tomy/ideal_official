import Link from 'next/link'
import { colors, transitions } from '@/lib/design-tokens'
import { ServiceNavigationProps } from '@/types/service'

/**
 * サービス間ナビ（sticky + blur）
 */
export function ServiceNavigation({
  serviceLinks,
  currentServiceId,
  className = '',
}: ServiceNavigationProps) {
  return (
    <nav
      aria-label="サービス切替"
      className={`sticky top-0 z-40 border-b border-[var(--site-border)] bg-[color-mix(in_srgb,var(--site-bg)_88%,transparent)] py-3 backdrop-blur-md md:py-4 ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-2 flex justify-center lg:hidden">
          <p className="text-xs text-[var(--site-fg-muted)]">
            ← 左右にスワイプ →
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide snap-x snap-mandatory sm:gap-3 lg:justify-center lg:overflow-visible lg:pb-0 lg:px-0">
          {serviceLinks.map((link) => {
            const isActive = currentServiceId === link.id

            return (
              <Link
                key={link.id}
                href={link.href}
                className={`
                  shrink-0 snap-start rounded-lg px-4 py-2 text-sm font-medium
                  ${transitions.colors}
                  ${colors.state.focus}
                  focus:outline-none
                  ${
                    isActive
                      ? `${colors.accent.bg} text-[var(--df-on-primary)]`
                      : `${colors.text.secondary} hover:${colors.text.primary} hover:bg-[var(--site-bg-elevated)]/50`
                  }
                `}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

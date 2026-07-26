import Link from 'next/link'
import { ThemeImage } from '@/components/ui/ThemeImage'
import type { Capability } from '@/data/ai-capability-gallery/capabilities'

interface CapabilityCardProps {
  capability: Capability
  /** マーキー用の縮小カード */
  size?: 'default' | 'compact'
  /** 省略時は capability.href（ギャラリー目次では #anchor など） */
  href?: string
  /** compact 時にベネフィット文（title）を隠す。目次用 */
  hideTitle?: boolean
}

/**
 * 機能／パターン選択カード（サムネイル付き）
 * タグは画像左上オーバーレイ。アクセントは --df-primary
 */
export function CapabilityCard({
  capability,
  size = 'default',
  href,
  hideTitle = false,
}: CapabilityCardProps) {
  const isReady = capability.status === 'ready'
  const compact = size === 'compact'
  const targetHref = href ?? capability.href
  const showTitle = !(compact && hideTitle)
  const overlayTags = compact
    ? capability.tags.slice(0, 2)
    : capability.tags.slice(0, 3)

  const content = (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--site-bg)]">
        <ThemeImage
          src={capability.image}
          alt=""
          fill
          sizes={compact ? '200px' : '(max-width: 768px) 100vw, 33vw'}
          className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
          aria-hidden
        />

        {/* 業種タグ（画像左上） */}
        <div
          className={
            compact
              ? 'absolute left-1.5 top-1.5 z-10 flex max-w-[75%] flex-wrap gap-1'
              : 'absolute left-2 top-2 z-10 flex max-w-[80%] flex-wrap gap-1.5'
          }
        >
          {overlayTags.map((tag) => (
            <span
              key={tag}
              className={
                compact
                  ? 'rounded-full bg-[var(--df-primary)] px-1.5 py-px text-[8px] font-semibold text-[var(--df-on-primary)] shadow-sm'
                  : 'rounded-full bg-[var(--df-primary)] px-2 py-0.5 text-[11px] font-semibold text-[var(--df-on-primary)] shadow-sm'
              }
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 体験 / 準備中（画像右上） */}
        <div className="absolute right-1.5 top-1.5 z-10 md:right-2 md:top-2">
          {isReady ? (
            <span
              className={
                compact
                  ? 'rounded-full bg-black/55 px-1.5 py-px text-[8px] font-bold text-white backdrop-blur-sm'
                  : 'rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] font-bold text-white backdrop-blur-sm'
              }
            >
              体験
            </span>
          ) : (
            <span
              className={
                compact
                  ? 'rounded-full border border-white/30 bg-black/45 px-1.5 py-px text-[8px] text-white/90 backdrop-blur-sm'
                  : 'rounded-full border border-white/30 bg-black/45 px-2 py-0.5 text-[10px] text-white/90 backdrop-blur-sm'
              }
            >
              準備中
            </span>
          )}
        </div>
      </div>

      <div
        className={
          compact
            ? 'flex flex-1 flex-col p-2.5'
            : 'flex flex-1 flex-col p-4 sm:p-5'
        }
      >
        <p
          className={
            compact
              ? 'mb-0.5 text-[10px] font-bold tracking-wide text-[var(--df-primary)]'
              : 'mb-1.5 text-sm font-bold tracking-wide text-[var(--df-primary)]'
          }
        >
          {capability.subtitle}
        </p>

        {showTitle ? (
          <h3
            className={
              compact
                ? 'mb-1.5 line-clamp-2 text-[11px] font-semibold leading-snug text-[var(--site-fg)]'
                : 'mb-2 text-base font-semibold leading-snug text-[var(--site-fg)] md:text-lg'
            }
          >
            {capability.title}
          </h3>
        ) : null}

        {!compact && (
          <p className="mb-3 text-xs leading-relaxed text-[var(--site-fg-muted)]">
            {capability.before}
            <span className="mx-1.5 font-bold text-[var(--df-primary)]">→</span>
            {capability.after}
          </p>
        )}

        <div className="mt-auto">
          {isReady ? (
            <span
              className={
                compact
                  ? 'inline-flex items-center text-[10px] font-medium text-[var(--df-primary)] transition-colors group-hover:text-[var(--df-primary-hover)]'
                  : 'inline-flex items-center text-sm font-medium text-[var(--df-primary)] transition-colors group-hover:text-[var(--df-primary-hover)]'
              }
            >
              体験する →
            </span>
          ) : (
            <span
              className={
                compact
                  ? 'inline-flex items-center text-[10px] text-[var(--site-fg-muted)]'
                  : 'inline-flex items-center text-sm text-[var(--site-fg-muted)]'
              }
            >
              近日公開
            </span>
          )}
        </div>
      </div>
    </>
  )

  const shellClass = compact
    ? 'group flex h-full min-w-[9.5rem] flex-col overflow-hidden rounded-lg border border-[var(--site-border)] bg-[var(--site-bg-elevated)] transition-colors hover:border-[var(--df-primary)]/40'
    : 'group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)] transition-colors hover:border-[var(--df-primary)]/40'

  if (isReady) {
    return (
      <Link href={targetHref} className={shellClass}>
        {content}
      </Link>
    )
  }

  return <div className={`${shellClass} opacity-75`}>{content}</div>
}

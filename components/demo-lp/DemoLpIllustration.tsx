import type { Asset } from '@/lib/demo-lp/types'

export function DemoLpIllustration({
  asset,
  className = '',
}: {
  asset: Asset
  className?: string
}) {
  return (
    <figure className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset.src}
        alt={asset.alt}
        className="mx-auto w-full max-w-4xl rounded-xl border border-[var(--lp-ink)]/10 bg-white"
      />
      {asset.note && (
        <figcaption className="mt-2 text-center text-xs text-[var(--lp-ink)]/50">
          {asset.note}
        </figcaption>
      )}
    </figure>
  )
}

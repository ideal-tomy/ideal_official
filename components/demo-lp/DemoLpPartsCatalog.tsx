import type { PartsCatalogBlock } from '@/lib/demo-lp/types'
import { DemoLpCtaLink } from './DemoLpCtaLink'
import { DemoLpIllustration } from './DemoLpIllustration'
import {
  lpAffirm,
  lpBody,
  lpCardMeta,
  lpCardTitleLg,
  lpH2,
  lpLead,
  lpNote,
  lpSectionLabel,
} from './lpTypography'

export function DemoLpPartsCatalog({ block }: { block: PartsCatalogBlock }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className={lpSectionLabel}>{block.label}</p>
        <h2 className={lpH2}>{block.headline}</h2>
        <p className={`${lpLead} max-w-2xl`}>{block.lead}</p>

        {block.diagram && (
          <DemoLpIllustration asset={block.diagram} className="mb-10" />
        )}

        <div className="grid gap-4 md:grid-cols-3">
          {block.items.map((part) => (
            <article
              key={part.no}
              className="flex flex-col rounded-xl border border-[var(--lp-ink)]/10 p-5"
            >
              <p className={lpCardMeta}>{part.no}</p>
              <h3 className={`mt-1 ${lpCardTitleLg}`}>{part.name}</h3>
              <p className={`mt-2 flex-1 ${lpBody}`}>{part.body}</p>
              {part.seamRemoved ? (
                <p className="mt-3 rounded-lg bg-[var(--lp-surface)] px-3 py-2 text-sm font-medium text-slate-700">
                  {part.seamRemoved}
                </p>
              ) : null}
              <p className={`mt-2 ${lpNote}`}>
                {part.standalone
                  ? '単独で利用できます'
                  : `先に必要: ${(part.dependsOn ?? []).join('、')}`}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {part.lpUrl ? (
                  <a
                    href={part.lpUrl}
                    className="text-sm font-semibold text-[var(--lp-primary)] hover:underline"
                  >
                    詳しく見る →
                  </a>
                ) : null}
                <a
                  href={part.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-700 hover:text-[var(--lp-primary)] hover:underline"
                >
                  デモを試す ↗
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className={`mt-6 ${lpAffirm}`}>{block.closing}</p>
        {block.footerCta && (
          <div className="mt-6">
            <DemoLpCtaLink cta={block.footerCta} />
          </div>
        )}
      </div>
    </section>
  )
}

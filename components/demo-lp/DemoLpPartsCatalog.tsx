import type { Cta, PartsCatalogBlock } from '@/lib/demo-lp/types'
import { DemoLpCtaLink } from './DemoLpCtaLink'
import { DemoLpIllustration } from './DemoLpIllustration'
import {
  lpAffirm,
  lpBody,
  lpCardMeta,
  lpCardTitleLg,
  lpH2,
  lpH2Centered,
  lpLead,
  lpLeadCentered,
  lpNote,
  lpSectionLabel,
} from './lpTypography'

export function DemoLpHeroCtaBand({
  cta,
  lead,
  large,
}: {
  cta: Cta
  lead?: string
  large?: boolean
}) {
  return (
    <section className="bg-[var(--lp-ink)] px-4 py-12 text-center sm:px-6 md:py-16">
      {lead ? (
        <p
          className={
            large
              ? 'mb-6 text-[30px] font-bold leading-tight text-white md:text-[60px]'
              : 'mb-5 text-lg font-semibold text-white md:text-xl'
          }
        >
          {lead}
        </p>
      ) : null}
      <DemoLpCtaLink
        cta={cta}
        className={large ? '!text-[14px]' : undefined}
      />
    </section>
  )
}

export function DemoLpPartsCatalog({ block }: { block: PartsCatalogBlock }) {
  const showCta = Boolean(block.heroCta) && block.heroCtaPlacement !== 'after-peak'
  const centered = block.align === 'center'
  return (
    <section
      className={`bg-white ${showCta ? 'pt-14 md:pt-20' : 'py-14 md:py-20'}`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className={`${lpSectionLabel} ${centered ? 'text-center' : ''}`}>
          {block.label}
        </p>
        <h2 className={centered ? lpH2Centered : lpH2}>{block.headline}</h2>
        {block.lead ? (
          <p
            className={`${centered ? lpLeadCentered : lpLead} max-w-2xl ${centered ? 'mx-auto' : ''}`}
          >
            {block.lead}
          </p>
        ) : null}

        {block.diagram && (
          <DemoLpIllustration asset={block.diagram} className="mb-10" />
        )}

        {block.hideItems ? null : (
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
        )}
        {block.closing ? (
          <p className={`mt-6 ${lpAffirm}`}>{block.closing}</p>
        ) : null}
        {block.footerCta && (
          <div className={`mt-6 ${centered ? 'flex justify-center' : ''}`}>
            <DemoLpCtaLink cta={block.footerCta} />
          </div>
        )}
      </div>
      {showCta && block.heroCta ? (
        <div className="mt-14">
          <DemoLpHeroCtaBand
            cta={block.heroCta}
            lead={block.heroCtaLead}
            large={block.heroCtaLarge}
          />
        </div>
      ) : null}
    </section>
  )
}

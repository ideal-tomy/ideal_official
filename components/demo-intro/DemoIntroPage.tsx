import Image from 'next/image'
import Link from 'next/link'
import {
  demoIntroHref,
  type TopFeaturedDemo,
} from '@/data/demo-first/top-featured-demos'
import type { DemoIntroImage, DemoIntroStory } from '@/data/demo-intro/stories'

type Props = {
  demo: TopFeaturedDemo
  story: DemoIntroStory
  related: TopFeaturedDemo[]
}

const sectionTitle =
  'break-keep text-[clamp(20px,5vw,30px)] font-black leading-[1.45] text-[var(--df-text)]'

function Lines({ lines }: { lines: string[] }) {
  return lines.map((line) => (
    <span key={line} className="block">
      {line}
    </span>
  ))
}

function TryButton({ demo, label }: { demo: TopFeaturedDemo; label: string }) {
  return (
    <a
      href={demo.tryHref}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-[var(--df-radius-btn)] bg-[var(--df-primary)] px-6 py-3.5 text-sm font-bold text-[var(--df-on-primary)] transition-colors hover:bg-[var(--df-primary-hover)] md:text-base"
    >
      {label}
      <span aria-hidden>↗</span>
      <span className="sr-only">（別タブで開きます）</span>
    </a>
  )
}

function StepImage({ image, alt }: { image: DemoIntroImage; alt: string }) {
  const landscape = image.width > image.height
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--df-bg-card)]"
      style={{ aspectRatio: landscape ? `${image.width} / ${image.height}` : '3 / 4' }}
    >
      <Image
        src={image.src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 340px, 78vw"
        className="object-cover object-top"
      />
    </div>
  )
}

/** /demo/intro/[id] — トップの代表デモから開く紹介ページ */
export function DemoIntroPage({ demo, story, related }: Props) {
  return (
    <article className="bg-[var(--df-bg)] pb-16 text-[var(--df-text)]">
      <div className="mx-auto w-[min(100%-40px,1080px)]">
        <div className="flex items-center justify-between gap-4 py-4 text-xs text-[var(--site-fg-muted)]">
          <Link
            href="/#demos"
            className="font-bold text-[var(--df-primary)] hover:text-[var(--df-primary-hover)]"
          >
            ← 一覧へ
          </Link>
          <span>ideal / {demo.category}</span>
        </div>

        <section
          aria-labelledby="demo-intro-title"
          className="grid items-center gap-8 pt-4 pb-12 md:grid-cols-[1fr_1.05fr] md:gap-12 md:pt-8 md:pb-16"
        >
          <div>
            <p className="text-sm font-bold text-[var(--df-primary)]">{story.eyebrow}</p>
            <h1
              id="demo-intro-title"
              className="mt-3 break-keep text-[clamp(22px,6.2vw,42px)] font-black leading-[1.4] tracking-[-0.01em]"
            >
              <Lines lines={story.title} />
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-[var(--site-fg)]/80 md:text-base">
              {story.intro.map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </p>
            <div className="mt-7">
              <TryButton demo={demo} label={story.cta} />
            </div>
            <dl className="mt-8 hidden grid-cols-3 border-y md:grid border-[var(--site-border)] py-4 text-center">
              {story.meta.map(([label, value]) => (
                <div key={label} className="px-2">
                  <dt className="text-[11px] text-[var(--site-fg-muted)]">{label}</dt>
                  <dd className="mt-1 text-sm font-bold leading-snug">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--site-border)] bg-[var(--df-bg-card)] shadow-[0_18px_40px_rgba(26,58,140,0.12)]">
            <Image
              src={story.heroImage.src}
              alt=""
              width={story.heroImage.width}
              height={story.heroImage.height}
              sizes="(min-width: 768px) 540px, 100vw"
              priority
              className="h-auto w-full"
            />
          </div>
        </section>
      </div>

      <section aria-labelledby="demo-intro-preview" className="bg-[var(--df-bg-blue)] py-12 md:py-16">
        <div className="mx-auto w-[min(100%-40px,1080px)]">
          <h2 id="demo-intro-preview" className={sectionTitle}>
            {story.previewTitle}
          </h2>
        </div>
        <ol className="mx-auto mt-6 flex w-full snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 md:grid md:w-[min(100%-40px,1080px)] md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {story.steps.map((step, index) => (
            <li
              key={step.headline}
              className="flex shrink-0 basis-[78%] snap-start flex-col gap-3 rounded-2xl bg-[var(--df-bg)] p-4 md:basis-auto"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--df-primary)] text-sm font-bold text-[var(--df-on-primary)]"
                >
                  {index + 1}
                </span>
                <h3 className="break-keep text-base font-bold leading-snug md:text-lg">
                  {step.headline}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[var(--site-fg)]/75">{step.subtitle}</p>
              <div className="mt-auto">
                <StepImage image={step.image} alt={step.alt} />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="mx-auto w-[min(100%-40px,1080px)]">
        <section aria-labelledby="demo-intro-changes" className="py-12 md:py-16">
          <h2 id="demo-intro-changes" className={sectionTitle}>
            このツールで変わること
          </h2>
          <ul className="mt-6 space-y-3">
            {story.changes.map(([before, after]) => (
              <li
                key={before}
                className="grid gap-2 rounded-2xl border border-[var(--site-border)] p-4 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:p-5"
              >
                <p className="text-sm text-[var(--site-fg-muted)]">{before}</p>
                <span aria-hidden className="text-[var(--df-primary)] md:text-lg">
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </span>
                <p className="font-bold text-[var(--df-text)]">{after}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="demo-intro-conditions"
          className="border-t border-[var(--site-border)] py-12 md:py-16"
        >
          <h2 id="demo-intro-conditions" className={sectionTitle}>
            体験について
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--site-fg)]/80 md:text-base">
            {story.conditionSummary.join('')}
          </p>
          <details className="group mt-6 rounded-2xl border border-[var(--site-border)] bg-[var(--df-bg-card)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-bold md:p-5 [&::-webkit-details-marker]:hidden">
              {story.conditionTitle}
              <span aria-hidden className="text-[var(--df-primary)] transition-transform group-open:rotate-45">
                ＋
              </span>
            </summary>
            <ul className="list-disc space-y-2 px-8 pb-5 text-sm leading-relaxed text-[var(--site-fg)]/80 md:px-10">
              {story.conditions.map((condition) => (
                <li key={condition}>{condition}</li>
              ))}
            </ul>
          </details>
        </section>

        <section
          aria-labelledby="demo-intro-closing"
          className="rounded-3xl bg-[var(--df-bg-blue)] px-6 py-10 text-center md:py-14"
        >
          <h2 id="demo-intro-closing" className={sectionTitle}>
            {story.closingTitle}
          </h2>
          <p className="mt-3 text-sm text-[var(--site-fg)]/80 md:text-base">{story.closing}</p>
          <div className="mt-6">
            <TryButton demo={demo} label={story.cta} />
          </div>
        </section>

        {related.length ? (
          <nav aria-labelledby="demo-intro-related" className="pt-12 md:pt-16">
            <h2 id="demo-intro-related" className={sectionTitle}>
              関連するデモも見る
            </h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.id}>
                  <Link
                    href={demoIntroHref(item.id)}
                    className="flex h-full items-center justify-between gap-4 rounded-2xl border border-[var(--site-border)] p-4 transition-colors hover:border-[var(--df-primary)]"
                  >
                    <span>
                      <span className="block text-sm font-bold leading-snug">{item.plain}</span>
                      <span className="mt-1 block text-xs text-[var(--site-fg-muted)]">
                        {item.category}
                      </span>
                    </span>
                    <span aria-hidden className="text-[var(--df-primary)]">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </article>
  )
}

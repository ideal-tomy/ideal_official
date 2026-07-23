import Link from 'next/link'
import type { NewsItem } from '@/data/news/items'
import { GALLERY_BASE } from '@/data/ai-capability-gallery/capabilities'
import { SectionKicker } from './SectionKicker'

type Props = {
  items: NewsItem[]
}

export function DemoFirstNews({ items }: Props) {
  if (items.length === 0) return null

  return (
    <section
      id="news"
      className="bg-[var(--df-bg-blue)] py-[clamp(32px,6vw,48px)] md:py-16"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <SectionKicker index="05" label="News" />
        <h2 className="my-2 mb-8 text-[clamp(22px,4.8vw,32px)] font-black leading-[1.5] text-[var(--df-text)]">
          お知らせ
        </h2>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-wrap items-baseline gap-3.5 border-b border-[var(--df-bg-blue-2)] py-3.5 text-[14.5px] last:border-b-0"
            >
              <time className="shrink-0 text-[12.5px] text-[var(--df-text-muted)]">
                {item.date}
              </time>
              {item.isNew && (
                <span className="rounded-full bg-[var(--df-primary)] px-2.5 py-0.5 text-xs font-bold text-white">
                  NEW
                </span>
              )}
              <Link
                href={item.href}
                className="font-medium text-[var(--df-text)] transition-colors hover:text-[var(--df-primary)]"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <Link
            href={GALLERY_BASE}
            className="text-sm font-bold text-[var(--df-primary)] hover:underline"
          >
            デモ一覧を見る →
          </Link>
        </div>
      </div>
    </section>
  )
}

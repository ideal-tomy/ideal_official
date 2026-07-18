import Link from 'next/link'
import type { NewsItem } from '@/data/news/items'

type Props = {
  items: NewsItem[]
}

export function DemoFirstNews({ items }: Props) {
  if (items.length === 0) return null

  return (
    <section id="news" className="bg-[var(--df-bg)] py-[var(--df-sec-pad)]">
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <p className="hidden text-sm font-bold uppercase tracking-[0.12em] text-[var(--df-primary)] md:block">
          News
        </p>
        <h2 className="my-2 mb-10 text-[clamp(26px,5.6vw,40px)] font-black leading-[1.5] text-[var(--df-text)]">
          お知らせ
        </h2>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-wrap items-baseline gap-3.5 border-b border-[var(--df-bg-blue-2)] py-4 text-[14.5px] last:border-b-0"
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
      </div>
    </section>
  )
}

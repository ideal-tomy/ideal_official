'use client'

import Link from 'next/link'
import { Accordion } from '@/components/ui/Accordion'
import { techDetailItems, whatWeBuild } from '@/data/services/ai-hub'

export function AiHubTechDetails() {
  return (
    <section className="bg-black py-16 lg:py-20 border-b border-blue-400/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            依頼できること / 技術詳細
          </h2>
          <p className="text-base text-gray-300">
            まずはデモで変化を共有し、必要なら技術の詳細を確認してください。
          </p>
        </header>

        <ul className="mb-10 space-y-2">
          {whatWeBuild.map((item) => (
            <li
              key={item}
              className="flex items-start text-sm text-gray-300"
            >
              <span className="mt-1.5 mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              {item}
            </li>
          ))}
        </ul>

        <Accordion
          variant="card"
          allowMultiple
          items={techDetailItems.map((item) => ({
            id: item.id,
            title: item.title,
            content: (
              <p className="text-sm text-gray-300 leading-relaxed">{item.summary}</p>
            ),
          }))}
        />

        <p className="mt-8 text-center text-sm text-gray-400">
          比較・導入理由・働き方などの解説は{' '}
          <Link
            href="/lab/insights"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            LAB Insights
          </Link>
          へ。
        </p>
      </div>
    </section>
  )
}

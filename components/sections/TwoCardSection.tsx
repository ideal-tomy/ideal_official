/**
 * TwoCardSection - 2カラムセクション（DAO vs サービス）
 * 会社の2つの核を明確に紹介するセクション
 */

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { colors } from '../../lib/design-tokens'

interface TwoCardData {
  id: string
  title: string
  description: string
  image: string
  link: string
  linkText: string
}

const twoCardData: TwoCardData[] = [
  {
    id: 'dao-research',
    title: 'DAO研究・取り組み',
    description: '分散型自律組織（DAO）の研究と実装を通じて、新しい組織形態の可能性を探求しています。透明性、自律性、協調性を重視した次世代の組織運営を目指します。',
    image: '/images/test02.jpg',
    link: '/philosophy',
    linkText: 'DAO研究・取り組みへ&gt;&gt;'
  },
  {
    id: 'it-services',
    title: 'ITサービス提供',
    description: 'AI、Web開発、ブロックチェーン、アプリ開発など、最新技術を活用した包括的なITソリューションを提供しています。お客様のビジネス成長を技術でサポートします。',
    image: '/images/test02.jpg',
    link: '/services',
    linkText: 'ITサービス一覧へ&gt;&gt;'
  }
]

const TwoCardSection = React.memo(() => {
  return (
    <section className="py-16 md:py-24 bg-[var(--site-bg-elevated)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--site-fg)] mb-4">
            私たちの取り組み
          </h2>
          <p className="text-lg text-[var(--site-fg-muted)] max-w-3xl mx-auto">
            理想合同会社は、DAO研究・取り組みとITサービス提供の2つの核を通じて、
            テクノロジーで自由と秩序が両立した未来を創造します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {twoCardData.map((card) => (
            <div
              key={card.id}
              className="bg-[var(--site-bg-elevated)] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-96"
            >
              {/* 画像部分（上半分） */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-[var(--site-bg)] bg-opacity-20" />
              </div>

              {/* コンテンツ部分（下半分） */}
              <div className="p-6 h-48 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[var(--site-fg)] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[var(--site-fg-muted)] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* CTAリンク */}
                <div className="mt-4">
                  <Link
                    href={card.link}
                    className={`inline-flex items-center text-sm font-medium ${colors.accent.primary} ${colors.accent.bgHover} transition-colors duration-200`}
                  >
                    {card.linkText}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

TwoCardSection.displayName = 'TwoCardSection'

export default TwoCardSection

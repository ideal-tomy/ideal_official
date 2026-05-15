/**
 * ServiceGridSection - サービス紹介グリッドセクション
 * 具体的なサービス内容を視覚的に紹介するセクション
 */

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { colors } from '../../lib/design-tokens'

interface ServiceData {
  id: string
  title: string
  description: string
  image: string
  link: string
  linkText: string
}

const serviceData: ServiceData[] = [
  {
    id: 'ai-consulting',
    title: 'AIコンサルティング',
    description: '人工知能技術を活用したビジネスソリューションの企画・設計・実装をサポートします。',
    image: '/images/test01.jpg',
    link: '/services/ai-consulting',
    linkText: 'AIコンサルティング詳細へ&gt;&gt;'
  },
  {
    id: 'web-development',
    title: 'Web開発',
    description: 'モダンなWebアプリケーションの開発から保守まで、包括的なWebソリューションを提供します。',
    image: '/images/test01.jpg',
    link: '/services/web-development',
    linkText: 'Web開発詳細へ&gt;&gt;'
  },
  {
    id: 'blockchain-development',
    title: 'ブロックチェーン開発',
    description: 'ブロックチェーン技術を活用した分散型アプリケーション（DApp）の開発とコンサルティングを行います。',
    image: '/images/test01.jpg',
    link: '/services/blockchain-development',
    linkText: 'ブロックチェーン開発詳細へ&gt;&gt;'
  },
  {
    id: 'app-development',
    title: 'アプリ開発',
    description: 'iOS・Android向けのネイティブアプリからクロスプラットフォームアプリまで、幅広いアプリ開発に対応します。',
    image: '/images/test01.jpg',
    link: '/services/app-development',
    linkText: 'アプリ開発詳細へ&gt;&gt;'
  }
]

const ServiceGridSection = React.memo(() => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            提供サービス
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            最新技術を活用した包括的なITソリューションで、
            お客様のビジネス成長をサポートします。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* 画像部分（上半分） */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20" />
              </div>

              {/* コンテンツ部分（下半分） */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* CTAリンク */}
                <Link
                  href={service.link}
                  className={`inline-flex items-center text-sm font-medium ${colors.accent.primary} ${colors.accent.bgHover} transition-colors duration-200`}
                >
                  {service.linkText}
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
          ))}
        </div>

        {/* 全サービス一覧へのリンク */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className={`inline-flex items-center px-6 py-3 ${colors.accent.bg} text-white font-medium rounded-lg ${colors.accent.bgHover} transition-colors duration-200`}
          >
            全サービス一覧を見る
            <svg
              className="ml-2 w-5 h-5"
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
    </section>
  )
})

ServiceGridSection.displayName = 'ServiceGridSection'

export default ServiceGridSection

/**
 * ServicesOverview セクション
 * 
 * トップページに表示する5つのサービス概要
 * 将来的に各サービスの個別ページへリンク
 */

import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import { typography, colors } from '../../lib/design-tokens'

// サービスデータ（将来的にCMSから取得可能）
const services = [
  {
    id: 'web-development',
    title: 'Webサイト制作',
    description:
      '高級感あふれるデザインと、最先端の技術で、あなたのビジネスを次のレベルへ。',
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 'app-development',
    title: 'アプリ開発',
    description:
      'iOS、Android、Web。すべてのプラットフォームで、最高のユーザー体験を提供します。',
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 'game-development',
    title: 'ゲーム制作',
    description:
      '没入感のある世界観と、革新的なゲームプレイ。あなたの夢のゲームを実現します。',
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    id: 'ai-consulting',
    title: 'AIコンサル',
    description:
      '最新のAI技術を活用し、ビジネスの効率化と競争力強化を実現します。',
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: 'blockchain-development',
    title: 'ブロックチェーン開発',
    description:
      '分散型アプリケーション（DApps）やスマートコントラクトの設計・開発を支援します。',
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
]

export function ServicesOverview() {
  return (
    <Section backgroundColor="black">
      {/* セクション見出し */}
      <div className="text-center mb-16">
        <h2 className={`${typography.h2} ${colors.text.primary} mb-4`}>
          私たちのサービス
        </h2>
        <p className={`${typography.body} ${colors.text.muted} max-w-2xl mx-auto`}>
          5つの事業分野で、最高のソリューションを提供します
        </p>
      </div>

      {/* サービスカードグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            href="/services"
          />
        ))}
      </div>
    </Section>
  )
}


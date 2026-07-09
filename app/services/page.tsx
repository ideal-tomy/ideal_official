/**
 * サービスページ
 */

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '../../components/ui/Section'
import { HeroSection } from '../../components/sections/HeroSection'
import { ServiceNavigation } from '../../components/sections/ServiceNavigation'
import CallToAction from '../../components/sections/CallToAction'
import { typography, colors } from '../../lib/design-tokens'
import { serviceNavLinks, labNavLinks } from '../../data/services/service-links'

const servicesDescription =
  'Webサイト・LP制作、Webアプリ・業務ツール開発、AIプロトタイプ・自動化。スタートアップの技術支援とコンサル会社の実装パートナーとして伴走します。'

export const metadata: Metadata = {
  title: 'サービス | ideal',
  description: servicesDescription,
  openGraph: {
    title: 'サービス | ideal',
    description: servicesDescription,
  },
}

const services = [
  {
    id: 'web-development',
    title: 'Webサイト・LP制作',
    description:
      'コーポレートサイト、サービスLP、新規事業サイトまで。構成・UI・モーション・実装まで一貫して伴走します。',
    image: '/images/sv_web.png',
    features: [
      'コーポレートサイト・サービスLP',
      'レスポンシブ・SEO・パフォーマンス最適化',
      'モーダル・モーションなど体験型UI',
      'CMS導入・コンテンツ更新のしやすさ',
      '業務効率化Webアプリケーション',
    ],
  },
  {
    id: 'app-development',
    title: 'Webアプリ・業務ツール開発',
    description:
      'Excel、紙、LINE、手作業で行う業務を、使いやすいWebツールに。入力→処理→結果の流れを体験しながら相談できます。',
    image: '/images/sv_app.png',
    features: [
      '業務Web・管理画面・現場入力ツール',
      'PWA・SPA・社内ツール',
      '既存業務フローのデジタル化',
      'プロトタイプから本番運用まで',
      'AI機能の組み込み（必要に応じて）',
    ],
  },
  {
    id: 'ai-consulting',
    title: 'AIプロトタイプ・自動化',
    description:
      '「AIでできないか」を、まず動くデモから検証。7つの業務変化パターンから自社に近いものを選べます。',
    image: '/images/top_ai.png',
    features: [
      'AI Capability Demo Gallery',
      '業務フローへの組み込み・効率化',
      'プロトタイプ検証から実装まで',
      '自然言語処理・データ活用',
      '業界別事例との接続',
    ],
  },
]

const labTeaserLinks = labNavLinks.filter((l) =>
  ['/lab', '/lab/insights', '/lab/blockchain', '/lab/metaverse'].includes(l.href),
)

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="社内にIT部門がなくても、 事業に必要な仕組みはつくれる。"
        subText="課題整理から、Web・AI・業務ツールの開発、外部業者との調整まで。
外部IT部門として、事業と技術の間をつなぎます。"
      />

      <ServiceNavigation serviceLinks={serviceNavLinks} currentServiceId="" />

      {services.map((service, index) => (
        <div key={service.id}>
          {index > 0 && <div className="border-b border-brand" />}

          <Section backgroundColor="black" className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-20"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="relative z-10 p-8 md:p-12">
                    <h2 className={`${typography.h2} ${colors.text.primary} mb-4`}>
                      {service.title}
                    </h2>
                    <p className={`${typography.body} ${colors.text.muted} mb-8`}>
                      {service.description}
                    </p>

                    <Link
                      href={`/services/${service.id}`}
                      className="inline-block text-brand hover:text-brand-hover font-medium text-lg transition-colors duration-200"
                    >
                      {service.title}の詳細へ →
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`text-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="inline-block text-left">
                  <h3 className={`${typography.h4} ${colors.text.primary} mb-6`}>
                    主な内容
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-brand flex-shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className={`${typography.body} ${colors.text.secondary}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      ))}

      <Section backgroundColor="black" className="py-16 md:py-20 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand/90 mb-3">
            LAB
          </p>
          <h2 className={`${typography.h3} ${colors.text.primary} mb-4`}>
            深い技術・研究は LAB へ
          </h2>
          <p className={`${typography.body} ${colors.text.muted} mb-8`}>
            Blockchain / DAO、Spatial / VR・AR、Insights など、依頼の主力サービスではなく研究・実験の領域としてまとめています。
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {labTeaserLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block px-4 py-2 rounded-lg border border-gray-700 text-sm text-gray-300 hover:border-brand/40 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CallToAction />
    </>
  )
}

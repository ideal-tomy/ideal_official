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
import { serviceNavLinks } from '../../data/services/service-links'

export const metadata: Metadata = {
  title: 'サービス | ideal',
  description:
    'Webサイト制作、アプリ開発、AI導入、ブロックチェーン・DAO、メタバース空間構築。スタートアップの技術支援とコンサル会社の実装パートナーとして伴走します。',
  openGraph: {
    title: 'サービス | ideal',
    description:
      'Webサイト制作、アプリ開発、AI導入、ブロックチェーン・DAO、メタバース空間構築。スタートアップの技術支援とコンサル会社の実装パートナーとして伴走します。',
  },
}

const services = [
  {
    id: 'web-development',
    title: 'Webサイト制作',
    description:
      'コーポレートサイト、EC、業務Webアプリまで。Next.jsを中心としたモダンな開発で、ビジネス成長に合わせたWeb資産を構築します。',
    image: '/images/sv_web.png',
    features: [
      'レスポンシブデザイン（スマホ・タブレット・PC対応）',
      'SEO最適化（検索エンジン上位表示）',
      'パフォーマンス最適化（高速表示）',
      'CMS導入（簡単コンテンツ更新）',
      '業務効率化Webアプリケーション',
    ],
  },
  {
    id: 'app-development',
    title: 'アプリ開発',
    description:
      'iOS・Androidネイティブ、クロスプラットフォーム、PWA、スマホゲームまで。ユーザー体験を重視したアプリを企画からリリースまで支援します。',
    image: '/images/sv_app.png',
    features: [
      'ネイティブアプリ開発（iOS / Android）',
      'クロスプラットフォーム開発（React Native / Flutter）',
      'Webアプリ開発（PWA対応）',
      '2D/3Dゲーム開発（Unity / Unreal Engine）',
      'モバイルゲーム開発',
    ],
  },
  {
    id: 'ai-consulting',
    title: 'AI',
    description:
      'AI導入コンサル、業務自動化、データ分析から実装まで。スタートアップやコンサル会社のAI活用を技術面からサポートします。',
    image: '/images/test01.png',
    features: [
      'AI導入コンサルティング',
      '業務効率化・自動化',
      '自然言語処理（NLP）',
      'AI機能のプロダクト組み込み',
      'データ分析・可視化',
    ],
  },
  {
    id: 'blockchain-development',
    title: 'ブロックチェーン・DAO',
    description:
      'トークン発行、スマートコントラクト、DApp、NFT、DAOガバナンス設計、DAO法に基づく組織ルールメイクまで一貫して支援します。',
    image: '/images/sv_bc.png',
    features: [
      'トークン発行・トークノミクス設計',
      'スマートコントラクト開発',
      'DApps開発（Ethereum / Solana 等）',
      'DAO・ガバナンス設計',
      'DAO法に基づくルールメイク',
    ],
  },
  {
    id: 'metaverse',
    title: 'メタバース・空間構築',
    description:
      '3D・VR・AR・アバターを中心とした仮想空間の設計・構築。ブロックチェーンやAI連携が必要な場合は別途ご相談ください。',
    image: '/images/sv_meta.png',
    features: [
      '3D空間・バーチャル空間構築',
      'VR/ARアプリケーション開発',
      'アバター・キャラクター制作',
      '仮想イベント・展示会企画',
      '没入型デジタル体験の設計',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="開発・AI・専門領域"
        subText="Web・アプリからAI導入まで。スタートアップの技術支援とコンサル会社の実装パートナーとして伴走します。"
      />

      <ServiceNavigation serviceLinks={serviceNavLinks} currentServiceId="" />

      {services.map((service, index) => (
        <div key={service.id}>
          {index > 0 && <div className="border-b border-blue-400" />}

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
                      className="inline-block text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-colors duration-200"
                    >
                      {service.title}ページへ →
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`text-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="inline-block text-left">
                  <h3 className={`${typography.h4} ${colors.text.primary} mb-6`}>
                    主な機能・サービス
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1"
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

      <CallToAction />
    </>
  )
}

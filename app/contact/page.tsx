/**
 * 問い合わせページ
 *
 * サーバーコンポーネント（page.tsx）
 * クライアントコンポーネント（ContactForm）を配置
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { PageHero } from '@/components/sections/PageHero'
import { ContactFormWrapper } from '@/components/forms/ContactFormWrapper'
import { typography, colors } from '@/lib/design-tokens'

export const metadata: Metadata = {
  title: 'お問い合わせ | ideal',
  description:
    'Webサイト・LP制作、Webアプリ・業務ツール開発、AIプロトタイプ・自動化に関するお問い合わせはこちらから。お気軽にご連絡ください。',
  openGraph: {
    title: 'お問い合わせ | ideal',
    description:
      'Webサイト・LP制作、Webアプリ・業務ツール開発、AIプロトタイプ・自動化に関するお問い合わせはこちらから。お気軽にご連絡ください。',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="お問い合わせ"
        description="ご相談・お見積もりなど、お気軽にご連絡ください。金額感を先に知りたい方は自動見積もりもご利用いただけます。"
      />

      <Section backgroundColor="black" containerSize="narrow">
        <p className={`mb-8 text-center ${typography.body} ${colors.text.muted}`}>
          金額感を先に知りたい方は、
          <Link
            href="/estimate"
            className="font-medium text-brand hover:text-brand-hover transition-colors"
          >
            自動見積もり
          </Link>
          もご利用ください。
        </p>

        <div className="bg-[var(--site-bg-elevated)] border border-[var(--site-border)] rounded-lg p-8 lg:p-12">
          <ContactFormWrapper />
        </div>

        <div className="mt-12 text-center">
          <p className={`${typography.small} ${colors.text.muted}`}>
            通常、1〜2営業日以内にご返信いたします。
          </p>
        </div>
      </Section>
    </>
  )
}

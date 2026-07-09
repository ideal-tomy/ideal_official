/**
 * 問い合わせページ
 * 
 * サーバーコンポーネント（page.tsx）
 * クライアントコンポーネント（ContactForm）を配置
 */

import { Metadata } from 'next'
import { Section } from '../../components/ui/Section'
import { HeroSection } from '../../components/sections/HeroSection'
import { ContactFormWrapper } from '../../components/forms/ContactFormWrapper'
import { typography, colors } from '../../lib/design-tokens'

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
      {/* ページヘッダー */}
      <HeroSection
        title="お問い合わせ"
        subText="プロジェクトのご相談、お見積もり、その他ご質問など、お気軽にお問い合わせください。"
      />

      {/* フォームセクション */}
      <Section backgroundColor="black" containerSize="narrow">
        <div className="bg-black border border-gray-700 rounded-lg p-8 lg:p-12">
          <ContactFormWrapper />
        </div>

        {/* 補足情報 */}
        <div className="mt-12 text-center">
          <p className={`${typography.small} ${colors.text.muted}`}>
            * は必須項目です
            <br />
            通常、1〜2営業日以内にご返信いたします。
          </p>
        </div>
      </Section>

      {/* その他の連絡方法（将来用） */}
      <Section backgroundColor="black" size="small">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className={`${typography.h3} ${colors.text.primary} mb-8`}>
            その他の連絡方法
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">📧</div>
              <h3 className={`${typography.h4} ${colors.text.primary} mb-2`}>
                メール
              </h3>
              <p className={`${typography.small} ${colors.text.muted}`}>
                info@ideal.example.com
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">📞</div>
              <h3 className={`${typography.h4} ${colors.text.primary} mb-2`}>
                電話
              </h3>
              <p className={`${typography.small} ${colors.text.muted}`}>
                03-XXXX-XXXX
                <br />
                （平日 10:00〜18:00）
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">📍</div>
              <h3 className={`${typography.h4} ${colors.text.primary} mb-2`}>
                所在地
              </h3>
              <p className={`${typography.small} ${colors.text.muted}`}>
                東京都XX区XX
                <br />
                （詳細は会社情報ページへ）
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}


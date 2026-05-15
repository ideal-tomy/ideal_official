/**
 * CallToAction セクション
 */

import Link from 'next/link'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'
import { typography, colors } from '../../lib/design-tokens'
import { getAiChatContactUrl } from '../../lib/ai-chat'

export default function CallToAction() {
  return (
    <Section backgroundColor="black">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
          プロジェクトを始めませんか？
        </h2>

        <p className={`${typography.bodyLarge} ${colors.text.muted} mb-12`}>
          要件がまとまっていなくても、AIコンシェルジュまたはお問い合わせからご相談いただけます。
          <br className="hidden sm:block" />
          人が内容を確認のうえフォローいたします。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={getAiChatContactUrl()}>
            <Button variant="primary" size="lg">
              AIコンシェルジュに相談する
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              お問い合わせ
            </Button>
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
          <span>Next.js</span>
          <span>React Native</span>
          <span>Unity</span>
          <span>AI / LLM</span>
          <span>ブロックチェーン</span>
        </div>
      </div>
    </Section>
  )
}

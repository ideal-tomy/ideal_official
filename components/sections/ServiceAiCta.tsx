import Link from 'next/link'
import { Button } from '../ui/Button'
import { colors, typography } from '../../lib/design-tokens'
import { getAiChatContactUrl } from '../../lib/ai-chat'
import { getServiceLabel } from '../../data/services/service-links'

interface ServiceAiCtaProps {
  serviceId: string
  className?: string
}

export function ServiceAiCta({ serviceId, className = '' }: ServiceAiCtaProps) {
  const serviceLabel = getServiceLabel(serviceId)

  return (
    <div className={`border-b border-blue-400 bg-black ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className={`${typography.h3} ${colors.text.primary} mb-3`}>
          AIコンシェルジュに相談する
        </h2>
        <p className={`${typography.body} ${colors.text.muted} mb-8 max-w-2xl mx-auto`}>
          要件がまとまっていなくても大丈夫です。AIが整理した内容はお問い合わせに引き継げます。
          <span className="block mt-2 text-sm text-gray-500">
            （AIチャット機能は近日公開予定。現在はお問い合わせフォームへご案内します）
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={getAiChatContactUrl(serviceId)}>
            <Button variant="primary" size="lg">
              AIコンシェルジュに相談する
            </Button>
          </Link>
          <Link href={`/contact?service=${serviceId}`}>
            <Button variant="secondary" size="lg">
              {serviceLabel}のお問い合わせ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

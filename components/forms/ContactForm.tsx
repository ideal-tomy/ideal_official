'use client'

/**
 * ContactForm コンポーネント
 *
 * 問い合わせフォーム（クライアントコンポーネント）
 * react-hook-form + zod でバリデーション
 * 送信先: POST /api/contact（CONTACT_WEBHOOK_URL 必須）
 */

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '../ui/Button'
import { colors, borders, typography } from '../../lib/design-tokens'
import { getServiceLabel } from '../../data/services/service-links'
import {
  takeContactPrefillFromSession,
  clearStagedConciergePrefill,
} from '@/lib/concierge/contact-prefill'

const contactSchema = z.object({
  name: z
    .string()
    .min(1, '名前を入力してください')
    .min(2, '名前は2文字以上で入力してください'),
  email: z
    .string()
    .min(1, 'メールアドレスを入力してください')
    .email('有効なメールアドレスを入力してください'),
  company: z.string().optional(),
  message: z
    .string()
    .min(1, 'メッセージを入力してください')
    .min(10, 'メッセージは10文字以上で入力してください'),
})

type ContactFormData = z.infer<typeof contactSchema>

function buildDefaultMessage(
  intent: string | null,
  serviceId: string | null,
  caseSlug: string | null,
  demoSlug: string | null,
): string {
  const lines: string[] = []
  if (intent === 'ai-chat') {
    lines.push('【AIコンシェルジュ経由のご相談】')
  }
  if (intent === 'concierge') {
    lines.push('【コンシェルジュ（選択内容を整理）経由のご相談】')
  }
  if (intent === 'gallery') {
    lines.push('【デモ一覧経由のご相談】')
    if (demoSlug) {
      lines.push(`【デモ】${demoSlug}`)
    }
  }
  if (intent === 'cases') {
    lines.push('【活用イメージページ経由のご相談】')
    if (caseSlug) {
      lines.push(`【活用イメージ】${caseSlug}`)
    }
  }
  if (serviceId) {
    lines.push(`【相談種別】${getServiceLabel(serviceId)}`)
  }
  if (lines.length === 0) {
    return ''
  }
  lines.push('')
  lines.push('ご相談内容：')
  return lines.join('\n')
}

export function ContactForm() {
  const searchParams = useSearchParams()
  const intent = searchParams.get('intent')
  const serviceId = searchParams.get('service')
  const caseSlug = searchParams.get('case')
  const demoSlug = searchParams.get('demo')
  const prefillParam = searchParams.get('prefill')

  const defaultMessage = useMemo(
    () => buildDefaultMessage(intent, serviceId, caseSlug, demoSlug),
    [intent, serviceId, caseSlug, demoSlug],
  )

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  })

  useEffect(() => {
    if (prefillParam !== 'session') {
      clearStagedConciergePrefill()
    }

    let message = ''
    if (prefillParam === 'session') {
      message = takeContactPrefillFromSession()?.messageDraft ?? ''
    } else if (prefillParam && prefillParam !== 'session') {
      try {
        message = decodeURIComponent(prefillParam)
      } catch {
        message = prefillParam
      }
    }

    if (!message) {
      message = defaultMessage
    }

    if (message) {
      setValue('message', message, { shouldValidate: true })
    }
  }, [prefillParam, intent, serviceId, caseSlug, demoSlug, defaultMessage, setValue])

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          company: data.company || undefined,
          intent,
          service: serviceId,
          caseSlug,
        }),
      })

      const payload = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null

      if (!res.ok || !payload?.ok) {
        setSubmitStatus('error')
        setSubmitError(
          payload?.error ??
            '送信に失敗しました。しばらくしてから再度お試しください。',
        )
        return
      }

      setSubmitStatus('success')
      clearStagedConciergePrefill()
      reset({
        name: '',
        email: '',
        company: '',
        message: '',
      })
    } catch (error) {
      console.error('送信エラー:', error)
      setSubmitStatus('error')
      setSubmitError('送信に失敗しました。しばらくしてから再度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  const showContextBanner =
    intent === 'ai-chat' ||
    intent === 'concierge' ||
    intent === 'gallery' ||
    intent === 'cases' ||
    Boolean(serviceId)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {showContextBanner && (
        <div className="p-4 bg-brand-deep/30 border border-brand/50 rounded-lg text-sm text-[var(--site-fg-muted)]">
          {intent === 'ai-chat' && (
            <p>AIコンシェルジュからのお問い合わせです。</p>
          )}
          {intent === 'concierge' && (
            <p>
              コンシェルジュで選んだ内容を、下記メッセージに反映しています（対話型
              AI チャットは未接続の MVP です）。
            </p>
          )}
          {intent === 'gallery' && (
            <p>
              デモ一覧からのお問い合わせです
              {demoSlug ? `（${demoSlug}）` : ''}。
            </p>
          )}
          {intent === 'cases' && (
            <p>
              活用イメージページからのお問い合わせです
              {caseSlug ? `（${caseSlug}）` : ''}。
            </p>
          )}
          {serviceId && <p>相談種別: {getServiceLabel(serviceId)}</p>}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className={`block ${typography.body} ${colors.text.primary} mb-2`}
        >
          お名前 <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className={`
            w-full
            bg-[var(--site-bg-elevated)] ${colors.text.primary}
            ${borders.border} ${borders.rounded}
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-brand
            placeholder:text-[var(--site-fg-muted)]
            ${errors.name ? 'border-red-400' : ''}
          `}
          placeholder="山田 太郎"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p
            id="name-error"
            className="mt-2 text-sm text-red-400"
            role="alert"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className={`block ${typography.body} ${colors.text.primary} mb-2`}
        >
          メールアドレス <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`
            w-full
            bg-[var(--site-bg-elevated)] ${colors.text.primary}
            ${borders.border} ${borders.rounded}
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-brand
            placeholder:text-[var(--site-fg-muted)]
            ${errors.email ? 'border-red-400' : ''}
          `}
          placeholder="example@example.com"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p
            id="email-error"
            className="mt-2 text-sm text-red-400"
            role="alert"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="company"
          className={`block ${typography.body} ${colors.text.primary} mb-2`}
        >
          会社名（任意）
        </label>
        <input
          id="company"
          type="text"
          {...register('company')}
          className={`
            w-full
            bg-[var(--site-bg-elevated)] ${colors.text.primary}
            ${borders.border} ${borders.rounded}
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-brand
            placeholder:text-[var(--site-fg-muted)]
          `}
          placeholder="株式会社ideal"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className={`block ${typography.body} ${colors.text.primary} mb-2`}
        >
          メッセージ <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message')}
          className={`
            w-full
            bg-[var(--site-bg-elevated)] ${colors.text.primary}
            ${borders.border} ${borders.rounded}
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-brand
            placeholder:text-[var(--site-fg-muted)]
            resize-vertical
            ${errors.message ? 'border-red-400' : ''}
          `}
          placeholder="お問い合わせ内容をご記入ください"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-2 text-sm text-red-400"
            role="alert"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? '送信中...' : '送信する'}
        </Button>
      </div>

      {submitStatus === 'success' && (
        <div
          className="p-4 bg-green-900/50 border border-green-400 rounded-lg"
          role="alert"
        >
          <p className="text-green-400">
            ✓ お問い合わせありがとうございます。通常、1〜2営業日以内にご返信いたします。
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div
          className="p-4 bg-red-900/50 border border-red-400 rounded-lg"
          role="alert"
        >
          <p className="text-red-400">
            ✗ {submitError ?? '送信に失敗しました。しばらくしてから再度お試しください。'}
          </p>
        </div>
      )}
    </form>
  )
}

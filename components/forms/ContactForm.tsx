'use client'

/**
 * ContactForm コンポーネント
 * 
 * 問い合わせフォーム（クライアントコンポーネント）
 * react-hook-form + zod でバリデーション
 * 
 * 理由: フォーム状態管理、バリデーション、送信処理に useState/useEffect が必要
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

// バリデーションスキーマ
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

function buildDefaultMessage(intent: string | null, serviceId: string | null): string {
  const lines: string[] = []
  if (intent === 'ai-chat') {
    lines.push('【AIコンシェルジュ経由のご相談】')
  }
  if (intent === 'concierge') {
    lines.push('【コンシェルジュ（選択内容を整理）経由のご相談】')
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
  const prefillParam = searchParams.get('prefill')

  const defaultMessage = useMemo(
    () => buildDefaultMessage(intent, serviceId),
    [intent, serviceId]
  )

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
  }, [prefillParam, intent, serviceId, defaultMessage, setValue])

  // フォーム送信処理
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: 実際のAPI呼び出しに置き換える
      // 現在はモックとして2秒待機
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log('フォーム送信データ:', data)

      setSubmitStatus('success')
      clearStagedConciergePrefill()
      reset({
        name: '',
        email: '',
        company: '',
        message: '',
      })

      // 3秒後にメッセージをクリア
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      console.error('送信エラー:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {(intent === 'ai-chat' ||
        intent === 'concierge' ||
        serviceId) && (
        <div className="p-4 bg-brand-deep/30 border border-brand/50 rounded-lg text-sm text-gray-300">
          {intent === 'ai-chat' && (
            <p>AIコンシェルジュからのお問い合わせです。</p>
          )}
          {intent === 'concierge' && (
            <p>
              コンシェルジュで選んだ内容を、下記メッセージに反映しています（対話型
              AI チャットは未接続の MVP です）。
            </p>
          )}
          {serviceId && <p>相談種別: {getServiceLabel(serviceId)}</p>}
        </div>
      )}

      {/* 名前 */}
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
            bg-gray-800 ${colors.text.primary}
            ${borders.border} ${borders.rounded}
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-brand
            placeholder:text-gray-500
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

      {/* メールアドレス */}
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
            bg-gray-800 ${colors.text.primary}
            ${borders.border} ${borders.rounded}
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-brand
            placeholder:text-gray-500
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

      {/* 会社名 */}
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
            bg-gray-800 ${colors.text.primary}
            ${borders.border} ${borders.rounded}
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-brand
            placeholder:text-gray-500
          `}
          placeholder="株式会社ideal"
        />
      </div>

      {/* メッセージ */}
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
            bg-gray-800 ${colors.text.primary}
            ${borders.border} ${borders.rounded}
            px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-brand
            placeholder:text-gray-500
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

      {/* 送信ボタン */}
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

      {/* 送信ステータスメッセージ */}
      {submitStatus === 'success' && (
        <div
          className="p-4 bg-green-900/50 border border-green-400 rounded-lg"
          role="alert"
        >
          <p className="text-green-400">
            ✓ お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div
          className="p-4 bg-red-900/50 border border-red-400 rounded-lg"
          role="alert"
        >
          <p className="text-red-400">
            ✗ 送信に失敗しました。しばらくしてから再度お試しください。
          </p>
        </div>
      )}
    </form>
  )
}


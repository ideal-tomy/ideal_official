'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { typography, colors, borders } from '@/lib/design-tokens'
import { postConciergeChat } from '@/lib/concierge/ai/client'
import type {
  ConciergeAiDraft,
  ConciergeAiQaTurn,
} from '@/lib/concierge/ai/types'
import {
  CONCIERGE_AI_MAX_ANSWER,
  CONCIERGE_AI_MAX_FREE_TEXT,
  CONCIERGE_AI_MAX_QUESTIONS,
} from '@/lib/concierge/ai/types'
import type { FlowAnswer, IdealTrack } from '@/lib/concierge/ideal-flow'
import type { ConciergePageContext } from '@/lib/concierge/page-context'
import { getCapabilityBySlug } from '@/data/ai-capability-gallery/capabilities'

type AiUiPhase = 'free_text' | 'asking' | 'loading'

interface ConciergeAiStepProps {
  track: IdealTrack
  answers: FlowAnswer[]
  pageContext?: ConciergePageContext
  onComplete: (draft: ConciergeAiDraft | null) => void
  onSkipToTemplate: () => void
  onBack: () => void
}

export function ConciergeAiStep({
  track,
  answers,
  pageContext,
  onComplete,
  onSkipToTemplate,
  onBack,
}: ConciergeAiStepProps) {
  const [uiPhase, setUiPhase] = useState<AiUiPhase>('free_text')
  const [freeText, setFreeText] = useState('')
  const [qa, setQa] = useState<ConciergeAiQaTurn[]>([])
  const [assistantMessage, setAssistantMessage] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null)
  const [answerDraft, setAnswerDraft] = useState('')
  const [suggestedDemoSlugs, setSuggestedDemoSlugs] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const runChat = async (userMessage: string, nextQa: ConciergeAiQaTurn[]) => {
    setUiPhase('loading')
    setError(null)

    const res = await postConciergeChat({
      track,
      answers,
      pageContext,
      freeText: freeText.trim() || userMessage,
      qa: nextQa,
      userMessage,
    })

    if (res.action === 'unavailable') {
      setError(res.message)
      setUiPhase(nextQa.length > 0 || freeText.trim() ? 'asking' : 'free_text')
      return
    }

    if (res.suggestedDemoSlugs?.length) {
      setSuggestedDemoSlugs(res.suggestedDemoSlugs)
    }

    if (res.action === 'draft') {
      onComplete({
        ...res.draft,
        freeText: freeText.trim() || userMessage,
        qa: nextQa,
      })
      return
    }

    // ask
    setAssistantMessage(res.assistantMessage)
    setCurrentQuestion(res.question)
    setAnswerDraft('')
    setQa(nextQa)
    setUiPhase('asking')
  }

  const submitFreeText = async () => {
    const text = freeText.trim()
    if (!text) {
      setError('具体的な課題を入力するか、「選択内容だけで進む」を選んでください。')
      return
    }
    await runChat(text, [])
  }

  const submitAnswer = async () => {
    if (!currentQuestion) return
    const text = answerDraft.trim()
    if (!text) {
      setError('回答を入力してください。')
      return
    }
    const nextQa = [
      ...qa,
      { question: currentQuestion, answer: text.slice(0, CONCIERGE_AI_MAX_ANSWER) },
    ]
    if (nextQa.length >= CONCIERGE_AI_MAX_QUESTIONS) {
      // 最後の回答を送って draft を促す
      await runChat(text, nextQa)
      return
    }
    await runChat(text, nextQa)
  }

  const finishWithoutMoreQuestions = () => {
    // 途中で打ち切ってテンプレートへ（自由入力は残す）
    if (freeText.trim()) {
      onComplete({
        challengeSummary: freeText.trim().slice(0, 400),
        directionTitle: 'いただいた内容をもとにした整理',
        directionBody:
          '自由入力の内容を担当が確認します。必要に応じてデモや進め方をご提案します。',
        featureTags: [],
        recommendedApproach: 'お問い合わせ後に詳細ヒアリングへ進みます。',
        relatedDemoSlugs: suggestedDemoSlugs.slice(0, 2),
        freeText: freeText.trim(),
        qa,
      })
      return
    }
    onSkipToTemplate()
  }

  if (uiPhase === 'loading') {
    return (
      <div className="space-y-4 py-6 text-center">
        <p className={`${typography.body} ${colors.text.primary}`}>
          内容を整理しています…
        </p>
        <p className={`${typography.caption} ${colors.text.muted}`}>
          数十秒かかることがあります
        </p>
      </div>
    )
  }

  if (uiPhase === 'asking' && currentQuestion) {
    return (
      <div className="space-y-4">
        {assistantMessage ? (
          <p className={`${typography.small} ${colors.text.secondary}`}>
            {assistantMessage}
          </p>
        ) : null}
        <SuggestedDemos slugs={suggestedDemoSlugs} />
        <div>
          <p className={`${typography.caption} ${colors.text.muted} mb-1`}>
            追加の質問 {qa.length + 1} / {CONCIERGE_AI_MAX_QUESTIONS}
          </p>
          <p className={`${typography.body} ${colors.text.primary} font-medium`}>
            {currentQuestion}
          </p>
        </div>
        <textarea
          value={answerDraft}
          onChange={(e) => setAnswerDraft(e.target.value)}
          rows={4}
          maxLength={CONCIERGE_AI_MAX_ANSWER}
          placeholder="分かる範囲で入力してください"
          className={`
            w-full rounded-lg bg-gray-900/80 px-3 py-2
            ${borders.border} border-brand/40
            ${typography.small} ${colors.text.primary}
            placeholder:text-gray-500
            focus:outline-none focus:ring-2 focus:ring-brand
          `}
        />
        {error ? (
          <p className={`${typography.caption} text-amber-300/90`}>{error}</p>
        ) : null}
        <div className="flex flex-col gap-3">
          <Button type="button" variant="primary" size="lg" fullWidth onClick={submitAnswer}>
            回答して続ける
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="lg"
            fullWidth
            onClick={finishWithoutMoreQuestions}
          >
            ここまでの内容で整理する
          </Button>
          <button
            type="button"
            onClick={onSkipToTemplate}
            className={`text-sm ${colors.text.muted} hover:text-white underline-offset-4 hover:underline`}
          >
            AIなしで結果へ進む
          </button>
        </div>
      </div>
    )
  }

  // free_text
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className={`${typography.body} ${colors.text.primary} font-medium`}>
          具体的に困っていることがあれば教えてください
        </p>
        <p className={`${typography.small} ${colors.text.secondary}`}>
          例: 現場写真を手作業でフォルダ分けしている / 毎日メールを見てExcelに転記している
        </p>
      </div>
      <textarea
        value={freeText}
        onChange={(e) => setFreeText(e.target.value)}
        rows={5}
        maxLength={CONCIERGE_AI_MAX_FREE_TEXT}
        placeholder="自由に入力（任意）"
        className={`
          w-full rounded-lg bg-gray-900/80 px-3 py-2
          ${borders.border} border-brand/40
          ${typography.small} ${colors.text.primary}
          placeholder:text-gray-500
          focus:outline-none focus:ring-2 focus:ring-brand
        `}
      />
      <p className={`${typography.caption} ${colors.text.muted}`}>
        {freeText.length} / {CONCIERGE_AI_MAX_FREE_TEXT}
      </p>
      {error ? (
        <p className={`${typography.caption} text-amber-300/90`}>{error}</p>
      ) : null}
      <div className="flex flex-col gap-3">
        <Button type="button" variant="primary" size="lg" fullWidth onClick={submitFreeText}>
          AIで整理する
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          fullWidth
          onClick={onSkipToTemplate}
        >
          選択内容だけで結果へ進む
        </Button>
        <button
          type="button"
          onClick={onBack}
          className={`text-sm ${colors.text.muted} hover:text-white underline-offset-4 hover:underline`}
        >
          ← 選択に戻る
        </button>
      </div>
    </div>
  )
}

function SuggestedDemos({ slugs }: { slugs: string[] }) {
  if (slugs.length === 0) return null
  const items = slugs
    .map((slug) => getCapabilityBySlug(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
  if (items.length === 0) return null

  return (
    <div
      className={`rounded-md ${borders.border} border-brand/30 bg-gray-900/50 p-3 space-y-2`}
    >
      <p className={`${typography.caption} ${colors.text.muted}`}>関連しそうなデモ</p>
      <ul className="space-y-1.5">
        {items.map((cap) => (
          <li key={cap.slug}>
            <Link
              href={cap.href}
              className={`${typography.small} text-brand-hover hover:text-brand-hover underline-offset-2 hover:underline`}
            >
              {cap.subtitle}
            </Link>
            <span className={`block ${typography.caption} ${colors.text.muted}`}>
              {cap.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

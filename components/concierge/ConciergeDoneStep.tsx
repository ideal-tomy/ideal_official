'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { typography, colors, borders } from '@/lib/design-tokens'
import type { ConciergeAiDraft } from '@/lib/concierge/ai/types'
import type { FlowAnswer, IdealTrack } from '@/lib/concierge/ideal-flow'
import { buildConciergeResult } from '@/lib/concierge/build-result'
import {
  navigateToConciergeContact,
} from '@/lib/concierge/contact-prefill'
import { mergeAiDraftIntoResult } from '@/lib/concierge/merge-ai-draft'
import type { ConciergePageContext } from '@/lib/concierge/page-context'
import { getServiceIdForConciergeTrack, getServiceHrefForConciergeTrack } from '@/data/services/service-links'
import { ConciergeEstimateBlock } from './ConciergeEstimateBlock'

interface ConciergeDoneStepProps {
  track: IdealTrack
  answers: FlowAnswer[]
  pageContext?: ConciergePageContext
  aiDraft?: ConciergeAiDraft | null
  onRestart: () => void
  onRequestClose: () => void
}

export function ConciergeDoneStep({
  track,
  answers,
  pageContext,
  aiDraft = null,
  onRestart,
  onRequestClose,
}: ConciergeDoneStepProps) {
  const router = useRouter()
  const [showEstimate, setShowEstimate] = useState(false)
  const result = useMemo(() => {
    const base = buildConciergeResult(track, answers, pageContext)
    return aiDraft ? mergeAiDraftIntoResult(base, aiDraft) : base
  }, [track, answers, pageContext, aiDraft])
  const serviceId = getServiceIdForConciergeTrack(track, answers)
  const serviceHref = getServiceHrefForConciergeTrack(track, answers)

  const goContact = (includeEstimate: boolean) => {
    const url = navigateToConciergeContact(
      serviceId,
      track,
      answers,
      pageContext,
      { includeEstimate, aiDraft },
    )
    onRequestClose()
    router.push(url)
  }

  const goService = () => {
    onRequestClose()
    router.push(serviceHref)
  }

  return (
    <div className="space-y-5">
      <div>
        <p className={`${typography.body} ${colors.text.primary} font-medium`}>
          ご相談内容を整理しました
        </p>
        <p className={`${typography.caption} ${colors.text.muted} mt-1`}>
          {aiDraft
            ? 'AI整理ドラフトを反映しています（金額は概算ボタンから）'
            : result.contextLabel
              ? `起点: ${result.contextLabel}`
              : '選択内容をもとに整理しています'}
        </p>
      </div>

      <div
        className={`rounded-lg bg-gray-900/60 ${borders.border} border-brand/30 p-4 space-y-4 max-h-[min(42dvh,24rem)] sm:max-h-[min(52vh,28rem)] overflow-y-auto overscroll-contain`}
      >
        {result.situationLabel ? (
          <ResultBlock
            title={aiDraft ? '現在の課題' : '現在の状況'}
            body={result.situationLabel}
          />
        ) : null}
        {result.timelineLabel && !aiDraft ? (
          <ResultBlock title="希望時期" body={result.timelineLabel} />
        ) : null}
        {result.timelineLabel && aiDraft ? (
          <ResultBlock title="希望時期（選択）" body={result.timelineLabel} />
        ) : null}
        {result.closestAreaLabel ? (
          <ResultBlock title="近い領域" body={result.closestAreaLabel} />
        ) : null}

        <div>
          <p className={`${typography.caption} ${colors.text.muted} mb-1`}>
            おすすめの方向性
          </p>
          <p className={`${typography.small} ${colors.text.primary} font-medium`}>
            {result.directionTitle}
          </p>
          <p
            className={`${typography.small} ${colors.text.secondary} mt-1 whitespace-pre-wrap`}
          >
            {result.directionBody}
          </p>
        </div>

        {result.featureTags.length > 0 ? (
          <div>
            <p className={`${typography.caption} ${colors.text.muted} mb-2`}>
              想定機能
            </p>
            <div className="flex flex-wrap gap-2">
              {result.featureTags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-md px-2.5 py-1 text-xs ${borders.border} border-brand/40 ${colors.text.secondary} bg-gray-950/80`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {showEstimate ? (
          <ConciergeEstimateBlock estimate={result.estimate} />
        ) : null}

        {result.relatedDemos.length > 0 ? (
          <div>
            <p className={`${typography.caption} ${colors.text.muted} mb-2`}>
              関連デモ
            </p>
            <ul className="space-y-2">
              {result.relatedDemos.map((demo) => (
                <li key={demo.slug}>
                  <Link
                    href={demo.href}
                    onClick={onRequestClose}
                    className={`block rounded-md px-3 py-2 ${borders.border} border-brand/30 hover:border-brand/70 transition-colors`}
                  >
                    <span
                      className={`${typography.small} ${colors.text.primary} font-medium`}
                    >
                      {demo.label}
                    </span>
                    <span
                      className={`block ${typography.caption} ${colors.text.muted} mt-0.5`}
                    >
                      {demo.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {result.relatedCases.length > 0 &&
        !pageContext?.caseSlug ? (
          <div>
            <p className={`${typography.caption} ${colors.text.muted} mb-2`}>
              関連の活用イメージ
            </p>
            <ul className="space-y-2">
              {result.relatedCases.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={c.href}
                    onClick={onRequestClose}
                    className={`block rounded-md px-3 py-2 ${borders.border} border-brand/30 hover:border-brand/70 transition-colors`}
                  >
                    <span
                      className={`${typography.small} ${colors.text.primary} font-medium`}
                    >
                      {c.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-3">
        <p className={`${typography.caption} ${colors.text.muted}`}>
          次のステップ
        </p>
        {!showEstimate ? (
          <Button
            type="button"
            variant="secondary"
            size="lg"
            fullWidth
            onClick={() => setShowEstimate(true)}
          >
            概算費用を算出する
          </Button>
        ) : null}
        <Button
          type="button"
          variant="primary"
          size="lg"
          fullWidth
          onClick={() => goContact(showEstimate)}
        >
          {showEstimate
            ? 'この内容（概算込み）で相談する'
            : 'この内容で相談する'}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          fullWidth
          onClick={goService}
        >
          該当サービスを見る
        </Button>
        <button
          type="button"
          onClick={onRestart}
          className={`text-sm ${colors.text.muted} hover:text-white underline-offset-4 hover:underline`}
        >
          もう一度最初から選ぶ
        </button>
      </div>
    </div>
  )
}

function ResultBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className={`${typography.caption} ${colors.text.muted} mb-1`}>{title}</p>
      <p className={`${typography.small} ${colors.text.secondary} whitespace-pre-wrap`}>
        {body}
      </p>
    </div>
  )
}

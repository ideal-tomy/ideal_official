'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { typography, colors } from '@/lib/design-tokens'
import {
  ROOT_CHOICES,
  STEPS_BY_TRACK,
  type FlowAnswer,
  type IdealTrack,
} from '@/lib/concierge/ideal-flow'
import {
  getContextOpening,
  resolveOpeningLinkHref,
  type OpeningAction,
} from '@/lib/concierge/context-openings'
import {
  shouldShowContextOpening,
  type ConciergePageContext,
} from '@/lib/concierge/page-context'
import { serviceIdToIdealTrack } from '@/data/services/service-links'
import { ConciergeChoiceButton } from './ConciergeChoiceButton'
import { ConciergeDoneStep } from './ConciergeDoneStep'

type Phase = 'opening' | 'root' | 'questions' | 'done'

function initialState(
  pageContext: ConciergePageContext | undefined,
  serviceHint: string | undefined,
): { phase: Phase; track: IdealTrack | null } {
  if (shouldShowContextOpening(pageContext)) {
    return { phase: 'opening', track: null }
  }
  if (serviceHint) {
    const t = serviceIdToIdealTrack(serviceHint)
    if (t) return { phase: 'questions', track: t }
  }
  return { phase: 'root', track: null }
}

interface IdealConciergeFlowProps {
  serviceHint: string | undefined
  pageContext: ConciergePageContext | undefined
  onRequestClose: () => void
}

export function IdealConciergeFlow({
  serviceHint,
  pageContext,
  onRequestClose,
}: IdealConciergeFlowProps) {
  const router = useRouter()
  const initial = useMemo(
    () => initialState(pageContext, serviceHint),
    [pageContext, serviceHint],
  )

  const [phase, setPhase] = useState<Phase>(() => initial.phase)
  const [track, setTrack] = useState<IdealTrack | null>(() => initial.track)
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState<FlowAnswer[]>([])

  const opening =
    pageContext && shouldShowContextOpening(pageContext)
      ? getContextOpening(pageContext)
      : null

  const restart = () => {
    if (shouldShowContextOpening(pageContext)) {
      setPhase('opening')
    } else {
      setPhase('root')
    }
    setTrack(null)
    setStepIndex(0)
    setAnswers([])
  }

  const pickRoot = (t: IdealTrack) => {
    setTrack(t)
    setStepIndex(0)
    setAnswers([])
    setPhase('questions')
  }

  const startTrack = (t: IdealTrack) => {
    setTrack(t)
    setStepIndex(0)
    setAnswers([])
    setPhase('questions')
  }

  const handleOpeningAction = (action: OpeningAction) => {
    if (!pageContext) return

    if (action.linkKind) {
      const href = resolveOpeningLinkHref(pageContext, action)
      if (href) {
        onRequestClose()
        router.push(href)
        return
      }
    }

    if (action.id === 'pick_root' || action.track === null) {
      setPhase('root')
      setTrack(null)
      setStepIndex(0)
      setAnswers([])
      return
    }

    startTrack(action.track)
  }

  const currentSteps = track ? STEPS_BY_TRACK[track] : []
  const currentStep = currentSteps[stepIndex]

  const hintedTrack =
    serviceHint != null ? serviceIdToIdealTrack(serviceHint) : null
  const showHintBanner = Boolean(
    hintedTrack && track === hintedTrack && phase === 'questions',
  )
  const showContextBanner = Boolean(
    pageContext &&
      shouldShowContextOpening(pageContext) &&
      phase === 'questions' &&
      pageContext.label,
  )

  const pickQuestion = (choiceId: string, label: string) => {
    if (!track || !currentStep) return
    const nextAnswers = [
      ...answers,
      { stepId: currentStep.id, choiceId, label },
    ]
    setAnswers(nextAnswers)
    if (stepIndex + 1 < currentSteps.length) {
      setStepIndex((i) => i + 1)
    } else {
      setPhase('done')
    }
  }

  if (phase === 'opening' && opening) {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <p className={`${typography.body} ${colors.text.primary} font-medium`}>
            {opening.headline}
          </p>
          {opening.body ? (
            <p className={`${typography.small} ${colors.text.secondary}`}>
              {opening.body}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-3">
          {opening.actions.map((action) => (
            <ConciergeChoiceButton
              key={action.id + action.label}
              label={action.label}
              onClick={() => handleOpeningAction(action)}
            />
          ))}
        </div>
      </div>
    )
  }

  if (phase === 'root') {
    return (
      <div className="space-y-4">
        <p className={`${typography.body} ${colors.text.secondary}`}>
          ご相談の目的に近いものを選んでください。
        </p>
        <div className="flex flex-col gap-3">
          {ROOT_CHOICES.map((c) => (
            <ConciergeChoiceButton
              key={c.id}
              label={c.label}
              onClick={() => pickRoot(c.track)}
            />
          ))}
        </div>
        {shouldShowContextOpening(pageContext) ? (
          <button
            type="button"
            onClick={() => setPhase('opening')}
            className={`text-sm ${colors.text.muted} hover:text-white underline-offset-4 hover:underline`}
          >
            ← ページに合わせた案内に戻る
          </button>
        ) : null}
      </div>
    )
  }

  if (phase === 'done' && track) {
    return (
      <ConciergeDoneStep
        track={track}
        answers={answers}
        pageContext={pageContext}
        onRestart={restart}
        onRequestClose={onRequestClose}
      />
    )
  }

  if (!track || !currentStep) {
    return null
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          className={`text-xs ${colors.text.muted} hover:underline`}
          onClick={() => {
            if (shouldShowContextOpening(pageContext)) {
              setPhase('opening')
            } else {
              setPhase('root')
            }
            setTrack(null)
            setStepIndex(0)
            setAnswers([])
          }}
        >
          ← 戻る
        </button>
        {showContextBanner ? (
          <span className={`text-xs ${colors.text.muted}`}>
            （{pageContext?.label} を起点に整理中）
          </span>
        ) : showHintBanner ? (
          <span className={`text-xs ${colors.text.muted}`}>
            （閲覧中のサービスに合わせて初期選択しています）
          </span>
        ) : null}
      </div>
      <p className={`${typography.body} ${colors.text.primary} font-medium`}>
        {currentStep.question}
      </p>
      <p className={`${typography.caption} ${colors.text.muted}`}>
        ステップ {stepIndex + 1} / {currentSteps.length}
      </p>
      <div className="flex flex-col gap-3">
        {currentStep.choices.map((ch) => (
          <ConciergeChoiceButton
            key={ch.id}
            label={ch.label}
            onClick={() => pickQuestion(ch.id, ch.label)}
          />
        ))}
      </div>
      <Button type="button" variant="outline" size="sm" onClick={restart}>
        最初からやり直す
      </Button>
    </div>
  )
}

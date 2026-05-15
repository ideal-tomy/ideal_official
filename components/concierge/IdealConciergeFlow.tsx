'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { typography, colors } from '@/lib/design-tokens'
import {
  ROOT_CHOICES,
  STEPS_BY_TRACK,
  type FlowAnswer,
  type IdealTrack,
} from '@/lib/concierge/ideal-flow'
import { serviceIdToIdealTrack } from '@/data/services/service-links'
import { ConciergeChoiceButton } from './ConciergeChoiceButton'
import { ConciergeDoneStep } from './ConciergeDoneStep'

type Phase = 'root' | 'questions' | 'done'

function initialPhaseForHint(
  hint: string | undefined,
): { phase: Phase; track: IdealTrack | null } {
  if (!hint) return { phase: 'root', track: null }
  const t = serviceIdToIdealTrack(hint)
  if (t) return { phase: 'questions', track: t }
  return { phase: 'root', track: null }
}

interface IdealConciergeFlowProps {
  serviceHint: string | undefined
  onRequestClose: () => void
}

export function IdealConciergeFlow({
  serviceHint,
  onRequestClose,
}: IdealConciergeFlowProps) {
  const initial = useMemo(() => initialPhaseForHint(serviceHint), [serviceHint])

  const [phase, setPhase] = useState<Phase>(() => initial.phase)
  const [track, setTrack] = useState<IdealTrack | null>(() => initial.track)
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState<FlowAnswer[]>([])

  const restart = () => {
    setPhase('root')
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

  const currentSteps = track ? STEPS_BY_TRACK[track] : []
  const currentStep = currentSteps[stepIndex]

  const hintedTrack =
    serviceHint != null ? serviceIdToIdealTrack(serviceHint) : null
  const showHintBanner = Boolean(
    hintedTrack && track === hintedTrack && phase === 'questions',
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
      </div>
    )
  }

  if (phase === 'done' && track) {
    return (
      <ConciergeDoneStep
        track={track}
        answers={answers}
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
            setPhase('root')
            setTrack(null)
            setStepIndex(0)
            setAnswers([])
          }}
        >
          ← 目的の選択に戻る
        </button>
        {showHintBanner ? (
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

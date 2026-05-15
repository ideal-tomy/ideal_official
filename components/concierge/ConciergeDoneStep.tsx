'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { typography, colors, borders } from '@/lib/design-tokens'
import type { FlowAnswer, IdealTrack } from '@/lib/concierge/ideal-flow'
import { buildIdealSummaryMarkdown } from '@/lib/concierge/build-summary'
import {
  navigateToConciergeContact,
} from '@/lib/concierge/contact-prefill'
import { getServiceIdForConciergeTrack, getServiceHrefForConciergeTrack } from '@/data/services/service-links'

interface ConciergeDoneStepProps {
  track: IdealTrack
  answers: FlowAnswer[]
  onRestart: () => void
  onRequestClose: () => void
}

export function ConciergeDoneStep({
  track,
  answers,
  onRestart,
  onRequestClose,
}: ConciergeDoneStepProps) {
  const router = useRouter()
  const summary = buildIdealSummaryMarkdown(track, answers)
  const serviceId = getServiceIdForConciergeTrack(track, answers)
  const serviceHref = getServiceHrefForConciergeTrack(track, answers)

  const goContact = () => {
    const url = navigateToConciergeContact(serviceId, track, answers)
    onRequestClose()
    router.push(url)
  }

  const goService = () => {
    onRequestClose()
    router.push(serviceHref)
  }

  return (
    <div className="space-y-5">
      <div
        className={`rounded-lg bg-gray-900/60 ${borders.border} border-blue-400/30 p-4 max-h-52 overflow-y-auto whitespace-pre-wrap ${typography.small} ${colors.text.secondary}`}
      >
        {summary}
      </div>

      <div className="flex flex-col gap-3">
        <Button type="button" variant="primary" size="lg" fullWidth onClick={goContact}>
          お問い合わせへ（内容を引き継ぐ）
        </Button>
        <Button
          type="button"
          variant="secondary"
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

'use client'

import { useEffect, useState } from 'react'
import { useDemoProcess } from '@/components/ai-capability-gallery/hooks/useDemoProcess'
import {
  knowledgeSampleSets,
  knowledgeProcessingSteps,
  type KnowledgeSampleSet,
  type KnowledgeQuestion,
} from '@/data/ai-capability-gallery/knowledge-to-search'
import { DemoFrame } from './DemoFrame'
import { SampleSetTabs } from './SampleSetTabs'
import { ProcessingLog } from './ProcessingLog'
import { EvidencePanel } from './EvidencePanel'
import { DemoActions } from './DemoActions'

export function KnowledgeToSearchDemo() {
  const [selectedSet, setSelectedSet] = useState<KnowledgeSampleSet>(knowledgeSampleSets[0])
  const [selectedQuestion, setSelectedQuestion] = useState<KnowledgeQuestion | null>(null)
  const [activeSourceId, setActiveSourceId] = useState<string | null>(null)
  const { logs, isProcessing, isComplete, start, reset } = useDemoProcess()

  useEffect(() => {
    if (isComplete && selectedQuestion) {
      setActiveSourceId(selectedQuestion.sourceId)
    }
  }, [isComplete, selectedQuestion])

  const handleSetChange = (setId: string) => {
    const next = knowledgeSampleSets.find((s) => s.id === setId)
    if (next) {
      setSelectedSet(next)
      setSelectedQuestion(null)
      setActiveSourceId(null)
      reset()
    }
  }

  const handleQuestionSelect = (question: KnowledgeQuestion) => {
    if (isProcessing) return
    setSelectedQuestion(question)
    setActiveSourceId(null)
    reset()
    start(knowledgeProcessingSteps)
  }

  const currentAnswer = isComplete && selectedQuestion ? selectedQuestion : null
  const sources =
    isComplete && selectedQuestion
      ? selectedSet.sources.filter((s) => s.id === selectedQuestion.sourceId)
      : []

  return (
    <DemoFrame title="ナレッジ → 検索デモ">
      <SampleSetTabs
        sets={knowledgeSampleSets}
        selectedId={selectedSet.id}
        onSelect={handleSetChange}
        disabled={isProcessing}
      />

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="rounded-lg border border-[#D9DDE3] bg-white p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
            質問一覧
          </p>
          <ul className="space-y-2">
            {selectedSet.questions.map((q) => (
              <li key={q.id}>
                <button
                  type="button"
                  onClick={() => handleQuestionSelect(q)}
                  disabled={isProcessing}
                  className={`
                    w-full text-left text-xs p-2 rounded border transition-colors
                    ${
                      selectedQuestion?.id === q.id
                        ? 'border-blue-300 bg-blue-50 text-blue-800'
                        : 'border-[#D9DDE3] text-gray-700 hover:border-blue-200'
                    }
                    disabled:opacity-50
                  `}
                >
                  {q.question}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <ProcessingLog logs={logs} isProcessing={isProcessing} />

          <div className="rounded-lg border border-[#D9DDE3] bg-white p-4 min-h-[120px]">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              回答
            </p>
            {!currentAnswer ? (
              <p className="text-sm text-gray-400">左の質問を選んでください</p>
            ) : (
              <div>
                <p className="text-sm text-gray-800 leading-relaxed mb-2">
                  {currentAnswer.answer}
                </p>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                  出典: {selectedSet.sources.find((s) => s.id === currentAnswer.sourceId)?.title}
                </span>
              </div>
            )}
          </div>
        </div>

        <div>
          <EvidencePanel
            sources={sources}
            activeSourceId={activeSourceId}
            onSelectSource={setActiveSourceId}
          />
        </div>
      </div>

      <DemoActions
        onProcess={() => {
          if (selectedQuestion) handleQuestionSelect(selectedQuestion)
          else if (selectedSet.questions[0]) handleQuestionSelect(selectedSet.questions[0])
        }}
        onReset={() => {
          reset()
          setSelectedQuestion(null)
          setActiveSourceId(null)
        }}
        isProcessing={isProcessing}
        processLabel="質問を選んで検索"
        processingLabel="検索中…"
      />
    </DemoFrame>
  )
}

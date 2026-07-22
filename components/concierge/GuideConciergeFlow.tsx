'use client'

import { useState, useRef, useEffect, type FormEvent } from 'react'
import Link from 'next/link'
import { typography, colors } from '@/lib/design-tokens'
import { Button } from '@/components/ui/Button'
import {
  GUIDE_CHIP_INTENTS,
  getGuideOpening,
  resolveGuideLocally,
  type GuideIntentId,
  type GuideLink,
  type GuideReply,
} from '@/lib/concierge/guide'
import { postGuideChat } from '@/lib/concierge/guide/client'
import type { ConciergePageContext } from '@/lib/concierge/page-context'

type ChatMessage = {
  id: string
  role: 'bot' | 'user'
  text: string
  links?: GuideLink[]
  showChips?: boolean
}

interface GuideConciergeFlowProps {
  pageContext: ConciergePageContext | undefined
  onRequestClose: () => void
}

let msgSeq = 0
function nextId() {
  msgSeq += 1
  return `g-${msgSeq}`
}

function replyToBotMessage(reply: GuideReply): ChatMessage {
  return {
    id: nextId(),
    role: 'bot',
    text: reply.answer,
    links: reply.links,
    showChips: reply.showChips,
  }
}

export function GuideConciergeFlow({
  pageContext,
  onRequestClose,
}: GuideConciergeFlowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: nextId(),
      role: 'bot',
      text: getGuideOpening(pageContext),
      showChips: true,
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [messages, loading])

  const appendUserAndReply = async (opts: {
    userText: string
    intentId?: GuideIntentId
  }) => {
    const userMsg: ChatMessage = {
      id: nextId(),
      role: 'user',
      text: opts.userText,
    }
    setMessages((prev) => [...prev, userMsg])
    setLoading(true)

    try {
      const local = resolveGuideLocally({
        message: opts.intentId ? undefined : opts.userText,
        intentId: opts.intentId,
        pageContext,
      })

      if (local) {
        setMessages((prev) => [...prev, replyToBotMessage(local)])
        return
      }

      const reply = await postGuideChat({
        message: opts.userText,
        pageContext,
      })
      setMessages((prev) => [...prev, replyToBotMessage(reply)])
    } finally {
      setLoading(false)
    }
  }

  const onChip = (intentId: GuideIntentId, label: string) => {
    if (loading) return
    void appendUserAndReply({ userText: label, intentId })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    void appendUserAndReply({ userText: text })
  }

  const showChips =
    !loading &&
    Boolean(messages[messages.length - 1]?.showChips)

  return (
    <div className="flex flex-col gap-4 min-h-[280px] max-h-[min(70vh,520px)]">
      <div
        ref={listRef}
        className="flex-1 overflow-y-auto space-y-3 pr-1"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`
                max-w-[92%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed
                ${
                  m.role === 'user'
                    ? 'bg-brand text-white rounded-br-md'
                    : `bg-[var(--site-bg-elevated)] ${colors.text.primary} border border-[var(--site-border)] rounded-bl-md`
                }
              `}
            >
              <p className="whitespace-pre-wrap">{m.text}</p>
              {m.links && m.links.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.links.map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      onClick={onRequestClose}
                      className="
                        inline-flex items-center rounded-full
                        border border-brand/50 bg-brand/10
                        px-3 py-1.5 text-xs font-bold text-brand
                        hover:bg-brand/20 transition-colors
                      "
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
        {loading ? (
          <p className={`${typography.caption} ${colors.text.muted}`}>
            案内を準備しています…
          </p>
        ) : null}
      </div>

      {showChips ? (
        <div className="flex flex-wrap gap-2" aria-label="よくある質問">
          {GUIDE_CHIP_INTENTS.map((chip) => (
            <button
              key={chip.id}
              type="button"
              disabled={loading}
              onClick={() => onChip(chip.id, chip.chipLabel)}
              className="
                rounded-full border border-[var(--site-border)]
                px-3 py-1.5 text-xs font-medium
                text-[var(--site-fg)]
                hover:border-brand hover:text-brand
                disabled:opacity-50 transition-colors
              "
            >
              {chip.chipLabel}
            </button>
          ))}
        </div>
      ) : null}

      <form onSubmit={onSubmit} className="flex gap-2 items-end">
        <label className="sr-only" htmlFor="guide-concierge-input">
          質問を入力
        </label>
        <textarea
          id="guide-concierge-input"
          rows={2}
          value={input}
          disabled={loading}
          onChange={(e) => setInput(e.target.value)}
          placeholder="例: 金額の目安が知りたい"
          className="
            flex-1 resize-none rounded-xl
            border border-[var(--site-border)]
            bg-[var(--site-bg)] px-3 py-2
            text-sm text-[var(--site-fg)]
            placeholder:text-[var(--site-fg-muted)]
            focus:outline-none focus:ring-2 focus:ring-brand
          "
          maxLength={500}
        />
        <Button type="submit" size="md" disabled={loading || !input.trim()}>
          送信
        </Button>
      </form>
    </div>
  )
}

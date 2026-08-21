'use client'

import { Fragment, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'
import { AsymmetricFeatureGrid } from '@/components/services/AsymmetricFeatureGrid'
import { ServiceSectionShell } from '@/components/services/ServiceSectionShell'

type ProcessState = 'idle' | 'processing' | 'done'

function InputProcessPanel({ featured = true }: { featured?: boolean }) {
  const prefersReduced = usePrefersReducedMotion()
  const [input, setInput] = useState('')
  const [state, setState] = useState<ProcessState>('idle')
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = () => {
    if (!input.trim() || state === 'processing') return
    setState('processing')
    setResult(null)
    setTimeout(() => {
      setResult(
        `「${input.trim()}」を処理しました。カテゴリ: 業務依頼 / 優先度: 中 / 担当: 未割当`,
      )
      setState('done')
    }, 1200)
  }

  const handleReset = () => {
    setInput('')
    setState('idle')
    setResult(null)
  }

  const header = (
    <>
      <h3
        className={`mb-3 font-bold text-[var(--site-fg)] ${
          featured ? 'text-xl md:text-2xl' : 'text-xl font-semibold'
        }`}
      >
        入力して、結果を得る
      </h3>
      <p className="text-sm leading-relaxed text-[var(--site-fg-muted)]">
        フォームに入力 → 処理中 → 結果表示。業務ツールの基本の流れです。
      </p>
    </>
  )

  const controls = (
    <div className={`flex flex-col space-y-4 ${featured ? '' : 'mt-4 flex-1'}`}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="例: 見積依頼を送る"
        disabled={state === 'processing'}
        className="w-full rounded-lg border border-[var(--site-border)] bg-[var(--site-bg)]/60 px-4 py-2.5 text-sm text-[var(--site-fg)] placeholder:text-[var(--site-fg-muted)] focus:outline-none focus:border-brand/50 disabled:opacity-50"
      />

      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!input.trim() || state === 'processing'}
          className="flex-1 rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-black hover:bg-brand-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {state === 'processing' ? '処理中...' : '処理する'}
        </button>
        {state === 'done' && (
          <button
            type="button"
            onClick={handleReset}
            className="rounded-lg border border-[var(--site-border)] px-4 py-2.5 text-sm text-[var(--site-fg-muted)] hover:border-gray-500 transition-colors"
          >
            リセット
          </button>
        )}
      </div>

      <div
        className={`flex items-center justify-center rounded-lg bg-[var(--site-bg)]/60 p-4 ${
          featured ? 'min-h-[140px] flex-1' : 'min-h-[120px]'
        }`}
      >
        <AnimatePresence mode="wait">
          {state === 'idle' && (
            <motion.p
              key="idle"
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={prefersReduced ? undefined : { opacity: 0 }}
              className="text-sm text-[var(--site-fg-muted)]"
            >
              入力して「処理する」を押してください
            </motion.p>
          )}
          {state === 'processing' && (
            <motion.div
              key="processing"
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={prefersReduced ? undefined : { opacity: 0 }}
              className="flex items-center gap-3"
            >
              <div className="h-5 w-5 rounded-full border-2 border-brand border-t-transparent animate-spin" />
              <p className="text-sm text-brand">処理中...</p>
            </motion.div>
          )}
          {state === 'done' && result && (
            <motion.div
              key="done"
              initial={prefersReduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full"
            >
              <p className="mb-2 text-xs text-brand/80">結果</p>
              <p className="text-sm leading-relaxed text-[var(--site-fg)]">{result}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )

  if (!featured) {
    return (
      <div className="flex h-full flex-col rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] p-6">
        {header}
        {controls}
      </div>
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-2 border-brand/20 bg-[var(--site-bg)]">
      <div className="p-6 md:p-8">{header}</div>
      <div className="flex flex-1 flex-col space-y-4 border-t border-[var(--site-border)] bg-[color-mix(in_srgb,var(--color-brand)_4%,var(--site-bg))] p-6 md:p-8">
        {controls}
      </div>
    </div>
  )
}

const STATUS_STEPS = ['未対応', '対応中', '確認待ち', '完了'] as const

function StatusPanel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const advance = () => {
    setCurrentIndex((i) => Math.min(i + 1, STATUS_STEPS.length - 1))
  }

  const reset = () => setCurrentIndex(0)

  return (
    <div className="flex h-full flex-col rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] p-6">
      <h3 className="mb-3 text-xl font-semibold text-[var(--site-fg)]">
        ステータスを進める
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-[var(--site-fg-muted)]">
        未対応 → 対応中 → 確認待ち → 完了。案件の進み具合をみんなで共有できます。
      </p>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-center gap-1 mb-6">
          {STATUS_STEPS.map((step, i) => (
            <Fragment key={step}>
              <button
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`flex-1 rounded-lg px-2 py-2 text-xs font-medium transition-colors ${
                  i <= currentIndex
                    ? 'bg-brand/20 border border-brand/40 text-brand-hover'
                    : 'bg-[var(--site-bg-elevated)]/50 border border-[var(--site-border)] text-[var(--site-fg-muted)]'
                }`}
              >
                {step}
              </button>
              {i < STATUS_STEPS.length - 1 && (
                <span className="text-gray-600 text-xs shrink-0">→</span>
              )}
            </Fragment>
          ))}
        </div>

        <div className="rounded-lg border border-[var(--site-border)] bg-[var(--site-bg)]/40 p-4 mb-4">
          <p className="text-xs text-[var(--site-fg-muted)] mb-1">現在のステータス</p>
          <p className="text-lg font-semibold text-[var(--site-fg)]">
            {STATUS_STEPS[currentIndex]}
          </p>
          <p className="text-sm text-[var(--site-fg-muted)] mt-2">
            案件 #1042 — 現場写真の整理依頼
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={advance}
            disabled={currentIndex >= STATUS_STEPS.length - 1}
            className="flex-1 rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-[var(--df-on-primary)] hover:bg-brand-hover transition-colors disabled:opacity-40"
          >
            次のステータスへ
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-lg border border-[var(--site-border)] px-4 py-2.5 text-sm text-[var(--site-fg-muted)] hover:border-gray-500 transition-colors"
          >
            リセット
          </button>
        </div>
      </div>
    </div>
  )
}

type FilterKey = 'all' | 'pending' | 'done'

const DASHBOARD_DATA = [
  { id: 1, label: '見積依頼', status: 'pending' as const, value: 42 },
  { id: 2, label: '現場報告', status: 'done' as const, value: 78 },
  { id: 3, label: '承認待ち', status: 'pending' as const, value: 23 },
  { id: 4, label: '完了案件', status: 'done' as const, value: 156 },
]

function DashboardPanel({ featured = false }: { featured?: boolean }) {
  const [filter, setFilter] = useState<FilterKey>('all')
  const [mobileView, setMobileView] = useState<'list' | 'detail'>('list')

  const filtered =
    filter === 'all'
      ? DASHBOARD_DATA
      : DASHBOARD_DATA.filter((d) => d.status === filter)

  const total = filtered.reduce((sum, d) => sum + d.value, 0)

  const header = (
    <>
      <h3
        className={`mb-3 font-bold text-[var(--site-fg)] ${
          featured ? 'text-xl md:text-2xl' : 'text-xl font-semibold'
        }`}
      >
        フィルターで変わる一覧
      </h3>
      <p
        className={`leading-relaxed text-[var(--site-fg-muted)] ${
          featured ? 'text-sm md:text-base' : 'mb-4 text-sm'
        }`}
      >
        条件を変えると一覧とグラフが変わります。スマホでの操作感も試せます。
      </p>
    </>
  )

  const body = (
    <>
      <div className={`flex gap-2 ${featured ? 'mb-4' : 'mb-4'}`}>
        {(
          [
            { key: 'all' as const, label: 'すべて' },
            { key: 'pending' as const, label: '未完了' },
            { key: 'done' as const, label: '完了' },
          ] as const
        ).map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              filter === f.key
                ? 'border border-brand/40 bg-brand/20 text-brand-hover'
                : 'border border-[var(--site-border)] text-[var(--site-fg-muted)] hover:text-[var(--site-fg)]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={`grid flex-1 gap-4 ${featured ? 'sm:grid-cols-2' : 'sm:grid-cols-2'}`}>
        <div className="space-y-2">
          <p className="text-xs text-[var(--site-fg-muted)]">
            件数: {filtered.length} / 合計: {total}
          </p>
          <div className="space-y-1.5">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg border border-[var(--site-border)] bg-[var(--site-bg)]/40 px-3 py-2"
              >
                <span className="text-sm text-[var(--site-fg)]">{item.label}</span>
                <span className="text-xs text-brand">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="flex h-16 items-end gap-1 pt-2">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="flex-1 rounded-t bg-brand/40"
                style={{ height: `${(item.value / 160) * 100}%` }}
                title={item.label}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="mb-2 self-start text-xs text-[var(--site-fg-muted)]">モバイル操作</p>
          <div className="w-[140px] overflow-hidden rounded-2xl border-4 border-[var(--site-border)] bg-[var(--site-bg)]">
            <div className="flex h-6 items-center justify-center bg-[var(--site-bg-elevated)]">
              <div className="h-1 w-12 rounded-full bg-gray-600" />
            </div>
            <div className="min-h-[160px] p-3">
              {mobileView === 'list' ? (
                <div className="space-y-2">
                  {filtered.slice(0, 3).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMobileView('detail')}
                      className="w-full rounded border border-[var(--site-border)] px-2 py-1.5 text-left text-xs text-[var(--site-fg)] hover:border-brand/40"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileView('list')}
                    className="mb-2 text-xs text-brand"
                  >
                    ← 戻る
                  </button>
                  <p className="text-sm font-medium text-[var(--site-fg)]">詳細</p>
                  <p className="mt-1 text-xs text-[var(--site-fg-muted)]">タップで詳細表示</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )

  if (featured) {
    return (
      <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-2 border-brand/20 bg-[var(--site-bg)]">
        <div className="p-6 md:p-8">{header}</div>
        <div className="flex min-h-[220px] flex-1 flex-col border-t border-[var(--site-border)] bg-[color-mix(in_srgb,var(--color-brand)_4%,var(--site-bg))] p-6 md:p-8">
          {body}
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-[var(--site-border)] bg-[var(--site-bg)] p-6">
      {header}
      <div className="flex flex-1 flex-col">{body}</div>
    </div>
  )
}

export function ProductShowcaseContent() {
  return (
    <AsymmetricFeatureGrid
      primary={<DashboardPanel featured />}
      secondary={[
        <StatusPanel key="status" />,
        <InputProcessPanel key="input" featured={false} />,
      ]}
    />
  )
}

export function ProductShowcase() {
  return (
    <ServiceSectionShell
      tone="interactive"
      title="ここで触ってみる"
      lead="言葉で説明する前に、動く仕組みの感触を確かめてください。入力・進捗・一覧の3つです。"
      align="left"
      emphasis="feature"
      contentBleed
    >
      <ProductShowcaseContent />
    </ServiceSectionShell>
  )
}

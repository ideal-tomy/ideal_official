'use client'

import { Fragment, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'

type ProcessState = 'idle' | 'processing' | 'done'

function InputProcessPanel() {
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

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 h-full flex flex-col">
      <p className="text-xs tracking-[0.16em] text-brand/90 mb-2">01 · Input → Process</p>
      <h3 className="text-xl font-semibold text-white mb-3">入力して、結果を得る</h3>
      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
        フォームに入力 → 処理中 → 結果カード。業務ツールの基本フローです。
      </p>

      <div className="flex-1 space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="例: 見積依頼を送る"
          disabled={state === 'processing'}
          className="w-full rounded-lg border border-gray-700 bg-black/60 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand/50 disabled:opacity-50"
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
              className="rounded-lg border border-gray-600 px-4 py-2.5 text-sm text-gray-300 hover:border-gray-500 transition-colors"
            >
              リセット
            </button>
          )}
        </div>

        <div className="min-h-[100px] rounded-lg border border-gray-700 bg-black/40 p-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {state === 'idle' && (
              <motion.p
                key="idle"
                initial={prefersReduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={prefersReduced ? undefined : { opacity: 0 }}
                className="text-sm text-gray-500"
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
                <p className="text-xs text-brand/80 mb-2">結果</p>
                <p className="text-sm text-white leading-relaxed">{result}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

const STATUS_STEPS = ['未対応', '対応中', '確認待ち', '完了'] as const
type StatusStep = (typeof STATUS_STEPS)[number]

function StatusPanel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const advance = () => {
    setCurrentIndex((i) => Math.min(i + 1, STATUS_STEPS.length - 1))
  }

  const reset = () => setCurrentIndex(0)

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 h-full flex flex-col">
      <p className="text-xs tracking-[0.16em] text-brand/90 mb-2">02 · Status</p>
      <h3 className="text-xl font-semibold text-white mb-3">ステータスを進める</h3>
      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
        未対応 → 対応中 → 確認待ち → 完了。案件管理の基本です。
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
                    : 'bg-gray-800/50 border border-gray-700 text-gray-500'
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

        <div className="rounded-lg border border-gray-700 bg-black/40 p-4 mb-4">
          <p className="text-xs text-gray-500 mb-1">現在のステータス</p>
          <p className="text-lg font-semibold text-white">
            {STATUS_STEPS[currentIndex]}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            案件 #1042 — 現場写真の整理依頼
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={advance}
            disabled={currentIndex >= STATUS_STEPS.length - 1}
            className="flex-1 rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-hover transition-colors disabled:opacity-40"
          >
            次のステータスへ
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-lg border border-gray-600 px-4 py-2.5 text-sm text-gray-300 hover:border-gray-500 transition-colors"
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

function DashboardPanel() {
  const [filter, setFilter] = useState<FilterKey>('all')
  const [mobileView, setMobileView] = useState<'list' | 'detail'>('list')

  const filtered =
    filter === 'all'
      ? DASHBOARD_DATA
      : DASHBOARD_DATA.filter((d) => d.status === filter)

  const total = filtered.reduce((sum, d) => sum + d.value, 0)

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 h-full flex flex-col">
      <p className="text-xs tracking-[0.16em] text-brand/90 mb-2">03 · Dashboard</p>
      <h3 className="text-xl font-semibold text-white mb-3">フィルターで変わる一覧</h3>
      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
        フィルターを変えるとデータとグラフが変わります。モバイル操作も体験できます。
      </p>

      <div className="flex gap-2 mb-4">
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
                ? 'bg-brand/20 border border-brand/40 text-brand-hover'
                : 'border border-gray-700 text-gray-400 hover:text-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex-1 grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-xs text-gray-500">件数: {filtered.length} / 合計: {total}</p>
          <div className="space-y-1.5">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg border border-gray-700 bg-black/40 px-3 py-2"
              >
                <span className="text-sm text-white">{item.label}</span>
                <span className="text-xs text-brand">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="flex items-end gap-1 h-16 pt-2">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="flex-1 bg-brand/40 rounded-t"
                style={{ height: `${(item.value / 160) * 100}%` }}
                title={item.label}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-xs text-gray-500 mb-2 self-start">モバイル操作</p>
          <div className="w-[140px] rounded-2xl border-4 border-gray-700 bg-black overflow-hidden">
            <div className="h-6 bg-gray-800 flex items-center justify-center">
              <div className="w-12 h-1 rounded-full bg-gray-600" />
            </div>
            <div className="p-3 min-h-[160px]">
              {mobileView === 'list' ? (
                <div className="space-y-2">
                  {filtered.slice(0, 3).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMobileView('detail')}
                      className="w-full text-left rounded border border-gray-700 px-2 py-1.5 text-xs text-white hover:border-brand/40"
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
                    className="text-xs text-brand mb-2"
                  >
                    ← 戻る
                  </button>
                  <p className="text-sm text-white font-medium">詳細</p>
                  <p className="text-xs text-gray-400 mt-1">タップで詳細表示</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductShowcase() {
  return (
    <section
      id="product-showcase"
      className="scroll-mt-24 bg-black py-16 lg:py-20 border-b border-brand/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Interactive Product Showcase
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            「アプリ開発できます」ではなく、Webアプリとはこういう「動く仕組み」です。ここで触ってください。
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-5">
          <InputProcessPanel />
          <StatusPanel />
          <DashboardPanel />
        </div>
      </div>
    </section>
  )
}

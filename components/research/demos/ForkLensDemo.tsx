'use client'

import { useState } from 'react'
import { forkActions, forkLenses } from '@/data/research/fork-lenses'

export function ForkLensDemo() {
  const [curLens, setCurLens] = useState('quality')
  const lens = forkLenses.find((l) => l.id === curLens) ?? forkLenses[1]

  return (
    <div className="space-y-8">
      <p className="text-[var(--site-fg-muted)] leading-relaxed">
        貢献履歴は個人が主権を持つポータブルな証明書。組織を超えて持ち運べ、移動先DAOの価値関数で評価し直されます。
      </p>

      <div className="grid lg:grid-cols-[240px_1fr] gap-8">
        <div className="rounded-xl border border-[var(--site-border)] bg-[var(--site-bg-elevated)]/50 p-6">
          <p className="text-lg font-semibold text-[var(--site-fg)] mb-1">Contributor #A1</p>
          <p className="text-xs font-mono text-[var(--site-fg-muted)] mb-4">did:ideal:0x8f3a…c2</p>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex justify-between text-[var(--site-fg-muted)]">
              <span>記録された貢献</span>
              <b className="text-[var(--site-fg)]">128</b>
            </div>
            <div className="flex justify-between text-[var(--site-fg-muted)]">
              <span>検証済みPoC資産</span>
              <b className="text-[var(--site-fg)]">◆ 4,210</b>
            </div>
            <div className="flex justify-between text-[var(--site-fg-muted)]">
              <span>整合性(ξ) 履歴</span>
              <b className="text-[var(--site-fg)]">0.81</b>
            </div>
            <div className="flex justify-between text-[var(--site-fg-muted)]">
              <span>所属した DAO</span>
              <b className="text-[var(--site-fg)]">3</b>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {forkLenses.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setCurLens(l.id)}
                className={`px-4 py-2 text-xs font-mono border rounded transition-colors ${
                  curLens === l.id
                    ? 'border-gray-500 bg-[var(--site-bg-elevated)] text-[var(--site-fg)]'
                    : 'border-[var(--site-border)] text-[var(--site-fg-muted)] hover:border-[var(--site-border)]'
                }`}
              >
                {l.name}
              </button>
            ))}
          </div>

          <p className="text-sm text-[var(--site-fg-muted)] mb-6 min-h-[42px]">
            {lens.description}
            {' — '}
            <span className="font-mono" style={{ color: lens.color }}>
              同じ履歴が、この価値関数で再評価される。
            </span>
          </p>

          <div className="space-y-3">
            {forkActions.map((action) => {
              const v = action[lens.key]
              const score = Math.round((v - 0.5) * 200)
              return (
                <div key={action.name} className="grid grid-cols-[1fr_120px_48px] gap-3 items-center">
                  <p className="text-sm text-[var(--site-fg-muted)]">{action.name}</p>
                  <div className="h-2 bg-[var(--site-bg-elevated)] rounded overflow-hidden">
                    <div
                      className="h-full rounded transition-all duration-500"
                      style={{ width: `${v * 100}%`, background: lens.color }}
                    />
                  </div>
                  <p className="text-sm font-mono text-right" style={{ color: lens.color }}>
                    {score >= 0 ? '+' : ''}
                    {score}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

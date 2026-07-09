'use client'

import { useState } from 'react'
import { zkpClaims, zkpPrivateRows } from '@/data/research/zkp-claims'

function randHex(len: number): string {
  const c = '0123456789abcdef'
  let s = ''
  for (let i = 0; i < len; i++) s += c[Math.floor(Math.random() * 16)]
  return s
}

const blurSamples = ['re:設計方針について…', 'diff +142 −38', '2024-11-… 47件', 'PoC raw signals']

export function ZkpDemo() {
  const [idx, setIdx] = useState(0)
  const [proof, setProof] = useState(() => `π = 0x${randHex(8)}…${randHex(24)} · ${randHex(6)}`)

  const verify = () => {
    const next = (idx + 1) % zkpClaims.length
    setIdx(next)
    setProof(`π = 0x${randHex(8)}…${randHex(24)} · ${randHex(6)}`)
  }

  return (
    <div className="space-y-8">
      <p className="text-gray-300 leading-relaxed">
        プロセス（どんなルールで評価・執行されるか）は誰でも検証可能に。データ（具体的な発言・コード・行動）は本人の同意なく公開されません。
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
          <span className="block text-[10px] uppercase tracking-wider text-gray-400 mb-4 font-mono">
            Private — 本人以外は参照不可
          </span>
          {zkpPrivateRows.map((row, i) => (
            <div
              key={row}
              className="flex items-center gap-3 py-3 border-b border-gray-800 text-sm text-gray-300 last:border-0"
            >
              {row}
              <span className="blur-sm select-none text-gray-500">{blurSamples[i]}</span>
              <span className="ml-auto text-[10px] font-mono text-gray-500 border border-gray-700 px-2 py-0.5 rounded">
                🔒 秘匿
              </span>
            </div>
          ))}
          <p className="text-xs text-gray-400 mt-4">
            「詳細を開示」ボタンは存在しない — 秘匿はUIの都合ではなく、証明の設計そのもの。
          </p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
          <span className="block text-[10px] uppercase tracking-wider text-gray-400 mb-4 font-mono">
            Public — 誰でも検証可能
          </span>
          <p className="text-sm text-gray-200 mb-4">
            証明する主張：<strong className="text-white">{zkpClaims[idx].claim}</strong>
          </p>
          <p className="font-mono text-xs text-gray-400 mb-4 break-all">{proof}</p>
          <p className="flex items-center gap-2 text-sm text-brand mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-hover" />
            検証成功 — VALID（生データ参照ゼロ）
          </p>
          <button
            type="button"
            onClick={verify}
            className="px-4 py-2 text-sm border border-gray-700 rounded text-gray-200 hover:border-gray-500 transition-colors"
          >
            別の主張を検証する
          </button>
          <p className="text-xs text-gray-400 mt-4">
            検証者は主張が真だと確信できるが、その根拠となった行動は一切見えません。
          </p>
        </div>
      </div>
    </div>
  )
}

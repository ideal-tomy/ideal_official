import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: '正直さの物理法則 — Proof of Contribution Instrument | ideal',
  description:
    '貢献をAIが観測し、ブロックチェーンに記録する。整合性を測る ξ 計器を動かせる、Proof of Contribution の技術提案デモ。',
  openGraph: {
    title: '正直さの物理法則 — Proof of Contribution Instrument | ideal',
    description:
      '思想を技術で補うインタラクティブな概念計器。観測→記録→測定→執行→フィードバックのループを体感できます。',
    type: 'website',
    locale: 'ja_JP',
  },
}

/**
 * beforeFiles rewrite で静的 HTML が配信されるため、通常はこのページは実行されない。
 * rewrite 無効時のフォールバックとして index.html へ誘導する。
 */
export default function PocInstrumentPage() {
  redirect('/research/poc-instrument/index.html')
}

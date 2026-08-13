import { redirect } from 'next/navigation'

/** 旧自動見積もり → 導入の流れ（見積セクション）へ統合 */
export default function EstimateRedirect() {
  redirect('/flow#estimate')
}

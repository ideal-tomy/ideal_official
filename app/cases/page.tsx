import { redirect } from 'next/navigation'

/** 旧一覧 → 導入の流れへ統合 */
export default function CasesIndexRedirect() {
  redirect('/flow')
}

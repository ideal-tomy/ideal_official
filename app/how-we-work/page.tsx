import { redirect } from 'next/navigation'

/** 旧 How we work ハブ → 導入の流れへ統合 */
export default function HowWeWorkHubRedirect() {
  redirect('/flow')
}

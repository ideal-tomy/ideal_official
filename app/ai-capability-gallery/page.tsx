import { redirect } from 'next/navigation'

/** 旧ギャラリー一覧 → 導入の流れへ統合（/:slug 詳細は残す） */
export default function AiCapabilityGalleryIndexRedirect() {
  redirect('/flow')
}

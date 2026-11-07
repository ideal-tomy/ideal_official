/**
 * サービス内容（相談・設計 / 製作を1ページに集約）
 * ヒーローより下は、相談・設計から製作、効果の試算、相談までを LP の並びで見せる。
 */

import type { Metadata } from 'next'
import { ServicesHashScroll } from '@/components/services/hub/ServicesHashScroll'
import { ServicesLp } from '@/components/services/hub/lp/ServicesLp'

const servicesDescription =
  '相談・設計からWeb・業務ツール・AI製作まで。課題の整理と実装を同じチームで一気通貫に伴走します。'

export const metadata: Metadata = {
  title: 'サービス | ideal',
  description: servicesDescription,
  openGraph: {
    title: 'サービス | ideal',
    description: servicesDescription,
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--site-bg)]">
      <ServicesHashScroll />
      <ServicesLp />
    </div>
  )
}

'use client'

import { getDemoLp } from '@/data/demo-lp'
import { DemoLpPage } from '@/components/demo-lp/DemoLpPage'
import { notFound } from 'next/navigation'

/**
 * LpConfig 内の関数（ROI 計算）を RSC 境界に乗せないための薄い Client 入口。
 */
export function DemoLpClient({ slug }: { slug: string }) {
  const config = getDemoLp(slug)
  if (!config) {
    notFound()
  }
  return <DemoLpPage config={config} />
}

'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { PageTransition } from '@/components/motion/PageTransition'
import { ScrollToTop } from '@/components/motion/ScrollToTop'
import { RouteMotionProvider } from '@/lib/route-motion-context'
import { resolveRouteMotion } from '@/lib/resolve-route-motion'

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const variant = resolveRouteMotion(pathname)

  return (
    <RouteMotionProvider>
      <ScrollToTop />
      <PageTransition variant={variant} routeKey={pathname}>
        {children}
      </PageTransition>
    </RouteMotionProvider>
  )
}

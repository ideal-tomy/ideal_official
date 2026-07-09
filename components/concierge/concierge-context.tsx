'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { usePathname } from 'next/navigation'
import {
  registerOpenConciergeHandler,
  type OpenConciergeBridgeOpts,
} from '@/lib/concierge/open-bridge'
import {
  resolvePageContext,
  type ConciergePageContext,
} from '@/lib/concierge/page-context'

type ConciergeContextValue = {
  open: boolean
  setOpen: (v: boolean) => void
  serviceHint: string | undefined
  pageContext: ConciergePageContext | undefined
  /** オープンごとに増分 — フローコンポーネントの key 用 */
  flowSessionNonce: number
  openConcierge: (opts?: OpenConciergeBridgeOpts) => void
}

const ConciergeContext = createContext<ConciergeContextValue | null>(null)

export function ConciergeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '/'
  const [open, setOpen] = useState(false)
  const [serviceHint, setServiceHint] = useState<string | undefined>()
  const [pageContext, setPageContext] = useState<
    ConciergePageContext | undefined
  >()
  const [flowSessionNonce, setFlowSessionNonce] = useState(0)

  const openConcierge = useCallback(
    (opts?: OpenConciergeBridgeOpts) => {
      const resolved =
        opts?.pageContext ?? resolvePageContext(pathname)
      const hint =
        opts?.serviceHint ??
        resolved.serviceId ??
        undefined

      setFlowSessionNonce((n) => n + 1)
      setServiceHint(hint)
      setPageContext(resolved)
      setOpen(true)
    },
    [pathname],
  )

  useEffect(() => {
    registerOpenConciergeHandler((opts) => {
      openConcierge(opts)
    })
    return () => registerOpenConciergeHandler(null)
  }, [openConcierge])

  const close = useCallback((v: boolean) => {
    setOpen(v)
    if (!v) {
      setServiceHint(undefined)
      setPageContext(undefined)
    }
  }, [])

  const value = useMemo(
    () => ({
      open,
      setOpen: close,
      serviceHint,
      pageContext,
      flowSessionNonce,
      openConcierge,
    }),
    [close, flowSessionNonce, open, openConcierge, pageContext, serviceHint],
  )

  return (
    <ConciergeContext.Provider value={value}>
      {children}
    </ConciergeContext.Provider>
  )
}

export function useConcierge(): ConciergeContextValue {
  const ctx = useContext(ConciergeContext)
  if (!ctx) {
    throw new Error('useConcierge must be used within ConciergeProvider')
  }
  return ctx
}

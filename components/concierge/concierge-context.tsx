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
  /** Footer / Welcome 表示中（右下 FAB を隠す） */
  footerGreetingVisible: boolean
  setFooterGreetingVisible: (v: boolean) => void
  /** 入室あいさつ表示中 */
  welcomeVisible: boolean
  setWelcomeVisible: (v: boolean) => void
  /** 入室あいさつ完了（または不要）— Footer 発火の許可 */
  welcomeReady: boolean
  setWelcomeReady: (v: boolean) => void
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
  const [footerGreetingVisible, setFooterGreetingVisible] = useState(false)
  const [welcomeVisible, setWelcomeVisible] = useState(false)
  const [welcomeReady, setWelcomeReady] = useState(false)

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
      footerGreetingVisible,
      setFooterGreetingVisible,
      welcomeVisible,
      setWelcomeVisible,
      welcomeReady,
      setWelcomeReady,
    }),
    [
      close,
      flowSessionNonce,
      footerGreetingVisible,
      open,
      openConcierge,
      pageContext,
      serviceHint,
      welcomeReady,
      welcomeVisible,
    ],
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

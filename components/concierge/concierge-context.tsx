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
import {
  registerOpenConciergeHandler,
  type OpenConciergeBridgeOpts,
} from '@/lib/concierge/open-bridge'

type ConciergeContextValue = {
  open: boolean
  setOpen: (v: boolean) => void
  serviceHint: string | undefined
  /** オープンごとに増分 — フローコンポーネントの key 用 */
  flowSessionNonce: number
  openConcierge: (opts?: OpenConciergeBridgeOpts) => void
}

const ConciergeContext = createContext<ConciergeContextValue | null>(null)

export function ConciergeProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [serviceHint, setServiceHint] = useState<string | undefined>()
  const [flowSessionNonce, setFlowSessionNonce] = useState(0)

  const openConcierge = useCallback((opts?: OpenConciergeBridgeOpts) => {
    setFlowSessionNonce((n) => n + 1)
    setServiceHint(opts?.serviceHint)
    setOpen(true)
  }, [])

  useEffect(() => {
    registerOpenConciergeHandler((opts) => {
      openConcierge(opts)
    })
    return () => registerOpenConciergeHandler(null)
  }, [openConcierge])

  const close = useCallback((v: boolean) => {
    setOpen(v)
    if (!v) setServiceHint(undefined)
  }, [])

  const value = useMemo(
    () => ({
      open,
      setOpen: close,
      serviceHint,
      flowSessionNonce,
      openConcierge,
    }),
    [close, flowSessionNonce, open, openConcierge, serviceHint],
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

'use client'

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

export type RouteMotionPhase = 'idle' | 'exiting' | 'entering' | 'ready'

type RouteMotionContextValue = {
  phase: RouteMotionPhase
  setPhase: (phase: RouteMotionPhase) => void
  isInitialLoad: boolean
  setIsInitialLoad: (value: boolean) => void
}

const RouteMotionContext = createContext<RouteMotionContextValue | null>(null)

export function RouteMotionProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<RouteMotionPhase>('ready')
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  return (
    <RouteMotionContext.Provider
      value={{ phase, setPhase, isInitialLoad, setIsInitialLoad }}
    >
      {children}
    </RouteMotionContext.Provider>
  )
}

export function useRouteMotion(): RouteMotionContextValue {
  const ctx = useContext(RouteMotionContext)
  if (!ctx) {
    throw new Error('useRouteMotion must be used within RouteMotionProvider')
  }
  return ctx
}

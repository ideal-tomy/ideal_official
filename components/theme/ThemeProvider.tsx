'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  type ReactNode,
} from 'react'

export type ThemeMode = 'light' | 'dark'

type ThemeContextValue = {
  theme: ThemeMode
  setTheme: (mode: ThemeMode) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyLight() {
  const root = document.documentElement
  root.classList.remove('dark')
  root.classList.add('light')
  root.style.colorScheme = 'light'
}

/** 当面ライト固定。切替UIは出さない */
export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    applyLight()
  }, [])

  const setTheme = useCallback((_mode: ThemeMode) => {
    applyLight()
  }, [])

  const toggleTheme = useCallback(() => {
    applyLight()
  }, [])

  return (
    <ThemeContext.Provider
      value={{ theme: 'light', setTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}

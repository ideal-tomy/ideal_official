'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type ThemeMode = 'light' | 'dark'

type ThemeContextValue = {
  theme: ThemeMode
  setTheme: (mode: ThemeMode) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const STORAGE_KEY = 'ideal-theme'

function applyThemeClass(mode: ThemeMode) {
  const root = document.documentElement
  root.classList.toggle('dark', mode === 'dark')
  root.classList.toggle('light', mode === 'light')
  root.style.colorScheme = mode
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('dark')

  useEffect(() => {
    const root = document.documentElement
    const fromClass = root.classList.contains('dark')
      ? 'dark'
      : root.classList.contains('light')
        ? 'light'
        : null
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null
    const initial: ThemeMode =
      fromClass ??
      (stored === 'light' || stored === 'dark' ? stored : 'dark')
    setThemeState(initial)
    applyThemeClass(initial)
  }, [])

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode)
    window.localStorage.setItem(STORAGE_KEY, mode)
    applyThemeClass(mode)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [setTheme, theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
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

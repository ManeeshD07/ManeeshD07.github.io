import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeProviderContext = createContext({
  theme: 'system',
  setTheme: () => {},
})

const SUPPORTED_THEMES = new Set(['light', 'dark', 'system'])

function getSystemTheme() {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children, defaultTheme = 'system', storageKey = 'vite-ui-theme' }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return defaultTheme
    const stored = window.localStorage.getItem(storageKey)
    return stored && SUPPORTED_THEMES.has(stored) ? stored : defaultTheme
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    const activeTheme = theme === 'system' ? getSystemTheme() : theme
    root.classList.add(activeTheme)
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (theme !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      const root = window.document.documentElement
      root.classList.toggle('dark', media.matches)
      root.classList.toggle('light', !media.matches)
    }
    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      setTheme: (nextTheme) => {
        if (!SUPPORTED_THEMES.has(nextTheme)) return
        setThemeState(nextTheme)
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(storageKey, nextTheme)
        }
      },
    }),
    [theme, storageKey],
  )

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

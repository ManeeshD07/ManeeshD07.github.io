import { useMemo } from 'react'
import { useTheme } from './theme-provider'

const cycleOrder = ['light', 'dark', 'system']

export function ModeToggle({ className = '' }) {
  const { theme, setTheme } = useTheme()

  const nextTheme = useMemo(() => {
    const idx = cycleOrder.indexOf(theme)
    return cycleOrder[(idx + 1) % cycleOrder.length]
  }, [theme])

  const labelMap = {
    light: 'Switch to dark mode',
    dark: 'Follow system theme',
    system: 'Switch to light mode',
  }

  const combinedClass = ['mode-toggle', className].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      className={combinedClass}
      onClick={() => setTheme(nextTheme)}
      title={labelMap[theme] || 'Toggle color theme'}
    >
      <span aria-hidden="true" className="mode-toggle__icon">
        {theme === 'dark' ? '🌙' : theme === 'light' ? '☀️' : '🖥️'}
      </span>
      <span className="mode-toggle__text">{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
      <span className="sr-only">
        Current theme: {theme}. {labelMap[theme]}
      </span>
    </button>
  )
}

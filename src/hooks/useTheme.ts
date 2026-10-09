import { useEffect, useState } from 'react'
type Theme = 'dark' | 'light'
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111B17' : '#F7F7F2')
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* Theme still works without storage. */ }
  }, [theme])
  return { theme, toggleTheme: () => setTheme(current => current === 'dark' ? 'light' : 'dark') }
}

import { Moon, Sun } from 'lucide-react'
interface Props { theme: 'dark' | 'light'; onToggle: () => void }
export function ThemeToggle({ theme, onToggle }: Props) {
  return <button className="icon-button theme-toggle" type="button" onClick={onToggle} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
    {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
  </button>
}

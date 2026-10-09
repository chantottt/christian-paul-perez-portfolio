import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { ExperienceTimeline } from './components/sections/ExperienceTimeline'
import { Contact } from './components/sections/Contact'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  return <><Navbar theme={theme} onToggleTheme={toggleTheme} /><main id="main" tabIndex={-1}><Hero /><About /><Skills /><Projects /><ExperienceTimeline /><Contact /></main><Footer /></>
}

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../../data/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'
import { ThemeToggle } from '../ui/ThemeToggle'

interface Props { theme: 'dark' | 'light'; onToggleTheme: () => void }
export function Navbar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const menuButton = useRef<HTMLButtonElement>(null)
  const menu = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  useEffect(() => {
    if (!open) return
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus() }
      if (event.key === 'Tab') {
        const links = menu.current?.querySelectorAll<HTMLAnchorElement>('a')
        if (!links?.length) return
        const first = links[0], last = links[links.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); menuButton.current?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); menuButton.current?.focus() }
      }
    }
    const media = window.matchMedia('(min-width: 900px)')
    const onResize = () => { if (media.matches) setOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    media.addEventListener('change', onResize)
    return () => { document.removeEventListener('keydown', onKeyDown); media.removeEventListener('change', onResize) }
  }, [open])
  function navigate(id: string) {
    setOpen(false)
    window.setTimeout(() => document.getElementById(id)?.focus({ preventScroll: true }), 0)
  }
  return <header className="site-header">
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="container navbar">
      <a href="#home" className="logo" aria-label="Christian Paul Perez, home" onClick={() => navigate('home')}>CP<span>.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(item => <a key={item.id} href={'#' + item.id} aria-current={active === item.id ? 'location' : undefined} onClick={() => navigate(item.id)}>{item.label}</a>)}
      </nav>
      <div className="nav-actions">
        <span className="nav-note">CHRISTIAN PAUL PEREZ</span>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <button className="icon-button mobile-toggle" ref={menuButton} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </div>
    <AnimatePresence>
      {open && <motion.nav ref={menu} id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={reduced ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: reduced ? 0 : 0.18 }}>
        {navigation.map(item => <a key={item.id} href={'#' + item.id} aria-current={active === item.id ? 'location' : undefined} onClick={() => navigate(item.id)}>{item.label}<span>0{navigation.indexOf(item) + 1}</span></a>)}
      </motion.nav>}
    </AnimatePresence>
  </header>
}

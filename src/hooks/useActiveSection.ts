import { useEffect, useState } from 'react'
import { navigation } from '../data/portfolio'

export function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const update = () => {
      let current: string = 'home'
      for (const { id } of navigation) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.36) current = id
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = 'contact'
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return active
}

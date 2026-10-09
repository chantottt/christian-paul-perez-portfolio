import { ArrowUpRight } from 'lucide-react'
import { portfolio } from '../../data/portfolio'
export function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><a className="logo footer-logo" href="#home" aria-label="Back to home">CP<span>.</span></a><p>© 2026 {portfolio.name}<span> · Academic work, thoughtfully presented.</span></p><a className="footer-top" href="#home">Back to top <ArrowUpRight size={16} /></a></div></footer>
}

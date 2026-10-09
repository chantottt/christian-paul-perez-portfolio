import { motion, useReducedMotion } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, Download, Github, Mail } from 'lucide-react'
import { portfolio } from '../../data/portfolio'
import { useVerifiedAsset } from '../../hooks/useVerifiedAsset'
import { assetUrl } from '../../utils/assetUrl'

export function Hero() {
  const reduced = useReducedMotion()
  const resumeUrl = useVerifiedAsset(assetUrl(portfolio.resumePath))

  return <section id="home" className="hero section-anchor" tabIndex={-1} aria-labelledby="hero-heading">
    <div className="container">
      <div className="hero-topline"><span>CHRISTIAN PAUL PEREZ / SOFTWARE TESTING PORTFOLIO</span><span>SELECTED WORK · 2025—2026</span></div>
      <div className="hero-layout">
        <motion.div className="hero-main" initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <h1 id="hero-heading">Better software starts with <em>better testing.</em></h1>
          <p className="hero-description">{portfolio.biography}</p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#projects">Explore My Projects <ArrowUpRight size={18} /></a>
            <a className="button button-secondary" href={portfolio.linkedinUrl} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight size={18} /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </motion.div>
        <motion.aside className="hero-aside" initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} aria-label="About Christian">
          <span className="hero-aside-index">01 / INTRODUCTION</span>
          <figure className="hero-portrait"><img src={assetUrl(portfolio.profileImagePath)} alt="Portrait of Christian Paul Perez smiling in a white shirt" width="810" height="1080" fetchPriority="high" decoding="async" /></figure>
          <p className="hero-name">Christian<br />Paul Perez<span>.</span></p>
          <p className="hero-role">{portfolio.headline}</p>
          <div className="hero-socials">
            {portfolio.githubUrl && <a href={portfolio.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={16} />GitHub<span className="sr-only"> (opens in a new tab)</span></a>}
            {portfolio.email && <a href={'mailto:' + portfolio.email}><Mail size={16} />Email</a>}
            {resumeUrl && <a href={resumeUrl} download="Christian-Paul-Perez-Resume.pdf"><Download size={16} />Download Resume</a>}
          </div>
        </motion.aside>
      </div>
      <div className="hero-bottomline"><span>QUALITY ASSURANCE · FUNCTIONAL & REGRESSION TESTING</span><a href="#projects">SCROLL TO WORK <ArrowDownRight size={17} /></a></div>
    </div>
  </section>
}

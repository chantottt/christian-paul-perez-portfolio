import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { portfolio } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'

export function Contact() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  async function copyEmail() {
    try { await navigator.clipboard.writeText(portfolio.email); setCopyStatus('copied') }
    catch { setCopyStatus('failed') }
  }

  return <section id="contact" className="section contact-section section-anchor" tabIndex={-1} aria-labelledby="contact-title"><div className="container"><Reveal><div className="contact-panel">
    <div className="contact-intro"><span className="contact-eyebrow">05 / LET'S CONNECT</span><h2 id="contact-title">{portfolio.contactHeading}</h2><p>{portfolio.contactMessage}</p></div>
    <div className="contact-links">
      <a href={portfolio.linkedinUrl} target="_blank" rel="noopener noreferrer"><span><Linkedin size={18} />Connect on LinkedIn<span className="sr-only"> (opens in a new tab)</span></span><ArrowUpRight size={21} /></a>
      {portfolio.githubUrl && <a href={portfolio.githubUrl} target="_blank" rel="noopener noreferrer"><span><Github size={18} />GitHub<span className="sr-only"> (opens in a new tab)</span></span><ArrowUpRight size={21} /></a>}
      {portfolio.email && <div className="contact-email-row"><a href={'mailto:' + portfolio.email}><span><Mail size={18} />{portfolio.email}</span><ArrowUpRight size={21} /></a><button className="icon-button" onClick={copyEmail} aria-label={copyStatus === 'copied' ? 'Email copied' : 'Copy email'}>{copyStatus === 'copied' ? <Check size={17} /> : <Copy size={17} />}</button></div>}
      {portfolio.phone && <a href={'tel:+63' + portfolio.phone.slice(1)}><span><Phone size={18} />{portfolio.phone}</span><ArrowUpRight size={21} /></a>}
      {portfolio.email && <p className="copy-status" role="status">{copyStatus === 'copied' ? 'Email copied to clipboard.' : copyStatus === 'failed' ? 'Copy was unavailable. You can select the email address above.' : ''}</p>}
    </div>
  </div></Reveal></div></section>
}

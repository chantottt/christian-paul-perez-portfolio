import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Github, Globe, X } from 'lucide-react'
import type { Project } from '../../types/portfolio'
import { ProjectPreview } from './ProjectPreview'
import { assetUrl } from '../../utils/assetUrl'

export function ProjectDetails({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const lightboxClose = useRef<HTMLButtonElement>(null)
  const thumbnailTrigger = useRef<HTMLButtonElement | null>(null)
  const activeScreenshotRef = useRef<number | null>(null)
  const [selectedScreenshot, setSelectedScreenshot] = useState(0)
  const [activeScreenshot, setActiveScreenshot] = useState<number | null>(null)
  const reduced = useReducedMotion()
  const screenshots = project.screenshots
  const portraitScreenshots = screenshots.length > 0 && screenshots.every(image => image.width && image.height && image.height > image.width)
  useEffect(() => { activeScreenshotRef.current = activeScreenshot }, [activeScreenshot])

  useEffect(() => {
    const element = dialog.current
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    element?.showModal()
    document.body.style.overflow = 'hidden'
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !element) return
      const container = activeScreenshotRef.current === null ? element.querySelector('.dialog-inner') : element.querySelector('.gallery-lightbox')
      const focusable = Array.from(container?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]') ?? [])
      const first = focusable[0], last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    element?.addEventListener('keydown', trapFocus)
    return () => {
      element?.removeEventListener('keydown', trapFocus)
      element?.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus({ preventScroll: true })
    }
  }, [])

  useEffect(() => { if (activeScreenshot !== null) lightboxClose.current?.focus() }, [activeScreenshot])
  const closeLightbox = () => { setActiveScreenshot(null); requestAnimationFrame(() => thumbnailTrigger.current?.focus()) }
  const moveLightbox = (step: number) => setActiveScreenshot(current => current === null ? null : (current + step + screenshots.length) % screenshots.length)
  const activeImage = activeScreenshot === null ? null : screenshots[activeScreenshot]

  return <dialog ref={dialog} className="project-dialog" aria-labelledby="project-dialog-title" aria-describedby="project-dialog-description" onCancel={event => { event.preventDefault(); if (activeScreenshotRef.current !== null) closeLightbox(); else onClose() }} onClick={event => { if (event.target === event.currentTarget) onClose() }} onKeyDown={event => { if (activeScreenshotRef.current === null) return; if (event.key === 'ArrowLeft') { event.preventDefault(); moveLightbox(-1) } if (event.key === 'ArrowRight') { event.preventDefault(); moveLightbox(1) } }}>
    <motion.div className="dialog-inner" inert={activeScreenshot !== null} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.2 }}>
      <div className="dialog-top"><span>CASE STUDY / {project.name.toUpperCase()}</span><button className="icon-button" onClick={onClose} aria-label="Close project details"><X size={20} /></button></div>
      <ProjectPreview project={project} />
      <div className="dialog-content">
        <div className="dialog-date">{project.date}<span>Academic software project</span></div>
        <h2 id="project-dialog-title">{project.title}</h2>
        <div className="dialog-role">{project.role}</div>
        <p id="project-dialog-description">{project.description}</p>
        {project.scopeNote && <div className="scope-note"><strong>My contribution scope</strong><p>{project.scopeNote}</p></div>}
        <div className="dialog-columns">
          <div><h3>My responsibilities</h3><ul className="detail-list">{project.contributions.map(item => <li key={item}><Check size={16} /><span>{item}</span></li>)}</ul></div>
          <div><h3>Major features</h3><ul className="detail-list">{project.features.map(feature => <li key={feature}><Check size={16} /><span>{feature}</span></li>)}</ul></div>
        </div>
        <div className="dialog-stack"><h3>Technology stack</h3><ul className="tech-badges dialog-technologies">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul></div>
        {screenshots.length > 0 && <section className={'project-screenshots' + (portraitScreenshots ? ' project-screenshots-portrait' : '')} aria-labelledby="project-screenshots-title">
          <div className="gallery-heading"><h3 id="project-screenshots-title">Inside the project</h3><span>{String(selectedScreenshot + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}</span></div>
          <figure className="gallery-stage"><button type="button" onClick={event => { thumbnailTrigger.current = event.currentTarget; setActiveScreenshot(selectedScreenshot) }} aria-label={'View full-screen ' + (screenshots[selectedScreenshot].caption ?? screenshots[selectedScreenshot].alt)}><img src={assetUrl(screenshots[selectedScreenshot].src)} alt={screenshots[selectedScreenshot].alt} width={screenshots[selectedScreenshot].width} height={screenshots[selectedScreenshot].height} decoding="async" /></button><figcaption>{screenshots[selectedScreenshot].caption ?? screenshots[selectedScreenshot].alt}</figcaption></figure>
          <div className="gallery-thumbnails" aria-label="Screenshot thumbnails">{screenshots.map((screenshot, index) => <button type="button" key={screenshot.src} className={selectedScreenshot === index ? 'is-selected' : ''} onClick={() => setSelectedScreenshot(index)} aria-label={'Show ' + (screenshot.caption ?? screenshot.alt)} aria-pressed={selectedScreenshot === index}><img src={assetUrl(screenshot.src)} alt="" width={screenshot.width} height={screenshot.height} loading="lazy" decoding="async" /><span>{screenshot.caption ?? screenshot.alt}</span></button>)}</div>
        </section>}
        <div className="dialog-bottom">{project.githubUrl && <a className="button button-secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={17} />Source Code<span className="sr-only"> (opens in a new tab)</span></a>}{project.liveUrl && <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer"><Globe size={17} />Live Demo<span className="sr-only"> (opens in a new tab)</span></a>}<button className="button button-secondary" onClick={onClose}>Back to projects <ArrowUpRight size={16} /></button></div>
      </div>
    </motion.div>
    {activeImage && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Screenshot viewer" onClick={event => { if (event.target === event.currentTarget) closeLightbox() }}>
      <div className="lightbox-bar"><span>{project.name} / {String(activeScreenshot! + 1).padStart(2, '0')} of {screenshots.length}</span><button ref={lightboxClose} className="icon-button" onClick={closeLightbox} aria-label="Close screenshot viewer"><X size={22} /></button></div>
      <div className="lightbox-media"><button className="lightbox-arrow" onClick={() => moveLightbox(-1)} aria-label="Previous screenshot"><ArrowLeft size={23} /></button><img src={assetUrl(activeImage.src)} alt={activeImage.alt} width={activeImage.width} height={activeImage.height} /><button className="lightbox-arrow" onClick={() => moveLightbox(1)} aria-label="Next screenshot"><ArrowRight size={23} /></button></div>
      <div className="lightbox-footer"><span>{activeImage.caption ?? activeImage.alt}</span><a href={assetUrl(activeImage.src)} target="_blank" rel="noopener noreferrer">Open original <ArrowUpRight size={16} /><span className="sr-only"> (opens in a new tab)</span></a></div>
    </div>}
  </dialog>
}

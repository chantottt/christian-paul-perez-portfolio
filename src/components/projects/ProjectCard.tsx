import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Github, Globe } from 'lucide-react'
import type { Project } from '../../types/portfolio'
import { ProjectPreview } from './ProjectPreview'

interface Props { project: Project; index: number; onSelect: (project: Project) => void; featured: boolean }
export function ProjectCard({ project, index, onSelect, featured }: Props) {
  const reduced = useReducedMotion()
  return <motion.article layout={!reduced} className={'project-card' + (featured ? ' featured-card' : '')} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: reduced ? 0 : 0.35 }}>
    <div className="project-image-shell"><ProjectPreview project={project} /><span className="image-index">{String(index).padStart(2, '0')} / 04</span></div>
    <div className="project-card-content">
      <div className="project-meta"><span>{featured ? 'FEATURED QA PROJECT' : 'ACADEMIC PROJECT'}</span><span>{project.date}</span></div>
      <div className="project-title-row"><h3>{project.name}</h3><ArrowUpRight size={featured ? 28 : 22} aria-hidden="true" /></div>
      <p className="project-subtitle">{project.title.split(': ')[1] ?? 'Mobile Recipe & Meal Planning Application'}</p>
      <p className="project-role">{project.role}</p>
      <p className="project-summary">{project.summary}</p>
      <ul className="tech-badges" aria-label="Selected project technologies">{project.technologies.slice(0, featured ? 5 : 3).map(tech => <li key={tech}>{tech}</li>)}</ul>
      <div className="project-actions"><button onClick={() => onSelect(project)} aria-label={'View details for ' + project.name}>{featured ? 'View Case Study' : 'Explore Project'} <ArrowUpRight size={18} /></button>{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={project.name + ' source code (opens in new tab)'}><Github size={17} /></a>}{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={project.name + ' live demo (opens in new tab)'}><Globe size={17} /></a>}</div>
    </div>
  </motion.article>
}

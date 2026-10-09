import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { portfolio, projectFilters } from '../../data/portfolio'
import type { Project } from '../../types/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from '../projects/ProjectCard'
import { ProjectDetails } from '../projects/ProjectDetails'

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const projects: Project[] = [...portfolio.projects]
  projects.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || Number(b.categories.includes('Quality Assurance')) - Number(a.categories.includes('Quality Assurance')))
  const visible = filter === 'All' ? projects : projects.filter(project => project.categories.includes(filter))
  return <section id="projects" className="section section-anchor" tabIndex={-1} aria-labelledby="projects-title">
    <div className="container">
      <Reveal><div className="projects-heading"><div id="projects-title"><SectionHeading number="03" label="SELECTED WORK" title="Quality in practice." description="Academic projects that show how I test workflows, report issues, and collaborate with teams. Each case study states my actual role." /></div><span className="project-count">04 <span>PROJECTS</span></span></div></Reveal>
      <Reveal><div className="filter-bar projects-filters" role="group" aria-label="Filter projects by category">{projectFilters.map(category => <button key={category} aria-pressed={category === filter} onClick={() => setFilter(category)}>{category}</button>)}</div></Reveal>
      <span className="sr-only" aria-live="polite">{visible.length} {visible.length === 1 ? 'project' : 'projects'} shown</span>
      <div className="projects-grid">
        <AnimatePresence mode="popLayout">{visible.map(project => <ProjectCard key={project.id} project={project} index={projects.indexOf(project) + 1} onSelect={setSelected} featured={Boolean(project.featured)} />)}</AnimatePresence>
      </div>
      {selected && <ProjectDetails project={selected} onClose={() => setSelected(null)} />}
    </div>
  </section>
}

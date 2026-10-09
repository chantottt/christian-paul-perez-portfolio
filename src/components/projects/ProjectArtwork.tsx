import { Building2, Search, Utensils, Volleyball } from 'lucide-react'
import type { Project } from '../../types/portfolio'
const icons = { pickle: Volleyball, apartment: Building2, meal: Utensils, find: Search }
const labels = { pickle: 'COURTS. PLAYERS. CONNECTIONS.', apartment: 'DISCOVER. BOOK. BELONG.', meal: 'RECIPES. PLANS. POSSIBILITIES.', find: 'LOST. FOUND. RECONNECTED.' }
export function ProjectArtwork({ project }: { project: Project }) {
  const Icon = icons[project.theme]
  return <div className={'project-artwork artwork-' + project.theme} aria-label={project.name + ' concept artwork; not an application screenshot'}>
    <div className="artwork-grid" aria-hidden="true" />
    <div className="artwork-topline"><span>PROJECT / {project.id === 'peakpickle' ? '01' : project.id === 'mantuntamu' ? '02' : project.id === 'ma-ano-ulam' ? '03' : '04'}</span><Icon size={18} /></div>
    <div className="artwork-center"><span className="artwork-icon"><Icon size={46} strokeWidth={1.2} /></span><strong>{project.name}</strong><span className="artwork-tagline">{labels[project.theme]}</span></div>
    <div className="artwork-footnote"><span>CONCEPT ARTWORK</span><span>NO SCREENSHOT PROVIDED</span></div>
  </div>
}

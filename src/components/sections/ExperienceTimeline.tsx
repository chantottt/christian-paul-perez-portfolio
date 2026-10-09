import { portfolio } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const entries = [
  { id: 'mantuntamu', summary: 'Tested application workflows, reported bugs, contributed documentation, and supported minor frontend improvements.' },
  { id: 'peakpickle', summary: 'Participated in debugging and final testing while leading coordination and contributing full-stack features.' },
  { id: 'ma-ano-ulam', summary: 'Validated authentication, recipe search, meal planning, and data persistence through functional and regression testing.' },
  { id: 'findit', summary: 'Tested item reporting and claim workflows, and developed responsive interfaces for Barangay Lakandula.' },
]

export function ExperienceTimeline() {
  return <section id="experience" className="section experience-section section-anchor" tabIndex={-1} aria-labelledby="experience-title">
    <div className="container">
      <Reveal><div id="experience-title"><SectionHeading number="04" label="EXPERIENCE" title="Testing across projects." description="Academic software projects, with my specific responsibilities and contributions kept clear." /></div></Reveal>
      <ol className="timeline">{entries.map((entry, index) => { const project = portfolio.projects.find(item => item.id === entry.id)!; return <li key={entry.id}><Reveal><div className="timeline-row"><span className="timeline-index">{String(index + 1).padStart(2, '0')}</span><div className="timeline-date">{project.date}{project.date.includes('Present') && <span className="ongoing">ONGOING</span>}</div><div className="timeline-main"><h3>{project.name}</h3><p className="timeline-role">{project.role}</p><p>{entry.summary}</p></div></div></Reveal></li> })}</ol>
    </div>
  </section>
}

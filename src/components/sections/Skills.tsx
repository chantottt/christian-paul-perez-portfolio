import { useState } from 'react'
import { portfolio } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Skills() {
  const [category, setCategory] = useState('all')
  const groups = category === 'all' ? portfolio.skillGroups : portfolio.skillGroups.filter(group => group.id === category)

  return <section id="skills" className="section skills-section section-anchor" tabIndex={-1} aria-labelledby="skills-title">
    <div className="container">
      <Reveal><div id="skills-title"><SectionHeading number="02" label="CAPABILITIES" title="How I approach quality." description="Testing methods first, supported by technical context and clear collaboration." /></div></Reveal>
      <div className="skills-layout">
        <div className="skills-sidebar"><p>TESTING & TECHNICAL CONTEXT</p><div className="filter-bar" role="group" aria-label="Filter skills by category"><button aria-pressed={category === 'all'} onClick={() => setCategory('all')}>All skills</button>{portfolio.skillGroups.map(group => <button key={group.id} aria-pressed={category === group.id} onClick={() => setCategory(group.id)}>{group.title}</button>)}</div></div>
        <div className="skills-list">
          {groups.map((group, index) => <div key={group.id} className="skill-group"><span className="skill-index">{String(index + 1).padStart(2, '0')}</span><div><div className="skill-group-heading"><h3>{group.title}</h3><p>{group.description}</p></div><ul className="skill-items">{group.skills.map(skill => <li key={skill.name}>{skill.name}{'exposure' in skill && skill.exposure && <span className="exposure-label">Exposure</span>}</li>)}</ul></div></div>)}
        </div>
      </div>
      <p className="skills-note"><span className="exposure-label">Exposure</span> marks technologies I encountered through testing or project work rather than direct implementation.</p>
    </div>
  </section>
}

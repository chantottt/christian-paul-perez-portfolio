import { portfolio } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const focus = [
  { number: '01', title: 'Understand', text: 'Learning the expected workflow and how people actually use it.' },
  { number: '02', title: 'Test', text: 'Checking functionality, regressions, interfaces, and edge cases.' },
  { number: '03', title: 'Report', text: 'Documenting issues clearly so teams can act on them.' },
]

export function About() {
  return <section id="about" className="section about-section section-anchor" tabIndex={-1} aria-labelledby="about-title">
    <div className="container">
      <Reveal><div id="about-title"><SectionHeading number="01" label="ABOUT" title="Beyond the happy path." /></div></Reveal>
      <div className="about-layout">
        <Reveal className="about-statement"><p>{portfolio.about.introduction}</p></Reveal>
        <Reveal className="about-copy">{portfolio.about.paragraphs.map(text => <p key={text}>{text}</p>)}</Reveal>
      </div>
      <div className="about-focus">
        <div className="about-focus-label">WHAT I FOCUS ON</div>
        {focus.map(item => <Reveal key={item.number}><div className="focus-row"><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>)}
      </div>
    </div>
  </section>
}

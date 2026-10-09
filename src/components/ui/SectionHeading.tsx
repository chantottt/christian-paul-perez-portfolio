interface Props { number: string; label: string; title: string; description?: string }
export function SectionHeading({ number, label, title, description }: Props) {
  return <div className="section-heading">
    <div className="eyebrow"><span className="section-number">{number}</span><span>{label}</span><span className="eyebrow-line" /></div>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
}

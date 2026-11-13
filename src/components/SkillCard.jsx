export default function SkillCard({ index, label, title, description }) {
  return (
    <div className="skill-cell">
      <span className="mono">
        {String(index).padStart(2, '0')} / {label}
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

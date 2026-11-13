export default function Section({
  id,
  eyebrow,
  title,
  wrapClassName = '',
  children,
}) {
  const wrapClasses = ['wrap', wrapClassName].filter(Boolean).join(' ')

  return (
    <section id={id}>
      <div className={wrapClasses}>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  )
}

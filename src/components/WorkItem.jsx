export default function WorkItem({ index, title, description, tags, href }) {
  return (
    <article className="work-item">
      <div className="work-year">{String(index).padStart(2, '0')}</div>
      <div>
        <h3 className="work-title">{title}</h3>
        <p className="work-desc">{description}</p>

        <div className="work-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a className="work-link" href={href} target="_blank" rel="noreferrer">
          View project{' '}
          <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

import { projects } from '../data'

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ul className="project-list">
        {projects.map((p) => (
          <li key={p.id} className="project-card">
            <span className="project-type">{p.type}</span>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="project-tech">
              {p.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View →
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

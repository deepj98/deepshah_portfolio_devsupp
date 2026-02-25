import { work } from '../data'

export default function WorkExperience() {
  return (
    <section>
      <h2>Work Experience</h2>
      <ul className="work-list">
        {work.map((job) => (
          <li key={job.id} className="work-item">
            <div className="work-header">
              <span className="work-role">{job.role}</span>
              <span className="work-period">{job.period}</span>
            </div>
            <p className="work-company">{job.company}</p>
            <ul className="work-points">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

import { about } from '../data'

export default function AboutContact() {
  return (
    <section>
      <h2>About & Contact</h2>
      <p className="about-bio">{about.bio}</p>
      <div className="contact-links">
        <a href={`mailto:${about.email}`}>{about.email}</a>
        {about.linkedin && (
          <a href={about.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
        {about.github && (
          <a href={about.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </section>
  )
}

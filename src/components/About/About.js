import React from 'react'
import './About.css'

const stats = [
  { num: '2+', label: 'Years of experience' },
  { num: '10+', label: 'Projects delivered' },
  { num: '3', label: 'Companies worked with' },
  { num: '8.53', label: 'B.Tech CGPA' },
]

const highlights = [
  { icon: 'fa-server', title: 'Scalable Backends', text: 'Production-ready Node.js / Express / Nest.js services, REST APIs and multi-tenant architectures.' },
  { icon: 'fa-shield-halved', title: 'Secure by Design', text: 'Authentication, authorization and role-based access control built into every system.' },
  { icon: 'fa-database', title: 'Data & Performance', text: 'MongoDB & PostgreSQL modelling with query optimization for speed at scale.' },
  { icon: 'fa-robot', title: 'AI-Assisted Delivery', text: 'Leveraging AI tools and CI/CD workflows to ship reliable software faster.' },
]

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <span className="section-tag"><i className="fa-solid fa-user"></i> About Me</span>
          <h2 className="section-title">Turning ideas into reliable, scalable software</h2>
        </div>

        <div className="about-grid">
          <div className="about-bio" data-aos="fade-up">
            <p>
              I'm <strong>Manthan Panchal</strong>, a MERN Stack developer based in
              Ahmedabad, Gujarat. I specialize in building scalable server-side systems,
              clean RESTful APIs and production-ready CI/CD workflows.
            </p>
            <p>
              Currently a <strong>Node.js Developer at Thinktanker</strong>, I work on
              production-grade systems using Node.js, Express, MongoDB and PostgreSQL —
              contributing across backend and frontend, building multi-tenant CRM
              architecture with role-based access, and optimizing database performance.
            </p>
            <p>
              I hold a Bachelor's in Information Technology (CGPA 8.53) and enjoy combining
              solid engineering fundamentals with modern AI-assisted development to deliver
              efficient, user-friendly products.
            </p>

            <div className="about-stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-highlights" data-aos="fade-up" data-aos-delay="100">
            {highlights.map((h) => (
              <div className="highlight card" key={h.title}>
                <div className="hl-icon"><i className={`fa-solid ${h.icon}`}></i></div>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

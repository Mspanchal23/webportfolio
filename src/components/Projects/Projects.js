import React from 'react'
import './Projects.css'
import code1 from '../../assets/images/code1.png'
import code2 from '../../assets/images/code2.png'
import code3 from '../../assets/images/code3.png'

const projects = [
  {
    title: 'Connecti5',
    tagline: 'Live web platform',
    description:
      'A production web platform where I worked across the stack — building RESTful APIs, secure authentication and responsive interfaces for a smooth, scalable user experience.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    gif: 'https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif',
    fallback: code1,
    link: 'https://connecti5.com/',
    status: 'live',
  },
  {
    title: 'CRM — Nirant Computers',
    tagline: 'Multi-tenant CRM',
    description:
      'A multi-tenant CRM with role-based access control, dashboards and REST APIs. Focused on secure authentication, clean data modelling and optimized database performance.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js'],
    gif: 'https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif',
    fallback: code2,
    link: 'https://crm.nirantcomputers.com/',
    status: 'private',
  },
  {
    title: 'POS — Shree Gurukrupa Dairy',
    tagline: 'Point-of-sale system',
    description:
      'A point-of-sale system handling billing, inventory and sales reporting. Built reliable APIs and a fast, role-based dashboard for day-to-day business operations.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'REST APIs'],
    gif: 'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif',
    fallback: code3,
    link: 'https://pos.shreegurukrupadairy.in/',
    status: 'private',
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head center">
          <span className="section-tag"><i className="fa-solid fa-folder-open"></i> Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real production work. Some apps are private company products — happy to walk you
            through a live demo on request.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article className="project-card card" key={p.title} data-aos="fade-up" data-aos-delay={i * 90}>
              <div className="pc-media">
                <img
                  src={p.gif}
                  alt={p.title}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = p.fallback }}
                />
                <span className={`pc-status ${p.status}`}>
                  {p.status === 'live' ? (
                    <><span className="live-dot"></span> Live</>
                  ) : (
                    <><i className="fa-solid fa-lock"></i> Private</>
                  )}
                </span>
              </div>

              <div className="pc-body">
                <span className="pc-tagline">{p.tagline}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <ul className="pc-tech">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="pc-foot">
                  {p.status === 'live' ? (
                    <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-primary pc-btn">
                      Visit Live <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  ) : (
                    <span className="pc-private">
                      <i className="fa-solid fa-lock"></i> Private project — demo on request
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta">
          <a href="https://github.com/Mspanchal23" target="_blank" rel="noreferrer" className="btn btn-ghost">
            <i className="fa-brands fa-github"></i> See more on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

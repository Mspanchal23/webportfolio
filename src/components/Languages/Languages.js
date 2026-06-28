import React from 'react'
import './Languages.css'

const groups = [
  {
    icon: 'fa-laptop-code',
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    icon: 'fa-server',
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Nest.js', 'RESTful APIs', 'Authentication / JWT', 'MVC Architecture'],
  },
  {
    icon: 'fa-database',
    title: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Query Optimization'],
  },
  {
    icon: 'fa-toolbox',
    title: 'Tools & DevOps',
    items: ['Git & GitHub', 'CI/CD Workflows', 'Vercel', 'Netlify', 'AI Development Tools', 'API Integration'],
  },
]

const Languages = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head center">
          <span className="section-tag"><i className="fa-solid fa-layer-group"></i> My Skillset</span>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle">
            A focused, full-stack toolkit for building and shipping production-grade web applications.
          </p>
        </div>

        <div className="skills-grid">
          {groups.map((g, i) => (
            <div className="skill-card card" key={g.title} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="skill-head">
                <span className="skill-icon"><i className={`fa-solid ${g.icon}`}></i></span>
                <h3>{g.title}</h3>
              </div>
              <ul className="skill-tags">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages

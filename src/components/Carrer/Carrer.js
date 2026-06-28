import React from 'react'
import './Carrer.css'
import cv from '../../assets/cv/cv.pdf'

const experience = [
  {
    role: 'Node.js Developer',
    company: 'Thinktanker',
    url: 'https://thinktanker.io/',
    period: 'Present',
    current: true,
    points: [
      'Build scalable production systems with Node.js, Express, MongoDB & PostgreSQL.',
      'Designed multi-tenant CRM architecture with role-based access control.',
      'Built REST APIs, secure authentication and optimized database performance.',
      'Collaborated with AI tools and CI/CD workflows for reliable deployments.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Gravitas Technosoft',
    period: '2024 – 2025',
    points: [
      'Developed scalable production applications across backend and frontend.',
      'Designed and maintained RESTful APIs with secure auth & authorization.',
      'Improved database efficiency for better application performance.',
    ],
  },
  {
    role: 'Node.js Developer',
    company: 'Future Bee Digital',
    period: '2023 – 2024',
    points: [
      'Built backend & dashboard APIs using Node.js, Express and MongoDB.',
      'Maintained RESTful APIs with secure authentication and authorization.',
      'Optimized database performance for better speed and reliability.',
    ],
  },
]

const education = [
  {
    degree: 'Bachelor in Information Technology',
    school: 'Silver Oak University',
    period: '2022 – 2025',
    score: 'CGPA 8.53',
  },
  {
    degree: 'Diploma in Information Technology',
    school: 'Ganpat University',
    period: '2019 – 2022',
    score: 'CGPA 7.58',
  },
]

const Carrer = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head center">
          <span className="section-tag"><i className="fa-solid fa-briefcase"></i> Career</span>
          <h2 className="section-title">Experience &amp; Education</h2>
          <p className="section-subtitle">
            My professional journey building production software and the foundation behind it.
          </p>
        </div>

        <div className="career-grid">
          {/* Experience timeline */}
          <div className="timeline-col" data-aos="fade-right">
            <h3 className="col-title"><i className="fa-solid fa-code-branch"></i> Work Experience</h3>
            <div className="timeline">
              {experience.map((job) => (
                <div className="tl-item" key={job.company + job.period}>
                  <span className="tl-dot"></span>
                  <div className="tl-card card">
                    <div className="tl-top">
                      <h4>{job.role}</h4>
                      {job.current && <span className="now-badge">Current</span>}
                    </div>
                    <div className="tl-meta">
                      {job.url ? (
                        <a className="company company-link" href={job.url} target="_blank" rel="noreferrer">
                          {job.company} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                      ) : (
                        <span className="company">{job.company}</span>
                      )}
                      <span className="period">{job.period}</span>
                    </div>
                    <ul>
                      {job.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="timeline-col" data-aos="fade-left">
            <h3 className="col-title"><i className="fa-solid fa-graduation-cap"></i> Education</h3>
            <div className="timeline">
              {education.map((edu) => (
                <div className="tl-item" key={edu.school}>
                  <span className="tl-dot"></span>
                  <div className="tl-card card">
                    <div className="tl-top">
                      <h4>{edu.degree}</h4>
                      <span className="score-badge">{edu.score}</span>
                    </div>
                    <div className="tl-meta">
                      <span className="company">{edu.school}</span>
                      <span className="period">{edu.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a href={cv} download="Manthan-Panchal-Resume.pdf" className="btn btn-ghost resume-btn">
              <i className="fa-solid fa-file-arrow-down"></i> Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carrer

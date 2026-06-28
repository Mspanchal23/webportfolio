import React from 'react'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="footer-logo">
          <span className="logo-mark">MP</span>
          Manthan Panchal
        </a>

        <nav className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-social">
          <a href="https://www.linkedin.com/in/manthanpanchal237/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Mspanchal23" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/manthan_237/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:manthanpanchal649@gmail.com" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-stack">
          MERN Stack Developer&nbsp; • &nbsp;React&nbsp; • &nbsp;Node.js&nbsp; • &nbsp;Express.js&nbsp; • &nbsp;Nest.js&nbsp; • &nbsp;Next.js&nbsp; • &nbsp;MongoDB&nbsp; • &nbsp;PostgreSQL&nbsp; • &nbsp;REST APIs
        </p>
        <span>© {year} Manthan Panchal. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer

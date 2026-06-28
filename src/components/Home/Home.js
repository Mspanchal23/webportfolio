import React from 'react'
import './Home.css'
import cv from '../../assets/cv/cv.pdf'

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text" data-aos="fade-up">
          <span className="status-pill">
            <span className="dot"></span> Available for freelance &amp; full-time roles
          </span>

          <h1>
            Hi, I'm <span className="grad">Manthan Panchal</span>
            <br />
            <span className="role">MERN Stack&nbsp;</span>
            <span className="role accent">Developer</span>
          </h1>

          <p className="hero-desc">
            I build fast, scalable web applications and production-grade REST APIs with
            <strong> Node.js, React, Next.js, MongoDB &amp; PostgreSQL</strong> — backed by secure
            authentication, CI/CD workflows and AI-assisted development.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Hire Me <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href={cv} download="Manthan-Panchal-Resume.pdf" className="btn btn-ghost">
              <i className="fa-solid fa-download"></i> Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <span>Connect</span>
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

        <div className="hero-visual" data-aos="fade-left">
          <div className="cw-shell">
          <div className="code-window">
            <div className="cw-bar">
              <span className="cw-dots"><i></i><i></i><i></i></span>
              <span className="cw-file">developer.js</span>
            </div>
            <pre className="cw-code">
<span className="cw-line"><span className="ln">1</span><span className="c-com">{"// MERN Stack Developer"}</span></span>
<span className="cw-line"><span className="ln">2</span><span className="c-key">const</span> <span className="c-var">manthan</span> <span className="c-op">=</span> <span className="c-pun">{'{'}</span></span>
<span className="cw-line"><span className="ln">3</span>  <span className="c-prop">name</span>: <span className="c-str">"Manthan Panchal"</span>,</span>
<span className="cw-line"><span className="ln">4</span>  <span className="c-prop">role</span>: <span className="c-str">"MERN Stack Developer"</span>,</span>
<span className="cw-line"><span className="ln">5</span>  <span className="c-prop">stack</span>: [<span className="c-str">"Node"</span>, <span className="c-str">"React"</span>, <span className="c-str">"Next"</span>],</span>
<span className="cw-line"><span className="ln">6</span>  <span className="c-prop">database</span>: [<span className="c-str">"MongoDB"</span>, <span className="c-str">"PostgreSQL"</span>],</span>
<span className="cw-line"><span className="ln">7</span>  <span className="c-prop">available</span>: <span className="c-bool">true</span>,</span>
<span className="cw-line"><span className="ln">8</span>  <span className="c-fn">build</span>: () <span className="c-op">=&gt;</span> <span className="c-str">"scalable apps"</span> <span className="cw-caret">|</span></span>
<span className="cw-line"><span className="ln">9</span><span className="c-pun">{'}'}</span>;</span>
            </pre>
            <div className="cw-status">
              <span className="cw-run"><i className="fa-solid fa-circle-play"></i> running</span>
              <span className="cw-ok">✓ build passed</span>
            </div>
          </div>

          <div className="float-card fc-1">
            <i className="fa-brands fa-node-js"></i>
            <div>
              <strong>2+ yrs</strong>
              <span>Backend / MERN</span>
            </div>
          </div>
          <div className="float-card fc-2">
            <i className="fa-solid fa-code"></i>
            <div>
              <strong>10+</strong>
              <span>Production projects</span>
            </div>
          </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span></span>
      </a>
    </section>
  )
}

export default Home

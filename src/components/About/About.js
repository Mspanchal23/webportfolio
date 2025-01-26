import React from 'react'
import './About.css';

const About = () => {
  return (
    <section id="about">
        <div className="about-container">
            <div className="about-heading" data-aos="flip-left">
                <strong>About me</strong>
                <h3>Desigeing with passion for Problem Solving</h3>
                <a href="tel:8758310276">
                    +91 87-58-310-276 <i className="fa-solid fa-phone-flip"></i>
                </a>
            </div>
            <div className="about-details" data-aos="flip-right">
                <p>Backend Developer Intern with one year of experience in JavaScript, Node.js, MongoDB, and backend develop
                ment.building server-side applications,</p>
                <p>RESTful APIs, and integrating databases. possess a strong understanding
 of MERN stack development (MongoDB, Express.js, React.js, Node.js), showcasing knowledge of both frontend
 and backend technologies</p>
                <p>passionate about creating efficient, scalable solutions and enhancing user experiences
                through optimized applications</p>
            </div>
        </div>
    </section>
  )
}

export default About

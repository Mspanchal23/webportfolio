import React from 'react'
import './Summery.css';
import cv from '../../assets/cv/cv.pdf'

const Summery = () => {
  return (
    <section id="summery">
        <div className="summery-heading" data-aos="fade-right">
            <strong>My Skillset</strong>

            <h2>Technical Skillset & Expertise</h2>

            <a href={cv} download className='btn-link'>
                GET CV <i class="fa-solid fa-download"></i> 
            </a>
        </div>

        <div className="summery-details" data-aos="fade-left">
            <p>
            Proficient in Full Stack Development, specializing in React.js, Node.js, MongoDB, and Express.js. skilled in building RESTful APIs, implementing MVC architecture, 
            and creating responsive user interfaces. experienced in AWS services, database management, and advanced JavaScript. familiar with tools like Git, Tailwind CSS, Bootstrap, 
            and working with authentication systems.strong focus on problem-solving, writing clean code, and delivering scalable, user-friendly applications.
            </p>
        </div>


    </section>
  )
}

export default Summery

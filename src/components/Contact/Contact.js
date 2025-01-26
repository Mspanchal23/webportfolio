import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-down">
        <strong>What's Next Idea</strong>
        <h3>Let's Work Together!</h3>
        <p>Ready to turn your ideas into reality? Let’s build innovative and user-friendly solutions together. Whether it's a web app, 
          a complex backend system, or a creative project, I’m here to bring your vision to life with cutting-edge technologies and efficient coding practices. 
          Reach out to discuss how we can create something amazing!<br />Feel free to send me an email, and let’s start the conversation!</p>
        <a href="mailto:manthanpanchal649@gmail.com" className='btn-link contact-btn'>
            Send Me Mail <i className="fa-solid fa-envelope"></i> 
        </a>
    </section>
  )
}

export default Contact

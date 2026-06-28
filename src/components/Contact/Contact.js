import React from 'react'
import './Contact.css'

const channels = [
  {
    icon: 'fa-envelope',
    label: 'Email',
    value: 'manthanpanchal649@gmail.com',
    href: 'mailto:manthanpanchal649@gmail.com',
  },
  {
    icon: 'fa-phone',
    label: 'Phone',
    value: '+91 87583 10276',
    href: 'tel:+918758310276',
  },
  {
    icon: 'fa-location-dot',
    label: 'Location',
    value: 'Ahmedabad, Gujarat, India',
    href: 'https://maps.google.com/?q=Ahmedabad,Gujarat',
  },
  {
    icon: 'fa-linkedin-in',
    brand: true,
    label: 'LinkedIn',
    value: 'manthanpanchal237',
    href: 'https://www.linkedin.com/in/manthanpanchal237/',
  },
]

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-left" data-aos="fade-right">
            <span className="section-tag"><i className="fa-solid fa-paper-plane"></i> Contact</span>
            <h2 className="section-title">Let's build something great together</h2>
            <p className="section-subtitle">
              Have a project, a role, or a freelance idea in mind? I'm open to full-time
              opportunities and freelance work. Drop a message and I'll get back to you quickly.
            </p>

            <div className="contact-actions">
              <a href="mailto:manthanpanchal649@gmail.com" className="btn btn-primary">
                <i className="fa-solid fa-envelope"></i> Send me an email
              </a>
              <a
                href="https://wa.me/918758310276"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-right" data-aos="fade-left">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="contact-channel"
              >
                <span className="cc-icon">
                  <i className={`${c.brand ? 'fa-brands' : 'fa-solid'} ${c.icon}`}></i>
                </span>
                <span className="cc-text">
                  <small>{c.label}</small>
                  <strong>{c.value}</strong>
                </span>
                <i className="fa-solid fa-arrow-right cc-arrow"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

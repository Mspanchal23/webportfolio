import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <span>copyright &copy;2025</span>

        <div className="social-link">
        <a href="https://www.instagram.com/manthan_237/">
                    <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/manthanpanchal237/">
                    <i class="fa-brands fa-linkedin-in"></i>
                    </a>
        </div>
        <a href="#" className='footer-logo'>MS Panchal Portfolio</a>
    </footer>
  )
}

export default Footer

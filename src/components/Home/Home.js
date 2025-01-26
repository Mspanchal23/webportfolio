import React from 'react'
import './Home.css';
import MS from '../../assets/images/ms1.jpg';
const Home = () => {
  return (
    <section id='home' data-aos="fade-down">
        <div className='home-text'>
            <strong>Hello, it's me </strong>
            <h1>MS Panchal</h1>
            <p>A passionate Full Stack Developer with expertise in React.js, Node.js, and MongoDB, creating dynamic web applications. Skilled in backend technologies, with a focus on delivering innovative, efficient, and user-friendly solutions </p>
            <a href="#summery" className='btn-link'>Scroll For Me</a>
        </div>

        <div className="home-img" data-aos="fade-up">
            <div className="img-box">
                <img src={MS} alt="MS" />

                <h2>MS Panchaal <br /><span>Full Stack Devloper</span></h2>

                <div className="social">
                    <a href="https://www.instagram.com/manthan_237/">
                    <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/manthanpanchal237/">
                    <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
                <a href="#!" className='hire-me'>Hire me</a>
            </div>
        </div>
    </section>
  )
}

export default Home

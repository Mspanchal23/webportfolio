import React from 'react'
import './Carrer.css';
import CV from '../../assets/cv/cv.pdf'

const Carrer = () => {

    const carrers = [
        {
            title: "Front-end Devloper(Intern)",
            name: "Future-bee-digital",
        },
        {
            title: "Back-end Devloper(intern)",
            name: "future-bee-digital",
        }
    ]

    const education = [
        {
            title: "Diploma",
            name: "Ganpat University",
            year: "2019-2022"
        },
        {
            title: "B-Tech",
            name: "Silver Oak University",
            year: "2022-2025"
        }
    ]

  return (
    <section id="carrer">
        <div className="carrer-education">
            <div className="carrer" data-aos="fade-right">
                <h3>Carrer</h3>

                <div className="c-b-container">
                    {
                        carrers.map((carrer, index) => (
                            <div className="c-box" key={index}>
                                <h4>{carrer.title}</h4>
                                <strong>{carrer.name}</strong>
                                <span>{carrer.year}</span>
                            </div>
                        ))
                    }
                </div>
                
            </div>

            <div className="carrer edu" data-aos="fade-left">
                <h3>Education</h3>

                <div className="c-b-container">
                    {
                        education.map((carrer, index) => (
                            <div className="c-box" key={index}>
                                <h4>{carrer.title}</h4>
                                <strong>{carrer.name}</strong>
                                <span>{carrer.year}</span>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>

        <div className="btn-c">
                <a href={CV} download className='btn-link'>
                    Get CV <i class="fa-solid fa-download"></i>
                </a>
            </div>
    </section>
  )
}

export default Carrer

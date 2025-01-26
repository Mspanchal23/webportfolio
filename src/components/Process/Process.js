import React from 'react'
import './Process.css';

const Process = () => {

    const data = [
        {
            id: "01",
            tittle: "Pre-Process",
            contents: ["Collect Information", "Personas", "Setup Goals", "Project + Moodboard"]
        },
        {
            id: "02",
            tittle: "Pre-Process",
            contents: ["Collect Information", "Personas", "Setup Goals", "Project + Moodboard"]
        },
        {
            id: "03",
            tittle: "Pre-Process",
            contents: ["Collect Information", "Personas", "Setup Goals", "Project + Moodboard"]
        },
        {
            id: "04",
            tittle: "Pre-Process",
            contents: ["Collect Information", "Personas", "Setup Goals", "Project + Moodboard"]
        },
        {
            id: "05",
            tittle: "Pre-Process",
            contents: ["Collect Information", "Personas", "Setup Goals", "Project + Moodboard"]
        },
        {
            id: "06",
            tittle: "Pre-Process",
            contents: ["Collect Information", "Personas", "Setup Goals", "Project + Moodboard"]
        },
    ]
  return (
    <section id="process" data-aos="fade">
        <div className="process-heading">
            <h3>Process</h3>
        </div>

        <div className="process-container">
            {
                data.map(process => (
                    <div className="process-box" key={process.id}>
                        <span>{process.id}</span>
                        <strong>{process.tittle}</strong>
                        <ul>
                            {
                                process.contents.map(content => (
                                    <li key={content}>{content}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Process

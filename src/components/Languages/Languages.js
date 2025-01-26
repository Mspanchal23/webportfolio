import React from 'react'
import './Languages.css';

const Languages = () => {
    const data = [
        {
            title: "Frontend",
            contents: ["React.JS", "NextJS", "JavaScript"]
        },
        {
            title: "Backend",
            contents: ["NodeJS","SQL"]
        },
        {
            title: "Database",
            contents: ["Mongodb", "AWS"]
        },
        {
            title: "Soft Kill",
            contents: ["Social-media handling", "Video-editing","Content-Creater"]
        }
    ]
  return (
    <section id="languages" data-aos="fade">
        {
            data.map(item => (
                <div className="languages-box" key={item.title}>
                    <h3>{item.title}</h3>
                    <ul>
                        {
                            item.contents.map(content =>(
                                <li key={content}>{content}</li>
                            ))
                        }
                    </ul>
                </div>
            ))
        }
    </section>
  )
}

export default Languages

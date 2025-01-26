import React from "react";
import "./Projects.css";
import code1 from "../../assets/images/code1.png";
import code2 from "../../assets/images/code2.png";
import code3 from "../../assets/images/code3.png";
import code4 from "../../assets/images/code4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const Projects = () => {
  const data = [
    {
      src: code2,
      url: "#Coming Soon",
    },
    {
      src: code1,
      url: "#Coming Soon",
    },
    {
      src: code3,
      url: "#Coming Soon",
    },
    {
      src: code4,
      url: "#Coming Soon",
    },
  ];

  return (
    <section id="projects">
      <div className="project-heading">
        <h3>Recent Projects</h3>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((project) => (
          <SwiperSlide key={project.src}>
            <div className="project-box">
              <a href={project.url}>
                <img src={project.src} alt="Project" />
                <div className="p-overlayer">
                  <strong>Outserved Reports</strong>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="github-btn">
        <a href="https://gitlab.com/Mspanchal23" className="btn-link">
          My Git <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Projects;

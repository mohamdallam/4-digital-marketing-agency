import React from "react";
import "../../styles/about.css";
import aboutImg from "../../assets/images/about-us.jpg";

const ABOUT__DATA = [
  {
    icon: "ri-wifi-fill",
    title: "First Working Process",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Molestiasat Excepturi unde, necessitatibus libero exercitationem esse quod Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },

  {
    icon: "ri-team-line",
    title: "Dedicated Team",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Molestiasat Excepturi unde, necessitatibus libero exercitationem esse quod Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },

  {
    icon: "ri-customer-service-2-line",
    title: "24 Hours Support",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Molestiasat Excepturi unde, necessitatibus libero exercitationem esse quod Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Why Choose Us</h6>
            <h2>Specialist in bla bla bla</h2>
            <h2 className="highlight">Financial Challenges</h2>
            <p className="description about__content-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi unde, necessitatibus libero exercitationem esse quod.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit Excepturi
              unde, necessitatibus libero exercitationem
            </p>

            <div className="choose__item-wrapper">
              {ABOUT__DATA.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

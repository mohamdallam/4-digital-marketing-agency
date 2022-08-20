import "../../styles/services.css";
import React from "react";

const SERVICE__DATA = [
  {
    icon: "ri-apps-line",
    title: "App Development",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit alias architecto, consequatur amet obcaecati odit ",
  },

  {
    icon: "ri-code-line",
    title: "web Design",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit alias architecto, consequatur amet obcaecati odit ",
  },

  {
    icon: "ri-landscape-line",
    title: "Graphic Design",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit alias architecto, consequatur amet obcaecati odit ",
  },

  {
    icon: "ri-rocket-line",
    title: "Digital Market",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit alias architecto, consequatur amet obcaecati odit ",
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save Time and manege your business with</h2>
          <h2 className="highlight">Our Best Services</h2>
        </div>

        <div className="service__item-wrapper">
          {SERVICE__DATA.map((item, index) => (
            <div className="services__item">
              <span className="service__icon">
                <i className={item.icon}></i>
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

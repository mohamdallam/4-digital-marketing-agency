import "../../styles/hero.css";
import React from "react";
import heroImg from "../../assets/images/hero-img.png";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>we are Creating Perfect</h2>
              <h2>Digital Products To</h2>
              <h2 className="highlight">Promote Your Brand</h2>
            </div>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              aperiam veniam perspiciatis error, ab natus!
            </p>

            <div className="hero__btns">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>

          <div className="hero__img">
            <img src={heroImg} alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

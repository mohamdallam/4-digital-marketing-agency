import React from "react";
import Slider from "react-slick";
import "../../styles/testimonial.css";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than
            <span className="highlight"> 5,000 customers</span>
          </h2>
        </div>

        <div className="slider__wrapper">
          <Slider {...settings}>
            {/* 1 */}
            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia velit eum inventore, similique incidunt molestias quod
                accusantium veniam, nemo explicabo, magnam vel. Quo soluta
                corrupti quod accusamus ut rerum porro nemo maxime voluptate
                error labore, qui est, unde dolore alias!
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava01} alt="" />
                </div>

                <div className="">
                  <h5 className="customer__name">M. Allam</h5>
                  <p className="description">Lorem, ipsum dolor</p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia velit eum inventore, similique incidunt molestias quod
                accusantium veniam, nemo explicabo, magnam vel. Quo soluta
                corrupti quod accusamus ut rerum porro nemo maxime voluptate
                error labore, qui est, unde dolore alias!
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava01} alt="" />
                </div>

                <div className="">
                  <h5 className="customer__name">M. Allam</h5>
                  <p className="description">Lorem, ipsum dolor</p>
                </div>
              </div>
            </div>
            {/*3*/}
            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia velit eum inventore, similique incidunt molestias quod
                accusantium veniam, nemo explicabo, magnam vel. Quo soluta
                corrupti quod accusamus ut rerum porro nemo maxime voluptate
                error labore, qui est, unde dolore alias!
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava01} alt="" />
                </div>

                <div className="">
                  <h5 className="customer__name">M. Allam</h5>
                  <p className="description">Lorem, ipsum dolor</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

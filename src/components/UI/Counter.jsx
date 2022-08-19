import "../../styles/counter.css";
import React from "react";

const Counter = () => {
  return (
    <section className="counter">
      <div className="container">
        <div className="conter__wrapper">
          <div className="counter__item">
            <h3 className="counter__number">2000</h3>
            <h4 className="counter__title">Clients</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;

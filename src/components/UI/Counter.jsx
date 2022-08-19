import "../../styles/counter.css";
import React from "react";

const COUNTER__DATA = [
  {
    numner: "5k+",
    text: "Clients",
  },

  {
    numner: 400,
    text: "Running Projects",
  },

  {
    numner: 500,
    text: "Projects Completed",
  },
];

const Counter = () => {
  return (
    <section className="counter" id="projects">
      <div className="container">
        <div className="conter__wrapper">
          {COUNTER__DATA.map((item, index) => (
            <div className="counter__item" key={index}>
              <h3 className="counter__number">{item.numner}</h3>
              <h4 className="counter__title">{item.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;

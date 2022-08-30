import "./header.css";
import React from "react";

const NAV__LINKS = [
  {
    path: "#home",
    display: "Home",
  },

  {
    path: "#about",
    display: "About",
  },

  {
    path: "#service",
    display: "Service",
  },

  {
    path: "#projects",
    display: "Projects",
  },

  {
    path: "#blog",
    display: "Blog",
  },
];

const Header = ({ theme, toggletheme }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Digency</h2>
          </div>

          {/* ============= Navigation ============= */}
          <div className="navigation">
            <ul className="menu">
              {NAV__LINKS.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a href={item.path} className="menu__link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*=============   Light Mode =========== */}
          <div className="light__mode">
            <span onClick={toggletheme}>
              {theme === "light-theme" ? (
                <span>
                  <i className="ri-moon-line"></i> Dark Mode
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i> Light Mode
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

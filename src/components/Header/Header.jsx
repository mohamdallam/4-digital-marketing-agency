import "./header.css";
import React, { useRef, useEffect } from "react";

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
  const headerRef = useRef(null);

  const headerFun = () => {
    headerRef.current.classList.add("header__shrink");

    // if (document.body.scrollTo > 80 || document.documentElement.scrollTo > 80) {
    //   headerRef.current.classList.add("header__shrink");
    // } else {
    //   headerRef.current.classList.remove("header__shrink");
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFun);
    return () => window.removeEventListener("scroll", headerFun);
  }, []);

  // Scroll space
  const handleClick = (e) => {
    e.preventDefault();
    const targetAtt = e.target.getAttribute("href");
    const location = document.querySelector(targetAtt).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 50,
    });
  };

  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Digency</h2>
          </div>
          {/* ============= Navigation ============= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {NAV__LINKS.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a
                    href={item.path}
                    onClick={handleClick}
                    className="menu__link"
                  >
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

          {/*=============   SideBar Mobile Menu =========== */}
          <span className="mobile__menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

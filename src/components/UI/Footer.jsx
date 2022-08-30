import React from "react";
import "../../styles/footer.css";

const quickLinks01 = [
  {
    path: "#",
    display: "marketing",
  },

  {
    path: "#",
    display: "Analytics",
  },

  {
    path: "#",
    display: "Commerce",
  },
];

const quickLinks02 = [
  {
    path: "#",
    display: "Pricing",
  },

  {
    path: "#",
    display: "Documentation",
  },

  {
    path: "#",
    display: "Guides",
  },
];

const quickLinks03 = [
  {
    path: "#",
    display: "About",
  },

  {
    path: "#",
    display: "Jobs",
  },

  {
    path: "#",
    display: "Blog",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>Digency</h2>
            <p className="description">Grow with us</p>
            <p className="small__text description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              ipsum qui voluptatum. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nostrum ipsum qui voluptatum.
            </p>
          </div>

          {/* 1 */}
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Solution</h3>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/*  2 */}
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Company</h3>
            <ul className="quick__links">
              {quickLinks02.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3 */}
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Support</h3>
            <ul className="quick__links">
              {quickLinks03.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="copyright">
          Copyright {year} ,developer by Allam All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

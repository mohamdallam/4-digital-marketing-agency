import React from "react";
import "../../styles/team.css";
import team01 from "../../assets/images/team-01.png";
import team03 from "../../assets/images/team-03.png";
import team04 from "../../assets/images/team-04.png";

const TeamMembers = [
  {
    imgUrl: team01,
    name: "Allam",
    position: "Full Stack",
  },

  {
    imgUrl: team04,
    name: "Allam",
    position: "Full Stack",
  },

  {
    imgUrl: team03,
    name: "Allam",
    position: "Full Stack",
  },

  {
    imgUrl: team04,
    name: "Allam",
    position: "Full Stack",
  },
];

const Team = () => {
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet With <span className="highlight">Our Team</span>
          </h2>
        </div>

        <div className="team__wrapper">
          {TeamMembers.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="team__member-social">
                  <span>
                    <i class="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i class="ri-twitter-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

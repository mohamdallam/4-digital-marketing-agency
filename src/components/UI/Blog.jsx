import React from "react";
import "../../styles/blog.css";
import videoImg from "../../assets/images/video.png";
import caseStudy from "../../assets/images/case-study.png";
import articleImg from "../../assets/images/article.png";

const BlogData = [
  {
    imgUrl: videoImg,
    title: "video",
    desc: "To Know About Work Watch some Video....",
    linkUrl: "#",
  },

  {
    imgUrl: caseStudy,
    title: "video",
    desc: "To Know About Work Watch some Video....",
    linkUrl: "#",
  },

  {
    imgUrl: articleImg,
    title: "video",
    desc: "To Know About Work Watch some Video....",
    linkUrl: "#",
  },
];

const Blog = () => {
  return (
    <section>
      <div className="container">
        <div className="blog__top-content">
          <h6 className="subtitle">Our Blog</h6>
          <h2>
            Lets Have A Look From Our
            <span className="highlight"> recent blog</span>
          </h2>
        </div>

        <div className="blog__wrapper">
          {BlogData.map((item, index) => (
            <div className="blog__item" key={index}>
              <h3>{item.title}</h3>
              <div className="blog__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <p className="description blog-desc">{item.desc}</p>
              <div>
                <a href={item.linkUrl} className="learn__more">
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

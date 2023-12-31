import React from "react";
import image_1 from "../../../assets/images/Image1.png";
import { Link } from "react-router-dom";
import "../HomeMainSections/AboutcompanySection.css";
import Button from "../../Generics/Button";

const AboutcompanySection = () => {
  return (
    <>
      <section className="about-company">
        <div className="container">
          <div className="content">
            <img src={image_1} alt="Lady with a laptop" />
            <div className="image-box-text">
              <h4>
                Samantha Brown, <span>Founder</span>
              </h4>
              <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
          </div>

          <div className="about-company-items">
            <div>
              <h3>About Company</h3>
              <h2>We Are Business Consulting & Credit Repair Experts</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam officiis quas assumenda esse obcaecati? Ex esse error
                voluptates iure vel totam eos.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam officiis quas assumenda esse obcaecati? Ex esse error
                voluptates iure vel totam eos.
              </p>
            </div>

            <div className="play-button-text">
              <Button type="yellow" title="Learn More" url="about" />

              <div className="center-content">
                <Link className="btn-play" to="intro">
                  <i className="fa-solid fa-play"></i>
                </Link>
                <p>Intro Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutcompanySection;

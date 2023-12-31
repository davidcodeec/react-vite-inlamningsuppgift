import React from "react";
import { Link } from "react-router-dom";
import icon_6 from "../../../assets/images/icon6.svg";
import icon_7 from "../../../assets/images/icon7.svg";
import icon_8 from "../../../assets/images/icon8.svg";
import icon_9 from "../../../assets/images/icon9.svg";
import BG from "../../../assets/images/BG.svg";
import image_7 from "../../../assets/images/image7.png";
import "./ChooseUsSection.css";
import ChooseUseBox from "../../Generics/MainGenerics/ChooseUseBox";

const ChooseUsSection = () => {
  return (
    <>
      <section className="choose-us-section">
        <div className="container">
          <div className="section-title">
            <div>
              <p>Why Choose Us</p>
              <h2>Why We Are The Best Business Consulting Agency</h2>
            </div>
            <div className="choose-us">
              <ChooseUseBox
                src={icon_6}
                alt="Hand picture"
                title="Process Excellence"
                description="Lorem ipsum dolor sit amet consectetur"
              />

              <ChooseUseBox
                src={icon_7}
                alt="Phone with other products"
                title="Strategic Planning"
                description="Lorem, ipsum dolor sit amet consectetur"
              />

              <ChooseUseBox
                src={icon_8}
                alt="Book and cup"
                title="Experience Design"
                description="Lorem ipsum dolor, sit amet consectetur"
              />

              <img src={icon_9} alt="Laptop on the desk" />
              <div className="choose-us-icon-text">
                <h3>Artificial Inteligence</h3>
                <p>Lorem ipsum dolor sit, amet consectetur</p>
              </div>
            </div>
          </div>

          <div className="choose-us-image">
            <img className="image-move" src={BG} alt="Gray background" />
            <img
              className="image-move1"
              src={image_7}
              alt="Two females discussing"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUsSection;

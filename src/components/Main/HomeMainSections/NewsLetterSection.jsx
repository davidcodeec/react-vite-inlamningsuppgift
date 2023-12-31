import React from "react";
import "../HomeMainSections/NewsLetterSection.css";
import icon_15 from "../../../assets/images/icon15.svg";
import Button from "../../Generics/Button";

const NewsLetterSection = () => {
  return (
    <section className="newsletter">
      <img
        className="newsletter-background-lines"
        src={icon_15}
        alt="Image Line"
      />
      <div className="container">
        <h2>Get News Updates By Signup</h2>
        <form>
          <input
            type="text"
            name=""
            defaultValue=""
            placeholder="username@domain.com"
          />
          <Button type="yellow" title="Subscribe" url="/subscribe" />
        </form>
      </div>
    </section>
  );
};

export default NewsLetterSection;

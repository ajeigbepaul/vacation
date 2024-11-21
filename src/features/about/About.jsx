import React from "react";
import Header from "../../components/header/Header";
import "./About.css";
import Info from "../../components/about/Info";
import InfoImage from "../../components/about/InfoImage";

const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="about__container">
        <Info />
        <InfoImage />
      </div>
    </div>
  );
};

export default About;

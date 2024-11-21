import React from "react";
import infoImage from "../../assets/hero.jpg"
const InfoImage = () => {
  return (
    <div className="about__image">
      <img src={infoImage} width={400} height={400} />
    </div>
  );
};

export default InfoImage;

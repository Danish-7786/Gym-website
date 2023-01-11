import React from "react";
import "./Hero.css";
import Header from "../header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="heroText">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        
          <div className="Numbers">
            <span>+10</span>
            <span>+200</span>
            <span>+30</span>

            <span className="val">Expert Coaches</span>
            <span className="val"> Members Joined</span>
            <span className="val">Fitness Programs</span>
          </div>
          <div className="hero-button">
            <button className="btn hero-btn">Get Started</button>
            <button className="btn hero-btn2">Learn More</button>
          </div>
      
      </div>
      <div className="right-h">
        <button className="btn rightbtn">Join Now</button>
        {/* Heart Rate */}
        <div className="heart-rate">
          <img src={Heart} alt="" width={32} />

          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        {/* Hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
{/* Calories  */}
<div className="calories">
  <img src={Calories} alt="" />
  <div className="text">
  <span>Calories Burned</span>
  <span>786 kcal</span>

  </div>
</div>
      </div>
    </div>
  );
};

export default Hero;

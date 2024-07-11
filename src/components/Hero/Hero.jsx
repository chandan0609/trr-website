import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/about");
  };

  return (
    <>
      <div className="hero container">
        <div className="hero-text">
          <h1>Hello!</h1>
          <h1>Welcome</h1>
          <button className="btn" onClick={handleReadMoreClick}>
            Read More <img src={dark_arrow} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;

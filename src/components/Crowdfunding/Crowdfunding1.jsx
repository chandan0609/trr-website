import React from "react";
import { Link } from "react-router-dom";
import "./Crowdfunding1.css";
import right_side_image from "../../assets/right-side-image.png";

const Crowdfunding1 = () => {
  return (
    <>
      <div className="next-page">
        <div className="next-page-left">
          <h1>SUPPORT OUR PROJECT</h1>
          <p>
            Welcome to the crowdfunding campaign for Team Roadrunner, the
            formula Student team of NIT Rourkela! We are thrilled to embark on a
            groundbreaking journey to manufacture and fabricate our first
            E-formula Student vehicle, representing the spirit of innovative and
            engineering excellence at NIT Rourkela.
          </p>
          <p>
            Join us on this exciting journey as we push the boundaries of
            engineering and showcase the talent of NIT Rourkela on a global
            stage.
          </p>
          <div className="contribution-button">
            <button className="btn1">Make a contribution</button>
          </div>
        </div>
        <div className="next-page-right">
          <img src={right_side_image} alt="Description" />
        </div>
        <Link to="/crowdfunding" className="prev-arrow"></Link>
        <Link to="/crowdfunding2" className="next-arrow"></Link>
      </div>
    </>
  );
};

export default Crowdfunding1;

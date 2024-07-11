import React from "react";
import "./Milestone.css";
import { Link } from "react-router-dom";
import topImage from "../../assets/2019.png";

const Milestone = () => {
  return (
    <div className="milestones-container">
      <div className="milestones-content">
        <div className="image-container">
          <img src={topImage} alt="Team photo" className="top-image" />
          <div className="gradient-overlay"></div>
        </div>
        <h1 className="milestones-title">MILESTONES</h1>
      </div>
      <Link to="/milestone1" className="view-more-btn">
        View More
      </Link>
    </div>
  );
};

export default Milestone;

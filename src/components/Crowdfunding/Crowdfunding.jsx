import React from "react";
import { Link } from "react-router-dom";
import "./Crowdfunding.css";

const Crowdfunding = () => {
  return (
    <div className="crowdfunding">
      <div className="crowdfunding-text">
        <h1>CROWDFUNDING</h1>
        <p>"Fueling Dreams, Powering Progress - Together, We Can!"</p>
        <button className="btn">Donate</button>
        <Link to="/Crowdfunding1" className="next-arrow"></Link>{" "}
        {/* Add next button */}
      </div>
    </div>
  );
};

export default Crowdfunding;

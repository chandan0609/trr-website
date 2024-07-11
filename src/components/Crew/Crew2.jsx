import React from "react";
import { Link } from "react-router-dom";
import "./Crew2.css";
import sai from "../../assets/sai.png";
import soumyajit_pradhan from "../../assets/soumyajit-pradhan.png";
import sagar_kumar from "../../assets/sagar-kumar.png";
import balaji from "../../assets/balaji.png";
import jyotiraditya from "../../assets/a-jyotiraditya.png";
import ashish_senapati from "../../assets/ashish-senapati.png";

const Crew2 = () => {
  return (
    <>
      <div className="team-page">
        <div className="overlay">
          <div className="team-members top-row">
            <div className="team-member">
              <img src={sai} alt="P SAI" />
              <div className="team-member-info">
                <h3>P SAI</h3>
                <p>CHASSIS LEAD</p>
              </div>
            </div>
            <div className="team-member">
              <img src={soumyajit_pradhan} alt="SOUMYAJIT PRADHAN" />
              <div className="team-member-info">
                <h3>SOUMYAJIT PRADHAN</h3>
                <p>POWERTRAIN LEAD</p>
              </div>
            </div>
            <div className="team-member">
              <img src={sagar_kumar} alt="Sagar Kumar" />
              <div className="team-member-info">
                <h3>SAGAR KUMAR</h3>
                <p>POWERTRAIN LEAD</p>
              </div>
            </div>
          </div>
          <div className="team-members bottom-row">
            <div className="team-member">
              <img src={balaji} alt="C.B. BALAJI" />
              <div className="team-member-info">
                <h3>C.B. BALAJI</h3>
                <p>VEHICLE DYNAMICS LEAD</p>
              </div>
            </div>
            <div className="team-member">
              <img src={jyotiraditya} alt="jyotiraditya" />
              <div className="team-member-info">
                <h3>A.JYOTIRADITYA</h3>
                <p>DRIVE TRAIN LEAD</p>
              </div>
            </div>
            <div className="team-member">
              <img src={ashish_senapati} alt="ashish senapati" />
              <div className="team-member-info">
                <h3>ASHISH SENAPATI</h3>
                <p>BRAKES LEAD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-to-crew2">
        <Link to="/crew3" className="next-arrow"></Link>
      </div>
      <div className="arrow-to-crew">
        <Link to="/crew1" className="prev-arrow"></Link>
      </div>
    </>
  );
};

export default Crew2;

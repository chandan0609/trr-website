import React from "react";
import { Link } from "react-router-dom";
import ashutosh_katual from "../../assets/ashutosh-katual.png";
import ketan_bharti from "../../assets/ketan-bharti.png";
import lakshmi_priya from "../../assets/lakshmi-priya.png";
import sarvesh from "../../assets/sarvesh.png";
import chiranjeevi from "../../assets/chiranjeevi.png";
import ayush from "../../assets/ayush-gupta.png";
import "./Crew4.css";

const Crew4 = () => {
  return (
    <>
      <div className="team-page">
        <div className="overlay">
          <div className="team-members top-row">
            <div className="team-member">
              <img src={ashutosh_katual} alt="ASHUTOSH KATUAL" />
              <div className="team-member-info">
                <h3>ASHUTOSH KATUAL</h3>
                <p>BRAKES</p>
              </div>
            </div>
            <div className="team-member">
              <img src={ketan_bharti} alt="KETAN BHARTI" />
              <div className="team-member-info">
                <h3>KETAN BHARTI</h3>
                <p>VEHICLE DYNAMICS</p>
              </div>
            </div>
            <div className="team-member">
              <img src={lakshmi_priya} alt="LAKSHMI PRIYA" />
              <div className="team-member-info">
                <h3>LAKSHMI PRIYA</h3>
                <p>LOW VOLTAGE </p>
              </div>
            </div>
          </div>
          <div className="team-members bottom-row">
            <div className="team-member">
              <img src={sarvesh} alt="SARVESH" />
              <div className="team-member-info">
                <h3>SARVESH S.</h3>
                <p>LOW VOLTAGE</p>
              </div>
            </div>
            <div className="team-member">
              <img src={chiranjeevi} alt="CHIRANJEEVI" />
              <div className="team-member-info">
                <h3>CHIRANJEEVI</h3>
                <p>DRIVETRAIN</p>
              </div>
            </div>
            <div className="team-member">
              <img src={ayush} alt="AYUSH GUPTA" />
              <div className="team-member-info">
                <h3>AYUSH GUPTA</h3>
                <p>DRIVETRAIN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-to-crew2">
        <Link to="/crew3" className="next-arrow"></Link>
      </div>
      <div className="arrow-to-crew">
        <Link to="/crew3" className="prev-arrow"></Link>
      </div>
    </>
  );
};

export default Crew4;

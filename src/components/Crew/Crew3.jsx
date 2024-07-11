import React from "react";
import { Link } from "react-router-dom";
import subrat_mahapatra from "../../assets/subrat-mahapatra.png";
import sreeswat_misra from "../../assets/sreeswat-misra.png";
import revanth from "../../assets/sai-revanth.png";
import subrat from "../../assets/subrat.png";
import shubhranki from "../../assets/shubhranki-maharna.png";
import rahul from "../../assets/rahul_manglani.png";

import "./Crew3.css";

const Crew3 = () => {
  return (
    <>
      <div className="team-page">
        <div className="overlay">
          <div className="team-members top-row">
            <div className="team-member">
              <img src={sreeswat_misra} alt="SREESWAT MISRA" />
              <div className="team-member-info">
                <h3>SREESWAT MISRA</h3>
                <p>PERCEPTION LEAD</p>
              </div>
            </div>
            <div className="team-member">
              <img src={subrat_mahapatra} alt="Subrat Mahapatra" />
              <div className="team-member-info">
                <h3>SUBRAT MAHAPATRA</h3>
                <p>LOW VOLTAGE LEAD</p>
              </div>
            </div>
            <div className="team-member">
              <img src={revanth} alt="Sai Revanth" />
              <div className="team-member-info">
                <h3>SAI REVANTH</h3>
                <p>POWERTRAIN </p>
              </div>
            </div>
          </div>
          <div className="team-members bottom-row">
            <div className="team-member">
              <img src={subrat} alt="SUBRAT" />
              <div className="team-member-info">
                <h3>SUBRAT</h3>
                <p>POWERTRAIN</p>
              </div>
            </div>
            <div className="team-member">
              <img src={shubhranki} alt="shubhranki maharana" />
              <div className="team-member-info">
                <h3>SHUBHRANKI MAHARNA</h3>
                <p>MANAGEMENT</p>
              </div>
            </div>
            <div className="team-member">
              <img src={rahul} alt="rahul manglani" />
              <div className="team-member-info">
                <h3>RAHUL MANGLANI</h3>
                <p>MANAGEMENT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-to-crew2">
        <Link to="/crew4" className="next-arrow"></Link>
      </div>
      <div className="arrow-to-crew">
        <Link to="/crew2" className="prev-arrow"></Link>
      </div>
    </>
  );
};

export default Crew3;

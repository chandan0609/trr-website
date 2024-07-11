import React from "react";
import { Link } from "react-router-dom";
import "./Crew1.css";
import jraj from "../../assets/jraj.png";
import prateek from "../../assets/prateek.png";
import amrit from "../../assets/amrit-aurojyoti.png";
import asutosh from "../../assets/asutosh-prahraj.png";
import amiya from "../../assets/amiya-majhi.png";
import asutos2 from "../../assets/asutosh-sahoo.png";

const Crew1 = () => {
  return (
    <>
      <div className="team-page">
        <div className="overlay">
          <div className="team-members top-row">
            <div className="team-member">
              <img src={amrit} alt="Amrit Aurojyoti" />
              <div className="team-member-info">
                <h3>AMRIT AUROJYOTI</h3>
                <p>TEAM CAPTAIN</p>
              </div>
            </div>
            <div className="team-member">
              <img src={amiya} alt="Amiya Dipti Majhi" />
              <div className="team-member-info">
                <h3>AMIYA DIPTI MAJHI</h3>
                <p>VICE CAPTAIN</p>
              </div>
            </div>
            <div className="team-member">
              <img src={prateek} alt="Prateek Kumar" />
              <div className="team-member-info">
                <h3>PRATEEK KUMAR</h3>
                <p>BUSINESS HEAD</p>
              </div>
            </div>
          </div>
          <div className="team-members bottom-row">
            <div className="team-member">
              <img src={asutosh} alt="Ashutosh Praharaj" />
              <div className="team-member-info">
                <h3>ASHUTOSH PRAHARAJ</h3>
                <p>CHIEF ELECTRICAL ENGR.</p>
              </div>
            </div>
            <div className="team-member">
              <img src={asutos2} alt="Ashutosh Sahoo" />
              <div className="team-member-info">
                <h3>ASHUTOSH SAHOO</h3>
                <p>CHIEF MECHANICAL ENGR.</p>
              </div>
            </div>
            <div className="team-member">
              <img src={jraj} alt="Jarj Patnaik" />
              <div className="team-member-info">
                <h3>JRAJ PATNAIK</h3>
                <p>TEAM DRIVER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-to-crew2">
        <Link to="/crew2" className="next-arrow"></Link>
      </div>
      <div className="arrow-to-crew">
        <Link to="/crew" className="prev-arrow"></Link>
      </div>
    </>
  );
};

export default Crew1;

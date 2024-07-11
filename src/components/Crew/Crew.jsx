import React from "react";
import team_image from "../../assets/team-image.png";
import faculty_advisor from "../../assets/faculty-advisor.png";
import { Link } from "react-router-dom";
import "./Crew.css";

const Crew = () => {
  return (
    <>
      <div className="crew-page">
        <div className="header">
          <img src={team_image} alt="team" className="team-image" />
        </div>
        <div className="content">
          <h1 className="title">MEET THE TEAM</h1>
          <div className="faculty-advisor-section">
            <img
              src={faculty_advisor}
              alt="Faculty Advisor"
              className="faculty-advisor-image"
            />
            <div className="faculty-advisor-message">
              <h2>MESSAGE FROM FACULTY ADVISOR</h2>
              <p className="faculty-advisor-name">Prof. Suraj Kumar Behera</p>
              <p className="faculty-advisor-title">Mechanical Engineering</p>
              <p className="faculty-advisor-content">
                As the faculty advisor for Team Roadrunner Electric, the formula
                student team of NIT Rourkela, I am immensely proud to share the
                remarkable journey of these talented individuals. Throughout the
                year, I have witnessed their unwavering dedication, relentless
                hard work, and unwavering commitment towards their goals. The
                team's tireless efforts, both in the workshop and on the track,
                have borne fruit, resulting in numerous achievements. From
                conceptualizing and designing an electric vehicle from scratch
                to tackling complex engineering challenges, their technical
                prowess has been truly impressive
              </p>
              <p className="faculty-advisor-content">
                Their innovative ideas, coupled with their collaborative spirit,
                have propelled them to success in various prestigious national
                and international competitions. Moreover, their ability to
                overcome setbacks and adapt to new situations has been truly
                commendable. Team Roadrunner Electric is a shining example of
                what can be achieved through passion, perseverance, and
                teamwork.{" "}
              </p>
              <p className="faculty-advisor-content">
                Their accomplishments serve as an inspiration not only to the
                NIT Rourkela community but also to the entire nation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-to-crew1">
        <Link to="/crew1" className="next-arrow"></Link>
      </div>
    </>
  );
};

export default Crew;

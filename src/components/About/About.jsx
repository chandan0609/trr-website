import React from "react";
import "./About.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";

const Subsystems = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <h1>ABOUT US</h1>
          <p>
            Team Roadrunner is the Formula Student team of NIT Rourkela,
            comprised of a faction of highly exuberant and hard-working racecar
            enthusiasts. With a team consisting of about 50 members, working
            together in 8 subsystems, the team craves to overcome the intricate
            designing and manufacturing challenges and to produce highly
            efficient low cost and reliable racing cars.
          </p>
          <p>
            Since its origin in 2009, the team has achieved tremendous progress
            in designing and production. With systematic planning, work
            distribution, knowledge transfer and task oriented supervision, the
            team aims to improve the quality and efficiency of its products and
            to contribute towards betterment of the Indian Automotive Industry.
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <h1>OUR MISSION</h1>
          <p>
            At Team Roadrunner, our mission is to design, build, and race
            high-performance, single-seat formula-style race cars. Our ultimate
            goal is to compete and excel in the renowned Formula Student
            competition. We aim to provide our team members with invaluable
            hands-on experience, fostering their growth as engineers, project
            managers, and leaders. We believe in nurturing innovation,
            encouraging teamwork, and developing well-rounded individuals ready
            to take on the challenges of the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subsystems;

import React from "react";
import "./Milestone1.css";
import img_2009 from "../../assets/2009.png";
import img_2011 from "../../assets/2011.png";
import img_2014 from "../../assets/2014.png";
import img_2015 from "../../assets/2015.png";
import img_2018 from "../../assets/2018.png";
import img_2019 from "../../assets/2019.png";
import { Link } from "react-router-dom";

const Milestone1 = () => {
  const achievements = [
    {
      year: 2009,
      title: "Runners up in National Design Challenge held in Chennai",
      image: img_2009,
    },
    {
      year: 2011,
      title: "First STUDENT FORMULA VEHICLE of ODISHA",
      image: img_2011,
    },
    {
      year: 2012,
      title: "2nd Runner up in the Skidpad test",
      description: [
        "18th overall, out of 117 teams",
        "Best performance in dynamic events",
      ],
    },
    {
      year: 2014,
      title: "1st Runner up in Engineering Design",
      description: [
        "7th Overall out of 175 teams",
        "Best team spirit award",
        "Improved vehicle performance by 20%",
      ],
      image: img_2014,
    },
    {
      year: 2015,
      title: "SUPRA SAE INDIA 2015 INNOVATION AWARD",
      description: [
        "4th in Cost presentations",
        "12th in Business plan",
        "17th in Engineering Design",
        "16th in Overall",
        "One of the 12 teams to qualify technical inspection",
        "FS INDIA - 2nd rank in Qualifying Rule Quiz out of 110 teams",
        "SUPRA SAE - 12th in Virtuals out of 167 teams",
      ],
      image: img_2015,
    },
    {
      year: 2016,
      title: "4th in Cost presentation",
      description: [
        "11th in Engineering Design",
        "12th in Business Presentation",
        "16th in overall event of SUPRA SAE INDIA 2016",
      ],
    },
    {
      year: 2018,
      title: "10th in engineering design",
      description: ["One of the 20 teams to qualify technical inspection"],
      image: img_2018,
    },
    {
      year: 2019,
      title: "FSEV",
      description: [
        "1st in Procurement Report",
        "4th in Team Management",
        "5th in Electric Packaging",
        "5th in Overall FSEV 2019",
        "5th in Formula Bharat Qualifying Quiz",
      ],
      image: img_2019,
    },
    {
      year: 2021,
      title:
        "Out of 33 teams, our team secured an 18th in the Business plan presentation",
      description: [
        "Out of 33 teams, our team secured an 18th in the Business plan ",
        "11th rank in the engineering design presentations",
        "Overall rank of 14th",
      ],
    },
    {
      year: 2022,
      title: "2nd rank in the preliminary stages, Rule quiz",
      description: [
        "2nd rank in the preliminary stages, Rule quiz",
        "5th position in the Engineering Design event",
        "6th in overall among all participating teams",
      ],
    },
    {
      year: 2023,
      title: "4th in the Rule quiz session",
      description: [
        "4th in the Rule quiz session",
        "4th in Business plan presentation",
        "7th in overall among all participating teams",
      ],
    },
  ];

  return (
    <div className="milestone1-container">
      <div className="timeline-container">
        <div className="timeline">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                {achievement.image && (
                  <div className="image-container">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="timeline-image"
                    />
                    <div className="image-overlay">
                      <h3 className="overlay-title">{achievement.title}</h3>
                    </div>
                  </div>
                )}
                <h2 className="timeline-year">{achievement.year}</h2>
                {!achievement.image && (
                  <h3 className="timeline-title">{achievement.title}</h3>
                )}
                {achievement.description && (
                  <ul className="timeline-description">
                    {Array.isArray(achievement.description) ? (
                      achievement.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))
                    ) : (
                      <li>{achievement.description}</li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/milestone" className="prev-arrow"></Link>
    </div>
  );
};

export default Milestone1;

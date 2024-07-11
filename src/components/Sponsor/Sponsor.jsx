import React from "react";
import "./Sponsor.css";
import ntpcLogo from "../../assets/ntpcLogo.png";
import omcLogo from "../../assets/omcLogo.png";
import sailLogo from "../../assets/sailLogo.png";

const Sponsor = () => {
  return (
    <div className="sponsors-container">
      <div className="sponsors-content">
        <h1 className="sponsors-title">OUR SPONSORS</h1>
        <p className="sponsors-description">
          We wanted to take a moment to express our deepest gratitude for your
          generous sponsorship. Your support plays a crucial role and we are
          incredibly thankful for your contribution.
        </p>
        <div className="sponsor">
          <img src={ntpcLogo} alt="NTPC Logo" className="sponsor-logo" />
          <p className="sponsor-text">
            NTPC is India's largest power utility with an installed capacity of
            73,824 MW (including JVs), plans to become a 130 GW company by 2032.
            Established in 1975, NTPC aims to be the world's largest and best
            power major. NTPC has comprehensive Rehabilitation & Resettlement
            and CSR policies well integrated with its core business of setting
            up power projects and generating electricity.
          </p>
        </div>
        <div className="sponsor">
          <img src={omcLogo} alt="OMC Logo" className="sponsor-logo" />
          <p className="sponsor-text">
            Incorporated in the year 1956, Odisha Mining Corporation Limited
            (OMC) has been working with a prime objective of harnessing the
            mineral wealth through exploration, extraction. Wholly owned
            Corporation of the Government of Odisha, OMC has come a long way
            since its inception and today it stands as one of the largest mining
            companies in India. The major minerals mined by OMC are chrome, iron
            and bauxite which cater to the requirement of mineral-based
            industries such as steel, aluminium, sponge iron, pig iron,
            ferro-manganese, ferro-chrome, etc.
          </p>
        </div>
        <div className="sponsor">
          <img src={sailLogo} alt="SAIL Logo" className="sponsor-logo" />
          <p className="sponsor-text">
            Steel Authority of India Limited (SAIL) is one of the largest
            steel-making companies in India and one of the Maharatnas of the
            country’s Central Public Sector Enterprises. SAIL produces iron and
            steel at five integrated plants and three special steel plants,
            located principally in the eastern and central regions of India and
            situated close to domestic sources of raw materials. SAIL
            manufactures and sells a broad range of steel products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/trr_logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        <li>
          <Link to="/crew">Crew</Link>
        </li>
        <li>
          <Link to="/crowdfunding">Crowdfunding</Link>
        </li>
        <li>
          <Link to="/subsystems">Subsystems</Link>
        </li>
        <li>
          <Link to="/milestone">Milestone</Link>
        </li>
        <li>
          <Link to="/media">Media</Link>
        </li>
        <li>
          <Link to="/sponsor">Sponsors</Link>
        </li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

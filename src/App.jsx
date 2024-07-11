import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Crowdfunding from "./components/Crowdfunding/Crowdfunding";
import Crowdfunding1 from "./components/Crowdfunding/Crowdfunding1";
import Crowdfunding2 from "./components/Crowdfunding/Crowdfunding2";
import Crew from "./components/Crew/Crew";
import Crew1 from "./components/Crew/Crew1";
import Crew2 from "./components/Crew/Crew2";
import Crew3 from "./components/Crew/Crew3";
import Crew4 from "./components/Crew/Crew4";
import About from "./components/About/About";
import Milestone from "./components/Milestone/Milestone";
import Milestone1 from "./components/Milestone/Milestone1";
import Sponsor from "./components/Sponsor/Sponsor";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/crowdfunding" element={<Crowdfunding />} />
          <Route path="/crowdfunding1" element={<Crowdfunding1 />} />
          <Route path="/crowdfunding2" element={<Crowdfunding2 />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/crew1" element={<Crew1 />} />
          <Route path="/crew2" element={<Crew2 />} />
          <Route path="/crew3" element={<Crew3 />} />
          <Route path="/crew4" element={<Crew4 />} />
          <Route path="/about" element={<About />} />
          <Route path="/milestone" element={<Milestone />} />
          <Route path="/milestone1" element={<Milestone1 />} />
          <Route path="/sponsor" element={<Sponsor />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

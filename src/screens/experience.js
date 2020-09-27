import React from "react";
import Timeline from "../components/timeline/timeline";
import "./main.css";
import Fade from "react-reveal/Fade";

function Experience() {
  return (
    <div className="exp_timeline" id="experience">
      <Fade left>
        <h1 className="about_exp_h1">My Experience</h1>
      </Fade>
      <Timeline />
    </div>
  );
}

export default Experience;

import React from "react";
import "./desc.css";
import Fade from "react-reveal/Fade";

function Desc() {
  return (
    <Fade left>
      <div>
        <h1 className="about_desc_h1">About me</h1>
        <p className="about_desc">
          I am your next door
          <span className="about_desc_span"> Software Developer</span>
          . I am proficient at making end to end products with JS.Want
          a<span className="about_desc_span"> full stack web application</span>?
          Maybe a<span className="about_desc_span"> cross-platform app</span> ?
          Or bored and want to rant? HMU✌🏼 <br></br>I am a Student at <span className="about_desc_span">Carnegie Mellon Univeristy</span>,
          pursuing yours truly, Master's in
          <span className="about_desc_span"> Information Systems Management </span>
          💻. I love taking part in hackathons👨‍💻, helping fellow
          developers and playing chess ❤️.
          <br></br>
          Scroll down to find out more about me! 😄
        </p>
      </div>
    </Fade>
  );
}

export default Desc;

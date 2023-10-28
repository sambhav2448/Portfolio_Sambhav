import React from "react";
import "./desc.css";
import Fade from "react-reveal/Fade";

function Desc() {
  return (
    <Fade left>
      <div>
        <h1 className="nextstep_desc_h1">What I hope to learn</h1>
        <p className="about_desc">
        Hello everyone! I'm currently a grad student at CMU, and as I dive into the "Telling Stories with Data" course, my aspirations go beyond merely mastering the curriculum. I am deeply passionate about understanding data visualization at its core, ensuring that when I present information, it's not only clear but also captivating. I want to hone my design skills, ensuring that every graph, chart, or infographic I create resonates with its audience, making data-driven narratives compelling and memorable. My ambition post-graduation is to utilize these skills in real-world scenarios, crafting data stories that not only inform but also engage and inspire. Would love to connect with fellow data enthusiasts and collaborate on exciting projects!
        </p>
      </div>
    </Fade>
  );
}

export default Desc;

import React from "react";
import Header from "../components/header/header";
import Introduction from "../components/section1/intro";
import Reveal from "react-reveal/Reveal";

function Landing() {
  return (
    <div>
      <Header />
      <Reveal effect="fadeInUp">
        <Introduction />
      </Reveal>
    </div>
  );
}

export default Landing;

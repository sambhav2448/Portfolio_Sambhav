import React, { Component } from "react";
import Typed from "react-typed";

export default class MyComponent extends Component {
  render() {
    return (
      <>
        <Typed
          strings={[
            "a Web Developer",
            "an App Developer",
            "a Competitive Coder",
            "Human ",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </>
    );
  }
}

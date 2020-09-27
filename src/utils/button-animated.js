import React from "react";
import "./button.css";

function Buttonanimated(props) {
  return (
    <div>
      <button className="btn btn-background-slide intro_button_size">
        {props.children}
      </button>
    </div>
  );
}

export default Buttonanimated;

import React from "react";
import "./button.css";

function Buttonsmall(props) {
  return (
    <div>
      <button className="btn btn-background-slide btn-slide-small">
        {props.children}
      </button>
    </div>
  );
}

export default Buttonsmall;

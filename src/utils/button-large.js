import React from "react";
import "./button.css";

function Buttonlg(props) {
  return (
    <>
      <button className="btn btn-background-slide btn-slide-large">
        {props.children}
      </button>
    </>
  );
}

export default Buttonlg;

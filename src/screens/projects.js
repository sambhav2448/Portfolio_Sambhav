import React from "react";
import Projectlist from "../components/projects/projects";
import "./main.css";

function Project({name}) {
  return (
    <div className="project_screen">
      <Projectlist name={name}/>
    </div>
  );
}

export default Project;

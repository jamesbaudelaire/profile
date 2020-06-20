import React, { useState, useEffect } from "react";
import "./main.scss";

import { Project } from "./components/project";
import { Projects } from "./components/projects";
import { Navbar } from "./components/navbar";

import { Ronak } from "./ronak";

let animate = () => {
  [...Array(10)].forEach((frame, index) => {
    setTimeout(() => {
      document.querySelector("html").classList.add(`frame-${index + 1}`);
    }, 500 * (index + 1));
  });
};

export const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="app">
      {/* 
      <button onClick={event=>{animate() 
      event.target.style.display='none'
    }}
    id="design-button"
    >click to see my design skills</button> */}

      <Projects selectProject={setSelectedProject} projects={Ronak.projects} />

      {selectedProject && <Project project={selectedProject} />}

      <Navbar email={Ronak.email} name={Ronak.name} />

      <div className="name">{Ronak.name}</div>
      <div className="title">{Ronak.title}</div>
      <div className="subtitle">{Ronak.subtitle}</div>
    </div>
  );
};

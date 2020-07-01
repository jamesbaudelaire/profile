import React, { useState, useEffect } from "react";
import "./main.scss";

import { Project } from "./components/project";
import { Projects } from "./components/projects";
import { Navbar } from "./components/navbar";

import { Ronak } from "./ronak";

import { useAnimation } from "./animation";

export const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const load = useAnimation();

  return (
    <div id="app" {...load}>
      <div id="profile">
        <div className="name">{Ronak.name}</div>
        <div className="title">{Ronak.title}</div>
        <div className="subtitle">{Ronak.subtitle}</div>
      </div>

      <Projects
        selected={selectedProject}
        selectProject={setSelectedProject}
        projects={Ronak.projects}
      />

      {selectedProject && (
        <Project selectProject={setSelectedProject} project={selectedProject} />
      )}

      <Navbar email={Ronak.email} phone={Ronak.phone} />
    </div>
  );
};

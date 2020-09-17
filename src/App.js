import React, { useState, useEffect } from "react";
import "./main.scss";

import { Project } from "./components/project";
import { Projects } from "./components/projects";
import { Navbar } from "./components/navbar";
import { Images } from "./components/images";

import { Ronak } from "./ronak";

import { useAnimation } from "./animation";

export const App = () => {
  const [selectedProject, setSelectedProject] = useState(Ronak.projects[0]);

  const load = useAnimation();

  return (
    <div id="app" {...load}>
      <div id="profile">
        <div className="name">{Ronak.name}</div>
        <div className="title">{Ronak.title}</div>
      </div>

      <Navbar email={Ronak.email} phone={Ronak.phone} />

      <Images project={selectedProject} />

      <Projects
        selected={selectedProject}
        selectProject={setSelectedProject}
        projects={Ronak.projects}
      />

      {selectedProject && (
        <Project selectProject={setSelectedProject} project={selectedProject} />
      )}

      <img
        alt="qr"
        id="qr-link"
        src="https://res.cloudinary.com/baudelaire/image/upload/v1600299895/portfolio/qr.png"
      />
    </div>
  );
};

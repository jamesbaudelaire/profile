import React, { useState, useEffect } from "react";
import "./main.scss";
import "./index.scss";

import { Details } from "./components/details";
import { Projects } from "./components/projects";
import { Navbar } from "./components/navbar";
import { Images } from "./components/images";

import { Ronak } from "./ronak";

import { motion } from "framer-motion";

export const App = () => {
  const [selectedProject, setSelectedProject] = useState(Ronak.projects[0]);

  return (
    <motion.div id="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div id="profile">
        <div className="name">{Ronak.name}</div>
        <div className="title">{Ronak.title}</div>
        <Navbar email={Ronak.email} phone={Ronak.phone} />
      </div>

      <Images project={selectedProject} />

      <Projects
        selected={selectedProject}
        selectProject={setSelectedProject}
        projects={Ronak.projects}
      />

      {selectedProject && (
        <Details
          selectProject={setSelectedProject}
          key={selectedProject.id}
          project={selectedProject}
        />
      )}

      <img
        alt="qr"
        id="qr-link"
        className="shadow"
        src="https://res.cloudinary.com/baudelaire/image/upload/v1600299895/portfolio/qr.png"
      />
    </motion.div>
  );
};

import React, { useState } from "react";

import { Details } from "./components/details";
import { Projects } from "./components/projects";
import { Images } from "./components/images";
import { QR } from "./components/qr";

import Ronak from "./data";

import { motion } from "framer-motion";

export const Web = () => {
  const [selectedProject, setSelectedProject] = useState(Ronak.projects[0]);
  const [show, setShow] = useState(false);

  return (
    <motion.div
      id="app"
      className={show ? "disable-scroll" : ""}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
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
    </motion.div>
  );
};

import React, { useState, useEffect } from "react";
import "./main.scss";
import "./index.scss";

import { Details } from "./components/details";
import { Projects } from "./components/projects";
import { Navbar } from "./components/navbar";
import { Images } from "./components/images";
import { QR } from "./components/qr";

import { Ronak } from "./ronak";

import { motion } from "framer-motion";

export const App = () => {
  const [selectedProject, setSelectedProject] = useState(Ronak.projects[0]);
  const [show, setShow] = useState(false);

  return (
    <motion.div
      id="app"
      className={show ? "disable-scroll" : ""}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div id="profile">
        <div className="name">{Ronak.name}</div>
        <div className="title">{Ronak.title}</div>
        <div className="sub-title">{Ronak.subTitle}</div>

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

      {show ? (
        <QR setShow={setShow} />
      ) : (
        <i
          className="material-icons-round share"
          onClick={() => {
            setShow(true);
          }}
        >
          qr_code_2
        </i>
      )}
    </motion.div>
  );
};

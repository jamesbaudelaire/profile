import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import "../styles/project.scss";

export const Project = ({ project, selectProject }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const listItem = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="project">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="details"
      >
        <motion.div className="features" variants={listItem}>
          <i className="material-icons-round">stars</i>
          FEATURES
          {project.features.map((feature) => (
            <div key={feature} className="feature">
              <i className="material-icons-round">subdirectory_arrow_right</i>
              {feature}
            </div>
          ))}
        </motion.div>

        <motion.div className="tools" variants={listItem}>
          <i className="material-icons-round">build</i>
          TOOLS
          {project.tools.map((tool) => (
            <div key={tool} className="tool">
              <i className="material-icons-round">subdirectory_arrow_right</i>
              {tool}
            </div>
          ))}
        </motion.div>

        <motion.div className="links" variants={listItem}>
          <i className="material-icons-round">public</i>
          LINKS
          {project.links.map(({ icon, link, name }) => (
            <a href={link} key={icon} target="_blank" rel="noopener noreferrer">
              <div>
                <i className="material-icons-round link">{icon}</i>
              </div>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

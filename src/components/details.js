import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import "../styles/details.scss";

export const Details = ({ project, selectProject }) => {
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
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      id="details"
      className="shadow"
    >
      <motion.div variants={listItem} className="features detail shadow round">
        <i className="material-icons-round icon">stars</i>
        <span className="title">FEATURES</span>
        <div>
          {project.features.map((feature) => (
            <div key={feature}>
              <i className="material-icons-round">subdirectory_arrow_right</i>
              {feature}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={listItem} className="tools detail shadow round">
        <i className="material-icons-round icon">build</i>
        <span className="title">TOOLS</span>
        <div>
          {project.tools.map((tool) => (
            <div key={tool}>
              <i className="material-icons-round">subdirectory_arrow_right</i>
              {tool}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={listItem} className="links detail shadow round">
        <i className="material-icons-round icon">public</i>
        <span className="title">LINKS</span>
        <div>
          {project.links.map(({ icon, link, name }) => (
            <a
              href={`https://github.com/jamesbaudelaire/${link}`}
              key={icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <i className="material-icons-round link">{icon}</i>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

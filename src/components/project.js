import React, { useEffect, useState } from "react";

import { useAnimation } from "../animation";

export const Project = ({ project, selectProject }) => {
  const load = useAnimation();

  return (
    <div id="project" {...load}>
      <i
        className="material-icons-round close-button"
        onClick={() => {
          selectProject(null);
        }}
      >
        close
      </i>

      <div className="name">{project.name}</div>
      <div className="info">{project.info}</div>

      <div className="details">
        <div className="features">
          <i className="material-icons-round">stars</i>
          FEATURES
          {project.features.map(feature => (
            <div key={feature} className="feature">
              <i className="material-icons-round">subdirectory_arrow_right</i>
              {feature}
            </div>
          ))}
        </div>

        <div className="tools">
          <i className="material-icons-round">build</i>
          TOOLS
          {project.tools.map(tool => (
            <div key={tool} className="tool">
              <i className="material-icons-round">subdirectory_arrow_right</i>
              {tool}
            </div>
          ))}
        </div>

        <div className="links">
          <i className="material-icons-round">public</i>
          LINKS
          {project.links.map(({ icon, link, name }) => (
            <a href={link} key={icon} target="_blank" rel="noopener noreferrer">
              <div>
                <i className="material-icons-round link">{icon}</i>
                {name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

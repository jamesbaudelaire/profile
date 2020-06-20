import React from "react";

export const Project = ({ project }) => {
  return (
    <div id="project">
      <div className="name">{project.name}</div>
      <div className="info">{project.info}</div>

      <div className="features">
        {project.features.map(feature => (
          <div key={feature} className="feature">
            {feature}
          </div>
        ))}
      </div>

      <div className="tools">
        {project.tools.map(tool => (
          <div key={tool} className="tool">
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
};

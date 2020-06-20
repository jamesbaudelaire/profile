import React from "react";

export const Projects = ({ projects, selectProject }) => {
  return (
    <div id="projects">
      {projects.map((p, index) => (
        <div
          key={p.name}
          onClick={() => {
            selectProject(projects[index]);
          }}
          className="project"
        >
          {p.name}
        </div>
      ))}
    </div>
  );
};

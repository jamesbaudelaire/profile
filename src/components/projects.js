import React from "react";

export const Projects = ({ projects, selectProject }) => {
  return (
    <div id="projects">
      {projects.map((p, index) => (
        <div
          key={p.name}
          onClick={element => {
            selectProject(projects[index]);
          }}
          className="project desktop"
        >
          <iframe src={p.url} title={p.name} />
        </div>
      ))}
    </div>
  );
};

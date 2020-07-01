import React from "react";

export const Projects = ({ projects, selectProject, selected }) => {
  return (
    <div id="projects">
      {projects.map((p, index) => (
        <div
          id={p.id}
          key={p.name}
          onClick={element => {
            selectProject(projects[index]);
          }}
          className={`project ${
            selected && selected.id == p.id ? "selected" : ""
          }`}
        >
          <iframe src={p.url} title={p.name} />
        </div>
      ))}
    </div>
  );
};

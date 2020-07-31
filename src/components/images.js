import React from "react";

export const Images = ({ project }) => {
  let v = "v1596163074";
  return (
    <div id="images">
      {[1, 2].map(n => (
        <img
          key={n}
          alt={`${project.id}-screen-${n}`}
          src={`https://res.cloudinary.com/baudelaire/image/upload/w_700/${v}/portfolio/${
            project.id
          }-${n}.png`}
        />
      ))}
    </div>
  );
};

import React, { useEffect, useState } from "react";

export const Images = ({ project }) => {
  return (
    <div id="images">
      {[1, 2].map(n => (
        <img
          key={n}
          alt={`${project.id}-screen-${n}`}
          src={`https://res.cloudinary.com/baudelaire/image/upload/w_500/portfolio/${
            project.id
          }-${n}.png`}
        />
      ))}
    </div>
  );
};

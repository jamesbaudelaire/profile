import React, { useEffect } from "react";
import { motion } from "framer-motion";

export const Images = ({ project }) => {
  let v = "v1596163074";
  return (
    <div id="images">
      {[1, 2].map((n) => (
        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: n * 0.1 }}
          key={`${project.id}-${n}`}
          className={`img-${n}`}
          alt={`${project.id}-screen-${n}`}
          src={`https://res.cloudinary.com/baudelaire/image/upload/w_700/${v}/portfolio/${project.id}-${n}.png`}
        />
      ))}
    </div>
  );
};

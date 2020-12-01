import React from "react";
import "./main.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div id="name">RONAK MISTRY</div>

      <div id="skills">
        <Link to="/web" className="skill">
          <span className="material-icons-round">code</span>
          Coder
        </Link>

        <Link to="/piano" className="skill">
          <span className="material-icons-round">music_note</span>
          Pianist
        </Link>
      </div>
    </motion.div>
  );
};

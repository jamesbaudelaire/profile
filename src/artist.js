import React from "react";
import "./artist.scss";

import { Navbar } from "./components/navbar";

import Ronak from "./data";
import { motion } from "framer-motion";

export const Artist = () => {
  return (
    <motion.div id="artist" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div id="info">
        <div id="name">RONAK MISTRY</div>
        <div id="about">3D VR ARTIST</div>
      </div>

      <Navbar email={Ronak.email} phone={Ronak.phone} />

      <a
        href={"https://sketchfab.com/ronakmystery"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i id="sketchfab" className="material-icons-round">
          brush
        </i>
      </a>
    </motion.div>
  );
};

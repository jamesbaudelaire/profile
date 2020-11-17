import React from "react";
import "./piano.scss";

import { Navbar } from "./components/navbar";

import Ronak from "./data";
import { motion } from "framer-motion";

export const Piano = () => {
  return (
    <motion.div id="piano" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <img
        alt="piano-img"
        id="piano-img"
        src="https://res.cloudinary.com/baudelaire/image/upload/w_700/v1605372862/portfolio/pianist.jpg"
      />

      <div id="info">
        <div id="name">Ronak Mistry</div>
        <div id="about">a master of classical improvisation</div>
      </div>

      <Navbar email={Ronak.email} phone={Ronak.phone} />

      <img
        alt="qr"
        id="piano-qr"
        className="shadow"
        src="https://res.cloudinary.com/baudelaire/image/upload/v1605628196/portfolio/piano-qr.png"
      />
    </motion.div>
  );
};

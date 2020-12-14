import React from "react";
import "./main.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "./components/navbar";

import Ronak from "./data";

export const Home = () => {
  return (
    <motion.div id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div id="name">RONAK MISTRY</div>
      <Navbar email={Ronak.email} phone={Ronak.phone} />

      <div id="skills">
        <Link to="/web" className="skill">
          <span className="material-icons-round">code</span>
          Webdev
        </Link>

        <a
          href={
            "https://www.youtube.com/playlist?list=PLnrd13DbIJexll0SCZqVIHk6kF7B0_pMh"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="skill"
        >
          <span className="material-icons-round">music_note</span>
          Pianist
        </a>

        <a
          href={"https://www.tiktok.com/@ronak.mistry"}
          target="_blank"
          rel="noopener noreferrer"
          className="skill"
        >
          <span className="material-icons-round">brush</span>
          Artist
        </a>
      </div>
    </motion.div>
  );
};

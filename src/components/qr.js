import React from "react";
import { motion } from "framer-motion";
import img from "../assets/qr.png";

import "../styles/qr.scss";

export const QR = ({ setShow }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="qr"
      onClick={() => {
        setShow(false);
      }}
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        alt="qr"
        id="qr-link"
        className="shadow"
        src={img}
      />
    </motion.div>
  );
};

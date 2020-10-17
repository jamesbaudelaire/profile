import React from "react";
import { motion } from "framer-motion";
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
      <img
        alt="qr"
        id="qr-link"
        className="shadow"
        src="https://res.cloudinary.com/baudelaire/image/upload/v1600299895/portfolio/qr.png"
      />
    </motion.div>
  );
};

import React, { useState } from "react";

export const Navbar = ({ phone, email, links }) => {
  return (
    <div id="navbar">
      <a href={`tel:${phone}`} rel="noopener noreferrer" target="_blank">
        <i className="material-icons-round phone">phone</i>
      </a>

      <a href={`mailto:${email}`} rel="noopener noreferrer" target="_blank">
        <i className="material-icons-round email">email</i>
      </a>

      <a
        href={`https://github.com/jamesbaudelaire`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="material-icons">code</i>
      </a>
    </div>
  );
};

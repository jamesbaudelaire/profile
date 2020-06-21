import React, { useState } from "react";

export const Navbar = ({ phone, email }) => {
  let links = [
    {
      icon: "phone",
      link: `tel:${phone}`
    },
    {
      icon: "email",
      link: `mailto:${email}`
    },
    {
      icon: "code",
      link: `https://github.com/jamesbaudelaire`
    }
  ];
  return (
    <div id="navbar">
      {links.map(({ icon, link }) => (
        <a href={link} key={icon} target="_blank" rel="noopener noreferrer">
          <button>
            <i className="material-icons-round">{icon}</i>
          </button>
        </a>
      ))}
    </div>
  );
};

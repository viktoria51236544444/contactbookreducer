import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        style={{ fontSize: "30px", color: "black", textDecoration: "none" }}
        to={"/"}
      >
        Contact Book
      </NavLink>
      <NavLink
        style={{ fontSize: "30px", color: "black", textDecoration: "none" }}
        to={"/add"}
      >
        Contact Form
      </NavLink>
    </div>
  );
};

export default Navbar;

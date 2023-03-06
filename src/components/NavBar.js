import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to = "/" exact className = ".navbar">Home</NavLink>
      <NavLink to = "/movies" exact className = ".navbar">Movies</NavLink>
      <NavLink to = "/directors" exact className = ".navbar">Directors</NavLink>
      <NavLink to = "/actors" exact className = ".navbar">Actors</NavLink>
    </div>
  );
}

export default NavBar;

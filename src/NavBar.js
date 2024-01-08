import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="garden">MY GARDEN</NavLink>
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({toggleTheme}) => {
  

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle">
        🌙 Toggle Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;

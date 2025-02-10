import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Abhishek Jha</div>
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <p className="player-TRACKING-2">
          <span className="text-wrapper-19">Player </span>
          <span className="text-wrapper-20">TRACKING</span>
        </p>
        <Link to="/home-page" className="nav-link">Home</Link>
        <Link to="/my-data" className="nav-link">My Data</Link>
        <Link to="/sign-up-page" className="nav-link">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;

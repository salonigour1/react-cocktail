import React from "react";
import "./myStyle.css";
import { Link } from "react-router-dom";
import logo from "../logo.png";
function Navbar() {
  return (
    <>
      <header className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <Link to="/" className="menu">
            Home
          </Link>
          <Link to="/about" className="menu">
            About
          </Link>
        </div>
      </header>
      <hr />
    </>
  );
}

export default Navbar;

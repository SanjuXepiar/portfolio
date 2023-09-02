import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleChange = () => {
    setToggle(!toggle);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div
      className={
        color ? "navHeader navHeaderbg common-pd" : "navHeader common-pd"
      }
    >
      <Link to="/">
        <h1 className="common-txt-clr">Portfolio</h1>
      </Link>
      <ul className={toggle ? "navLinks active" : "navLinks"}>
        <li>
          <Link className="common-txt-clr" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="common-txt-clr" to="/project">
            Project
          </Link>
        </li>
        <li>
          <Link className="common-txt-clr" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="common-txt-clr" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="toggleButton" onClick={handleChange}>
        {toggle ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;

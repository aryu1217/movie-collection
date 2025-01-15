import React from "react";
import NavSearchBox from "./NavSearchBox";
import "./Navbar.css";
import Sidebar from "./Sidebar/Sidebar.js";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <Sidebar />
      <NavSearchBox />
    </nav>
  );
};

export default NavBar;

import React from "react";
import NavSearchBox from "./NavSearchBox.js";
import "./Navbar.css";
import Sidebar from "./sidebar/Sidebar.js";
import Login from "../login/Login.js";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/Login");
  };

  return (
    <nav className="navbar-container">
      <Sidebar />
      <NavSearchBox />
      <div className="user-loginStatus">
        <p onClick={goToLogin}>로그인</p>
      </div>
    </nav>
  );
};

export default NavBar;

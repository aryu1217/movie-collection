import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar.js";
import Login from "./component/login/Login.js";
import Register from "./component/register/Register.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar path="/" />
        <Routes>
          <Route
            path="/login"
            element={
              <div className="page-container">
                <Login />
              </div>
            }
          />

          <Route
            path="/register"
            element={
              <div className="page-container">
                <Register />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

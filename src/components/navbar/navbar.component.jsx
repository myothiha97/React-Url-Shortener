import React from "react";
import { NavbarStyle } from "./navbar.styles";
import { Link } from "react-router-dom";
import ButtonCyan from "../button-cyan/button-cyan.component";

const NavBar = ({}) => {
  return (
    <NavbarStyle>
      <div className="navbar-wrapper">
        <div className="nav-left">
          <Link to="/">
            <h2>Shortly</h2>
          </Link>
          <Link to="/features">
            <p>Features</p>
          </Link>
          <Link to="/pricing">
            <p>Pricing</p>
          </Link>
          <Link to="/resources">
            <p>Resources</p>
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/login">Login</Link>
          <Link to="/signup">
            <ButtonCyan>Sign Up</ButtonCyan>
          </Link>
        </div>
      </div>
    </NavbarStyle>
  );
};

export default NavBar;

import React, { useState } from "react";
import { NavbarStyle } from "./navbar.styles";
import { Link } from "react-router-dom";
import ButtonCyan from "../button-cyan/button-cyan.component";
import HiddenMenu from "../hidden-menu/hidden-menu.component";

const NavBar = ({}) => {
  const [open, toggelOpen] = useState(false);
  return (
    <NavbarStyle isOpen={open}>
      <div className="navbar-wrapper">
        <div className="appear-contents">
          <div className="nav-left">
            <div className="heading">
              <Link to="/">
                <h2>Shortly</h2>
              </Link>
            </div>
            <div className="nav-left-links">
              <div className="link">
                <Link to="/features">
                  <p>Features</p>
                </Link>
              </div>
              <div className="link">
                <Link to="/pricing">
                  <p>Pricing</p>
                </Link>
              </div>
              <div className="link">
                {" "}
                <Link to="/resources">
                  <p>Resources</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-right-links">
              <Link to="/login">Login</Link>
              <Link to="/signup">
                <ButtonCyan>Sign Up</ButtonCyan>
              </Link>
            </div>
          </div>
          <div className="menu" onClick={() => toggelOpen(!open)}>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
          </div>
        </div>
        <div className="hidden-menu-wrapper">
          <HiddenMenu></HiddenMenu>
        </div>
      </div>
    </NavbarStyle>
  );
};

export default NavBar;

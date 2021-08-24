import React from "react";
import { HiddenMenuStyle } from "./hidden-menu.styles";
import { Link } from "react-router-dom";
import ButtonCyan from "../button-cyan/button-cyan.component";

const HiddenMenu = () => {
  return (
    <HiddenMenuStyle>
      <div className="content-container">
        <div className="hidden-menu-link">
          <Link>Features</Link>
        </div>
        <div className="hidden-menu-link">
          <Link>Pricing</Link>
        </div>
        <div className="hidden-menu-link">
          <Link>Resources</Link>
        </div>
        <div className="hidden-menu-link">
          <div className="dash-line"></div>
        </div>
        <div className="hidden-menu-link">
          <Link>Login</Link>
        </div>
        <ButtonCyan>Sign Up</ButtonCyan>
      </div>
    </HiddenMenuStyle>
  );
};

export default HiddenMenu;

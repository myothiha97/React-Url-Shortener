import React from "react";
import { FooterStyle } from "./footer.styles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="content">
        <h1 className="left">Shortly</h1>
        <div className="footer-right">
          <div className="footer-right-links">
            <p>Features</p>
            <div>
              <Link>Link Shortening</Link>
              <Link>Branded</Link>
              <Link>Analytics</Link>
            </div>
          </div>
          <div className="footer-right-links">
            <p>Features</p>
            <div>
              <Link>Link Shortening</Link>
              <Link>Branded</Link>
              <Link>Analytics</Link>
            </div>
          </div>
          <div className="footer-right-links">
            <p>Features</p>
            <div>
              <Link>Link Shortening</Link>
              <Link>Branded</Link>
              <Link>Analytics</Link>
            </div>
          </div>
          <div className="icons">
            <div>
              <Link>
                <i className="fab fa-facebook-square icon"></i>
              </Link>
            </div>
            <div>
              <Link>
                <i className="fab fa-twitter icon"></i>
              </Link>
            </div>
            <div>
              <Link>
                <i className="fab fa-quora icon"></i>
              </Link>
            </div>
            <div>
              <Link>
                <i className="fab fa-instagram icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media-wrap">
        <div>
          <Link to="/" className="footer-logo">
            <i className="fas fa-gamepad"></i>
          </Link>
        </div>
        <small className="website-rights">Fun-Q-Lator</small>
        <div className="social-icons">
          <a
            className="social-icon-link instagram"
            href=""
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" id="insta" />
          </a>
          <a
            className="social-icon-link github"
            href="https://github.com/Ritika032"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github" id="github" />
          </a>
          <a
            className="social-icon-link linkedin"
            href="https://www.linkedin.com/in/ritika-gajeshwar-82633819a"
            target="_blank"
            aria-label="LinkedIn"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin" id="linkdin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

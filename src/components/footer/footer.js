import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer(props) {
  return (
    <footer>
      <div class="container">
        <div class="footerContainer">
          <div class="footerLogo">
            <img src="/images/gifs/logo2.png" alt="Logo" />
          </div>
          <div class="footerNav m-5">
            <p>
              <HashLink to="/#about">About me</HashLink>
            </p>
            <p>
              <HashLink to="/#services">services</HashLink>
            </p>
            <p>
              <HashLink to="/#experience">Experience</HashLink>
            </p>
            <p>
              <HashLink to="/#contact">contact me</HashLink>
            </p>
          </div>
          <span>
            Privacy Policy | © 2020 Charles Granded. All Rights Reserved.
          </span>
          <br />
          <span>
            Developed by
            <strong>
              <a href="https://www.diegosandoval.tech/" target="_blank"> Diego Sandoval</a>
            </strong>{" "}
            <a href="https://github.com/Diegocorp">
              <i class="fab fa-github-square ml-1"></i>
            </a>
            <a href="https://www.linkedin.com/in/diego-sandoval-83856a212/">
              <i class="fab fa-linkedin ml-1"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

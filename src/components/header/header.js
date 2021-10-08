import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header(props) {
  const openNav = () => {
    if (document.getElementById("mySidenav")) {
      document.getElementById("mySidenav").style.left = "0";
    }
  };

  const closeNav = () => {
    if (document.getElementById("mySidenav")) {
      document.getElementById("mySidenav").style.left = "-100%";
    }
  };

  return (
    <header class={`header-${props.bgColor || "white"}`}>
      <div class="container">
        {/* SMALL DEVICE */}
        <div id="mySidenav" class="sidenav">
          <Link to="#" class="closebtn" onClick={closeNav}>
            &times;
          </Link>
          <div class="small">
            <div class="smallLogo">
              <Link to="/">
                <img src="/images/gifs/logo2.png" alt="Logo" />
              </Link>
            </div>
            <ul>
              <li>
                <HashLink to="/#services">Services</HashLink>
              </li>
              <li>
                <HashLink to="/#contact">Contact Me</HashLink>
              </li>
              <li>
                <HashLink to="/#experience">Experience</HashLink>
              </li>
            </ul>
            <p>
              Check out my articles, React and React Native UI components at the
              code laboratory.
            </p>
          </div>
        </div>
        {/* END SMALL DEVICE */}
        <div class="nav">
          <div class="footerLogo">
            <Link to="/">
              <img src="/images/gifs/logo2.png" alt="Logo" />
            </Link>
          </div>
          <div class="nav2">
            <div class="menu">
              <HashLink to="/#about">About Me</HashLink>
            </div>
            <div class="menu">
              <HashLink to="/#services">Services</HashLink>
            </div>
            <div class="menu">
              <HashLink to="/#experience">Experience</HashLink>
            </div>
            <div class="menu">
              <HashLink to="/#contact">Contact Me</HashLink>
            </div>
          </div>
          {/* open */}
          <div id="opened" onClick={openNav}>
            &#9776;
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

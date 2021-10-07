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
                <Link to="/">Home</Link>
              </li>
              <li>
                <HashLink to="#services">Services</HashLink>
              </li>
              <li>
                <HashLink to="#contact">Contact Me</HashLink>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>
            <div class="smallMedia">
              <a
                href="https://www.facebook.com/Charles.mmassy.1466/"
                target="_blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/minahlaur/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/Charlesmmassy"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.behance.net/laummassy01ce" target="_blank">
                <i class="fab fa-behance"></i>
              </a>
              <a href="https://github.com/Charlesmmassy" target="_blank">
                <i class="fab fa-github-alt"></i>
              </a>
            </div>
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
              <HashLink to="/#about">about Me</HashLink>
            </div>
            <div class="menu">
              <HashLink to="/#services">services</HashLink>
            </div>
            <div class="menu">
              <Link to="/portfolio">Portfolio</Link>
            </div>
            <div class="menu">
              <HashLink to="/#contact">contact Me</HashLink>
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

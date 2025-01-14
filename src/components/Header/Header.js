import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          <Link to={"/"}>
            <span>Cedric</span> <br /> Tech
          </Link>
        </h1>
        <ul>
          <li>
            <Link to={"/my-work"}>My Work</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/about-me"}>About Me</Link>
          </li>
        </ul>
      </div>

      <div className="header__right">
        <button>Get in touch</button>
      </div>
    </div>
  );
};

export default Header;

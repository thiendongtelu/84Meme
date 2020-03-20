import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/image/logo_transparent.png";

import "./header.style.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="tag-container">
        <Link to="/">Some tags</Link>
        <Link to="/">Some tags</Link>
        <Link to="/">Some tags</Link>
        <Link to="/">Some tags</Link>
      </div>
      <div className="login-container">
          <button className='login-button'>Login</button>
          <button className='signup-button'>Sign up</button>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo.png"; // relative path


function Header() {
  return (
    <header className="navbar">
       <img src={logo} alt="Company Logo" style={{ height: "90px", marginRight: "10px" }} />
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#products">Products</a>
        <a href="#careers">Careers</a>
        <a href="#contact">Contact</a>
        <button className="contact-btn">Get in Touch</button>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
}
export default Header;

const linkStyle = {
  color: "red",
  textDecoration: "none",
  fontWeight: "500"
};
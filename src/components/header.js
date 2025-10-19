import React from 'react';

function Header() {
  return (
    <header className="navbar">
      <img src="./public/logo.png" alt="Inventra Labs" className="logo" />
      <nav>
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


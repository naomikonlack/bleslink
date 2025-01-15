// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onLoginClick, onRegisterClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">TravelPal</div>
      <div className="nav-buttons">
        <button className="login" onClick={onLoginClick}>Login</button>
        <button className="find-traveler" onClick={onRegisterClick}>Find a traveler</button>
      </div>
    </nav>
  );
};

export default Navbar;

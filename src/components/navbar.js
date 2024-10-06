// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.jpg'; // Ensure the path is correct
import './navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="text-container">
          <span className="welcome-text">Welcome to SureTrust</span>
          <span className="social-service-text">Social Service Initiative</span>
        </div>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;

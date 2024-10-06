// src/components/Navbar.js
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import logo from '../assests/logo.jpg';
import mainImage from '../assests/main.png'; // Import the main image
import './MainPage.css';

const Navbar = () => {
  const [activeCard, setActiveCard] = useState(null); // State to track the active card
  const [isOpen, setIsOpen] = useState(false); // State to track if the navbar is open

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index); // Toggle the card content
  };

  const handleLoginClick = () => {
    window.location.href = "/login"; // Redirecting to login page
  };

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the navbar open/close state
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="SureTrust Logo" className="logo" />
          <div className="text-container">
            <h1 className="welcome-text">Welcome to SureTrust</h1>
            <p className="learning-platform">Learning Platform</p>
          </div>
        </div>
        <div className={`navbar-right ${isOpen ? "open" : ""}`}>
          <Link to="#about" className="nav-link">About Us</Link>
          <Link to="#internships" className="nav-link">Internships</Link>
          <button className="login-button" onClick={handleLoginClick}>Login</button>
        </div>
        <div className="hamburger" onClick={handleToggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

      {/* New Section for SURE Trust Content */}
      <div className="sure-trust-section">
        <div className="text-content">
          <h2>SURE Trust</h2>
          <h3>Skill Upgradation</h3>
          <h3>For Rural Youth Empowerment</h3>
          <Link to="/explore" className="explore-button">Explore</Link>
          <Link to="/get-started" className="get-started-button">Get Started</Link>
        </div>
        <img src={mainImage} alt="Main" className="main-image" />
      </div>

      <div className='head'>
        <h1>Programs</h1>
      </div>

      {/* Card Section */}
      <div className="card-container">
        {[
          { title: "Students Undergoing Training", data: "300+" },
          { title: "Students Completed Training", data: "1,000+" },
          { title: "Students Placed", data: "300+" },
          { title: "Courses", data: "28+" },
          { title: "Ongoing Batches", data: "25+" },
          { title: "Trainers", data: "135+" }
        ].map((card, index) => (
          <div className="card" key={index} onClick={() => handleCardClick(index)}>
            <h4>{card.title}</h4>
            <div className={`card-content ${activeCard === index ? 'active' : ''}`}>
              <p>{card.data}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;

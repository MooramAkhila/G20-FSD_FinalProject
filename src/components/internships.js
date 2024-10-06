import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.jpg'; // Adjust path as needed
import img1 from '../assests/vlsi.png';
import img2 from '../assests/autocad.jpg';
import img3 from '../assests/farmer.jpg';
import img4 from '../assests/datascience.webp';
import img5 from '../assests/hospital.jpg';
import img6 from '../assests/IOT.jpg';
import img7 from '../assests/python.webp';
import img8 from '../assests/web.jpg';
import './internships.css'; // Import your CSS file

const projects = [
  { id: 1, image: img1, heading: 'VLSI Design', subheading: 'AXI to APB bridge -- Project Completed' },
  { id: 2, image: img2, heading: 'Auto CAD AND SOLID WORKS', subheading: 'AUTONOMOUS GUIDED FORKLIFT VEHICLE FOR WAREHOUSES - Project Complete' },
  { id: 3, image: img3, heading: 'ANDROID APP DEVELOPMENT', subheading: 'Building Farmer Connect App - Project Completed' },
  { id: 4, image: img4, heading: 'Project Data Science & Data Analytics', subheading: 'Unlocking Insights: SURE Trust Student Data Analytics-Project Completed ' },
  { id: 5, image: img5, heading: 'JAVA', subheading: 'Hospital Management System Project - Project Completed' },
  { id: 6, image: img6, heading: 'EMBEDDED SYSTEMS & IOT', subheading: 'IoT Gateway -Projects Completed' },
  { id: 7, image: img7, heading: 'Python', subheading: 'IERY Outreach Project - Completed' },
  { id: 8, image: img8, heading: 'WEB DEVELOPMENT', subheading: 'Building a website newly started Super Speciality Hospital - Project Completed' }
];

function Internships() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePrev = () => {
    // Add functionality to navigate to previous project
  };

  const handleNext = () => {
    // Add functionality to navigate to next project
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="SureTrust Logo" className="logo" />
          <h2>Welcome to SURE Trust</h2>
        </div>
        <div className="navbar-right">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about-us" className="nav-link">About</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/internships" className="nav-link">Internships</Link>
          <div className="login-container">
            <Link to="/login" className="login-button">Login</Link>
          </div>
        </div>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link>
        <Link to="/about-us" className="nav-link" onClick={toggleMobileMenu}>About</Link>
        <Link to="/courses" className="nav-link" onClick={toggleMobileMenu}>Courses</Link>
        <Link to="/internships" className="nav-link" onClick={toggleMobileMenu}>Internships</Link>
        <Link to="/login" className="nav-link" onClick={toggleMobileMenu}>Login</Link>
      </div>

      <div className="main-content">
        <div className="internship-projects">
          <h2>Internship Projects</h2>
        </div>

        <div className="carousel-container">
          <button className="carousel-button prev" onClick={handlePrev}>&lt;</button>
          <div className="carousel-projects">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.heading} className="project-image" />
                <h3>{project.heading}</h3>
                <p>{project.subheading}</p>
              </div>
            ))}
          </div>
          <button className="carousel-button next" onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </>
  );
}

export default Internships;

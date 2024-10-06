import React, { useState } from "react";
import { Link } from "react-router-dom";
import './course.css';
import logo from '../assests/logo.jpg';

const boxData = [
    { id: 1, title: "Robotics Basic Applications", description: "6 months Internship\nB.Tech completed / B.Tech 3rd or 4th year" },
    { id: 2, title: "Cybersecurity & Ethical Hacking", description: "6 months Internship\nB.Tech completed / B.Tech 3rd or 4th year" },
    { id: 3, title: "Android App Development", description: "6 months Internship\nB.Tech completed / B.Tech 3rd or 4th year" },
    { id: 4, title: "Full Stack Web Development", description: "6 months Internship\nB.Tech completed / B.Tech 3rd or 4th year" },
    { id: 5, title: "Core Java Program", description: "6 months Internship\nB.Tech completed / B.Tech 3rd or 4th year" },
    { id: 6, title: "Python & ML Basic Applications", description: "6 months Internship\nB.Tech completed / B.Tech 3rd or 4th year" },
    { id: 7, title: "Digital Marketing Applications", description: "6 months Internship\nB.Tech completed / B.Tech 3rd or 4th year" },
    { id: 8, title: "Embedded Systems & IOT", description: "6 months Internship\nB.Tech completed / B.Tech 3rd or 4th year" },
    { id: 9, title: "Financial Modelling & Valuation", description: "6 months Internship\nB.Com, BBA, MBA, CFA and CA aspirants" },
    { id: 10, title: "SQL & PowerBi", description: "6 months Internship\nB.Tech completed / B.Tech 3rd or 4th year" },
    { id: 11, title: "10-months Full Stack Data Science Internship Program", description: "Basic knowledge of computer programming" },
    { id: 12, title: "PCB Designing", description: "6 months Internship\nB.Tech, ECE/EEE, 3rd year, 4th year pursuing and B.Tech just completed" },
    { id: 13, title: "Robotic Process Automation (RPA)", description: "6 months Internship\nBasic knowledge of computer programming" },
    { id: 14, title: "Blockchain Technology - Ethereum & Solana", description: "6 months Internship\nBasic knowledge of computer programming" },
    { id: 15, title: "Software Testing & Tools Applications", description: "6 months Internship\nB.Tech completed, B.Tech 3rd or 4th year" },
    { id: 16, title: "UI / UX Designing", description: "6 months Internship\nAny Bachelor's degree" },
    { id: 17, title: "Data Structures & Algorithms using C++", description: "6 months Internship\nBasic knowledge of computer programming" },
    { id: 18, title: "Cloud Computing & DevOps - Basic Applications", description: "6 months Internship\nB.Tech completed, B.Tech 3rd or 4th year" }
];
const Courses = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const boxesPerPage = 9;
    const totalBoxes = boxData.length;
    const totalPages = Math.ceil(totalBoxes / boxesPerPage);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentBoxes = boxData.slice(currentPage * boxesPerPage, (currentPage + 1) * boxesPerPage);

    return (
        <>
            {/* Navbar Section */}
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

            {/* Main Content */}
            <div className="main-content">
                <h1 >Courses</h1>
                <div className="box-container">
                    {currentBoxes.map(box => (
                        <div key={box.id} className="course-box">
                            <h3>{box.title}</h3>
                            <p>{box.description}</p>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    <button onClick={handlePrev} disabled={currentPage === 0}>Prev</button>
                    <button onClick={handleNext} disabled={currentPage === totalPages - 1}>Next</button>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-content">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    
                    <p>&copy; {new Date().getFullYear()} SURE Trust. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Courses;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './hello.css';
import logo from '../assests/logo.jpg';
import mainImage from '../assests/main.png';
import aicteImage from '../assests/AICTE.png';
import ibmImage from '../assests/ibm.jpg';
import tcsLogo from '../assests/tcs.jpg';
import techMahindraLogo from '../assests/tech.jpg';
import sprinklrLogo from '../assests/sprinklr.jpg';
import intelLogo from '../assests/intel.jpg';
import infosysLogo from '../assests/infoysys.jpg';
import cognizantLogo from '../assests/cognizant.jpg';

export default function Hello() {
    return (
        <>
            <div className="hello-container">
                <nav className="navbar">
                    <div className="navbar-left">
                        <img src={logo} alt="SureTrust Logo" className="logo" />
                        <div className="text-container">
                            <h1 className="welcome-text">Welcome to SureTrust</h1>
                            <p className="learning-platform">Learning Platform</p>
                        </div>
                    </div>
                    <div className="navbar-right">
                        <Link to="/about-us" className="nav-link">About</Link>
                        <Link to="/courses" className="nav-link">Courses</Link>
                        <Link to="/internships" className="nav-link">Internships</Link>
                        <div className="login-container">
                            <Link to="/login" className="login-button">Login</Link>
                        </div>
                    </div>
                </nav>

               
      <div className="home-container">
        <div className="left-content">
          <div className="text-background">
            <h1 className="t1">Welcome to SureTrust</h1>
            <p>Social Service Initiative</p>
          </div>
          <div className="button-container">
            <Link to="/get-started">
              <button className="btn get-started-btn">Get Started</button>
            </Link>
            <Link to="/explore-courses">
              <button className="btn explore-courses-btn">Explore Courses</button>
            </Link>
          </div>
        </div>
        <div className="right-image-container">
          <img src={mainImage} alt="Main Visual" className="right-image" />
        </div>
      </div>

                {/* New How It Works Section */}
                <div className="how-it-works">
                    <h2>How It Works</h2>
                    <div className="steps-container">
                        <div className="step-box">1. Register the course in SURE Trust website</div>
                        <div className="arrow">&#x2192;</div>
                        <div className="step-box">2. Join their respective WhatsApp group through email</div>
                        <div className="arrow">&#x2192;</div>
                        <div className="step-box">3. Attend daily classes</div>
                        <div className="arrow">&#x2192;</div>
                        <div className="step-box">4. Complete assignments regularly</div>
                        <div className="arrow">&#x2192;</div>
                        <div className="step-box">5. Complete the final project</div>
                        <div className="arrow">&#x2192;</div>
                        <div className="step-box">6. Complete any 3 social activities</div>
                        <div className="arrow">&#x2192;</div>
                        <div className="step-box">7. Get your certificate</div>
                    </div>
                    <div className="animated-line"></div>
                </div>
                {/* New Boxes Section */}
                <div className="boxes-container">
                    <div className="left-div">
                        <div className="box">
                            <h3>SURE Trust signed up on the NGO-DARPAN and a registered entity on MCA portal for Undertaking CSR Activities.</h3>
                            <p>The NGO-DARPAN is a platform that provides space for interface between VOs/NGOs and key Government Ministries / Departments / Government Bodies. SURE Trust is registered with the MCA portal with the registration id: CSR00039792, and is eligible to undertake CSR activities.</p>
                        </div>
                        <div className="box">
                            <h3>SURE Trust Internships are accessible on AICTE Portal.</h3>
                            <p>SURE Trust offers free online: 4 months training for skill upgradation and 2 months full-time internship after the training, 4 months training for skill upgradation and 4 months part-time internship after the training.</p>
                        </div>
                    </div>
                    <div className="right-div">
                        <div className="box">
                            <h3>SURE Trust is NGO Partner with TATA Group of Companies.</h3>
                            <p>TATA Proengage team opens the volunteering opportunities in SURE Trust to all their employees across the globe, once in six months. Employees from different levels of management volunteer to support SURE Trust in various capacities as Trainers, Mentors, Advisors, and so on.</p>
                        </div>
                        <div className="box">
                            <h3>Vision of SURE Trust</h3>
                            <p>Enhancing the employability of educated unemployed rural youth through ‘Human values-based skill upgradation in emerging technologies, with no cost to students.</p>
                        </div>
                    </div>
                </div>
                {/* New Alumni Section */}
                <div className="alumni-section">
                    <h2>OUR Alumni Works At</h2>
                    <div className="company-boxes">
                        <div className="company-box"><img src={tcsLogo} alt="TCS" /></div>
                        <div className="company-box"><img src={techMahindraLogo} alt="Tech Mahindra" /></div>
                        <div className="company-box"><img src={sprinklrLogo} alt="Sprinklr" /></div>
                        <div className="company-box"><img src={intelLogo} alt="Intel" /></div>
                        <div className="company-box"><img src={infosysLogo} alt="Infosys BPM" /></div>
                        <div className="company-box"><img src={cognizantLogo} alt="Cognizant" /></div>
                    </div>
                </div>

                {/* Collaborators Section */}
                <div className="collaborators-section">
                    <h2>Collaborators</h2>
                    <div className="collaborator-boxes">
                        <a href="https://www.astrazeneca.com" className="collaborator-box">AstraZeneca</a>
                        <a href="https://www.redapricot.com" className="collaborator-box">Redapricot</a>
                        <a href="https://www.checkin.com" className="collaborator-box">Check.in</a>
                        <a href="https://www.lokibots.com" className="collaborator-box">Lokibots</a>
                        <a href="https://www.onusworks.com" className="collaborator-box">Onusworks</a>
                        <a href="https://www.digitalocean.com" className="collaborator-box">Digital Ocean</a>
                        <a href="https://www.tafe.com" className="collaborator-box">TAFE</a>
                        <a href="https://www.tata.com" className="collaborator-box">TATA Group of Companies</a>
                        <a href="https://www.atsuya.com" className="collaborator-box">Atsuya Technologies</a>
                    </div>
                </div>

                {/* Recognised By Section */}
                <div className="recognised-by">
                    <h2>Recognised By</h2>
                    <div className="recognised-images">
                        <div className="image-box">
                            <img src={aicteImage} alt="AICTE" className="recognised-image" />
                        </div>
                        <div className="image-box">
                            <img src={ibmImage} alt="IBM" className="recognised-image" />
                        </div>
                    </div>
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
}

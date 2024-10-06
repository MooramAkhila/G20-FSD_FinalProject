import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import './aboutus.css';
import logo from '../assests/logo.jpg';
import linkedinIcon from '../assests/l.jpg';
import saibabaImage from '../assests/saibaba.jpg';
import sriImage from '../assests/sri.webp';
import saiImage from '../assests/sai.jpeg';
import krithikaImage from '../assests/krithika.webp';
import radakumariImage from '../assests/radakumari.webp';
import otherImage1 from '../assests/rama.jpeg';
import otherImage2 from '../assests/ssr.jpeg';
import otherImage3 from '../assests/Vandana.jpeg';
import otherImage4 from '../assests/amar.jpeg';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <nav className="navbar">
                <div className="navbar-left">
                    <img src={logo} alt="SureTrust Logo" className="logo" />
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
            </nav>
            <div className="about-us-container">
            <h1 className="about-us-heading">Birth of the SURE Trust</h1>

            {/* Section with the Saibaba image */}
            <div className="about-us-image-section">
                <img src={saibabaImage} alt="Saibaba" className="about-us-image" />
            </div>

            {/* Content section below the image */}
            <div className="about-us-content">
                <h2 className="about-us-subheading">A narration by The founder, Prof. Radhakumari</h2>

                <p className="about-us-paragraph">
                I have had the greatest privilege of being a student as well as faculty for 40 years in Sri Sathya Sai Institute of Higher Learning, Anantapur Campus, Andhra Pradesh, India, whose founder chancellor is Bhagawan Sri Sathya Sai Baba. While my dream was to continue to serve the Institution even after retirement, little did I realize that Bhagawan had different plans for me. The inborn passion for teaching and research; and the nature of “always move ahead with optimism amidst all adversities”, made my mind debate on how to put to use the vast knowledge acquired over this long period of teaching, for the benefit of youth, especially living in rural areas. So, I decided to set out on a journey to visit the villages, around Puttaparthi, Anantapur district of Andhra Pradesh, India, for assessing the requirements of educated unemployed rural youth. While I was waiting for an auspicious day to begin the journey, I spotted Mrs. Vandana Nagesh, in the Darshan grounds in Sai Kulwant Hall. After she departed from the department of Management & Commerce, Anantapur Campus in the mid-1990s on completion of her studies, this was the first time I met her. Having nurtured special love for all the students, I was pleasantly surprised to see her; and picked up conversation. On listening to my plan during the chat, Mrs. Vandana instantly offered to accompany me.
                    </p>
                <p className="about-us-paragraph">
                Our journey into the villages, thus, began, for identifying the missing skill sets in educated but unemployed rural youth. Delightful coincidences during the journey made us feel that Swami was hand holding and directing us in every step we undertook. The search brought to light the twin realities of rural areas. While most of the rural youth are qualified with professional degrees, majority of them are idling at home lacking the skill sets needed by the industry for employing them. This reality resulted in the dawn of the "Skill Upgradation for Rural-youth Empowerment – SURE" concept. Proceeding further, a brochure mentioning the programs that are offered to enhance their skill sets was circulated. In response, Mr. Jagadeesh, from a remote village in Anantapur district, Andhra Pradesh, India, approached us. A detailed discussion with Jagadeesh revealed that he is highly versatile with Python program, AI, ML,DL, DS, and DA. Having good communication skills and with Navodaya schooling background, he said he discontinued M.C.A integrated program from LPU, Punjab, to use his theoretical knowledge to build industry-related software solutions, and thus gain the required capability to set up a startup venture. completing PG diploma in AI and ML from IIIT, Bangalore. Jagadeesh is currently pursuing MS in AI and ML from Liverpool John Moores University, London, UK, through upGrad online platform. Simultaneously Mr. Jagadeesh is sincerely training batches of students in Python, AI, ML, DL, DS, and DA.
                    </p>
                <p className="about-us-paragraph">
                The overall understanding we gained from this village survey was that majority of rural youth besides possessing good academic degrees, have amazing talent and inexplicable zeal to learn new things. With a little guidance to channelize their latent talent in the right direction, they will undoubtedly become the dynamic soldiers of Indian economic growth. We express our heartfelt gratitude to Bhagawan Sri Sathya Sai Baba for promoting us to start this highly fulfilling service initiate, and sincerely pray for His continued guidance.
                        </p>
              
            </div>

            {/* Board of Trustees Section */}
            <div className="board-of-trustees">
                <h2 className="board-of-trustees-heading">Board of Trustees</h2>
                <div className="cards-container">
                    <div className="card">
                        <img src={sriImage} alt="Sri" />
                        <div className="card-text">
                            <h3>Sri Chandramohan, CA</h3>
                            <p>Director and Group President Finance and Investment, TAFE - Chennai, India</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={saiImage} alt="Sai" />
                        <div className="card-text">
                            <h3>Mr. Sai Krishnakanth Prasad</h3>
                            <p>Manager Wipro -- Digital Operations and Platforms, Gurgaon, Haryana, India</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={krithikaImage} alt="Krithika" />
                        <div className="card-text">
                            <h3>Ms. Krithika Ram</h3>
                            <p>Medha is an Indian non-profit organization, working passionately for more than a decade to bring a quality change in the lives of the youth</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={radakumariImage} alt="Radakumari" />
                        <div className="card-text">
                            <h3>Prof. Radhakumari Challa</h3>
                            <p>Executive Director and Founder - SURE Trust; Retd Professor-Dept of Management & Commerce, SSSIHL, Puttaparthi</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={otherImage1} alt="Other1" />
                        <div className="card-text">
                            <h3>Mr. Ramachandran Parthasarathy</h3>
                            <p>Hon Advisor & Chair- Advisory Committee India Vision Institute & Eye wear Consultant. Formerly Group Chief Operating Officer & Director in</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={otherImage2} alt="Other2" />
                        <div className="card-text">
                            <h3>Dr. SSR Kumar</h3>
                            <p>Board of Director, Nanotechnology Executive, & Entrepreneur</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={otherImage3} alt="Other3" />
                        <div className="card-text">
                            <h3>Ms. Vandana Nagesh</h3>
                            <p>Co-Founder and Director-SURE Trust; General Manager HR. Life Slimming and Cosmetic Clinic, Hyderabad</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={otherImage4} alt="Other4" />
                        <div className="card-text">
                            <h3>Mr. Amar Vivek Aggarwal</h3>
                            <p>Founding partner-Avsai Legal; and Legal Practitioner-practicing Attorney for more than 31yrs., at various High Courts, and Hon’ble Supreme Court of India, with the last Assignment as the Additional Advocate General, Haryana.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="footer">
    <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>&copy; {new Date().getFullYear()} SURE Trust</p>
        <a href="https://www.linkedin.com/company/suretrust" target="_blank" rel="noopener noreferrer" className="footer-linkedin">
            <img src={linkedinIcon} alt="LinkedIn" className="footer-linkedin-icon" />
        </a>
    </div>
</div>

        </div>
        </div>
    );
};

export default AboutUs;

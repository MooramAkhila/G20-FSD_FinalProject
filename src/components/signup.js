import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify
import './signup.css'; // Import your CSS file for styling

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [qualification, setQualification] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [collegePlace, setCollegePlace] = useState('');
    const [collegeDistrict, setCollegeDistrict] = useState('');
    const [collegeState, setCollegeState] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [terms, setTerms] = useState({
        term1: false,
        term2: false,
        term3: false,
        term4: false,
    });
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (!terms.term1 || !terms.term2 || !terms.term3 || !terms.term4) {
            toast.error('You must agree to all terms and conditions');
            return;
        }

        // Show toast notification
        toast.success(`Thanks ${fullName}! You have successfully enrolled in ${selectedCourse}.`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // Duration for which toast should be visible
        });

        // Show modal after toast
        setTimeout(() => setShowModal(true), 3000); // Delay to allow toast to be seen
    };

    const handleModalClose = () => {
        setShowModal(false);
        navigate('/');
    };

    const courses = [
        "Robotics Basic Applications",
        "Cybersecurity & Ethical Hacking",
        "Android App Development",
        "Full Stack Web Development",
        "Core Java Program",
        "Python & ML Basic Applications",
        "Digital Marketing Applications",
        "Embedded Systems & IOT",
        "Financial Modelling & Valuation",
        "SQL & PowerBi",
        "10-months Full Stack Data Science Internship Program",
        "PCB Designing",
        "Robotic Process Automation (RPA)",
        "Blockchain Technology - Ethereum & Solana",
        "Software Testing & Tools Applications",
        "UI / UX Designing",
        "Data Structures & Algorithms using C++",
        "Cloud Computing & DevOps - Basic Applications",
    ];

    return (
        <div className="signup-page">
            <nav className="navbar">
                <div className="navbar-left">
                    <h2>Sure Trust</h2>
                </div>
                <div className="navbar-right">
                    <Link to="/about-us" className="nav-link">About</Link>
                    <Link to="/courses" className="nav-link">Courses</Link>
                    <Link to="/internships" className="nav-link">Internships</Link>
                </div>
            </nav>
            <div className="signup-main-container">
                <div className="signup-content">
                    <div className="signup-form-container">
                        <h1>Create Account</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email Address:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password">Confirm Password:</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="full-name">Full Name:</label>
                                <input
                                    type="text"
                                    id="full-name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone:</label>
                                <input
                                    type="text"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender:</label>
                                <select
                                    id="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="qualification">Qualification:</label>
                                <input
                                    type="text"
                                    id="qualification"
                                    value={qualification}
                                    onChange={(e) => setQualification(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="college-name">College Name:</label>
                                <input
                                    type="text"
                                    id="college-name"
                                    value={collegeName}
                                    onChange={(e) => setCollegeName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="college-place">College Place:</label>
                                <input
                                    type="text"
                                    id="college-place"
                                    value={collegePlace}
                                    onChange={(e) => setCollegePlace(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="college-district">College District:</label>
                                <input
                                    type="text"
                                    id="college-district"
                                    value={collegeDistrict}
                                    onChange={(e) => setCollegeDistrict(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="college-state">College State:</label>
                                <input
                                    type="text"
                                    id="college-state"
                                    value={collegeState}
                                    onChange={(e) => setCollegeState(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="course">Select Course:</label>
                                <select
                                    id="course"
                                    value={selectedCourse}
                                    onChange={(e) => setSelectedCourse(e.target.value)}
                                    required
                                >
                                    <option value="">Select Course</option>
                                    {courses.map((course) => (
                                        <option key={course} value={course}>{course}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group terms">
                                <label>Terms and Conditions:</label>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="term1"
                                        checked={terms.term1}
                                        onChange={(e) => setTerms({ ...terms, term1: e.target.checked })}
                                    />
                                    <label htmlFor="term1">Student has to turn on Video during the entire class</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="term2"
                                        checked={terms.term2}
                                        onChange={(e) => setTerms({ ...terms, term2: e.target.checked })}
                                    />
                                    <label htmlFor="term2">Attending 8 Life Skilld Training sessions during the four months course is mandatory for all the students</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="term3"
                                        checked={terms.term3}
                                        onChange={(e) => setTerms({ ...terms, term3: e.target.checked })}
                                    />
                                    <label htmlFor="term3"> Student should not be a full time or part time employee anywhere</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="term4"
                                        checked={terms.term4}
                                        onChange={(e) => setTerms({ ...terms, term4: e.target.checked })}
                                    />
                                    <label htmlFor="term4">Students promise that you will learn the courses with commintment,regularity and punctuality,for full four months duration ,abiding by all the rules and discipline of the ssure Trust </label>
                                </div>
                            </div>
                            <button type="submit" className="signup-button">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer /> {/* Include ToastContainer to display toasts */}

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Thank You!</h2>
                        <p>Thanks {fullName}! You have successfully enrolled in {selectedCourse}.</p>
                        <button className="modal-button" onClick={handleModalClose}>Go to Homepage</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Signup;

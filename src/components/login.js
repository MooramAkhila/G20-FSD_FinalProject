import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'; // Import your CSS file for styling
import logo from '../assests/logo.jpg'; // Adjust path as needed
import loginImage from '../assests/login.png'; // Adjust path as needed

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-page">
            <nav className="navbar">
                <div className="navbar-left">
                    <img src={logo} alt="SureTrust Logo" className="logo" />
                    <h2>Sure Trust</h2>
                </div>
                <div className="navbar-right">
                    <Link to="/about-us" className="nav-link">About</Link>
                    <Link to="/courses" className="nav-link">Courses</Link>
                    <Link to="/internships" className="nav-link">Internships</Link>
                </div>
            </nav>

            <div className="login-main-container">
                <div className="login-content">
                    <div className="login-form-container">
                        <div className="login-header">
                            <h1>LOGIN</h1>
                        </div>
                        <div className="login-text">
                            <h5>User Registered Email ID</h5>
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
                                <button type="submit" className="login-button">Login</button>
                            </form>
                            <div className="signup-link">
                                <Link to="/signup">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                    <div className="login-image">
                        <img src={loginImage} alt="Login" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

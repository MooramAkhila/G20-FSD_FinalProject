import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hello from './components/hello'; // Ensure the path is correct
import AboutUs from './components/aboutus'; // Ensure the path is correct
import Course from './components/course'; // Ensure the path is correct
import Internships from './components/internships'; // Ensure the path is correct
import Login from './components/login'; // Import the Login component
import Signup from './components/signup'; // Import the Signup component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hello />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/courses" element={<Course />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/login" element={<Login />} /> {/* Route for Login */}
                <Route path="/signup" element={<Signup />} /> {/* Route for Signup */}
            </Routes>
        </Router>
    );
}

export default App;

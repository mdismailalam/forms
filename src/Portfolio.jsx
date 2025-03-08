import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Portfolio.css'; // Importing the CSS file
import { Link } from 'react-router-dom';
import logo from "./Assets/logo.jpeg"
import Home from './components/Home';
// Updated image paths from the assets folder
import crousel1 from './Assets/crousel2.jpeg';
import crousel2 from './Assets/crousel1.jpeg';
import crousel3 from './Assets/crousel3.jpeg';
import crousel4 from './Assets/crousel4.jpeg';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const navItems = ['Home', 'About', 'Our Work', 'Services', 'Contact Us'];

    const carouselItems = [
        { image: crousel1, title: "Welcome" },
        { image: crousel2, title: "Our Services" },
        { image: crousel3, title: "Portfolio" },
        { image: crousel4, title: "Contact Us" }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length); // Loop to the first slide after the last one
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length); // Loop to the last slide if on the first
    };

    // Auto slide after every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

        return () => {
            clearInterval(intervalId); // Clean up on component unmount
        };
    }, []);

    return (
        <div className="layout">
            <div className="admit-card-link-div">
                <div className="admit-card-link-container">
                    <Link to="/admitcard" className="admit-card-link">
                        Click Here For Exam Registration 2025*
                    </Link>
                    <Link to="/admitcard" className="admit-card-link">
                        Click Here For Exam Registration 2025*
                    </Link>
                    <Link to="/admitcard" className="admit-card-link">
                        Click Here For Exam Registration 2025*
                    </Link>
                </div>
            </div>


            <header className="header">
                <div className="header-container">
                    <img alt="Logo" className="form-logo" src={logo} />
                    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                        {navItems.map((item) => (
                            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-item">
                                <Link to="/home" className="admit-card-link">{item}</Link>
                            </a>
                        ))}
                    </nav>
                    <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Carousel */}
            <Home />

            {/* Main Content */}
            <main className="main-content">
                <div className="content-grid">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="feature">
                            <div className="feature-image">
                                <img src={`/api/placeholder/200/200`} alt={`Feature ${item}`} />
                            </div>
                            <h3 className="feature-title">Feature {item}</h3>
                            <p className="feature-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h4>About Us</h4>
                        <p>Short description about your company and what you do.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            {navItems.map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="footer-link">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <address>
                            123 Business Street<br />
                            City, State 12345<br />
                            Phone: (123) 456-7890<br />
                            Email: info@example.com
                        </address>
                    </div>
                    <div className="footer-section">
                        <h4>Newsletter</h4>
                        <div className="newsletter">
                            <input type="email" placeholder="Enter your email" className="newsletter-input" />
                            <button className="newsletter-button">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;

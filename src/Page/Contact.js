import React from 'react';
import './Home.css';
import Footer from './Footer';
import behance from '../Img/behance.png'
import LinkedIn from '../Img/linkedin.png'
import Instagram from '../Img/instagram.png'
import Gmail from '../Img/gmail.png'
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

function Contact() {
    return (
        <div className="portfolio-page-content">
            <div className="contact-page-wrapper">
                <div className="contact-container">
                    {/* Left side: Mascot Image */}
                    <div className="contact-image-wrapper">
                        <img
                            src="/img/designer_illustration.png"
                            alt="Sagar Rathva Illustration"
                            className="contact-mascot-img"
                        />
                    </div>

                    {/* Right side: Contact Info */}
                    <div className="contact-info-wrapper">
                        <span className="contact-subtitle">Contact Me</span>
                        <h1 className="contact-heading">
                            Let's Create Something  <br />
                            Exceptional Together
                        </h1>
                        <p className="contact-description">
                            I'm currently open to new opportunities and exciting projects.
                        </p>
                        {/* <p className="contact-highlight">
                            Ready to discuss how AI-powered design can drive <br />
                            your product's success?
                        </p> */}

                        <div className="contact-cards-container">
                            <div className="contact-card">
                                <div className="contact-card-icon-wrapper email-icon-bg">
                                    <Mail color="#ff4a17" strokeWidth={1} />
                                </div>
                                <div className="contact-card-details">
                                    <span className="contact-card-label">Email</span>
                                    <a href="mailto:rathwasagar007@gmail.com" className="contact-card-value">
                                        rathwasagar007@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card-icon-wrapper phone-icon-bg">
                                    <Phone color="#ff4a17" strokeWidth={1} />
                                </div>
                                <div className="contact-card-details">
                                    <span className="contact-card-label">Phone</span>
                                    <a href="tel:+919714414012" className="contact-card-value">
                                        +91 9714414012
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <div className="contact-socials-wrapper">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-pill">
                                LinkedIn <span className="arrow">↗</span>
                            </a>
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="contact-social-pill">
                                Behance <span className="arrow">↗</span>
                            </a>
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="contact-social-pill">
                                Dribbble <span className="arrow">↗</span>
                            </a>
                        </div> */}
                        <div className="social-section">
                            <span className="social-label">Follow Me</span>
                            <div className="social-icons-wrapper">
                                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-icon-pill"><img src={behance} /></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-pill"><img src={LinkedIn} /></a>
                                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-icon-pill"><img src={Instagram} /></a>

                                <a href="mailto:rathwasagar007@gmail.com" className="social-icon-pill">
                                    <img src={Gmail} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;

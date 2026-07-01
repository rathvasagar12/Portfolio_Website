import React from 'react';
import { MapPinned } from 'lucide-react';
import behance from '../Img/behance.png'
import LinkedIn from '../Img/linkedin.png'
import Instagram from '../Img/instagram.png'
import Gmail from '../Img/gmail.png'
import { ArrowRight } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';


function Hero() {

    return (
        <div>
            <section className="portfolio-page-content">
                {/* Main Hero Container */}
                <div className="portfolio-hero-container">
                    {/* Left Column Info */}
                    <div className="hero-info">
                        <div className="greeting-badge">
                            <span role="img" aria-label="hand wave">👋</span> Hi, I'am Sagar Rathva
                        </div>
                        <h1>
                            UI/UX &amp; <br />
                            Web UI <br />
                            <span className="highlight">
                                Designer.
                                <svg className="underline-svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M 0 5 Q 50 1 100 5" stroke="#ff4a17" strokeWidth="5" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="hero-description">
                            I create clean, modern, and user-focused digital experiences that help brands grow and connect.
                        </p>
                        <div className="hero-ctas">
                            <a href="/Sagar_Rathva_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary-portfolio">
                                View Resume <span className="arrow"><ArrowUpRight color="#ffffffff" strokeWidth={1} /></span>
                            </a>
                            <a href="/Portfolio" className="btn-secondary-portfolio">
                                View My Work <span className="arrow"><ArrowRight color="#737373" strokeWidth={1} /></span>
                            </a>
                        </div>
                        <div className="social-section">
                            <span className="social-label">Follow Me</span>
                            <div className="social-icons-wrapper">
                                <a href="https://www.behance.net/sagarrathawa1" target="_blank" rel="noopener noreferrer" className="social-icon-pill"><img src={behance} alt="Behance" /></a>
                                <a href="https://www.linkedin.com/in/sagar-rathva/" target="_blank" rel="noopener noreferrer" className="social-icon-pill"><img src={LinkedIn} alt="LinkedIn" /></a>
                                <a href="https://www.instagram.com/moozark" target="_blank" rel="noopener noreferrer" className="social-icon-pill"><img src={Instagram} alt="Instagram" /></a>

                                <a href="mailto:rathwasagar007@gmail.com" className="social-icon-pill">
                                    <img src={Gmail} alt="Gmail" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Visuals */}
                    <div className="hero-visuals">
                        <div className="visual-bg-circle"></div>

                        {/* Small decorative arrow pointing to illustration */}
                        <svg className="arrow-overlay" viewBox="0 0 50 50" fill="none">
                            <path d="M40,10 C30,12 18,22 15,35 M15,35 L12,28 M15,35 L24,34" stroke="#ff4a17" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <div className="main-illustration-wrapper">
                            <img
                                src="/img/designer_illustration.png"
                                alt="Srinivas Kusre Illustration"
                                className="main-illustration"
                            />
                        </div>

                        {/* Floating badges */}
                        <div className="floating-badge experience-badge">
                            <span className="exp-num">4+</span>
                            <span className="exp-text">Years of<br />Experience</span>
                        </div>

                        <div className="floating-badge location-badge">
                            <div className="location-icon-wrapper">

                                <MapPinned color="#ffffffff" strokeWidth={1} />
                            </div>
                            <div className="location-details">
                                <span className="location-city">Aehmdabad, Gujarat</span>
                                <span className="location-status">Available for work</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Hero;
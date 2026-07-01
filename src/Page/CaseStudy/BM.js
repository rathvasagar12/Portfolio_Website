import React, { useEffect } from 'react';
import b2bmobile from '../../Img/b2bmobile.png'

import '../Home.css';

function BM() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="portfolio-page-content">
            <div className="casestudy-page-wrapper">
                {/* Header Section */}
                <div className="casestudy-header">
                    <span className="casestudy-badge">Web UI/UX Case Study</span>
                    <h1 className="casestudy-title">B2B</h1>
                    <p className="casestudy-subtitle">
                        A modern B2B marketplace mobile app
                    </p>
                </div>

                {/* Hero Showcase Image */}
                <div className="casestudy-hero-image-wrapper">
                    <div className="browser-mockup-header">
                        <span className="mockup-dot red"></span>
                        <span className="mockup-dot yellow"></span>
                        <span className="mockup-dot green"></span>
                        <div className="mockup-address-bar"></div>
                    </div>
                    <img src={b2bmobile} alt="Global-Summits Dashboard" className="casestudy-hero-img" />
                </div>

                {/* Project Metadata Grid */}
                <div className="casestudy-meta-grid">
                    <div className="meta-item">
                        <span className="meta-label">Role</span>
                        <span className="meta-value">Lead UI/UX Designer</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Duration</span>
                        <span className="meta-value">1 Months</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Industry</span>
                        <span className="meta-value">B2b Mobile app</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Tools Used</span>
                        <span className="meta-value">Figma</span>
                    </div>
                </div>

                {/* Core Case Study Content */}
                <div className="casestudy-content-container">
                    <div className="casestudy-section">
                        <h2>The Challenge</h2>
                        <p>
                            The client wanted a modern B2B marketplace mobile app that would simplify the process of connecting buyers and suppliers on a single platform. The goal was to create an intuitive experience where businesses could easily discover products, request quotations, place bulk orders, and communicate with suppliers.



                        </p>
                        <p>

                        </p>
                        <p>
                            In addition to designing the cStarting from scratch, I designed the complete user interface with a focus on usability, scalability, and a professional visual identity. The main challenge was organizing a large product catalog, presenting detailed product information without overwhelming users, and creating a smooth purchasing journey from product discovery to order placement.omplete UI, I developed all website pages with a responsive layout, ensuring a consistent experience across desktop, tablet, and mobile devices. The goal was to build a scalable, visually engaging platform that strengthened the company's online presence and made it easy for visitors to explore events, learn about the organization, and connect with the team.

                        </p>
                        <p>In addition to the UI design, I ensured the interface was optimized for mobile devices with consistent layouts, intuitive navigation, and a seamless user experience across every screen.</p>
                    </div>

                    <div className="casestudy-section">
                        <h2>Our Approach & Design Process</h2>
                        <p>
                            To build an efficient B2B marketplace experience, I began by researching leading B2B commerce platforms and analyzing how businesses search, compare, and purchase products. These insights helped define the user journey and information architecture for the application.
                        </p>
                        <p>I created user flows and wireframes to map the buying process before designing high-fidelity mobile interfaces. The UI focused on clarity, speed, and ease of use, enabling users to browse products, filter results, communicate with suppliers, and manage orders with minimal effort.</p>
                        <p>
                            The design system maintained consistent typography, color palettes, components, and spacing to ensure a cohesive experience across the entire application. Throughout the project, I refined the design based on usability considerations to deliver a scalable and business-focused mobile solution.                        </p>

                        <ul>
                            <li><strong>Research & Competitor Analysis</strong></li>
                            <li><strong>Information Architecture & Sitemap</strong></li>
                            <li><strong>Wireframing</strong></li>
                            <li><strong>UI Design</strong></li>
                            <li><strong>Responsive Design</strong></li>
                            <li><strong>Prototyping</strong></li>
                            <li><strong>Testing</strong></li>
                        </ul>
                    </div>

                    <div className="casestudy-section">
                        <h2>Key Features & UI Highlights</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <h3>Bulk Ordering</h3>
                                <p>A simplified ordering process designed specifically for wholesale and bulk purchases.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Order Management</h3>
                                <p>Track orders, view purchase history, and monitor order status from a centralized dashboard.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Professional Design System</h3>
                                <p>A scalable design system with reusable UI components, consistent typography, and a cohesive visual language for future product growth.</p>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Prototype & Live Website Section */}
                    <div className="casestudy-actions-section">
                        <h2>Project Deliverables</h2>
                        <p>Explore the live application and interactive Figma prototypes to see the design in action.</p>

                        <div className="casestudy-buttons-group">
                            {/* <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-casestudy-solid"
                            >
                                Visit Live Website <span className="arrow">↗</span>
                            </a> */}
                            <a
                                href="https://www.figma.com/proto/mock-global-summits-prototype"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-casestudy-outline"
                            >
                                View Figma Prototype <span className="arrow">↗</span>
                            </a>
                        </div>

                        <div className="back-link-wrapper">
                            <a href="/Portfolio" className="back-to-portfolio-link">
                                ← Back to Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BM;

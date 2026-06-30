import React, { useEffect } from 'react';
import Footer from '../Footer';
import GSWeb from '../../Img/GS-web.png';
import '../Home.css';

function GS() {
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
                        Designed a user-centric event website featuring event details, speaker profiles, schedules, and an intuitive registration flow for a seamless attendee experience.
                    </p>
                </div>

                {/* Hero Showcase Image */}
                <div className="casestudy-hero-image-wrapper">
                    <div className="browser-mockup-header">
                        <span className="mockup-dot red"></span>
                        <span className="mockup-dot yellow"></span>
                        <span className="mockup-dot green"></span>
                        <div className="mockup-address-bar">https://global-summits.com</div>
                    </div>
                    <img src={GSWeb} alt="Global-Summits Dashboard" className="casestudy-hero-img" />
                </div>

                {/* Project Metadata Grid */}
                <div className="casestudy-meta-grid">
                    <div className="meta-item">
                        <span className="meta-label">Role</span>
                        <span className="meta-value">Lead UI/UX Designer</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Duration</span>
                        <span className="meta-value">4 Months</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Industry</span>
                        <span className="meta-value">Global Events</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Tools Used</span>
                        <span className="meta-value">Figma, Photoshop, illustrator</span>
                    </div>
                </div>

                {/* Core Case Study Content */}
                <div className="casestudy-content-container">
                    <div className="casestudy-section">
                        <h2>The Challenge</h2>
                        <p>
                            ## The Challenge

                            The client wanted a modern corporate event platform inspired by leading event management companies that organize international conferences and summits. Since there was no existing design system or UI, I was responsible for designing the entire user interface from scratch.



                        </p>
                        <p>
                            The primary challenge was to create a professional and trustworthy website that effectively showcased the company's global events, services, speakers, and past conferences while maintaining a clean and intuitive user experience. Every page had to be carefully structured to present large amounts of information without overwhelming users.
                        </p>
                        <p>
                            In addition to designing the complete UI, I developed all website pages with a responsive layout, ensuring a consistent experience across desktop, tablet, and mobile devices. The goal was to build a scalable, visually engaging platform that strengthened the company's online presence and made it easy for visitors to explore events, learn about the organization, and connect with the team.

                        </p>
                    </div>

                    <div className="casestudy-section">
                        <h2>Our Approach & Design Process</h2>
                        <p>
                            To create a modern and engaging event platform, I followed a structured design process that balanced business objectives with user needs.
                        </p>
                        <p>I began by researching leading global event and conference websites to understand industry standards, user expectations, and effective content organization. Based on these insights, I defined the website structure and created a clear information architecture to ensure visitors could easily navigate through events, services, speakers, and company information.</p>
                        <p>
                            Next, I designed low-fidelity wireframes to establish page layouts and user flows before moving to high-fidelity UI designs. The visual language focused on a clean, professional aesthetic with strong typography, consistent spacing, and a modern color palette that reinforced the company's global presence.
                        </p>
                        <p>
                            After the UI was finalized, I developed every page into a fully responsive website, ensuring a seamless experience across desktop, tablet, and mobile devices. Throughout the project, I refined the design based on feedback, maintaining consistency, usability, accessibility, and performance across the entire platform.
                        </p>
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
                                <h3>Event Discovery</h3>
                                <p>Users can easily explore upcoming and past summits with clear event listings, detailed information, and intuitive navigation.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Responsive Design</h3>
                                <p>Every page is fully responsive, delivering a consistent experience across desktop, tablet, and mobile devices.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Intuitive Navigation</h3>
                                <p>Clear menus, logical page hierarchy, and well-organized content make it easy for users to explore the platform.</p>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Prototype & Live Website Section */}
                    <div className="casestudy-actions-section">
                        <h2>Project Deliverables</h2>
                        <p>Explore the live application and interactive Figma prototypes to see the design in action.</p>

                        <div className="casestudy-buttons-group">
                            <a
                                href="https://global-summits.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-casestudy-solid"
                            >
                                Visit Live Website <span className="arrow">↗</span>
                            </a>
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

export default GS;

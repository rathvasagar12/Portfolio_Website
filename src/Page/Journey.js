import React from 'react';

function Journey() {
    return (
        <div className="portfolio-page-content">
            <div className="journey-page-wrapper">
                <div className="journey-header">
                    <span className="journey-subtitle">Journey</span>
                    <h1 className="journey-title">My Professional Journey</h1>
                    <p className="journey-description">
                        Explore my career journey through the companies I've collaborated with, the roles I've taken on, and the design solutions I've created.
                    </p>
                </div>

                <div className="journey-timeline-container">
                    {/* Vertical timeline line */}
                    <div className="journey-timeline-line"></div>

                    {/* Timeline Item 1 */}
                    <div className="journey-timeline-item">
                        {/* Timeline bullet on the line */}
                        <div className="journey-timeline-bullet"></div>

                        {/* Card to the right */}
                        <div className="journey-card">
                            <div className="journey-card-header">
                                <div className="company-logo-badge di-badge">DI</div>
                                <div className="journey-card-meta">
                                    <span className="journey-date-badge">Jun 2022 - Nov 2022 | Bilimora</span>
                                    <h3 className="company-name">Digital Innovations</h3>
                                    <span className="job-title">UI/UX Designer | Web Developer</span>
                                </div>
                            </div>
                            <p className="journey-card-description">
                                Built a strong foundation in HTML, CSS, Bootstrap, and JavaScript by developing responsive websites and learning front-end development best practices. Gained practical knowledge of UI/UX design using Figma and Adobe Photoshop, focusing on user-centered design, wireframing, prototyping, and visual design principles.
                            </p>
                            {/* <a href="#testimonials" className="btn-see-testimonials">
                                See Testimonials <span className="arrow">→</span>
                            </a> */}
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="journey-timeline-item">
                        {/* Timeline bullet on the line */}
                        <div className="journey-timeline-bullet"></div>

                        {/* Card to the right */}
                        <div className="journey-card">
                            <div className="journey-card-header">
                                <div className="company-logo-badge s-badge">S4</div>
                                <div className="journey-card-meta">
                                    <span className="journey-date-badge">Nov 2022 - July 2023 | Ahmedabad</span>
                                    <h3 className="company-name">S4 it technologies</h3>
                                    <span className="job-title">UI/UX Designer</span>
                                </div>
                            </div>
                            <p className="journey-card-description">
                                Designed 20+ mobile app wireframes and mockups in Figma using user-centered design principles. Built responsive web interfaces with HTML5, CSS3, and Bootstrap 5, ensuring consistency and cross-browser compatibility. Collaborated closely with developers and stakeholders to deliver accurate design implementation, while also creating logos, branding materials, and digital assets for clients across various industries.
                            </p>
                            <a href="#testimonials" className="btn-see-testimonials">
                                View Projects <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="journey-timeline-item">
                        {/* Timeline bullet on the line */}
                        <div className="journey-timeline-bullet"></div>

                        {/* Card to the right */}
                        <div className="journey-card">
                            <div className="journey-card-header">
                                <div className="company-logo-badge lq-badge">LQ</div>
                                <div className="journey-card-meta">
                                    <span className="journey-date-badge">August 2023 - June 2026 | Vadodara</span>
                                    <h3 className="company-name">Linq Corporate Solutions Pvt. Ltd.</h3>
                                    <span className="job-title">Sr UI/UX Designer | Team Manager</span>
                                </div>
                            </div>
                            <p className="journey-card-description">
                                Led a team of 10+ designers, managing projects from concept to delivery while ensuring quality and timely execution. Designed responsive web interfaces using React.js, HTML5, CSS3, and Bootstrap 5, and leveraged AI tools such as Stitch AI, Relume AI, and Figma Make to accelerate design workflows. Collaborated with cross-functional teams to create intuitive user experiences and developed branding assets, logos, marketing materials, and print designs aligned with client objectives.

                            </p>
                            <a href="#testimonials" className="btn-see-testimonials">
                                View Projects <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Journey;
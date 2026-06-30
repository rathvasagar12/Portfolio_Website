import React from 'react';
import './Home.css';
import Footer from './Footer';
import me from '../Img/me.PNG';
import { GraduationCap, Code2, Heart } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import Photography from '.././Img/Photography.png'
import Movie from '.././Img/Movie.png'
import Traveling from '.././Img/Traveling.png'
import Game from '.././Img/Game.png'

function About() {
    return (
        <div className="portfolio-page-content">
            <div className="about-page-wrapper">
                {/* Hero Profile Section */}
                <div className="about-hero-section">
                    <div className="about-profile-card">
                        <div className="about-img-container">
                            <img src={me} alt="Sagar Rathva" className="about-avatar" />
                            <div className="about-floating-badge experience-badge-about">
                                <span className="badge-num">4+</span>
                                <span className="badge-txt">Years Exp</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-intro-content">
                        <span className="about-subtitle">About Me</span>
                        <h1 className="about-name">Hi, I'm Sagar Rathva</h1>
                        <p className="about-title-tag">UI/UX Designer &amp; Front-End Developer</p>

                        <p className="about-paragraph-lead">
                            I am a passionate UI/UX Designer and Front-End Designer with 4 years of professional experience in designing and developing user-centered web and mobile applications.
                        </p>
                        <p className="about-paragraph-body">
                            With a solid background in Computer Engineering, I bridge the gap between creative visual design and technical front-end development. I specialize in building modern, interactive prototypes, crafting custom design systems, and converting them into clean, pixel-perfect React.js interfaces. I focus on creating designs that are not just beautiful, but also functionally effortless for the user.
                        </p>
                    </div>
                </div>

                {/* Grid Section for Education & Skills */}
                <div className="about-details-grid">
                    {/* Education Card */}
                    <div className="about-card education-card-wrapper">
                        <div className="about-card-header">
                            <div className="about-header-icon-box">
                                <GraduationCap color="#ff4a17" strokeWidth={1} />
                            </div>
                            <h2>Education</h2>
                        </div>
                        <div className="education-timeline">
                            <div className="timeline-block">
                                <span className="timeline-date">2017 - 2021</span>
                                <h3 className="timeline-degree">Bachelor of Computer Engineering</h3>
                                <p className="timeline-institution">Babaria Institute of Technology, Gujarat</p>
                                <p className="timeline-desc">Extensively studied software design, system analysis, algorithms, and human-computer interaction models.</p>
                            </div>
                        </div>
                    </div>

                    {/* Skills Card */}
                    <div className="about-card skills-card-wrapper">
                        <div className="about-card-header">
                            <div className="about-header-icon-box">
                                <CodeXml color="#ff4a17" strokeWidth={1} />
                            </div>
                            <h2>Skills &amp; Expertise</h2>
                        </div>
                        <div className="skills-categories">
                            <div className="skills-cat">
                                <h3>Design System</h3>
                                <div className="skills-tags">
                                    <span>UI/UX Design</span>
                                    <span>Wireframing</span>
                                    <span>Prototyping</span>
                                    <span>User Flows</span>
                                    <span>Mobile UI</span>
                                    <span>Figma</span>
                                    <span>Photoshop</span>
                                </div>
                            </div>
                            <div className="skills-cat">
                                <h3>Development</h3>
                                <div className="skills-tags">
                                    <span>React.js</span>
                                    <span>JavaScript</span>
                                    <span>HTML5 &amp; CSS3</span>
                                    <span>Bootstrap 5</span>
                                    <span>Responsive Web Design</span>
                                </div>
                            </div>
                            <div className="skills-cat">
                                <h3>Language Known</h3>
                                <div className="skills-tags">
                                    <span>English</span>
                                    <span>Hindi</span>
                                    <span>Gujarati</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hobbies & Passion Section */}
                <div className="about-hobbies-section">
                    <div className="about-card-header hobbies-header">
                        <div className="about-header-icon-box">
                            <Heart className="about-card-icon" size={20} />
                        </div>
                        <h2>Life Outside the Pixels</h2>
                    </div>
                    <p className="hobbies-intro-text">
                        When I'm away from the screen, these are the interests that fuel my creativity and help me stay balanced.
                    </p>
                    <div className="hobbies-grid">
                        <div className="hobby-item-card">
                            <div className="hobby-icon-wrapper"><img src={Photography} alt="" /></div>
                            <h3>Photography</h3>
                            <p>Finding beauty in everyday moments, one frame at a time.</p>
                        </div>
                        <div className="hobby-item-card">
                            <div className="hobby-icon-wrapper"><img src={Game} alt="" /></div>
                            <h3>Gaming</h3>
                            <p>I enjoy gaming as a way to relax, challenge myself, and experience innovative design and storytelling.</p>
                        </div>
                        <div className="hobby-item-card">
                            <div className="hobby-icon-wrapper"><img src={Traveling} alt="" /></div>
                            <h3>Traveling</h3>
                            <p>I enjoy traveling to explore new destinations, experience different cultures, and find inspiration in the world around me.</p>
                        </div>
                        <div className="hobby-item-card">
                            <div className="hobby-icon-wrapper"><img src={Movie} alt="" /></div>
                            <h3>Watching Movie</h3>
                            <p>Watching movies inspires my creativity through compelling storytelling, visual aesthetics, and the art of creating memorable experiences.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
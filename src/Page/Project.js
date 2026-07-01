
import './Home.css';
import GSWeb from '../Img/GS-web.png'
import b2bmobile from '../Img/b2bmobile.png'
import LogoDesign from '../Img/LogoDesign.png'

function Project() {
    return (
        <div className="portfolio-page-content">

            <div className="projects-page-wrapper">
                <div className="projects-header">
                    <span className="projects-subtitle">Portfolio</span>
                    <h1 className="projects-title">My Projects</h1>
                </div>

                <div className="projects-grid">
                    {/* Project Card 1: WakandaBooks */}
                    <div className="project-card">
                        <div className="project-image-container">
                            <a href="/CaseStudy/GS">
                                <img
                                    src={GSWeb}
                                    alt="Global-Summits Project"
                                    className="project-card-image"
                                />
                            </a>
                        </div>
                        <div className="project-card-body">
                            <span className="project-card-badge">Web UI Design</span>
                            <h3 className="project-card-title">
                                <a href="/CaseStudy/GS" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    Global-Summits
                                </a>
                            </h3>
                            <p className="project-card-description">
                                Designed a user-centric event website featuring event details, speaker profiles, schedules, and an intuitive registration flow for a seamless attendee experience.
                            </p>
                            <a href="/CaseStudy/GS" className="project-card-link">
                                View Case Study <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Project Card 2: RafRaf */}
                    <div className="project-card">
                        <div className="project-image-container">
                            <a href="/CaseStudy/BM">
                                <img
                                    src={b2bmobile}
                                    alt="Global-Summits Project"
                                    className="project-card-image"
                                />
                            </a>
                        </div>
                        <div className="project-card-body">
                            <span className="project-card-badge">Web UI Design</span>
                            <h3 className="project-card-title">
                                <a href="/CaseStudy/BM" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    B2B Marketplace App
                                </a>
                            </h3>
                            <p className="project-card-description">
                                Designed a modern B2B marketplace app that simplifies product discovery, bulk ordering, supplier communication, and business transactions through an intuitive user experience.
                            </p>
                            <a href="/CaseStudy/BM" className="project-card-link">
                                View Case Study <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>



                    {/* Project Card 3: Rummy Verse */}
                    <div className="project-card">
                        <div className="project-image-container">
                            <img
                                src={LogoDesign}
                                alt="LogoDesign"
                                className="project-card-image"
                            />
                        </div>
                        <div className="project-card-body">
                            <span className="project-card-badge">Logo Design</span>
                            <h3 className="project-card-title"><a href="/CaseStudy/GS" style={{ color: 'inherit', textDecoration: 'none' }}>
                                Logo Design
                            </a></h3>
                            <p className="project-card-description">
                                Designed custom logos by combining creativity, brand strategy, and visual storytelling to build strong and recognizable brand identities.
                            </p>
                            <a href="#details" className="project-card-link">
                                View Details <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="projects-footer">
                    <a href="/Portfolio" className="btn-more-projects">
                        View More Projects <span className="arrow">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
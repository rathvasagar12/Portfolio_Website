import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, FileText, User, Compass } from 'lucide-react';
import './Home.css';


function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Sagar Rathva";
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-page-content notfound-page-content">
      <div className="notfound-wrapper">
        {/* Glassmorphic main card */}
        <div className="notfound-card">
          {/* Blurry gradient background orbs */}
          <div className="notfound-orb orb-1"></div>
          <div className="notfound-orb orb-2"></div>

          {/* Visual element: Animated SVG */}
          <div className="notfound-visual">
            <svg viewBox="0 0 200 200" className="notfound-svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(255, 74, 23, 0.12)" />
                </pattern>
                <linearGradient id="gradient-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff4a17" />
                  <stop offset="100%" stopColor="#ff1717" />
                </linearGradient>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#ff4a17" floodOpacity="0.15" />
                </filter>
              </defs>

              {/* Dotted grid pattern background */}
              <rect width="100%" height="100%" fill="url(#grid)" rx="24" />

              {/* Starry night nodes */}
              <circle cx="45" cy="50" r="2" fill="#ff4a17" className="pulsing-star" style={{ animationDelay: '0s' }} />
              <circle cx="155" cy="150" r="3" fill="#ff1717" className="pulsing-star" style={{ animationDelay: '1s' }} />
              <circle cx="160" cy="60" r="2.5" fill="#ff4a17" className="pulsing-star" style={{ animationDelay: '0.5s' }} />
              <circle cx="40" cy="140" r="2" fill="#ff1717" className="pulsing-star" style={{ animationDelay: '1.5s' }} />

              {/* Orbit rings */}
              <circle cx="100" cy="100" r="65" fill="none" stroke="rgba(255, 74, 23, 0.08)" strokeWidth="1.5" strokeDasharray="4,4" />
              <circle cx="100" cy="100" r="45" fill="none" stroke="rgba(255, 74, 23, 0.06)" strokeWidth="1" />

              {/* Searching beam path */}
              <path d="M 35,120 C 65,80 135,120 165,80" fill="none" stroke="rgba(255, 74, 23, 0.08)" strokeWidth="4" strokeLinecap="round" />
              <path d="M 35,120 C 65,80 135,120 165,80" className="searching-path" fill="none" stroke="url(#gradient-accent)" strokeWidth="4" strokeLinecap="round" strokeDasharray="30,150" />

              {/* Main floating compass element */}
              <g className="floating-compass" filter="url(#shadow)">
                <circle cx="100" cy="100" r="32" fill="#ffffff" stroke="rgba(255, 74, 23, 0.1)" strokeWidth="1" />
                <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(255, 74, 23, 0.2)" strokeWidth="1.5" strokeDasharray="2,2" />

                {/* Compass hand */}
                <g className="compass-hand">
                  <polygon points="100,78 106,97 100,100" fill="#ff4a17" />
                  <polygon points="100,122 94,103 100,100" fill="#ff1717" />
                  <circle cx="100" cy="100" r="4" fill="#ffffff" />
                  <circle cx="100" cy="100" r="2" fill="#ff4a17" />
                </g>
              </g>
            </svg>
          </div>

          {/* Error message details */}
          <div className="notfound-info">
            <div className="notfound-tag-wrapper">
              <span className="notfound-tag">404 Error</span>
            </div>
            <h1 className="notfound-title">Page not found</h1>
            <p className="notfound-text">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* Action buttons */}
            <div className="notfound-actions">
              <Link to="/" className="btn-primary-portfolio">
                <Home size={18} />
                <span>Back to Home</span>
              </Link>
              <a href="/Contact" className="btn-secondary-portfolio">
                <Mail size={18} />
                <span>Report Issue</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Directory Map */}
        <div className="notfound-directory">
          <h2 className="directory-title">Or try one of these links</h2>
          <div className="directory-grid">
            <Link to="/Portfolio" className="directory-card">
              <div className="directory-icon-box">
                <FileText size={20} color="#ff4a17" />
              </div>
              <div className="directory-card-text">
                <h3>Portfolio</h3>
                <p>Explore my curated UI/UX case studies and web design projects.</p>
              </div>
            </Link>
            <Link to="/About" className="directory-card">
              <div className="directory-icon-box">
                <User size={20} color="#ff4a17" />
              </div>
              <div className="directory-card-text">
                <h3>About me</h3>
                <p>Read about my design process, background, and life outside pixels.</p>
              </div>
            </Link>
            <Link to="/Journey" className="directory-card">
              <div className="directory-icon-box">
                <Compass size={20} color="#ff4a17" />
              </div>
              <div className="directory-card-text">
                <h3>Journey</h3>
                <p>Browse my professional experience, education, and credentials.</p>
              </div>
            </Link>
            <a href="/Contact" className="directory-card">
              <div className="directory-icon-box">
                <Mail size={20} color="#ff4a17" />
              </div>
              <div className="directory-card-text">
                <h3>Contact</h3>
                <p>Get in touch for collaborations, opportunities, or just to say hi.</p>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default NotFound;

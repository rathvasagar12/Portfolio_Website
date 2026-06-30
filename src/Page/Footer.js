import React from 'react';
// import sagar from '../Img/sagar.png';
import behance from '../Img/behance.png'
import LinkedIn from '../Img/linkedin.png'
import Instagram from '../Img/instagram.png'


function Footer() {
	const openPDF = () => {
		window.open("/Sagar_Rathva_Resume.pdf", "_blank");
	};
	return (
		<div className="portfolio-footer-section">
			<div className="footer-container-card ">
				{/* Mascot Area */}
				{/* <div className="footer-left">
					<img src={sagar} alt="Mascot Avatar" className="footer-mascot" />
				</div> */}

				{/* Info & CTA Area */}
				<div className="footer-right">
					<span className="footer-text-badge">End of portfolio. Beginning of our collaboration.</span>
					<h2 className="footer-heading">Thank you for making it this far.</h2>
					<p className="footer-text">Together, we can transform ideas into meaningful designs.</p>

					<div className="footer-buttons-group">
						<button className="btn-footer-outline" onClick={openPDF}>View Resume</button>
						<div className="social-icons-wrapper">
							<a href="https://www.behance.net/sagarrathawa1" target="_blank" rel="noopener noreferrer" className="social-icon-pill"><img src={behance} /></a>
							<a href="https://www.linkedin.com/in/sagar-rathva/" target="_blank" rel="noopener noreferrer" className="social-icon-pill"><img src={LinkedIn} /></a>
							<a href="https://www.instagram.com/moozark" target="_blank" rel="noopener noreferrer" className="social-icon-pill"><img src={Instagram} /></a>


						</div>
					</div>
				</div>






			</div>
		</div>
	);
}

export default Footer;
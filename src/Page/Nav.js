
import { useLocation } from 'react-router-dom';

function Nav() {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<div>
			<header className="portfolio-header">
				<div className="portfolio-logo">
					<div className="logo-icon">S</div>
					<div className="logo-text">
						<span className="logo-name">Sagar Rathva</span>
						<span className="logo-title">UI/UX Designer</span>
					</div>
				</div>
				<nav className="portfolio-nav-pill">
					<ul className="portfolio-nav-list">
						<li><a href="/" className={pathname === '/' ? 'active' : ''}>Home</a></li>
						<li><a href="/Portfolio" className={pathname === '/Portfolio' ? 'active' : ''}>Portfolio</a></li>
						<li><a href="/About" className={pathname === '/About' ? 'active' : ''}>About me</a></li>
						{/* <li><a href="/Tools" className={pathname === '/Tools' ? 'active' : ''}>Tools</a></li> */}
						{/* <li><a href="/Journey" className={pathname === '/Journey' ? 'active' : ''}>Journey</a></li> */}
						{/* <li><a href="/DesignProcess" className={pathname === '/DesignProcess' ? 'active' : ''}>Process</a></li> */}
						{/* <li><a href="/Life" className={pathname === '/Life' ? 'active' : ''}>Life</a></li> */}
						<li><a href="/Contact" className={pathname === '/Contact' ? 'active' : ''}>Contact</a></li>
					</ul>
				</nav>
			</header>
		</div>
	);
}

export default Nav;

import './Home.css';
import Hero from './Hero';
import Footer from "./Footer";
import Project from './Project';
import Tools from './Tools';
import Journey from './Journey';
import DesignProcess from './DesignProcess';
import Life from './Life';

function Home() {
	return (
		<div>

			<Hero />
			<Project />
			<Tools />
			<Journey />
			<DesignProcess />
			<Life />
			<Footer />
		</div>
	);
}

export default Home;
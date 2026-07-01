import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import About from './Page/About';
import ProjectPage from './Page/ProjectPage';
import Tools from './Page/Tools';
import Journey from './Page/Journey';
import DesignProcess from './Page/DesignProcess';
import Life from './Page/Life';
import Nav from './Page/Nav';
import Contact from './Page/Contact';
import GS from './Page/CaseStudy/GS';
import BM from './Page/CaseStudy/BM'

function App() {
  return (
    <div className="App portfolio-hero-section" style={{ minHeight: '100vh' }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Portfolio" element={<ProjectPage />} />
            <Route path="Tools" element={<Tools />} />
            <Route path="Journey" element={<Journey />} />
            <Route path="DesignProcess" element={<DesignProcess />} />
            <Route path="Life" element={<Life />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="CaseStudy/GS" element={<GS />} />
            <Route path="CaseStudy/BM" element={<BM />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

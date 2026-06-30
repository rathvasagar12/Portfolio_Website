import React from 'react';
import figma from "../Img/figma.png";
import photoshop from "../Img/photoshop.png";
import illustrator from "../Img/illustrator.png";
import html from "../Img/html.png";
import css from "../Img/css.png";
import Javascript from "../Img/Javascript.png";
import bootstrap from "../Img/bootstrap.png";
import react from "../Img/react.png";
import Footer from "./Footer";
import ChatGPT from "../Img/ChatGPT.png";
import Claude from "../Img/Claude.png";
import Antigravity from "../Img/Antigravity.png";
import StitchAi from "../Img/StitchAi.webp";
import Framer from "../Img/Framer.png";
import Miro from "../Img/Miro.png";


function Tools() {
    return (
        <div className="portfolio-page-content">
            <div className="tools-page-wrapper">
                <div className="tools-header">
                    <span className="tools-subtitle">Tech Stack</span>
                    <h1 className="tools-title">Tools I Use</h1>
                    <p className="tools-description">
                        My toolkit for designing, researching, developing, and building AI-powered digital products.
                    </p>
                </div>

                <div className="tools-grid">
                    {/* 1. Design Tools */}
                    <div className="tools-category-card">
                        <h3 className="category-title">Design Tools</h3>
                        <div className="tools-pills-container">
                            <div className="tool-pill">
                                <img src={figma} alt="figma" />
                                <span>Figma</span>
                            </div>
                            <div className="tool-pill">
                                <img src={photoshop} alt="figma" />
                                <span>Photoshop</span>
                            </div>
                            <div className="tool-pill">
                                <img src={illustrator} alt="figma" />
                                <span>illustrator</span>
                            </div>
                            <div className="tool-pill">
                                <img src={Framer} alt="Framer" />
                                <span>Framer</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. User Research */}
                    <div className="tools-category-card">
                        <h3 className="category-title">User Research</h3>
                        <div className="tools-pills-container">
                            <div className="tool-pill">
                                <img src={figma} alt="figma" />
                                <span>FigJam</span>
                            </div>
                            <div className="tool-pill">
                                <img src={Miro} alt="Miro" />
                                <span>Miro</span>
                            </div>
                            {/* <div className="tool-pill">
                                <img src={figma} alt="figma" />
                                <span>Google Forms</span>
                            </div> */}
                        </div>
                    </div>

                    {/* 3. Collaboration & Handoff */}
                    <div className="tools-category-card">
                        <h3 className="category-title">Frontend Technologies</h3>
                        <div className="tools-pills-container">
                            <div className="tool-pill">
                                <img src={html} alt="html" />
                                <span>Html5</span>
                            </div>
                            <div className="tool-pill">
                                <img src={css} alt="css" />
                                <span>CSS</span>
                            </div>
                            <div className="tool-pill">
                                <img src={Javascript} alt="Javascript" />
                                <span>Javascript</span>
                            </div>
                            <div className="tool-pill">
                                <img src={bootstrap} alt="bootstrap" />
                                <span>Bootstrap</span>
                            </div>
                            <div className="tool-pill">
                                <img src={react} alt="bootstrap" />
                                <span>React</span>
                            </div>
                        </div>
                    </div>

                    {/* 4. AI Tools */}
                    <div className="tools-category-card">
                        <h3 className="category-title">AI Tools</h3>
                        <div className="tools-pills-container">
                            <div className="tool-pill">
                                <img src={ChatGPT} alt="figma" />
                                <span>ChatGPT</span>
                            </div>
                            <div className="tool-pill">
                                <img src={Claude} alt="Claude" />
                                <span>Claude</span>
                            </div>
                            <div className="tool-pill">
                                <img src={Antigravity} alt="Antigravity" />
                                <span>Antigravity</span>
                            </div>
                            <div className="tool-pill">
                                <img src={StitchAi} alt="StitchAi" />
                                <span>Stitch Ai</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
}

export default Tools;
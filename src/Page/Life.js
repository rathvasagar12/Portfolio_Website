import React from 'react';
import img1 from '../Img/img1.jpeg';
import img4 from '../Img/img4.jpeg';
import img5 from '../Img/img5.jpeg';
import img7 from '../Img/img7.jpeg';
import img72 from '../Img/img72.png';
import img74 from '../Img/img74.jpeg';
import img75 from '../Img/img75.jpeg';
function Life() {
    return (
        <div className="portfolio-page-content">
            <div className="life-page-wrapper">
                <div className="life-header">
                    <span className="life-subtitle">Beyond The Screen</span>
                    <h1 className="life-title">Life Apart From Design</h1>
                    <p className="life-description">
                        A little glimpse of the moments, people, places and experiences that keep me inspired outside pixels and prototypes.
                    </p>
                </div>

                <div className="life-grid">
                    {/* Column 1 */}
                    <div className="life-grid-column">
                        <div className="life-grid-item">
                            <img src={img5} alt="img" />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="life-grid-column">
                        <div className="life-grid-item">
                            <img src={img74} alt="img" />
                        </div>
                        <div className="life-grid-item">
                            <img src={img4} alt="img" />
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="life-grid-column">
                        <div className="life-grid-item">
                            <img src={img72} alt="img" />
                        </div>
                        <div className="life-grid-item">
                            <img src={img1} alt="img" />
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="life-grid-column">
                        <div className="life-grid-item">
                            <img src={img7} alt="img" />
                        </div>
                        <div className="life-grid-item">
                            <img src={img75} alt="img" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Life;
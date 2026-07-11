
import { Search } from 'lucide-react';
import { Workflow } from 'lucide-react';
import { Cable } from 'lucide-react';
import { Palette } from 'lucide-react';
import { PenLine } from 'lucide-react';
import { FlaskConical } from 'lucide-react';

function DesignProcess() {
    return (
        <div className="portfolio-page-content">
            <div className="process-page-wrapper">
                <div className="process-header">
                    <span className="process-subtitle">Design Process</span>
                    <h1 className="process-title">How I Turn Ideas Into Digital Experiences</h1>
                    <p className="process-description">
                        My approach combines user research, strategic thinking, visual design and continuous iteration to create meaningful products.
                    </p>
                </div>

                <div className="process-grid">
                    {/* Step 1: User Research */}
                    <div className="process-card active-accent">
                        <div className="process-card-top">
                            <span className="process-card-index">01</span>
                            <div className="process-icon-badge">
                                <Search size={24} color="#ff4a17" strokeWidth={1} />
                            </div>
                        </div>
                        <h3 className="process-card-title">User Research</h3>
                        <p className="process-card-description">
                            Conduct interviews, competitor analysis, surveys, personas and journey mapping to understand users.
                        </p>
                    </div>

                    {/* Step 2: User Flow */}
                    <div className="process-card">
                        <div className="process-card-top">
                            <span className="process-card-index">02</span>
                            <div className="process-icon-badge">
                                <Workflow size={24} color="#ff4a17" strokeWidth={1} />
                            </div>
                        </div>
                        <h3 className="process-card-title">User Flow</h3>
                        <p className="process-card-description">
                            Define user journeys and information architecture to simplify navigation and decision making.
                        </p>
                    </div>

                    {/* Step 3: Wireframing */}
                    <div className="process-card">
                        <div className="process-card-top">
                            <span className="process-card-index">03</span>
                            <div className="process-icon-badge">
                                <Cable size={24} color="#ff4a17" strokeWidth={1} />
                            </div>
                        </div>
                        <h3 className="process-card-title">Wireframing</h3>
                        <p className="process-card-description">
                            Create low-fidelity layouts to validate structure, hierarchy and functionality before UI design.
                        </p>
                    </div>

                    {/* Step 4: Visual Design */}
                    <div className="process-card">
                        <div className="process-card-top">
                            <span className="process-card-index">04</span>
                            <div className="process-icon-badge">
                                <Palette size={24} color="#ff4a17" strokeWidth={1} />
                            </div>
                        </div>
                        <h3 className="process-card-title">Visual Design</h3>
                        <p className="process-card-description">
                            Design modern interfaces using typography, spacing, color systems and components.
                        </p>
                    </div>

                    {/* Step 5: Prototype */}
                    <div className="process-card">
                        <div className="process-card-top">
                            <span className="process-card-index">05</span>
                            <div className="process-icon-badge">
                                <PenLine size={24} color="#ff4a17" strokeWidth={1} />
                            </div>
                        </div>
                        <h3 className="process-card-title">Prototype</h3>
                        <p className="process-card-description">
                            Build interactive prototypes to test interactions, animations and overall user experience.
                        </p>
                    </div>

                    {/* Step 6: Handoff & Testing */}
                    <div className="process-card">
                        <div className="process-card-top">
                            <span className="process-card-index">06</span>
                            <div className="process-icon-badge">
                                <FlaskConical size={24} color="#ff4a17" strokeWidth={1} />
                            </div>
                        </div>
                        <h3 className="process-card-title">Handoff &amp; Testing</h3>
                        <p className="process-card-description">
                            Deliver developer-ready designs, collaborate with teams and improve through feedback.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DesignProcess;
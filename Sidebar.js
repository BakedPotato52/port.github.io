import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebars.css';


const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`sidebar ${isSidebarOpen ? 'sidebar_open' : ''}`}>
            <button className="sidebar_toggle" onClick={toggleSidebar}>
                <svg viewBox="0 0 24 24">
                    <g>
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-5h18v-2H3v2zm0-5h18v-2H3v2zm0-5h18v-2H3v2zM3 11V9h18v2H3zm0 4h18v-2H3v2zm0-4h18V7H3v2zm0-4h18v-2H3v2zM3 3v2h18V3H3z"></path>
                    </g>
                </svg>
            </button>

            {isSidebarOpen && (
                <div className="sidebar">
                    <section className="sidebar_section">
                        <h2 className="sidebar_section_title">
                            General
                        </h2>
                        <a href="/" className="sidebar_section_link">
                            <svg viewBox="0 0 24 24">
                                <g>
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c1.1 0 2-.9 2-2h-4c0 1.1-.9 2-2 2zm-7 0h2v-2H5v2zm0-7h2V7H5v2zM4 8v2h2V8H4zm0-7v2h2V7H4zm7 0v2h2v-2h-2zM4 11V9h18v2H4v2zm0-4h18v-2H4v2zm0-4h18V7H4v2zm0-4h18v-2H4v2zM4 3v2h18V3H4z"></path>
                            </g>
                        </svg>
                        <span>
                            Dashboard
                        </span>
                    </a>
                    {/* Additional links */}
                </section>
                {/* Additional sections */}
            </div>
            )}
        </div>
    );
};

export default Sidebar;
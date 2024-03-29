// Navigation.js

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigations.css';
import './images/youtube-logo.png';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Popover } from 'react-bootstrap';


const NavigationMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showPopover, setShowPopover] = useState(false);

    const handleMenuClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <nav className="navigation">
            <div className={`navigation_menu ${isSidebarOpen ? 'navigation_menu_open' : ''}`}>
                <button
                    className="navigation_button navigation_menu_button"
                    onClick={handleMenuClick}
                >
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                        <g>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </g>
                    </svg>
                </button>
                <img src="youtube-logo.png" alt="YouTube Logo" />

            </div>
            {isSidebarOpen && <Sidebar />}

            <div className="navigation_search">
                <input type="search" placeholder="search" />
                {/* search button */}
                <button className="navigation_button navigation_search_icon">
                    <svg viewBox="0 0 24 24" class="navigation_icon">
                        <g>
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" ></path>
                        </g>
                    </svg>
                </button>
                {/* voice button */}
                <button className="navigation_button">
                    <svg viewBox="0 0 24 24" class="navigation_icon">
                        <g >
                            <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" ></path>
                        </g>
                    </svg>

                </button>
            </div>
            <div className="navigation_options">
                <button class="navigation_button">
                    <svg viewBox="0 0 24 24" class="navigation_icon">
                        <g>
                            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" ></path>
                        </g>
                    </svg>
                </button>
                {/*YouTube App Button*/}
                <button className="navigation_button">
                    <svg viewBox="0 0 24 24" class="navigation_icon">
                        <g>
                            <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
                        </g>
                    </svg>
                </button>
                {/*Notification Button*/}
                <button className="navigation_button">
                    <svg viewBox="0 0 24 24" class="navigation_icon">
                        <g>
                            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                        </g>
                    </svg>
                </button>
                {/*Avatar*/}
                <div>
                    <button
                        className="avatar-button"
                        onClick={() => setShowPopover(!showPopover)}
                    >
                        Signin
                    </button>
                    <Popover show={showPopover} id="popover-basic">
                        <Popover.Header as="h3">Popover Title</Popover.Header>
                        <Popover.Body>
                            <p>Popover content goes here.</p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </Popover.Body>
                    </Popover>

                </div>
            </div>
        </nav >
    );
};
export default NavigationMenu;

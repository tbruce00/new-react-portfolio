/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import '../assets/nav.css';

export default props => {
    return (
        <div className="outer-container">
        <Menu noOverlay right {...props}>

            <a className="menu-item" href="#about-me">
                about
            </a>
            
            <a className="menu-item" href="#projects">
                projects
            </a>

            <a className="menu-item" href="#skills">
                skills
            </a>

            <a className="menu-item" href="#contact">
                contact
            </a>
            <a className="menu-item" href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:86bec09b-6a3a-4b52-bc3e-813dff4d4c6f" target="_blank" rel="noreferrer">
                resume
            </a>
        </Menu>
        </div>
    );
};



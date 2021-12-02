/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Menu noOverlay right {...props}>

            <a className="menu-item" href="about">
                about
            </a>
            
            <a className="menu-item" href="/projects">
                projects
            </a>

            <a className="menu-item" href="/skills">
                skills
            </a>

            <a className="menu-item" href="/contact">
                contact
            </a>
        </Menu>
    );
};



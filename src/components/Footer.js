import React from 'react';
import { GrInstagram } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from 'react-icons/gr';
import "../assets/footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <a className="footerIcons" href="https://www.linkedin.com/in/trevor-bruce-31569120b/" target="_blank" rel="noreferrer">
                <span>
                    <GrLinkedinOption />
                </span>    
            </a>
            <a className="footerIcons" href="https://github.com/tbruce00" target="_blank" rel="noreferrer">
                <span>
                    <GrGithub />
                </span>    
            </a>
            <a className="footerIcons" href="https://www.instagram.com/tbruce00/" target="_blank" rel="noreferrer">
                <span>
                    <GrInstagram />
                </span>
            </a>
        </footer>
    )
}

export default Footer;
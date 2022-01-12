import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { BsCodeSquare } from "react-icons/bs";
import { AiFillFilePdf } from "react-icons/ai";
import { MdEmojiPeople } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import "../assets/sidebar.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <Menu {...props}>
            <div className="navbar-brand d-flex align-items-center">
                <a href="/">
                <img className="logo-icon" src="/images/TB1-logos_white.png" alt="TB-Logo" />
                </a>
            </div>
            <a className="menu-item" href="#about-me">
             <MdEmojiPeople />   about
            </a>
            <a className="menu-item" href="#projects">
             <AiOutlineProject />   projects
            </a>
            <a className="menu-item" href="#skills">
             <BsCodeSquare/>   skills
            </a>
            <a className="menu-item" href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:7c372746-e514-4d2b-bc0b-56b5ed400058" target="_blank" rel="noreferrer">
             <AiFillFilePdf/>    resume
            </a>
            <a className="menu-item" href="mailto:tbnyk03@gmail.com">
             <AiOutlineMail />   contact
            </a>
        </Menu>
    )
};
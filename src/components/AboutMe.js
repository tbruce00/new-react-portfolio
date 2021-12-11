import React from 'react';
import { AiFillFilePdf } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "../assets/aboutme.css";

const AboutMe = () => {
    return (
        <section id="about-me">
            <div>
            <h2 className="about-head">
                about me 
            </h2>         
            </div>
            <div className="social-icons">
                <ul>
                    <li className="list active">
                        <a href="">
                            <span className="icon"></span>
                            <AiFillLinkedin/>
                            <span className="text">Resume</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="">
                            <span className="icon"></span>
                            <AiFillFilePdf/>
                            <span className="text">LinkedIn</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="">
                            <span className="icon"></span>
                            <AiFillGithub/>
                            <span className="text">GitHub</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="">
                            <span className="icon"></span>
                            <AiFillInstagram/>
                            <span className="text">Instagram</span>
                        </a>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
        </section>

    )
};

export default AboutMe
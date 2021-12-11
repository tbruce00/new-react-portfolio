import React from "react";
import '../assets/skills.css';

const Skills =() => {
    return (
        <section id="skills">
            <div className="skill-section container mt-5">
                <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="skill-title">skills</h2>
                <div className="skills-box">
                    <ul className="skills-grid">
                    <li>
                        <div className="skill-container">
                            <img className="skill-logo" src="/images/html-svgrepo-com.svg" alt="HTML"/>
                            <p>HTML</p>
                        </div>
                    </li>
                    <li>
                        <div className="skill-container">
                            <img className="skill-logo" src="/images/CSS3.svg" alt="CSS"/>
                            <p>CSS</p>
                        </div>
                    </li>
                    <li>
                        <div className="skill-container">
                            <img className="skill-logo" src="/images/Bootstrap.svg" alt="bootstrap"/>
                            <p>Bootstrap</p>
                        </div>
                    </li>
                    <li>
                        <div className="skill-container">
                            <img className="skill-logo" src="/images/Javascript.png" alt="Javascript"/>
                            <p>Javascript</p>
                        </div>
                    </li>
                    <li>
                        <div className="skill-container">
                            <img className="skill-logo" src="/images/React.svg" alt="React"/>
                            <p>React</p>
                        </div>
                    </li>
                    <li>
                        <div className="skill-container">
                            <img className="skill-logo" src="/images/github.svg" alt="Github"/>
                            <p>Github</p>
                        </div>
                    </li>
                    <li>
                        <div className="skill-container">
                            <img className="skill-logo" src="/images/vscode.svg" alt="VSCode"/>
                            <p>VSCode</p>
                        </div>
                    </li>
                    <li>
                        <div className="skill-container">
                            <img className="skill-logo" src="/images/node.svg" alt="Node"/>
                            <p>Node</p>
                        </div>
                    </li>
                    <li>
                        <div className="skill-container">
                            <img className="skill-logo" src="/images/mysql-svgrepo-com.svg" alt="MySql"/>
                            <p>MySql</p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
import React, { useState } from "react";
import '../assets/projects.css';

const ProjectButton = (props) => {
    const [showButton, setShowButton] = useState("project-button");

    const buttonShow = () => {
        setShowButton("fade-background");
    };
    const buttonHide = () => {
        setShowButton("project-button");
    };
    return (
        <div 
            onMouseEnter={buttonShow}
            onMouseLeave={buttonHide}
            data-projectid = {props.projectId}
            className={props.projectImg}
        >
            <div className={showButton}>
            <h3 className="project-name">{props.projectName}</h3>
            <p className="project-description">{props.projectDescription}</p>
            <div className="project-buttons">
                <button className="previewButton">
                    <a href={props.previewLink} target="_blank" rel="noreferrer" alt="Preview">
                    Preview
                    </a>
                </button>
                <button className="gitLink">
                    <a href={props.githubLink} target="_blank" rel="noreferrer" alt="Github">
                        Github
                    </a>
                </button>
            </div>    
            </div>
            </div> 
    )
};

export default ProjectButton;
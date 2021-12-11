import React from 'react';
import '../assets/portfolio.css';

const Portfolio = (props) => {
    return (
        <div className="card">
            <div className="card-body">     
                <img src={props.projectImg}
                    alt="Project" 
                    className="card-image" />
                <h3 className="card-title">
                    {props.projectName}
                </h3>
                <p className="card-description">
                    {props.projectDescription}
                </p>    
            </div>
            <button className="card-btn">
                <a href={props.previewLink} target="_blank" rel="noreferrer" alt="Preview">
                    Preview
                </a>  
            </button>
            <button className="card-btn">
                <a href={props.githubLink} target="_blank" rel="noreferrer" alt="Github">
                    Github
                </a>
            </button>
        </div>
    )
};

export default Portfolio;

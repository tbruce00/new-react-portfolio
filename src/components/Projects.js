import React from "react";
import Portfolio from "./Portfolio";
import ProjectList from "./ProjectList";
import '../assets/portfolio.css';

const Projects = () => {    
        return (
        <section id="projects">
            <h2 className="project-title">projects</h2>
            <div className="project-section d-flex">
            <div className="container">
              {/* <h2 className="project-title">projects</h2> */}
              <div className="project-container">
              {/* <div className="row gx-3 gy-3"> */}
              <div className="project-box">
              {ProjectList.map((data) =>{
                  return(
              <Portfolio
                key={data.projectId}
                projectImg={data.projectImg}
                projectName={data.projectName}
                projectDescription={data.projectDescription}
                previewLink={data.previewLink}
                githubLink={data.githubLink}
                />
              );})}
              </div>
              </div>
              </div>
              </div>  
            {/* </div> */}
        </section>
    )
    };

export default Projects;
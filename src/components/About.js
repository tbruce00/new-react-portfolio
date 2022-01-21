import React from "react";
import '../assets/about.css';
import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center mx-auto">
                <div className="col-12">
                <img className="profImg" src="/images/T_Bruce.png" alt="Trevor Bruce Face"/>
                <h1 className="h1 header-text display-1">Hello, I'm Trevor Bruce</h1>
                <h3 className="type-writer">
                <Typewriter
                    options={{
                        loop:false,
                    }}
                    onInit={(subheading) => {
                        subheading
                        .typeString("Life Long Learner. ")
                        .pauseFor(200)
                        .typeString("Adventurer. ")
                        .pauseFor(200)
                        .typeString("Aspiring Web Developer.")
                        .start();
                    }}
                    />
                </h3>
                </div>    
                </div>
            </div>
        </section>
    );
};

export default About; 

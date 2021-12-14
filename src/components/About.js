import React from "react";
import '../assets/about.css';
import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center mx-auto">
                <div className="col-12">
                <img className="profImg" src="/images/IMG_1798.JPG" alt="Trevor Bruce Face"/>
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
                <p>
                Full Stack Web Developer With A Creative Background.   
                </p>
                <p>
                Upstate New York native turned Colorado transplant. A graduate of SUNY Brockport with a bachelor's degree in Media Production/Film Studies. 
                Spent most of my working life in the IT field and took on the coding bootcamp program in search of a change. With the intention of becoming proficient in coding languages and frameworks, translating the learning into a career in Web Development.     
                </p>
                <p>
                In my free time I enjoy spending time in the dichotomy of natural wonders and urban landscapes. I enjoy backpacking trips with friends and exploring the surroundings of my city. As well as a good film or book on less adventurous evenings.     
                </p>
                <p>
                I hope you enjoy my portfolio. 
                Shoot me an e-mail.
                Lets connect.
                </p>
                </div>    
                </div>
            </div>
        </section>
    );
};

export default About; 

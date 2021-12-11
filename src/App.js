import React from 'react';
import About from './components/About';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './assets/app.css';
import Sidebar from './components/sidebar';


function App() {
  return (
    <div id="App">
    <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} /> 
    <div id="page-wrap"> 
    <About />
    {/* <AboutMe /> */}
    <Skills />
    <Projects />
    <Contact />
    </div>
    </div>
  );
}

export default App;

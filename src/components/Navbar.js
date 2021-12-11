import React from "react";
import '../assets/nav.css';
// import Sidebar from "./MenuLinks";
import Sidebar from "./sidebar";


const Navbar = () => {
    return (
        <nav className="navbar sticky-top">
            <div className="container nav-container d-fex flex-row align-items-center">
                <div className="d-flex">
                    <div className="navbar-brand d-flex align-items-center">
                    <img className="logo-icon" src="/images/TB1-logos_white.png" alt="TB-Logo" />
                    </div>
                </div>
            </div>
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} /> 
            <div id="page-wrap">
            </div>
        </nav>
        
    )
};

export default Navbar;
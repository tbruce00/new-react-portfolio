import React from "react";
import '../assets/nav.css';
import Sidebar from "./MenuLinks";


const Navbar = () => {
    return (
        <div id="App">
        <div>
        <nav className="navbar sticky-top p-4">
            <div className="container nav-container d-fex flex-row align-items-center">
                <div className="d-flex">
                    <div className="navbar-brand d-flex align-items-center">
                    <img className="logo-icon" src="/images/TB1-logos_white.png" alt="TB-Logo" />
                    </div>
                </div>
            </div>
            <Sidebar/>
        </nav>
        </div> 
        </div>
    )
};

export default Navbar;
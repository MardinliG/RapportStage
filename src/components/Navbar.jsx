import React from "react";
import "../assets/Navbar.css"; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-title">Cinquieme Dimension</h1>
                <ul className="navbar-links">
                    <li><a href="/">Présentation</a></li>
                    <li><a href="timeline">Timeline</a></li>
                    <li><a href="bento">Bento</a></li>
                    <li><a href="bento2">Bento 2</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
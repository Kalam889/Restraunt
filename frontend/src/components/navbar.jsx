import { useState } from "react";
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.svg";
function Navbar() {
  
    const [isMobile, setMobile] = useState(false)

    return (
        <>
        <nav className="main-navbar-container">
            <div className="navbar-container">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
                <div className="menu-container">
                    <a href="#about">About</a>
                    <a href="#dishes">Dishes</a>
                    <a href="#contact">Contact</a>
                    <a href="#faq">Faq</a> 
                </div>
                <a href="#booking-process" id="book-btn">Book a table</a>
                <button id="menu-btn" onClick={() => setMobile(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </nav>
        {/* mobile-view */}
        {isMobile && (
        <div className="mobile-menu-container">
            <a href="#about">About</a>
            <a href="#dishes">Dishes</a>
            <a href="#contact">Contact</a>
            <a href="#faq">Faq</a>
            <button id="menu-btn" onClick={() => setMobile(false)}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
        )}
        </>
    )
}
export default Navbar;
import "./Footer.css"
import {
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaYoutube,
    FaFacebook
} from "react-icons/fa"
import logo from "../assets/logo.svg"
function Footer() {
return (
<footer className="footer-container">
    <div className="main-footer">
        <div className="footer-one">
            <img src={logo} alt="logo" />
            <p>Serving freshly prepared dishes with authentic flavours, premium ingredients and exceptional hospitality everyday.
            </p>
            <div className="social-icons">
                <span><a href="#" target="-blank"><FaInstagram /></a></span>
                <span><a href="#" target="-blank"><FaFacebook /></a></span>
                <span><a href="#" target="-blank"><FaYoutube /></a></span>
            
           </div>
        
        </div>
         <div className="footer-two">
             <h3>Quick Links</h3>
             <div className="navbar-link">
                 <a href="#home" >Home</a>
                 <a href="#about">About</a>
                <a href="#menu">Menu</a>
                 <a href="#gallery">Gallery</a>
                 <a href="#booking-process">Book a table</a>
             </div>

        </div>
         <div className="footer-three">
             <h3>Get in touch</h3>
             <p>Hello@gmail.com</p>
             <p>200567</p>

        </div>
         <div className="footer-four">
             <h3>Sitemap</h3>
             <p>Privacy Policy</p>
             <p>Terms of services</p>
        </div>
    </div>
    <div className="bottom-footer">
        <p>©2026. All Right Reserved.</p>
        <p>Design and built by Kalam</p>
    </div>

</footer>
)
};
export default Footer;
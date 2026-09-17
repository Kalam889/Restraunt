import "./About.css"
import about from "../assets/about.png"
import iconL from "../assets/iconL.png"
import iconR from "../assets/iconR.png"
function About() {
    return (
        <section id="about">
            <div className="about-container">
                <div className="image-container">
                    <img src={about} alt="Dish" />
                </div>
                <div className="about-contents">
                    <div className="right-image">
                        <img src={iconL} alt="iconL" />
                        <span>CRAFTED WITH PASSION</span>
                        <img src={iconR} alt="iconR" />
                    </div>
                    <h1>Experience dining beyond expections</h1>
                    <p>We combine fresh local ingredients, creative recipes and elegant presentation to deliver a memorable experience with every visit.</p>
                    <div className="image-para">
                        <img src={about} alt="Dish" />
                        <div className="para-image">
                            <p>Bistro Royale, NY</p>
                            <p>View on Map</p>
                        </div>
                    </div>
                </div>
              
            </div>
            
        </section>
    )

}
export default About;

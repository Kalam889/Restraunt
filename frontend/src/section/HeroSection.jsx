import "./HeroSection.css"
import user1 from "../assets/user-1.jpeg"
import user2 from "../assets/user-2.jpeg"
import user3 from "../assets/user-3.jpeg"
import user4 from "../assets/user-4.jpeg"
function HeroSection () {
    return (
        <>
        <section className="hero-section">
           <div>
            <p className="para">WHERE FLAVOUR MEETS ELEGANCE</p>
           </div>
           <div className="heading">
            <h1>Crafted for unforgettable dining moments</h1>
           </div>
           <div className="para-two">
            <p>Experience carefully curated menus, fresh local ingredients and impeccable service in space made for every celebration.</p>
           </div>
            <div>
                <a href="#booking-process" id="book-btn">Book a table</a>
            </div>
            <div className="review">
                <div className="users">
                    <img src={user1} alt="user1" />
                    <img src={user2} alt="user1" />
                    <img src={user3} alt="user1" />
                    <img src={user4} alt="user1" />
                </div>
                <div className="rating">
                    <div className="star">****</div>
                    <p>4.8/5 Rating * 10,000 reviews</p>
                </div>
            </div>
        </section>
        
        </>
    )

}
export default HeroSection;
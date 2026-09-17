import "./Dishes.css"
import dish1 from "../assets/dish1.png"
import dish2 from "../assets/dish2.png"
import dish3 from "../assets/dish3.png"
import dish4 from "../assets/dish4.png"
import dish5 from "../assets/dish5.png"
import dish6 from "../assets/dish6.png"
import dish7 from "../assets/dish7.png"
import dish8 from "../assets/dish8.png"
function Dishes() {
    return (
        <section id="dishes" className="dishes-container">
            <div className="dishes-para">
                <p>CHEF'S SIGNATURE SELECTION</p>
                <h1>Discover our signature dishes</h1>
            </div>
            <div className="dishes-images">
                <div className="dish-one">
                    <img src={dish1} alt="dish1" />
                    <p>Grilled chicken Alfredo</p>
                    <p>$24</p>
                </div>
                <div className="dish-one">
                    <img src={dish2} alt="dish2" />
                    <p>Mushroom Risotto</p>
                    <p>$22</p>
                </div>
                <div className="dish-one">
                    <img src={dish3} alt="dish3" />
                    <p>Caprese Salad</p>
                    <p>$16</p>
                </div>
                <div className="dish-one">
                    <img src={dish4} alt="dish4" />
                    <p>Spaghetti & Meatballs</p>
                    <p>$23</p>
                </div>
                <div className="dish-one">
                    <img src={dish5} alt="dish5" />
                    <p>Caesar Salad</p>
                    <p>$24</p>
                </div>
                <div className="dish-one">
                    <img src={dish6} alt="dish6" />
                    <p>Grilled Atlantic Salmon</p>
                    <p>$29</p>
                </div>
                <div className="dish-one">
                    <img src={dish7} alt="dish7" />
                    <p>Grilled Ribeye Steak</p>
                    <p>$39</p>
                </div>
                <div className="dish-one">
                    <img src={dish8} alt="dish8" />
                    <p>Seafood Linguine</p>
                    <p>$29</p>
                </div>

            </div>
        
        </section>
    )
}
export default Dishes;

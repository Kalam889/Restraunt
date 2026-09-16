import "./Features.css"
import chef from "../assets/chef.png"

function Features() {
    return (
        <section ClassName="features-container">
            <div className="features-heading">
                <p>WHAT SETS US APART</p>
                <h1>Crafting memorable dining experiences</h1>
            </div>
            <div className="features-contents">
                <div className="features-para">
                    <div className="para-one">
                        <h3>Chef-Crafted Dishe</h3>
                        <p>Every dish is prepared by expert chefs using authentic recipes and premium ingredients.</p>
                    </div>
                    <div className="para-one">
                        <h3>Farm Fresh Ingredient</h3>
                        <p>We source fresh, seasonal ingredients daily to deliver exceptional flavour and quality in every meal.</p>
                    </div>
                    <div className="para-one">
                        <h3>Warm Hospitality</h3>
                        <p>Enjoy attantive service and a welcoming atmosphere that makes every visit comfortable and memorable.</p>
                    </div>

                </div>

                <div className="image-features">
                    <img src={chef} alt="chef-photo" />
                </div>

            </div>
        </section>
    )
}
export default Features;
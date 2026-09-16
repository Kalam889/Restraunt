import "./Testimonials.css";
import user1 from "../assets/user-1.jpeg";
import user2 from "../assets/user-2.jpeg";
import user3 from "../assets/user-3.jpeg";
import user4 from "../assets/user-4.jpeg";
// import user5 from "../assets/user-5.jpeg"
// import user6 from "../assets/user-6.jpeg"
function Testimonials() {
  return (
    <section className="testimonials-container">
      <div className="heading">
        <p>LOVED BY FOOD LOVER</p>
        <h1>What Our Guests Say</h1>
      </div>
      <div className="review-container">
        <div className="one">
          <p className="star">★★★★★</p>
          <p>Every dish was fresh, flavorful, and beautifully presented. The
        service was outstanding, and we will definitely be back agian.
</p>
          <div className="image">
            <img src={user1} alt="photo" />
            <div className="name">
              <p>Alex</p>
              <p>Mumbai, Indore</p>
            </div>
          </div>
        </div>
        <div className="one">
          <p className="star">★★★★★</p>
          <p>Amazing food, quick service, and a welcoming atmosphere. Every meal exceeded our expectations from start to finish</p>
          <div className="image">
            <img src={user2} alt="photo" />
            <div className="name">
              <p>Alex</p>
              <p>Mumbai, Indore</p>
            </div>
          </div>
        </div>
        <div className="one">
          <p className="star">★★★★★</p>
          <p>A wonderful dining experience with delicious food, friendly staff, and an atmosphere that made us feel right at home.</p>
          <div className="image">
            <img src={user3} alt="photo" />
            <div className="name">
              <p>Alex</p>
              <p>Mumbai, Indore</p>
            </div>
          </div>
        </div>
        <div className="one">
          <p className="star">★★★★★</p>
          <p>The flavours were authentic, every dish was perfectly prepared, and the presentation made the experience even more enjoyable.</p>
          <div className="image">
            <img src={user4} alt="photo" />
            <div className="name">
              <p>Alex</p>
              <p>Mumbai, Indore</p>
            </div>
          </div>
        </div>
        <div className="one">
          <p className="star">★★★★★</p>
          <p>Beautiful presentation, fresh ingredients, and outstanding service. It's easily one of my favourite places to dine.</p>
          <div className="image">
            <img src={user4} alt="photo" />
            <div className="name">
              <p>Alex</p>
              <p>Mumbai, Indore</p>
            </div>
          </div>
        </div>
        <div className="one">
          <p className="star">★★★★★</p>
          <p>Great food, attentive staff, and a cozy ambiance.Every visit has been memorable,and I highly recommend it.</p>
          <div className="image">
            <img src={user4} alt="photo" />
            <div className="name">
              <p>Alex</p>
              <p>Mumbai, Indore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;

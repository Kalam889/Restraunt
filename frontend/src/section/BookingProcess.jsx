import "./BookingProcess.css";
import photo from "../assets/user-2.jpeg";
function BookingProcess() {
  return (
    <section className="booking-container">
      <div className="main-booking">
        <div className="left-content">
          <div className="left-heading">
            <p>Table reservation process</p>
            <h1>Reserve your table in three simple steps</h1>
          </div>
          <div className="left-review">
            <p className="star">★★★★★</p>
            <p>
              we had an amazing evening with delicious foods, excellent service,
              and warm atmosphere. We will definitely visit again
            </p>
            <div className="image">
              <img src={photo} alt="photo" />
              <h3>Sofia Martanez</h3>
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="step-one">
            <span id="number">(01)</span>
            <div className="head-one">
              <h3>Choose your date and time.</h3>
              <p>
                Select your prefered date, time and party size to begin your
                reservation in just a few seconds.
              </p>
            </div>
          </div>
          <div className="two">
            <span id="number">(02)</span>
            <div className="head-two">
              <h3>Enter your details</h3>
              <p>
                Provide your name, contact information and any special request
                so we can prepare for your visit.
              </p>
            </div>
          </div>
          <div className="three">
            <span id="number">(03)</span>
            <div className="head-two">
              <h3>Confirm your booking</h3>
              <p>
                Review your reservation details and receive instant confirmation
                for a seamless dining experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BookingProcess;

import "./Contact.css";
import Navbar from "../Component/Navbar";
import BodyContainer from "../Component/BodyContainer";

function Contact() {
  return (
    <div>
      <Navbar />
      <BodyContainer>
        <div className="contact-page">
          <div className="contact-box">
            <h1>Contact SportsHub</h1>
            <p>Share tournament suggestions, feedback, or questions.</p>
    
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="6" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </BodyContainer>
    </div>
  );
}

export default Contact;
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>SportsHub</h2>
          <p>
            Explore popular sports tournaments, match information, teams, and
            exciting events from around the world.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: sportshub@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Nashik, Maharashtra</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SportsHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
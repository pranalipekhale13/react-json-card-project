import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { House, PhoneCall, ListCollapse } from "lucide-react";
import logo from "../assets/sporthub-logo.png";
function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar">
      <Link to="/" className="logo-container">
        <img src={logo} alt="SportsHub Logo" className="logo-image" />
        
      </Link>

      <Link
        to="/"
        className={`nav-menu${isActive("/") ? " active-menu" : ""}`}
      >
        <House className="nav-icon" /> Home
      </Link>
      <Link
        to="/about"
        className={`nav-menu${isActive("/about") ? " active-menu" : ""}`}
      >
        <ListCollapse className="nav-icon" />
        About
      </Link>
      <Link
        to="/contact"
        className={`nav-menu${isActive("/contact") ? " active-menu" : ""}`}
      >
        <PhoneCall className="nav-icon" />
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
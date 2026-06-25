import "./About.css";
import BodyContainer from "../Component/BodyContainer";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
function About() {
  return (
    <div>
    <BodyContainer>
      <Navbar />
      <div className="about-page">

      <h1>About SportsHub</h1>

      <p className="about-intro">
        SportsHub is a sports tournament explorer created using React.
        It displays tournament information dynamically from JSON data.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h2>Sports Dataset</h2>
          <p>
            Tournament data includes sport type, location, teams, season,
            current status, and images.
          </p>
        </div>

        <div className="about-card">
          <h2>Dynamic Cards</h2>
          <p>
            The map() method reads tournament objects and creates a card for
            each tournament.
          </p>
        </div>

        <div className="about-card">
          <h2>Reusable Components</h2>
          <p>
            TournamentCard receives data through props, making the UI reusable
            and easy to manage.
          </p>

        </div>
      </div>
      
    </div>
  </BodyContainer>
  <Footer />
  </div>
  
);
}

export default About;
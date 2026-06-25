import "./About.css";
import BodyContainer from "../Component/BodyContainer";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import PageTitle from "../Component/PageTitle";
function About() {
  return (
    <div>
      <Navbar />
      <BodyContainer>
        <PageTitle subtitle="About SportsHub" title="Learn more about our sports tournament discovery platform." subtitle="SportsHub is a React-based web application created for sports fans
          who want to explore popular tournaments from different sports in one
          place. It brings together tournament details such as location, season,
          participating teams or players, and current event status." />
        <main className="about-page">
      <section className="about-story">
        <div className="story-content">
          <h2>Our Purpose</h2>
          <p>
            Sports events happen across the world every day, but information is
            often spread across many websites. SportsHub organizes sports
            tournament data into simple and attractive cards so users can
            quickly browse and understand major events.
          </p>
          <p>
            The project focuses on creating a clean user experience while
            demonstrating important React concepts such as components, props,
            JSON data, routing, and dynamic rendering.
          </p>
        </div>

        <div className="story-highlights">
          <div className="highlight-item">
            <span className="highlight-number">12+</span>
            <span className="highlight-text">Sports Tournaments</span>
          </div>

          <div className="highlight-item">
            <span className="highlight-number">8+</span>
            <span className="highlight-text">Sports Categories</span>
          </div>

          <div className="highlight-item">
            <span className="highlight-number">3</span>
            <span className="highlight-text">Main Pages</span>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <p>WHAT WE OFFER</p>
          <h2>Explore Sports in a Better Way</h2>
        </div>

        <div className="about-grid">
          <article className="about-card">
            <div className="card-icon">🏆</div>
            <h3>Tournament Explorer</h3>
            <p>
              Browse major tournaments including cricket, football, tennis,
              basketball, kabaddi, badminton, hockey, and motorsport.
            </p>
          </article>

          <article className="about-card">
            <div className="card-icon">📍</div>
            <h3>Event Information</h3>
            <p>
              View useful details such as tournament location, season,
              participating teams or players, and event status.
            </p>
          </article>

          <article className="about-card">
            <div className="card-icon">⚡</div>
            <h3>Dynamic React UI</h3>
            <p>
              Tournament cards are generated dynamically using the JavaScript
              map() method and data stored in a JSON file.
            </p>
          </article>

          <article className="about-card">
            <div className="card-icon">🧩</div>
            <h3>Reusable Components</h3>
            <p>
              The TournamentCard component receives props and displays each
              tournament in a consistent, reusable layout.
            </p>
          </article>

          <article className="about-card">
            <div className="card-icon">🧭</div>
            <h3>Easy Navigation</h3>
            <p>
              React Router provides smooth navigation between the Home, About,
              and Contact pages without a full page reload.
            </p>
          </article>

          <article className="about-card">
            <div className="card-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>
              The layout adapts to desktop, tablet, and mobile screens for a
              better browsing experience on different devices.
            </p>
          </article>
        </div>
      </section>

      <section className="sports-section">
        <div>
          <p className="about-label">SPORTS COVERED</p>
          <h2>One Hub for Multiple Sports</h2>
          <p>
            SportsHub includes a growing collection of tournaments from popular
            sports around the world.
          </p>
        </div>

        <div className="sports-tags">
          <span>Cricket</span>
          <span>Football</span>
          <span>Tennis</span>
          <span>Basketball</span>
          <span>Kabaddi</span>
          <span>Badminton</span>
          <span>Hockey</span>
          <span>Motorsport</span>
          <span>Multi-Sport</span>
        </div>
      </section>

      <Footer/>

      
    </main>
    </BodyContainer>
    </div>
  );
}


export default About;
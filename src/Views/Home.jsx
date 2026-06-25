import TournamentCard from "../Component/TournamentCard";
import "./Home.css";
import BodyContainer from "../Component/BodyContainer";
import { TOURNAMENTS } from "../Config";
import { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
function Home() {
  return (
    <div>
      <Navbar />
    <BodyContainer>
      <section className="hero">
        <h1>Welcome to SportsHub</h1>
        <p>Explore popular sports tournaments from around the world.</p>
      </section>                                                                                                                        

      <section className="tournament-section">
        <h2>Featured Tournaments</h2>
        <p className="subtitle">
          Discover major cricket, football, tennis, basketball, kabaddi, and badminton events.
        </p>

        <div className="tournament-grid">
          {TOURNAMENTS.map((tournament) => (
            <TournamentCard
              key={tournament.id}
              TOURNAMENTS={[tournament]}
            />
          ))}
        </div>
      </section>
    </BodyContainer>
    <Footer />
    </div>
  );
}

export default Home;
              
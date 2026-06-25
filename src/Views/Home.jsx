import TournamentCard from "../Component/TournamentCard";
import "./Home.css";
import BodyContainer from "../Component/BodyContainer";
import { TOURNAMENTS } from "../Config";
import { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import PageTitle from "../Component/PageTitle";
function Home() {
  return (
    <div>
      <Navbar />
       <BodyContainer>
      <PageTitle title="Welcome to SportsHub" subtitle="Explore popular sports tournaments from around the world." />
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
              
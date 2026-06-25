import "./TournamentCard.css";

function TournamentCard({ TOURNAMENTS }) {
  return (
    <div className="tournament-card">
      <img src={image} alt={name} className="tournament-image" />

      <div className="tournament-info">
        <span className="sport-tag">{sport}</span>

        <h2>{name}</h2>

        <p>
          <strong>Location:</strong> {location}
        </p>

        <p>
          <strong>Teams / Players:</strong> {teams}
        </p>

        <p>
          <strong>Season:</strong> {season}
        </p>

        <p>
          <strong>Status:</strong>
          <span className="status">{status}</span>
        </p>

        <button>View Tournament</button>
      </div>
    </div>
  );
}

export default TournamentCard;
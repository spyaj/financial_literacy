// Leaderboard.jsx

import React, { useContext } from "react";
import DataContext from "../context/dataContext";

const Leaderboard = () => {
  const { leaderboard } = useContext(DataContext);

  return (
    <div className="leaderboard-container">
    <h2>Leaderboard</h2>
    <ul>
      {leaderboard.length === 0 ? (
        <p>No scores available yet.</p>
      ) : (
        leaderboard.map((entry, index) => (
          <li key={index}>
            {entry.user}: {entry.score} points
          </li>
        ))
      )}
    </ul>
  </div>
  );
};

export default Leaderboard;

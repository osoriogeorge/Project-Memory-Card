import React from "react";
import "../styles/Scoreboard.css";

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      <p>Puntuación: {currentScore}</p>
      <p>Mejor Puntuación: {bestScore}</p>
    </div>
  );
}

export default Scoreboard;

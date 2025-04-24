import React from "react";
import "../styles/Card.css";

function Card({ card, onClick }) {
  return (
    <div
      className={`card ${card.flipped ? "flipped" : ""} ${
        card.matched ? "matched" : ""
      }`}
      onClick={() => onClick(card.id)}
    >
      <div className="card-front">
        {card.flipped || card.matched ? (
          <img src={card.image} alt={card.name} />
        ) : (
          "?"
        )}
      </div>
      <div className="card-back">
        <img src="../../public/pokeball.webp" alt="" />
      </div>
    </div>
  );
}

export default Card;

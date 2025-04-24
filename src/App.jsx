import React, { useState, useEffect, useCallback } from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  const shuffleCards = useCallback((array) => {
    return [...array].sort(() => Math.random() - 0.5);
  }, []);

  const handleCardClick = (id) => {
    const clickedCard = cards.find((card) => card.id === id);

    if (
      !clickedCard ||
      clickedCard.flipped ||
      clickedCard.matched ||
      selectedCards.length === 2
    ) {
      return;
    }

    const newCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setCards(newCards);
    setSelectedCards([...selectedCards, clickedCard]);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=8"
        );
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailsResponse = await fetch(pokemon.url);
            const detailsData = await detailsResponse.json();
            return {
              id: detailsData.id,
              name: pokemon.name,
              image: detailsData.sprites.front_default,
            };
          })
        );

        const duplicatedCards = [...pokemonDetails, ...pokemonDetails].map(
          (card, index) => ({
            ...card,
            id: index,
            flipped: false,
            matched: false,
          })
        );

        setCards(shuffleCards(duplicatedCards));
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchImages();
  }, [setCards, shuffleCards]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [card1, card2] = selectedCards;
      if (card1.name === card2.name) {
        const newCards = cards.map((card) =>
          card.name === card1.name ? { ...card, matched: true } : card
        );
        setCards(newCards);
        setCurrentScore((prevScore) => prevScore + 2);
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          const newCards = cards.map((card) =>
            card.flipped && !card.matched ? { ...card, flipped: false } : card
          );
          setCards(newCards);
          setSelectedCards([]);
        }, 1000);
      }
    }
  }, [selectedCards, cards, setCards, setCurrentScore]);

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore, bestScore, setBestScore]);

  useEffect(() => {
    setCards(shuffleCards(cards));
  }, [shuffleCards]);

  return (
    <div className="app">
      <header className="header">
        <img src="../public/Pokémon_logo.svg.png" alt="Pokemon Logo" />
      </header>
      <h1>Memory Play Pokémon</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;

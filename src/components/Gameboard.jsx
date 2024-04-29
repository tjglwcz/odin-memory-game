import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Gameboard(props) {
  const [clickedCards, setClickedCards] = useState([]);
  const [shuffledCardList, setShuffledCardList] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(
    () => localStorage.getItem("highScore") || 0
  );

  useEffect(() => {
    shuffleCards();
  }, [props.cardList]);

  useEffect(() => {
    localStorage.setItem("highScore", highScore);
  }, [highScore]);

  const shuffleCards = () => {
    const shuffledList = [...props.cardList].sort(() => Math.random() - 0.5);
    setShuffledCardList(shuffledList);
  };

  const handleClick = (name) => {
    if (clickedCards.includes(name)) {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      setCurrentScore(currentScore + 1);
      setClickedCards([...clickedCards, name]);
    }
    shuffleCards();
  };

  return (
    <div className="flex flex-col w-3/4 p-2">
      <p className="text-center mb-8 text-xl">
        Score: {currentScore} | High Score: {highScore}
      </p>
      <div className="flex gap-4 flex-wrap justify-center p-4">
        {shuffledCardList.map((prop) => {
          return (
            <Card
              key={prop.name}
              image={prop.image}
              name={prop.name}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

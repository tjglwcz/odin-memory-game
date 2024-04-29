import React, { useState } from "react";
import Card from "./Card";
export default function Gameboard(props) {
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

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
  };

  return (
    <>
      <p>Score: {currentScore}</p>
      <div className="flex gap-4 flex-wrap w-3/4">
        {props.cardList.map((prop) => {
          return (
            <Card
              key={prop.name}
              name={prop.name}
              description={prop.description}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </>
  );
}

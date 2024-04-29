import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import Gameboard from "./components/Gameboard";

function App() {
  const [cardList, setCardList] = useState([
    { name: "bidoof" },
    { name: "snorlax" },
    { name: "squirtle" },
    { name: "voltorb" },
    { name: "gengar" },
    { name: "eevee" },
    { name: "pikachu" },
    { name: "onix" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newCardList = await Promise.all(
          cardList.map(async (card) => {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${card.name}`
            );
            const data = await response.json();
            return { ...card, image: data.sprites.front_default };
          })
        );
        setCardList(newCardList);
      } catch (error) {
        console.error("Data fetching error:", error);
      }
    };
    fetchData();
  }, []);
  ``;

  return <Gameboard cardList={cardList} />;
}

export default App;

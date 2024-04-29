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

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-slate-200 text-slate-600 p-4 text-center text-3xl shadow-md">
        Pokemon Memory Card Game
      </header>
      <div className="grow flex items-center justify-center">
        <Gameboard cardList={cardList} />
      </div>
      <footer className="bg-slate-200 p-2 text-center text-sm">
        Made by{" "}
        <a href="https://github.com/tjglwcz/" className="underline">
          tjglwcz
        </a>{" "}
        as an assignment for{" "}
        <a href="https://theodinproject.com/" className="underline">
          The Odin Project
        </a>
        . Data obtained from{" "}
        <a href="https://pokeapi.co" className="underline">
          PokeAPI
        </a>
        .
      </footer>
    </div>
  );
}

export default App;

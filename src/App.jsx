import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import Gameboard from "./components/Gameboard";

function App() {
  const [cardList, setCardList] = useState([
    { name: "Card 1", description: "Description here" },
    { name: "Card 2", description: "This is a description." },
    { name: "Card 3", description: "This is also a description" },
  ]);

  return <Gameboard cardList={cardList} />;
}

export default App;

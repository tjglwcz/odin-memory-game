import React from "react";
import Card from "./Card";
export default function Gameboard(props) {
  return (
    <div className="flex gap-4 flex-wrap w-3/4">
      {props.cardList.map((prop) => {
        return (
          <Card
            key={prop.name}
            name={prop.name}
            description={prop.description}
          />
        );
      })}
    </div>
  );
}

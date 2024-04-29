import React from "react";
import { useState } from "react";

export default function Card(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-col w-48 h-64 shadow-lg rounded-lg overflow-hidden"
    >
      <div className=" flex-grow p-2">There will be an image</div>
      <div className="mt-auto p-2">{props.name}</div>
    </div>
  );
}

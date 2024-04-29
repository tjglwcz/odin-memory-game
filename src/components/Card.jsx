import React from "react";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function Card(props) {
  const handleClick = () => {
    props.onClick(props.name);
  };

  return (
    <Tilt>
      <div
        onClick={handleClick}
        className="flex flex-col w-48 h-64 shadow-lg rounded-lg overflow-hidden"
      >
        <div className=" flex-grow p-2">{props.description}</div>
        <div className="mt-auto p-2">{props.name}</div>
      </div>
    </Tilt>
  );
}

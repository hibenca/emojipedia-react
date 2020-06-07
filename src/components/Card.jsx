import React from "react";
import Entry from "./Entry";

function Card(cards) {
  return (
    <Entry
      key={cards.id}
      name={cards.name}
      meaning={cards.meaning}
      emoji={cards.emoji}
    />
  );
}

export default Card;

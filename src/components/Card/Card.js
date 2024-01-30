import React from "react";

export default function Card({ onClick, item }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={item.imageUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>
        {item.description.length > 50
          ? item.description.slice(0, 50)
          : item.description}{" "}
        <strong>know more...</strong>
      </p>
    </div>
  );
}

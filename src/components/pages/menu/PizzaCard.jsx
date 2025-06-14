import React from "react";
import "./PizzaCard.css";
import PizzaImage from "./PizzaImage";

const PizzaCard = ({ pizzaImg, pizzaDesc, pizzaTitle, pizzaPrice, link }) => {
  return (
    <div className="card">
      <PizzaImage pizzaImg={pizzaImg} />
      <h3>{pizzaTitle || "Margherita Pizza"}</h3>
      <a href={link}>Link</a>
      <p># 99</p>
    </div>
  );
};

export default PizzaCard;

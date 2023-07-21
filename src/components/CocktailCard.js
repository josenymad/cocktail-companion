import React from "react";
import "../styles/cocktail-card.css";

const CocktailCard = ({ drink }) => (
  <div key={drink.strDrink} className="cocktail-card">
    <img
      className="cocktail-card__thumbnail"
      src={drink.strDrinkThumb}
      alt="thumbnail"
    />
    <p>{drink.strDrink}</p>
  </div>
);

export default CocktailCard;

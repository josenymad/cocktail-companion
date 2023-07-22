import React from "react";
import "../styles/cocktail-card.css";

const CocktailCard = ({ drink, handleSelectDrink }) => {
  return (
    <button
      type="button"
      className="cocktail-card__button"
      onClick={() => handleSelectDrink(drink)}
    >
      <img
        className="cocktail-card__thumbnail"
        src={drink.strDrinkThumb}
        alt="thumbnail"
      />
      <p className="cocktail-card__name">{drink.strDrink}</p>
    </button>
  );
};

export default CocktailCard;

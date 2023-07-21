import React from "react";
import "../styles/cocktail-card.css";

const CocktailCard = ({ drink, setSelectedDrink }) => {
  const handleSelectDrink = () => {
    setSelectedDrink(drink);
  };

  return (
    <button
      type="button"
      className="cocktail-card__button"
      onClick={handleSelectDrink}
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

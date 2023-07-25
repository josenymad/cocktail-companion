import React from "react";
import "../styles/cocktail-filter.css";
import getRandomSelection from "../requests/getRandomSelection";
import getRandomDrink from "../requests/getRandomDrink";

const CocktailFilter = ({ setDrinksData }) => {
  const handleRandomSelection = () => {
    getRandomSelection(setDrinksData);
  };
  const handleRandomDrink = () => {
    getRandomDrink(setDrinksData);
  };

  return (
    <div className="cocktail-filter">
      <h3 className="cocktail-filter__spirit">Filter by Spirit</h3>
      <h3 className="cocktail-filter__random ">Random</h3>
      <button type="button" onClick={handleRandomSelection}>
        Selection
      </button>
      <button type="button" onClick={handleRandomDrink}>
        Drink
      </button>
    </div>
  );
};

export default CocktailFilter;

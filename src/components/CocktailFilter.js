import React from "react";
import "../styles/cocktail-filter.css";
import getRandomSelection from "../requests/getRandomSelection";

const CocktailFilter = ({ setDrinksData }) => {
  const handleRandomSelection = () => {
    getRandomSelection(setDrinksData);
  };

  return (
    <div className="cocktail-filter">
      <h3 className="cocktail-filter__spirit">Filter by Spirit</h3>
      <h3 className="cocktail-filter__random ">Random</h3>
      <button type="button" onClick={handleRandomSelection}>
        Selection
      </button>
    </div>
  );
};

export default CocktailFilter;

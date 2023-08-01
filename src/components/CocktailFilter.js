import React from "react";
import "../styles/cocktail-filter.css";
import getRandomSelection from "../requests/getRandomSelection";
import getRandomDrink from "../requests/getRandomDrink";
import getMostPopular from "../requests/getMostPopular";

const CocktailFilter = ({
  spirits,
  filterDrinks,
  clearFilter,
  setDrinksData,
}) => {
  const handleRandomSelection = () => {
    getRandomSelection(setDrinksData);
  };
  const handleRandomDrink = () => {
    getRandomDrink(setDrinksData);
  };
  const handleMostPopular = () => {
    getMostPopular(setDrinksData);
  };

  return (
    <div className="cocktail-filter">
      <button
        type="button"
        className="cocktail-filter__clear-filter"
        onClick={clearFilter}
      >
        Clear search and filter
      </button>
      <h3 className="cocktail-filter__spirits-header">Filter by Spirit</h3>
      <div className="cocktail-filter__spirits">
        {spirits.map((spirit) => {
          return (
            <div className="cocktail-filter__spirit" key={spirit}>
              <button
                type="button"
                className="cocktail-filter__spirit-button"
                value={spirit}
                onClick={filterDrinks}
              >
                {spirit}
              </button>
            </div>
          );
        })}
      </div>
      <div className="cocktail-filter__filters">
        <div className="cocktail-filter__random-selection">
          <button
            type="button"
            onClick={handleRandomSelection}
            className="cocktail-filter__random-selection-button"
          >
            <h4 className="cocktail-filter__random-selection-header">
              Random Selection
            </h4>
          </button>
        </div>
        <div className="cocktail-filter__random-drink">
          <button
            type="button"
            onClick={handleRandomDrink}
            className="cocktail-filter__random-drink-button"
          >
            <h4 className="cocktail-filter__random-drink-header">
              Random Drink
            </h4>
          </button>
        </div>
        <div className="cocktail-filter__popular">
          <button
            type="button"
            onClick={handleMostPopular}
            className="cocktail-filter__popular-button"
          >
            <h4 className="cocktail-filter__popular-header">Most Popular</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CocktailFilter;

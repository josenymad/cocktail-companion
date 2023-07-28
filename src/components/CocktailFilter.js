import React from "react";
import "../styles/cocktail-filter.css";
import getRandomSelection from "../requests/getRandomSelection";
import getRandomDrink from "../requests/getRandomDrink";
import getMostPopular from "../requests/getMostPopular";
import getNonAlcoholic from "../requests/getNonAlcoholic";

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
  const handleNonAlcoholic = () => {
    getNonAlcoholic(setDrinksData);
  };

  return (
    <div className="cocktail-filter">
      <h3 className="cocktail-filter__spirits-header">Find by Spirit</h3>
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
      <h3 className="cocktail-filter__spirit">Filter by Spirit</h3>
      <h3 className="cocktail-filter__random ">Random</h3>
      <button type="button" onClick={handleRandomSelection}>
        Selection
      </button>
      <button type="button" onClick={handleRandomDrink}>
        Drink
      </button>
      <h3 className="cocktail-filter__popular">Most Popular</h3>
      <button type="button" onClick={handleMostPopular}>
        Search
      </button>
      <h3 className="cocktail-filter__non-alcoholic">Non-Alcoholic</h3>
      <button type="button" onClick={handleNonAlcoholic}>
        Search
      </button>
      <button
        type="button"
        className="cocktail-filter__clear-filter"
        onClick={clearFilter}
      >
        Clear search and filter
      </button>
    </div>
  );
};

export default CocktailFilter;

import React from "react";
import "../styles/cocktail-filter.css";

const CocktailFilter = ({ spirits, filterDrinks }) => {
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
    </div>
  );
};

export default CocktailFilter;

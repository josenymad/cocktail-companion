import React from "react";

const CocktailCard = ({ drink }) => (
  <div key={drink.strDrink} className="cocktail-card">
    {drink.strDrink}
  </div>
);

export default CocktailCard;

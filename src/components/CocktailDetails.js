import React from "react";
import "../styles/cocktail-details.css";

const CocktailDetails = ({ selectedDrink }) => {
  return (
    <div className="cocktail-details">
      <h1>{selectedDrink.strDrink}</h1>
    </div>
  );
};

export default CocktailDetails;

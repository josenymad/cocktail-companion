import React from "react";
import "../styles/cocktail-details.css";

const CocktailDetails = ({ selectedDrink, handleSelectDrink }) => {
  return (
    <div className="cocktail-details">
      <h1>{selectedDrink.strDrink}</h1>
      <button type="button" onClick={() => handleSelectDrink({})}>
        Close
      </button>
    </div>
  );
};

export default CocktailDetails;

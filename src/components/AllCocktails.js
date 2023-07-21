import React from "react";
import "../styles/all-cocktails.css";
import CocktailCard from "./CocktailCard";
import CocktailDetails from "./CocktailDetails";

const AllCocktails = ({ drinksData, selectedDrink, setSelectedDrink }) => {
  const { drinks } = drinksData;

  return (
    <div className="all-cocktails">
      <div className="all-cocktails__grid">
        {drinks.map((drink) => {
          return (
            <div key={drink.strDrink} className="cocktail-card">
              <CocktailCard drink={drink} setSelectedDrink={setSelectedDrink} />
            </div>
          );
        })}
      </div>
      {Object.keys(selectedDrink).length ? (
        <CocktailDetails selectedDrink={selectedDrink} />
      ) : null}
    </div>
  );
};

export default AllCocktails;

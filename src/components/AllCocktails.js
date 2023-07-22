import React from "react";
import "../styles/all-cocktails.css";
import CocktailCard from "./CocktailCard";
import CocktailDetails from "./CocktailDetails";
import CocktailFilter from "./CocktailFilter";

const AllCocktails = ({ drinksData, selectedDrink, setSelectedDrink }) => {
  const { drinks } = drinksData;
  const handleSelectDrink = (selection) => {
    setSelectedDrink(selection);
  };

  return (
    <div className="all-cocktails">
      <CocktailFilter />
      <div className="all-cocktails__grid">
        {drinks ? (
          drinks.map((drink) => {
            return (
              <div key={drink.strDrink} className="cocktail-card">
                <CocktailCard
                  drink={drink}
                  handleSelectDrink={handleSelectDrink}
                />
              </div>
            );
          })
        ) : (
          <p className="all-cocktails__loading">Loading</p>
        )}
      </div>
      {Object.keys(selectedDrink).length ? (
        <CocktailDetails
          selectedDrink={selectedDrink}
          handleSelectDrink={handleSelectDrink}
        />
      ) : null}
    </div>
  );
};

export default AllCocktails;

import React from "react";
import "../styles/all-cocktails.css";
import { Link } from "react-router-dom";

const AllCocktails = ({ drinksData }) => {
  const { drinks } = drinksData;

  return (
    <div className="all-cocktails">
      {drinks.map((drink) => {
        return (
          <div key={drink.strDrink} className="all-cocktails__cocktail">
            <Link to={`all-cocktails/${drink.strDrink}`}>{drink.strDrink}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllCocktails;

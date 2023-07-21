import React from "react";
import "../styles/all-cocktails.css";
import CocktailCard from "./CocktailCard";

const AllCocktails = ({ drinksData }) => {
  const { drinks } = drinksData;

  return (
    <div className="all-cocktails">
      <div className="all-cocktails__grid">
        {drinks.map((drink) => {
          return <CocktailCard drink={drink} />;
        })}
      </div>
    </div>
  );
};

export default AllCocktails;

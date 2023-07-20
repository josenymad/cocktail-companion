import React from "react";
import "../styles/all-cocktails.css";
import CocktailCard from "./CocktailCard";

const AllCocktails = ({ drinksData }) => {
  const { drinks } = drinksData;

  return (
    <div className="all-cocktails">
      {drinks.map((drink) => {
        return <CocktailCard drink={drink} />;
      })}
    </div>
  );
};

export default AllCocktails;

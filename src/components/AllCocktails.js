/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/all-cocktails.css";
import CocktailCard from "./CocktailCard";
import CocktailDetails from "./CocktailDetails";
import CocktailFilter from "./CocktailFilter";

const AllCocktails = ({
  drinksData,
  selectedDrink,
  setDrinksData,
  setSelectedDrink,
  searchQuery,
  filterDrinks,
  spirits,
  filteredDrinks,
  clearFilter,
  alert,
  setAlert,
}) => {
  const [completeFilteredData, setCompleteFilteredData] = useState([]);
  const { drinks } = drinksData;
  const handleSelectDrink = (selection) => {
    setSelectedDrink(selection);
  };

  useEffect(() => {
    if (drinks !== null && drinks !== undefined) {
      const filteredCocktails = drinks.filter((drink) => {
        return filteredDrinks.some((filteredDrink) => {
          return filteredDrink.idDrink === drink.idDrink;
        });
      });
      setCompleteFilteredData(filteredCocktails);
    }
  }, [filteredDrinks]);

  return (
    <div className="all-cocktails">
      <CocktailFilter
        spirits={spirits}
        filterDrinks={filterDrinks}
        clearFilter={clearFilter}
        message={alert}
        setDrinksData={setDrinksData}
        alert={alert}
        setAlert={setAlert}
      />
      <div className="all-cocktails__grid">
        {
          /* has the user filtered by drinks */ completeFilteredData.length ? (
            completeFilteredData.map((drink) => {
              return (
                <div key={drink.strDrink} className="cocktail-card">
                  <CocktailCard
                    drink={drink}
                    handleSelectDrink={handleSelectDrink}
                  />
                </div>
              );
            })
          ) : /* has the drinks data loaded */ drinks ? (
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
          ) : /* has the user entered a search query */ searchQuery ? (
            <p className="no-cocktails">{`Sorry, there seems to be no cocktails called ${searchQuery}`}</p>
          ) : (
            <p className="cocktails-loading">
              Sorry for the delay! If the cocktails haven&apos;t loaded after a
              while there may be something wrong with the server, please try
              again later and{" "}
              <Link to="https://linktr.ee/cocktail_companion" target="_blank">
                <u>contact</u>
              </Link>{" "}
              us if the problem persists.
            </p>
          )
        }
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

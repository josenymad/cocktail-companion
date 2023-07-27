import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import AllCocktails from "./AllCocktails";
import BestBarware from "./Barware";
import Home from "./Home";
import getCocktails from "../requests/getCocktails";
import filterCocktails from "../requests/filterCocktails";

const App = () => {
  const [selectedDrink, setSelectedDrink] = useState({});
  const [drinksData, setDrinksData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const spirits = ["Rum", "Vodka", "Gin", "Whiskey", "Tequila", "Brandy"];

  useEffect(() => {
    getCocktails(setDrinksData);
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getCocktails(setDrinksData, searchQuery);
  };

  const filterDrinks = (event) => {
    filterCocktails(event.target.value, setFilteredDrinks);
  };

  const clearFilter = () => {
    setSearchQuery("");
    setFilteredDrinks([]);
  };

  return (
    <div className="app">
      <NavBar
        searchQuery={searchQuery}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="best-barware" element={<BestBarware />} />
        <Route
          path="all-cocktails"
          element={
            <AllCocktails
              drinksData={drinksData}
              selectedDrink={selectedDrink}
              setSelectedDrink={setSelectedDrink}
              searchQuery={searchQuery}
              filterDrinks={filterDrinks}
              spirits={spirits}
              filteredDrinks={filteredDrinks}
              clearFilter={clearFilter}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

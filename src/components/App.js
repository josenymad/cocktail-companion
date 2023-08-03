import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import BurgerNav from "./BurgerNav";
import Navbar from "./Navbar";
import AllCocktails from "./AllCocktails";
import BestBarware from "./BestBarware";
import Home from "./Home";
import getCocktails from "../requests/getCocktails";
import Title from "./Title";
import filterCocktails from "../requests/filterCocktails";

const App = () => {
  const [selectedDrink, setSelectedDrink] = useState({});
  const [drinksData, setDrinksData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const spirits = ["Rum", "Vodka", "Gin", "Whiskey", "Tequila", "Brandy"];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    async function fetchData() {
      await getCocktails(setDrinksData);
    }
    fetchData();
  }, [searchQuery]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    getCocktails(setDrinksData);
  };

  return (
    <div className="app">
      <Title />
      {windowWidth >= 900 ? (
        <Navbar
          searchQuery={searchQuery}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <BurgerNav
          searchQuery={searchQuery}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              drinksData={drinksData}
              setSelectedDrink={setSelectedDrink}
              selectedDrink={selectedDrink}
            />
          }
        />
        <Route path="best-barware" element={<BestBarware />} />
        <Route
          path="all-cocktails"
          element={
            <AllCocktails
              drinksData={drinksData}
              selectedDrink={selectedDrink}
              setDrinksData={setDrinksData}
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

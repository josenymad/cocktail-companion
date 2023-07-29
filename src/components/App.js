import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import AllCocktails from "./AllCocktails";
import BestBarware from "./Barware";
import Home from "./Home";
import getCocktails from "../requests/getCocktails";
import Title from './Title';

const App = () => {
  const [selectedDrink, setSelectedDrink] = useState({});
  const [drinksData, setDrinksData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <div className="app">
      <NavBar
        searchQuery={searchQuery}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
      />
      <Title />
      <Routes>
        <Route path="/" element={<Home />} />
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
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

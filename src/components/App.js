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

const App = () => {
  const [selectedDrink, setSelectedDrink] = useState({});
  const [drinksData, setDrinksData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    getCocktails(setDrinksData);
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

  return (
    <div className="app">
      {windowWidth >= 900 ? (
        <Navbar />
      ) : (
        <BurgerNav
          searchQuery={searchQuery}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
        />
      )}
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

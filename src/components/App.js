import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import AllCocktails from "./AllCocktails";

const App = ({ drinksData }) => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" /* element={<Home />} */ />
        <Route path="best-barware" /* element={<BestBarware />} */ />
        <Route
          path="all-cocktails"
          element={<AllCocktails drinksData={drinksData} />}
        />
      </Routes>
    </div>
  );
};

export default App;

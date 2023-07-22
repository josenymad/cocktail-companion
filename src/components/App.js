import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import NavBar from "./NavBar";
import BestBarware from "./Barware";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best-barware" element={<BestBarware />} />
        <Route path="all-cocktails" element={<AllCocktails />} />
      </Routes>
    </div>
  );
};

export default App;

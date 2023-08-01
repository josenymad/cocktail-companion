import React from "react";
import "../styles/home.css";
import Carousel from "./Carousel";

const Home = ({ drinksData, selectedDrink, setSelectedDrink }) => {
  const { drinks } = drinksData;

  return (
    <div className="home">
      <Carousel
        selectedDrink={selectedDrink}
        setSelectedDrink={setSelectedDrink}
        slides={drinks}
      />
      <p className="home__text">
        Welcome to Cocktail Companion! We have got you covered with an extensive
        range of delicious drinks, barware to suit all budgets and easy to
        follow instructions to get you mixing cocktails in no time. Search by
        ingredient, check out our most popular drinks or let us surprise you
        with a random cocktail selection!
      </p>
    </div>
  );
};

export default Home;

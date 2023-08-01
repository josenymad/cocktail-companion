import React from "react";
import "../styles/home.css";
import Carousel from "./Carousel";

const Home = ({ drinksData, selectedDrink, setSelectedDrink }) => {
  const { drinks } = drinksData;

  return (
    <div className="home">
      <div className="home__main">
        <Carousel
          selectedDrink={selectedDrink}
          setSelectedDrink={setSelectedDrink}
          slides={drinks}
        />
        <p className="home__text">
          Welcome to Cocktail Companion! We have got you covered with an
          extensive range of delicious drinks, barware to suit all budgets and
          easy to follow instructions to get you mixing cocktails in no time.
        </p>
      </div>
      <div className="home__guide">
        <p className="home__guide-text">
          Need inspiration? Scroll through our cocktail selection above and
          click on any drink for ingredients and instructions.
        </p>
        <p className="home__guide-text">
          Looking to perfect your set up? Head to Best Barware for ingredients
          and equipment tips to suit a range of budgets.
        </p>
        <p className="home__guide-text">
          After something specific? Check out All Cocktails where you can search
          by name, filter by spirit and view our collections.
        </p>
      </div>
    </div>
  );
};

export default Home;

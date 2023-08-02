import React from "react";
import "../styles/home.css";
import Carousel from "./Carousel";

const Home = ({ drinksData, selectedDrink, setSelectedDrink }) => {
  const { drinks } = drinksData;

  return (
    <div className="home">
      <div className="home__main">
        <div className="home__carousel">
          <Carousel
            selectedDrink={selectedDrink}
            setSelectedDrink={setSelectedDrink}
            slides={drinks}
          />
        </div>
        <p className="home__intro">
          Welcome to Cocktail Companion! We have got you covered with an
          extensive range of delicious drinks, top tips for building your home
          bar and easy to follow instructions to get you mixing cocktails in no
          time.
        </p>
        <p className="home__guide" id="guide-one">
          Need inspiration? Scroll through our cocktail selection and click on
          any drink for ingredients and instructions.
        </p>
        <p className="home__guide" id="guide-two">
          Looking to perfect your set up? Head to Best Barware for ingredients
          and equipment to suit a range of budgets.
        </p>
        <p className="home__guide" id="guide-three">
          After something specific? Check out All Cocktails to search by name,
          filter by spirit and view our collections.
        </p>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "../styles/home.css";
import Carousel from "./Carousel";

const Home = ({ drinksData, searchQuery, selectedDrink, setSelectedDrink }) => {
  const { drinks } = drinksData;

  return (
    <div className="home">
      <div className="home__main">
        <div className="home__carousel">
          <Carousel
            selectedDrink={selectedDrink}
            searchQuery={searchQuery}
            setSelectedDrink={setSelectedDrink}
            slides={drinks}
          />
        </div>
        <p className="home__intro">
          <strong>Welcome to Cocktail Companion!</strong> We have got you
          covered with an extensive range of delicious drinks, top tips for
          building your home bar and easy to follow instructions to get you
          mixing cocktails in no time.
        </p>
        <p className="home__guide" id="guide-one">
          <strong>Need inspiration?</strong>
          <br /> Scroll through our cocktail selection and click on any drink
          for ingredients and instructions.
        </p>
        <p className="home__guide" id="guide-two">
          <strong>Looking to perfect your set up?</strong>
          <br /> Head to Best Barware for ingredients and equipment to suit a
          range of budgets.
        </p>
        <p className="home__guide" id="guide-three">
          <strong>After something specific?</strong>
          <br /> Check out All Cocktails to search by name, filter by spirit or
          view our collections.
        </p>
      </div>
    </div>
  );
};

export default Home;

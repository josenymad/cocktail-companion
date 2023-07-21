import React from "react";
import "../styles/home.css";
import Carousel from "./Carousel";
import carouselData from "./CarouselData";

const Home = () => {
  return (
    <div className="home">
      <p className="home__text">
        Welcome to Cocktail Companion! We have got you covered with an extensive
        range of delicious drinks, barware to suit all budgets and easy to
        follow instructions to get you mixing cocktails in no time. Search by
        ingredient, check out our favourites or let us surprise you with our
        random cocktail generator!
      </p>
      <Carousel slides={carouselData} />
    </div>
  );
};

export default Home;

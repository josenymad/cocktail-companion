import React from "react";
import "../styles/home.css";
import Carousel from "./Carousel";
import carouselData from "./CarouselData";

const Home = () => {
  return (
    <div className="home">
      <p className="home__text">
        Welcome to Cocktail Companion: Your Ultimate Mixology Guide! Explore the
        art of cocktails with Cocktail Companion, your go-to resource for
        crafting exceptional drinks. Discover an extensive collection of
        recipes, delve into the fascinating history behind each libation, and
        master essential techniques. Join our vibrant community and elevate your
        mixology skills. Cheers to unforgettable cocktail experiences with
        Cocktail Companion!
      </p>
      <Carousel slides={carouselData} />
    </div>
  );
};

export default Home;

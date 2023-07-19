import React from "react";
import "../styles/home.css";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";

const Home = () => {
  return (
    <div className="home">
      <p className="text">
        Welcome to Cocktail Companion: Your Ultimate Mixology Guide! Explore the
        art of cocktails with Cocktail Companion, your go-to resource for
        crafting exceptional drinks. Discover an extensive collection of
        recipes, delve into the fascinating history behind each libation, and
        master essential techniques. Join our vibrant community and elevate your
        mixology skills. Cheers to unforgettable cocktail experiences with
        Cocktail Companion!
      </p>
      <div className="carousel">
        <div className="carousel-container">
          <img
            className="carousel-image"
            src={image1}
            alt="pink gin and tonic"
          />
        </div>
        <div className="carousel-container">
          <img
            className="carousel-image"
            src={image2}
            alt="passion fruit daiquiri"
          />
        </div>
        <div className="carousel-container">
          <img
            className="carousel-image"
            src={image3}
            alt="blackberry cocktail"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

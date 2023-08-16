import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/carousel.css";
import CocktailCard from "./CocktailCard";
import CocktailDetails from "./CocktailDetails";

const Carousel = ({ selectedDrink, searchQuery, setSelectedDrink, slides }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleSelectDrink = (selection) => {
    setSelectedDrink(selection);
  };

  let slideLength = 0;

  if (slides !== null && slides !== undefined) {
    slideLength = slides.length;
  }

  const nextSlide = () => {
    setCurrentImage(currentImage === slideLength - 1 ? 0 : currentImage + 1);
  };

  const previousSlide = () => {
    setCurrentImage(currentImage === 0 ? slideLength - 1 : currentImage - 1);
  };

  if ((!Array.isArray(slides) || slides.length <= 0) && searchQuery) {
    return (
      <p className="carousel__error-message">
        Sorry, there seems to be no cocktails named {searchQuery}
      </p>
    );
  }

  if ((!Array.isArray(slides) || slides.length <= 0) && !searchQuery) {
    return (
      <p className="carousel__error-message">
        Sorry for the delay! If the cocktails haven&apos;t loaded after a while
        there may be something wrong with the server, please try again later and{" "}
        <Link to="https://linktr.ee/cocktail_companion" target="_blank">
          <u>contact</u>
        </Link>{" "}
        us if the problem persists.
      </p>
    );
  }

  return (
    <div className="carousel">
      {slides.map((slide, index) => {
        return (
          <div
            className={index === currentImage ? "slide active" : "slide"}
            key={slide.idDrink}
          >
            {index === currentImage && (
              <div className="cocktail-card">
                <CocktailCard
                  drink={slide}
                  handleSelectDrink={handleSelectDrink}
                />
              </div>
            )}
          </div>
        );
      })}
      <FontAwesomeIcon
        className="carousel__left-arrow"
        icon={faArrowLeft}
        onClick={previousSlide}
      />
      <FontAwesomeIcon
        className="carousel__right-arrow"
        icon={faArrowRight}
        onClick={nextSlide}
      />
      {Object.keys(selectedDrink).length ? (
        <CocktailDetails
          selectedDrink={selectedDrink}
          handleSelectDrink={handleSelectDrink}
        />
      ) : null}
    </div>
  );
};

export default Carousel;

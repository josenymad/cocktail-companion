import { React, useState } from "react";
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

  if (!Array.isArray(slides) || slides.length <= 0) {
    return (
      <p className="carousel__error-message">
        Sorry, there are no {searchQuery} cocktails to display.
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
                  data-testid="current__image"
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

import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/carousel.css";

const Carousel = ({ slides }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const slideLength = slides.length;

  const nextSlide = () => {
    setCurrentImage(currentImage === slideLength - 1 ? 0 : currentImage + 1);
  };

  const previousSlide = () => {
    setCurrentImage(currentImage === 0 ? slideLength - 1 : currentImage - 1);
  };

  if (!slideLength) {
    return null;
  }

  return (
    <div className="carousel">
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
      {slides.map((slide, index) => {
        return (
          <div
            className={index === currentImage ? "slide active" : "slide"}
            key={slide.id}
          >
            {index === currentImage && (
              <div>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="carousel__image"
                  data-testid="current__image"
                />
                <p className="carousel__title">{slide.title}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;

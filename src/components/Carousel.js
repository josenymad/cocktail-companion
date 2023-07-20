import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import carouselData from "./CarouselData";
import "../styles/carousel.css";

const Carousel = ({ items }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = { items };

  const nextImage = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  if (!length) {
    return null;
  }

  return (
    <div className="carousel">
      <FontAwesomeIcon
        className="left-arrow"
        icon={faArrowLeft}
        onClick={previousImage}
      />
      <FontAwesomeIcon
        className="right-arrow"
        icon={faArrowRight}
        onClick={nextImage}
      />
      {carouselData.map((item, index) => {
        return (
          <div
            className={index === currentImage ? "image-active" : "image"}
            key={item.alt}
          >
            {index === currentImage && (
              <img src={item.image} alt={item.alt} className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;

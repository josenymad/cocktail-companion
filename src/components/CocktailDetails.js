import React from "react";
import "../styles/cocktail-details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const CocktailDetails = ({ selectedDrink, handleSelectDrink }) => {
  const ingredients = Object.entries(selectedDrink)
    .slice(17, 32)
    .filter((ingredient) => ingredient[1] !== null)
    .map((ingredient) => ingredient[1]);
  const measures = Object.entries(selectedDrink)
    .slice(32, 47)
    .filter((measure) => measure[1] != null)
    .map((measure) => measure[1]);
  const removeUndefined = (measure) => {
    if (measure === undefined) {
      return "";
    }
    return measure;
  };

  return (
    <div className="cocktail-details">
      <div className="cocktail-details__container">
        <img
          alt="cocktail"
          src={selectedDrink.strDrinkThumb}
          className="cocktail-details__image"
        />
        <div className="cocktail-details__text">
          <h3 className="cocktail-details__name">{selectedDrink.strDrink}</h3>
          <p className="cocktail-details__glass">{selectedDrink.strGlass}</p>
          <p className="cocktail-details__ingredients">Ingredients:</p>
          <ul className="cocktail-details__ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li className="cocktail-details__ingredient" key={ingredient}>
                {`${removeUndefined(measures[index])} ${ingredient}`}
              </li>
            ))}
          </ul>
          <p className="cocktail-details__instruction">Instructions:</p>
          <p className="cocktail-details__instructions">
            {selectedDrink.strInstructions}
          </p>
          {selectedDrink.strVideo ? (
            <a href={selectedDrink.strVideo} target="_blank" rel="noreferrer">
              Video
            </a>
          ) : null}
        </div>
      </div>

      <button
        type="button"
        onClick={() => handleSelectDrink({})}
        className="cocktail-details__button"
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
};

export default CocktailDetails;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ searchQuery, handleInputChange, handleSubmit }) => {
  return (
    <div className="navbar">
      <div className="navbar-titles">
        <h1 className="navbar-title__header">Cocktail Companion</h1>
        <h2 className="navbar-title__slogan">The Ultimate Cocktail Guide</h2>
      </div>
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-list__item">
          <Link to="best-barware">Best Barware</Link>
        </li>
        <li className="navbar-list__item">
          <Link to="all-cocktails">All Cocktails</Link>
        </li>
        <li className="navbar-list__item">
          <form onSubmit={handleSubmit}>
            <label htmlFor="search">{}</label>
            <input
              type="search"
              id="search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <label htmlFor="search-button">{}</label>
            <button
              type="submit"
              className="navbar-list__button"
              id="search-button"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

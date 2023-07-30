import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ searchQuery, handleInputChange, handleSubmit }) => {
  return (
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
        <form className="navbar-list__search" onSubmit={handleSubmit}>
          <label htmlFor="search">{}</label>
          <input
            placeholder="Margarita"
            className="navbar-list__searchBoxText"
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
  );
};

export default Navbar;

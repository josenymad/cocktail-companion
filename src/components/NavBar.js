import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { slide as Menu } from "react-burger-menu";

const NavBar = ({ searchQuery, handleInputChange, handleSubmit }) => {
  return (
    <Menu>
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <Link to="/">HOME</Link>
        </li>
        <li className="navbar-list__item">
          <Link to="best-barware">BEST BARWARE</Link>
        </li>
        <li className="navbar-list__item">
          <Link to="all-cocktails">ALL COCKTAILS</Link>
        </li>
        <li className="navbar-list__item">
          <form className="navbar-list__search" onSubmit={handleSubmit}>
            <label htmlFor="search">{}</label>
            <input
              placeholder="SEARCH COCKTAILS"
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
      </Menu>
  );
};

export default NavBar;

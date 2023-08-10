import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/burger-nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { slide as Menu } from "react-burger-menu";
import logo from "../images/OriginalLogo.png";

const BurgerNav = ({ searchQuery, handleInputChange, handleSubmit }) => {
  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };
  const closeBurgerNav = () => {
    setOpen(false);
  };

  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
      <ul className="burger-navbar-list">
        <li className="burger-navbar-list__item">
          <Link to="/" onClick={closeBurgerNav}>
            HOME
          </Link>
        </li>
        <li className="burger-navbar-list__item">
          <Link to="best-barware" onClick={closeBurgerNav}>
            BEST BARWARE
          </Link>
        </li>
        <li className="burger-navbar-list__item">
          <Link to="all-cocktails" onClick={closeBurgerNav}>
            ALL COCKTAILS
          </Link>
        </li>
        <li className="burger-navbar-list__item">
          <Link
            to="https://linktr.ee/cocktail_companion"
            target="_blank"
            onClick={closeBurgerNav}
          >
            CONTACT
          </Link>
        </li>
        <li className="burger-navbar-list__item">
          <form className="navbar-list__search" onSubmit={handleSubmit}>
            <label htmlFor="search">{}</label>
            <input
              placeholder="Martini"
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
              onClick={closeBurgerNav}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </li>
        <img src={logo} alt="logo" className="NavLogo" />
      </ul>
    </Menu>
  );
};

export default BurgerNav;

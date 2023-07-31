import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/burger-nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { slide as Menu } from "react-burger-menu";

const CloseMenuContext = React.createContext();

const BurgerNav = ({ searchQuery, handleInputChange, handleSubmit }) => {
  const closeMenu = useContext(CloseMenuContext);

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <Menu>
      <ul className="burger-navbar-list">
        <li className="burger-navbar-list__item">
          <Link to="/">HOME</Link>
        </li>
        <li className="burger-navbar-list__item">
          <Link to="best-barware">BEST BARWARE</Link>
        </li>
        <li className="burger-navbar-list__item">
          <Link to="all-cocktails">ALL COCKTAILS</Link>
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
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </li>
      </ul>
    </Menu>
  );
};

export default BurgerNav;

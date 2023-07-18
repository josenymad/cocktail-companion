import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
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
          <form>
            <label htmlFor="search">{}</label>
            <input type="search" id="search" />
          </form>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

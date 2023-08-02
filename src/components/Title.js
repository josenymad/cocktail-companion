import React from "react";
import "../styles/title.css";
import logo2 from '../images/IMG_2674.png';

const Title = () => {
  return (
    <div className="title">
      <div className="navbar-titles" id="outer-container">
        <div id="page-wrap">
          <h1 className="navbar-title__header">Cocktail Companion</h1>
          <h2 className="navbar-title__slogan">The Ultimate Cocktail Guide</h2>
        </div>
      </div>
      <img src={logo2} alt="Logo" className="logo" />
    </div>
  );
};

export default Title;

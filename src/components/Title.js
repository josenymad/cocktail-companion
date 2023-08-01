import React from "react";
import "../styles/title.css";

const Title = () => {
  return (
    <div className="title">
      <div className="navbar-titles" id="outer-container">
        <div id="page-wrap">
          <h1 className="navbar-title__header">Cocktail Companion</h1>
          <h2 className="navbar-title__slogan">The Ultimate Cocktail Guide</h2>
        </div>
      </div>
    </div>
  );
};

export default Title;

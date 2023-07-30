/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
import "../styles/bestBarware.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BestBarware = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    "Post-fifty",
    "Post-hundred",
    "Post-twohundred",
    "Post-conclusion",
  ];

  const handlePrevSection = () => {
    setCurrentSection((prevSection) =>
      prevSection - 1 >= 0 ? prevSection - 1 : 0,
    );
  };

  const handleNextSection = () => {
    setCurrentSection((prevSection) =>
      prevSection + 1 < sections.length ? prevSection + 1 : prevSection,
    );
  };

  const renderSection = () => {
    const sectionName = sections[currentSection];
    switch (sectionName) {
      case "Post-fifty":
        return (
          <div className={sectionName}>
            <div className="Post-fifty">
              <h2>The £50 Cocktail Bar</h2>
              <img
                className="cocktailImageAlt"
                src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                alt="Cocktail Shaker"
              />
              <p className="Post-text">
                If you're on a tight budget, fear not! With just £50, you can
                kickstart your cocktail journey. With this setup, you can make
                popular cocktails like Martinis, Gimlets, Gin and Tonics, Tom
                Collins’, and Gin Rickeys. With a few additional ingredients,
                you can also create the delightful Ramos Gin Fizz. Here's what
                you'll need:
                <ul className="Post-list">
                  <li>
                    <b>Shaker Set:</b> £15-£20 (Look for a three-piece
                    all-in-one or a Boston shaker with a strainer.)
                  </li>
                  <li>
                    <b>London Dry Gin:</b> 700 ml bottle - Approx. £15-£20
                  </li>
                  <li>
                    <b>Dry Vermouth:</b> 375 ml bottle - Approx. £3-£5 (White or
                    French vermouth)
                  </li>
                  <li>
                    <b>Barspoon:</b> £2-£4
                  </li>
                  <li>
                    <b>Measuring Shot Glass:</b> 50 ml - Approx. £2-£3
                  </li>
                  <li>
                    <b>Additional items:</b> Limes, soda water, tonic water,
                    sugar (or simple syrup) to complement your cocktails. These
                    items are relatively inexpensive and can be purchased when
                    needed.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        );
      case "Post-hundred":
        return (
          <div className={sectionName}>
            <div className="Post-hundred">
              <h2>The £100 Cocktail Bar</h2>
              <img
                className="cocktailImage"
                src="https://images.unsplash.com/photo-1659167825653-7f74504c7fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=626&q=80"
                alt="London Dry Gin"
              />
              <p className="Post-text">
                This setup will allow you to create classic cocktails such as
                Old Fashioned, Whiskey Sours, Manhattan’s.
                <ul className="Post-list">
                  <li>
                    <b>Shaker Set:</b> As before. £15-£20
                  </li>
                  <li>
                    <b>London Dry Gin:</b> 700 ml bottle. £15-£20
                  </li>
                  <li>
                    <b>Bourbon:</b> 700 ml bottle of Kentucky straight bourbon
                    whiskey. Approx. £20-£25
                  </li>
                  <li>
                    <b>Dry Vermouth:</b> 375 ml bottle - Approx. £3-£5 (White or
                    French vermouth)
                  </li>
                  <li>
                    <b>Sweet Vermouth:</b> 375 ml bottle of Italian or red
                    vermouth. Approx. £5-£10
                  </li>
                  <li>
                    <b>Angostura Bitters:</b> 200 ml bottle. Approx. £7-£10
                  </li>
                  <li>
                    <b>Barspoon:</b> As before. £2-£4
                  </li>
                  <li>
                    <b>Measuring Shot Glass:</b> As before. £2-£3
                  </li>
                  <li>
                    <b>Additional items:</b> Lemons, mint, soda water, sugar (or
                    simple syrup) to complete your bar.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        );
      case "Post-twohundred":
        return (
          <div className={sectionName}>
            <div className="Post-twohundred">
              <h2>The £200 Cocktail Bar</h2>
              <img
                className="cocktailImageAlt"
                src="https://images.unsplash.com/photo-1651381850425-204da28f1cf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80"
                alt="Dry Vermouth"
              />
              <p className="Post-text">
                For those willing to invest a bit more, a £200 budget opens up a
                world of mixological possibilities. Here's how to elevate your
                cocktail closet, with these additions, you can now explore the
                delights of Rusty Nails, Rob Roys, Bobby Burnses, Scotch and
                Sodas, Daiquiris, Mojitos, Cuba Libres, and more.
                <ul className="Post-list">
                  <li>
                    <b>All Items from the £100 Budget</b>
                  </li>
                  <li>
                    <b>Regan's Orange Bitters:</b> 200 ml bottle for extra
                    flavour options. £7-£10
                  </li>
                  <li>
                    <b>Blended Scotch:</b> 700 ml bottle. Approx. £20-£30
                  </li>
                  <li>
                    <b>Drambuie:</b> 700 ml bottle of this Scotch-based liqueur.
                    Approx. £25-£35
                  </li>
                  <li>
                    <b>Applejack:</b> 700 ml bottle of this fruity spirit.
                    Approx. £20-£30
                  </li>
                  <li>
                    <b>Orgeat Syrup:</b> For crafting tropical delights. Approx.
                    £5-£10
                  </li>
                  <li>
                    <b>Ingredients for Homemade Grenadine:</b> Add a
                    personalized touch to your cocktails. Approx. £5-£10
                  </li>
                  <li>
                    <b>Vented Pour Spouts:</b> These make pouring and mixing
                    easier. £2-£5
                  </li>
                </ul>
              </p>
            </div>
          </div>
        );
      case "Post-conclusion":
        return (
          <div className={sectionName}>
            <div className="Post-conclusion">
              <h2>Expanding Your Bar</h2>
              <img
                className="cocktailImage"
                src="https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Cocktail"
              />
              <p className="Post-text">
                Once your cocktail closet is well-equipped with these basics,
                the fun doesn't stop there. You can continue to expand your
                collection with various spirits and liqueurs, such as:
                <ul className="Post-list">
                  <li>All Items from the £100 Budget</li>
                  <li>
                    <b>Rye Whiskey</b> (700 ml bottle) - Approx. £20-£30
                  </li>
                  <li>
                    <b>Absinthe</b> (700 ml bottle) - Approx. £30-£50
                  </li>
                  <li>
                    <b>Apricot Brandy</b> (700 ml bottle) - Approx. £15-£25
                  </li>
                  <li>
                    <b>Coffee Liqueur</b> (700 ml bottle) - Approx. £15-£25
                  </li>
                  <li>
                    <b>Grand Marnier</b> (700 ml bottle) - Approx. £25-£40
                  </li>
                  <li>
                    <b>Chartreuse</b> (700 ml bottle) - Approx. £35-£60 (Green
                    or Yellow)
                  </li>
                  <li>
                    <b>Sloe Gin</b> (700 ml bottle) - Approx. £20-£30
                  </li>
                  <li>
                    <b>Creme de Cassis</b> (700 ml bottle) - Approx. £15-£25
                  </li>
                </ul>
                <div>
                  Remember, building a cocktail bar is an ongoing process, and
                  it's all about exploring new flavors, mixing techniques, and
                  discovering your favorite concoctions.
                </div>
              </p>
            </div>
          </div>
        );
      default:
        return null; // Return null for unknown sections
    }
  };

  return (
    <div className="Post">
      <h1 className="Post-title">
        Cocktail Closet Essentials: Building Your Home Cocktail Bar on a Budget
      </h1>
      <p className="Post-intro">
        Are you eager to dive into the exciting world of cocktail making but
        unsure where to start? Whether you're a beginner or an enthusiast
        looking to expand your home bar, creating a well-stocked cocktail closet
        can be both fun and rewarding. In this guide, inspired by (
        <a href="https://tinyurl.com/3wmkc8f3">Kenning's post</a> ), we'll
        present three example budgets of £50, £100, and £200, to help you build
        your cocktail bar and craft delicious drinks at home.
      </p>
      <div className="Post-navigation">
        <FontAwesomeIcon
          className="Button-prev"
          type="button"
          icon={faArrowLeft}
          onClick={handlePrevSection}
        />
        <FontAwesomeIcon
          className="Button-next"
          type="button"
          icon={faArrowRight}
          onClick={handleNextSection}
        />
      </div>
      {renderSection()}
    </div>
  );
};

export default BestBarware;

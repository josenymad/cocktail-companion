import axios from "axios";

const filterCocktails = async (spirit, setFilteredDrinks) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${spirit}`;

  try {
    const response = await axios.get(endpoint);
    setFilteredDrinks(response.data.drinks);
  } catch (error) {
    console.log(error);
  }
};

export default filterCocktails;

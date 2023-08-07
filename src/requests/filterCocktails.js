import axios from "axios";

const filterCocktails = async (spirit, setFilteredDrinks, setAlert) => {
  const { REACT_APP_API_KEY } = process.env;
  const endpoint = `https://www.thecocktaildb.com/api/json/v2/${REACT_APP_API_KEY}/filter.php?i=${spirit}`;

  try {
    const response = await axios.get(endpoint);
    setFilteredDrinks(response.data.drinks);
    setAlert("");
  } catch (error) {
    const { status } = error.response;
    if (status === 404) {
      setAlert("Sorry, something went wrong. Please try later.");
    }
    if (status === 500) {
      setAlert("Sorry, there's a server error. Please try later.");
    }
  }
};

export default filterCocktails;

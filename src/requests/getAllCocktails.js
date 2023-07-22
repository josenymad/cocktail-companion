import axios from "axios";

const getAllCocktails = async (setDrinksData) => {
  const endpoint =
    "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=";

  try {
    const response = await axios.get(endpoint);
    setDrinksData(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default getAllCocktails;

import axios from "axios";

const getAllCocktails = async () => {
  const endpoint =
    "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=";

  try {
    await axios.get(endpoint);
  } catch (error) {
    console.log(error);
  }
};

export default getAllCocktails;

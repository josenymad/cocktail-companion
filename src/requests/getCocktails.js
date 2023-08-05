import axios from "axios";

const getCocktails = async (setDrinksData, searchQuery) => {
  let endpoint =
    "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=";

  if (searchQuery) {
    endpoint += `${searchQuery}`;
  }

  try {
    const response = await axios.get(endpoint);
    setDrinksData(response.data);
  } catch (error) {
    const { status } = error.response;
    console.error(`There is a ${status} error.`);
  }
};

export default getCocktails;

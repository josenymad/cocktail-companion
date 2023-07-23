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
    console.log(error);
  }
};

export default getCocktails;

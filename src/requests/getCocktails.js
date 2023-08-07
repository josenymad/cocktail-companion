import axios from "axios";

const getCocktails = async (setDrinksData, searchQuery) => {
  const { REACT_APP_API_KEY } = process.env;
  let endpoint = `https://www.thecocktaildb.com/api/json/v2/${REACT_APP_API_KEY}/search.php?s=`;

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

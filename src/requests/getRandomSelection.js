import axios from "axios";

const getRandomSelection = async (setDrinksData) => {
  const endpoint =
    "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php";

  try {
    const response = await axios.get(endpoint);
    setDrinksData(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default getRandomSelection;

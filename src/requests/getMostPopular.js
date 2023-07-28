import axios from "axios";

const getMostPopular = async (setDrinksData) => {
  const endpoint =
    "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php";

  try {
    const response = await axios.get(endpoint);
    setDrinksData(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default getMostPopular;

import axios from "axios";

const getRandomDrink = async (setDrinksData) => {
  const endpoint =
    "https://www.thecocktaildb.com/api/json/v2/9973533/random.php";

  try {
    const response = await axios.get(endpoint);
    setDrinksData(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default getRandomDrink;

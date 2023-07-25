import axios from "axios";

const getNonAlcoholic = async (setDrinksData) => {
  const endpoint =
    "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Non_Alcoholic";

  try {
    const response = await axios.get(endpoint);
    setDrinksData(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default getNonAlcoholic;

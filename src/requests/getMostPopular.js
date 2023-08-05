import axios from "axios";

const getMostPopular = async (setDrinksData, setAlert) => {
  const endpoint =
    "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php";

  try {
    const response = await axios.get(endpoint);
    setDrinksData(response.data);
    setAlert("");
  } catch (error) {
    const { status } = error.response;
    if (status === 404) {
      setAlert("Sorry, something's gone wrong. Please try later.");
    }
    if (status === 500) {
      setAlert("Sorry, there's a server error. Please try later.");
    }
  }
};

export default getMostPopular;

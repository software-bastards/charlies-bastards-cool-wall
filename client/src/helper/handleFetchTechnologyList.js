import Axios from "axios";

/**
 * @method handleFetchTechnologyList - fetches technology list from the database
 * @param {}
 * @returns {Array<{id: Number, name: String}>} - returns the array of technologies
 */

const handleFetchTechnologyList = async () => {
  const response = await Axios.get("techlist");
  const data = await response.data;
  return data;
};

export default handleFetchTechnologyList;

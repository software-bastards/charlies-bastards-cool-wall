import Axios from "axios";

/**
 * @method handleFetchCombinedVotes - fetches technology list from the database
 * @param {}
 * @returns {Array<{id: Number, name: String}>} - returns the array of cool votes
 */
const handleFetchCombinedVotes = async () => {
  const response = await Axios.get("combinedvotes");
  const data = await response.data;
  return data;
};

export default handleFetchCombinedVotes;

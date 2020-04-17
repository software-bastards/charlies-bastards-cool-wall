import Axios from "axios";

<<<<<<< HEAD
/**
 * @method handleFetchCombinedVotes - fetches technology list from the database
 * @param {}
 * @returns {Array<{id: Number, name: String}>} - returns the array of cool votes
 */
=======
>>>>>>> 4aabe3c0a9c6a71a071a75fe0fe4b8dcf794ae2d
const handleFetchCombinedVotes = async () => {
  const response = await Axios.get("combinedvotes");
  const data = await response.data;
  return data;
};

export default handleFetchCombinedVotes;

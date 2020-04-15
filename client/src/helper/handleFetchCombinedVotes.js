import Axios from "axios";

<<<<<<< HEAD
=======
/**
 * @method handleFetchCombinedVotes - fetches technology list from the database
 * @param {}
 * @returns {Array<{id: Number, name: String}>} - returns the array of cool votes
 */
>>>>>>> 059db9a00f3063fc42090cc9b4919a4a80ef72ad
const handleFetchCombinedVotes = async () => {
  const response = await Axios.get("combinedvotes");
  const data = await response.data;
  return data;
};

export default handleFetchCombinedVotes;

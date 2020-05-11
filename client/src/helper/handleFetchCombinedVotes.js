import Axios from "axios";

/**
 * @method handleFetchCombinedVotes - fetches all the votes from the database
 * @param {}
 * @returns {Array<{id: Number, tech_name: String, vote_type: String}>} - returns the array of Votes
 */

const handleFetchCombinedVotes = async () => {
  const response = await Axios.get("combinedvotes");
  const data = await response.data;
  return data;
};

export default handleFetchCombinedVotes;

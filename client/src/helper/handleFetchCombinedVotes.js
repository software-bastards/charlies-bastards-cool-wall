import Axios from "axios";

/**
 * @method handleFetchCombinedVotes - fetches all the votes from the database
 * @param {}
 * @returns {Array<{subzero_votes: Number, cool_votes: Number, uncool_votes: Number, tech_list: {name: String}}>} - returns the array of Votes
 */

const handleFetchCombinedVotes = async () => {
  const response = await Axios.get("combinedvotes");
  const data = await response.data;
  return data;
};

export default handleFetchCombinedVotes;

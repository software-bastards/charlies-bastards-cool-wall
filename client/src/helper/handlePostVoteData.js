import Axios from "axios";

/**
 * @method handlePostVoteData posts the votes into the database
 * @param {Array<tech_id: Number, vote_type: String>} vote_list
 * @returns {String} - a response message if the post was successful or not
 */

const handlePostVoteData = async (vote_list) => {
  const response = await Axios.post("/submitvote", vote_list);
  return response;
};

export default handlePostVoteData;

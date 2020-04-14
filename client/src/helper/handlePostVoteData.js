import Axios from "axios";

<<<<<<< HEAD
const handlePostVoteData = async vote_list => {
=======
const handlePostVoteData = async (vote_list) => {
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
  const response = await Axios.post("/submitvote", vote_list);
  return response;
};

export default handlePostVoteData;

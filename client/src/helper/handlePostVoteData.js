import Axios from "axios";

const handlePostVoteData = async vote_list => {
  const response = await Axios.post("/submitvote", vote_list);
  return response;
};

export default handlePostVoteData;

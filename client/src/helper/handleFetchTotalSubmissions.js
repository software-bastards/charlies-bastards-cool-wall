import Axios from "axios";

/**
 * @method handleFetchTotalSubmissions - fetches count distinct createdAt from vote_table from the database
 * @param {}
 * @returns {Number} - returns number of total submissions
 */

const handleFetchTotalSubmissions = async () => {
  const response = await Axios.get("totalsubmissions");
  const data = await response.data;
  return data;
};

export default handleFetchTotalSubmissions;

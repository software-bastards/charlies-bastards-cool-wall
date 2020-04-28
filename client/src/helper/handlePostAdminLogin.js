import Axios from "axios";

/**
 * @method handlePostVoteData posts the votes into the database
 * @param {Array<tech_id: Number, vote_type: String>} vote_list
 * @returns {String} - a response message if the post was successful or not
 */

const handlePostAdminLogin = async (admin_login) => {
  try {
    const response = await Axios.post("/admin_login", admin_login);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export default handlePostAdminLogin;

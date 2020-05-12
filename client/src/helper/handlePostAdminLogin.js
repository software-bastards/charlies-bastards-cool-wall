import Axios from "axios";

/**
 * @method handlePostAdminLogin send login details to authenticate
 * @param {email: String, password: String}  admin_login
 * @returns {String} - a response message if the login was successful or not
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
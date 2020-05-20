import Axios from "axios";

/**
 * @method handlePostAdminLogin send login details to authenticate
 * @param {email: String, password: String}  admin_login
 * @returns {String} - a response message if the login was successful or not
 */

const handlePostAdminPwdChange = async (adminData) => {
  let my_token = sessionStorage.getItem("coolwall_admin");
  try {
    const response = await Axios.put("/admin_register", adminData, {
      headers: {
        Authorization: "Bearer " + my_token,
      },
    });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export default handlePostAdminPwdChange;

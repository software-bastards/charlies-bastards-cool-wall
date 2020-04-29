import Axios from "axios";


const handlePostAdminLogin = async (admin_login) => {
  try {
  const response = await Axios.post("/admin_login", admin_login);
 
  return response.data;
} catch (err) {
  return err.response.data;
}
};

export default handlePostAdminLogin;

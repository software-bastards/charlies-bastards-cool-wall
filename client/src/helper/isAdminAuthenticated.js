/**
 * @method isAdminAuthenticated returns a boolean if the admin is authenticated or not.
 *
 * @returns {Boolean} - a true or false based on admin authenticated
 */
const isAdminAuthenticated = () => {
  return sessionStorage.getItem("coolwall_admin") ? true : false;
};

<<<<<<< HEAD
<<<<<<< HEAD
export default isAdminAuthenticated;
=======
export default isAdminAuthenticated;
>>>>>>> fa2dbba8b95e816148177164bc749742093caf34
=======
export default isAdminAuthenticated;
>>>>>>> 3b0c55bb2da436bcb4aa6793b3f1cdaf7795464a

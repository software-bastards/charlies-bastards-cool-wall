/**
 * @method isAdminAuthenticated returns a boolean if the admin is authenticated or not.
 *
 * @returns {Boolean} - a true or false based on admin authenticated
 */
const isAdminAuthenticated = () => {
  return sessionStorage.getItem("coolwall_admin") ? true : false;
};

export default isAdminAuthenticated;

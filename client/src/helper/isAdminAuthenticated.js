const isAdminAuthenticated = () => {
  return sessionStorage.getItem("coolwall_admin") ? true : false;
};

<<<<<<< HEAD
export default isAdminAuthenticated;
=======
export default isAdminAuthenticated;
>>>>>>> feature-admin-register

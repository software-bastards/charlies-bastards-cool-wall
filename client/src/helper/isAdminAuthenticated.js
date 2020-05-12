const isAdminAuthenticated = () => {
  return sessionStorage.getItem("coolwall_admin") ? true : false;
};

export default isAdminAuthenticated;

const isAdminAuthenticated = () => {
  return sessionStorage.getItem("jwt") ? true : false;
};

export default isAdminAuthenticated;

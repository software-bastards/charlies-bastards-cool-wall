import isAdminAuthenticated from "../helper/isAdminAuthenticated";
const initialState = {
  token: isAdminAuthenticated() ? true : false,
  email: isAdminAuthenticated()
    ? sessionStorage.getItem("coolwall_admin_email")
    : "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CREATE_SESSION":
      return { ...state, token: action.token, email: action.email };
    case "END_SESSION":
      return { ...state, token: action.token, email: action.email };
    default:
      return state;
  }
}

import isAdminAuthenticated from "../helper/isAdminAuthenticated";

const initialState = {
  token: isAdminAuthenticated(),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CREATE_SESSION":
      return { ...state, token: action.token };
    case "END_SESSION":
      return { ...state, token: action.token };
    default:
      return state;
  }
}
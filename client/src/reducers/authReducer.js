import isAdminauthenticated from "../helper/isAdminAuthenticated";

const initialState = {
  token: isAdminauthenticated(),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CREATE_SESSION":
      return { ...state, token: action.token };
    default:
      return state;
  }
}

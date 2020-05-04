import isAdminAuthenticated from "../helper/isAdminAuthenticated";

const initialState = {
<<<<<<< HEAD
  token: isAdminAuthenticated()

};

export default function (state = initialState, action) {
    switch (action.type) {
      case "CREATE_SESSION":
        return { ...state, token: action.token };
      default:
        return state;
    }
  }
=======
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
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191

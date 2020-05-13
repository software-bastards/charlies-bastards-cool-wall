import isAdminAuthenticated from "../helper/isAdminAuthenticated";
const initialState = {
<<<<<<< HEAD
  token: isAdminAuthenticated(),
=======
  token: isAdminAuthenticated() ? true : false,
>>>>>>> fa2dbba8b95e816148177164bc749742093caf34
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
<<<<<<< HEAD
}
=======
}
>>>>>>> fa2dbba8b95e816148177164bc749742093caf34

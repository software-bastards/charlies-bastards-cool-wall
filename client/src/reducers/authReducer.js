import isAdminAuthenticated from "../helper/isAdminAuthenticated";
const initialState = {
<<<<<<< HEAD
  token: isAdminAuthenticated() ? true : false,
=======
<<<<<<< HEAD
<<<<<<< HEAD
  token: isAdminAuthenticated(),
=======
  token: isAdminAuthenticated() ? true : false,
>>>>>>> fa2dbba8b95e816148177164bc749742093caf34
=======
  token: isAdminAuthenticated() ? true : false,
  email: isAdminAuthenticated()
    ? sessionStorage.getItem("coolwall_admin_email")
    : "",
>>>>>>> 3b0c55bb2da436bcb4aa6793b3f1cdaf7795464a
>>>>>>> feature-admin-register
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
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> fa2dbba8b95e816148177164bc749742093caf34
=======
}
>>>>>>> 3b0c55bb2da436bcb4aa6793b3f1cdaf7795464a
>>>>>>> feature-admin-register

export default function (state = {}, action) {
<<<<<<< HEAD
    switch (action.type) {
      case "FETCH_COMBINEDVOTES":
        return { ...state, votes: action.votes };
      default:
        return state;
    }
  }



=======
  switch (action.type) {
    case "FETCH_COMBINEDVOTES":
      return { ...state, votes: action.votes };
    default:
      return state;
  }
}
>>>>>>> feature-admin-register

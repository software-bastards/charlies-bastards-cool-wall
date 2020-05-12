export default function (state = {}, action) {
    switch (action.type) {
      case "FETCH_COMBINEDVOTES":
        return { ...state, votes: action.votes };
      default:
        return state;
    }
  }




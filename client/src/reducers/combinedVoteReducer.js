export default function (state = {}, action) {
    switch (action.type) {
      case "FETCH_VOTES":
        return { ...state, combined_votes: action.combined_votes };
      default:
        return state;
    }
  }
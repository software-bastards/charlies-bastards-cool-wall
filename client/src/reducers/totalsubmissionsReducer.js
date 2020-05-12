export default function (state = {}, action) {
  switch (action.type) {
    case "FETCH_TOTALSUBMISSIONS":
      return { ...state, submissions: action.submissions };
    default:
      return state;
  }
}

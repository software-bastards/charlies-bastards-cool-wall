const initialState = {
  submissions: 0,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_TOTALSUBMISSIONS":
      return { ...state, submissions: action.submissions };
    default:
      return state;
  }
}

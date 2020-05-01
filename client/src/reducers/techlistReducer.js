export default function (state = {}, action) {
  switch (action.type) {
    case "FETCH_TECHLIST":
      return { ...state, list: action.list };
    default:
      return state;
  }
}

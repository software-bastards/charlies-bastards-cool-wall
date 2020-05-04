export default function (state = {}, action) {
  switch (action.type) {
    case "FETCH_TECHLIST":
      return { ...state, tech_list: action.tech_list };
    default:
      return state;
  }
}

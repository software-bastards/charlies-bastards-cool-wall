export default function (state = 0, action) {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: action.counter };
      
      default:
        return state;
    }
  }
  
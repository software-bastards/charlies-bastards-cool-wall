import { combineReducers } from "redux";
import authReducer from "./authReducer";
import techlistReducer from "./techlistReducer";
import combinedvotesReducer from "./combinedvotesReducer";

const allReducers = combineReducers({
  auth: authReducer,
  tech: techlistReducer,
  votes: combinedvotesReducer,
});
export default allReducers;

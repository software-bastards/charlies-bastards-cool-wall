import { combineReducers } from "redux";
import authReducer from "./authReducer";
import combinedVoteReducer from "./combinedVoteReducer";
import techlistReducer from "./techlistReducer";

const allReducers = combineReducers({
  auth: authReducer,
  votes: combinedVoteReducer,
  tech: techlistReducer,
});
export default allReducers;

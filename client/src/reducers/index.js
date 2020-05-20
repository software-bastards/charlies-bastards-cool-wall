import { combineReducers } from "redux";
import authReducer from "./authReducer";
import combinedVoteReducer from "./combinedVoteReducer";
import techlistReducer from "./techlistReducer";
import totalsubmissionsReducer from "./totalsubmissionsReducer";
import counterReducer from "./counterReducer";
const allReducers = combineReducers({
  auth: authReducer,
  votes: combinedVoteReducer,
  tech: techlistReducer,
  submissions: totalsubmissionsReducer,
  counter: counterReducer
});
export default allReducers;


import { combineReducers } from "redux";
import authReducer from "./authReducer";
import combinedVoteReducer from "./combinedVoteReducer";
import techlistReducer from "./techlistReducer";

const allReducers = combineReducers({
  auth: authReducer,
  votes: combinedVoteReducer,
  tech: techlistReducer,
});
<<<<<<< HEAD
export default allReducers;
=======
export default allReducers;
>>>>>>> feature-admin-register

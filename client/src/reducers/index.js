import { combineReducers } from "redux";
import authReducer from "./authReducer";
<<<<<<< HEAD

const allReducers = combineReducers({
  auth: authReducer
});
export default allReducers;

=======
import combinedVoteReducer from "./combinedVoteReducer";
import techlistReducer from "./techlistReducer";

const allReducers = combineReducers({
  auth: authReducer,
  votes: combinedVoteReducer,
  tech: techlistReducer,
});
export default allReducers;
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191

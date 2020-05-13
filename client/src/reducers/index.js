import { combineReducers } from "redux";
import authReducer from "./authReducer";
import combinedVoteReducer from "./combinedVoteReducer";
import techlistReducer from "./techlistReducer";
import totalsubmissionsReducer from "./totalsubmissionsReducer";

const allReducers = combineReducers({
  auth: authReducer,
  votes: combinedVoteReducer,
  tech: techlistReducer,
  submissions: totalsubmissionsReducer,
});
<<<<<<< HEAD
export default allReducers;
=======
<<<<<<< HEAD
export default allReducers;
=======
export default allReducers;
>>>>>>> fa2dbba8b95e816148177164bc749742093caf34
>>>>>>> feature-admin-register

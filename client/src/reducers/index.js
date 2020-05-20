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
<<<<<<< HEAD
export default allReducers;
=======
<<<<<<< HEAD
<<<<<<< HEAD
export default allReducers;
=======
export default allReducers;
>>>>>>> fa2dbba8b95e816148177164bc749742093caf34
=======
export default allReducers;
>>>>>>> 3b0c55bb2da436bcb4aa6793b3f1cdaf7795464a
>>>>>>> feature-admin-register

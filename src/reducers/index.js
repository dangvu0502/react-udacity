import { combineReducers } from "redux";
import authUser from "../reducers/authUser";
import users from "../reducers/users";
import questions from "../reducers/questions";
import loading from "../reducers/loading";

export default combineReducers({
  authUser,
  users,
  questions,
  loading,
});
